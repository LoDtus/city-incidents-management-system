package server.config.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import javax.sql.DataSource;
import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:3000"));
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
        configuration.addAllowedHeader("Authorization");
        configuration.addAllowedHeader("Content-Type");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public UserDetailsManager userDetailsManager(DataSource dataSource) {
        JdbcUserDetailsManager jdbcUserDetailsManager = new JdbcUserDetailsManager(dataSource);
        jdbcUserDetailsManager.setUsersByUsernameQuery(
                "select email, password, active from users where email = ?"
        );
        jdbcUserDetailsManager.setAuthoritiesByUsernameQuery(
                "select u.email, r.role " +
                "from users u " +
                "join user_role ur on u.id = ur.user_id " +
                "join roles r on ur.role_id = r.id " +
                "where u.email = ?"
        );
        return jdbcUserDetailsManager;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.exceptionHandling(c -> c.authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED)));
        http.cors(c -> c.configurationSource(corsConfigurationSource()));
        http.csrf(AbstractHttpConfigurer::disable);
        http.sessionManagement(c -> c.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        http.authorizeHttpRequests(configure -> configure
                .requestMatchers(HttpMethod.GET, "/api/users/get-all").hasRole("ADMIN")
                .requestMatchers(HttpMethod.GET, "/api/users/get-by-id/{id}").hasRole("ADMIN")
                .requestMatchers(HttpMethod.GET, "/api/users/check-email-exists/{email}").permitAll()
                .requestMatchers(HttpMethod.POST, "/api/users/sign-in").permitAll()
                .requestMatchers(HttpMethod.POST, "/api/users/sign-up").permitAll()
                .requestMatchers(HttpMethod.PUT, "/api/users/update").hasAnyRole("USER", "STAFF", "MANAGER", "ADMIN")
                .requestMatchers(HttpMethod.DELETE, "/api/users/delete/{id}").hasAnyRole("USER", "STAFF", "MANAGER", "ADMIN")

                .requestMatchers(HttpMethod.GET, "/api/roles/**").permitAll()
        );
        http.httpBasic(Customizer.withDefaults());
        return http.build();
    }
}
