package server.config.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import server.entity.mysql.User;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@Service
public class JwtService {
    @Value("${SECRET_KEY}")
    private String key;

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(key);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public <T> T extractClaim(String token, String claimKey, Class<T> nameClass) {
        Claims claims = Jwts
                .parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
        return claims.get(claimKey, nameClass);
    }

    public String extractId(String token) {
        return extractClaim(token, "id", String.class);
    }

    public String extractEmail(String token) {
        return extractClaim(token, "email", String.class);
    }

    public String extractPassword(String token) {
        return extractClaim(token, "password", String.class);
    }

    public String extractRole(String token) {
        return extractClaim(token, "role", String.class);
    }

    private boolean isTokenExpired(String token) {
        Date expiration = extractClaim(token, "exp", Date.class);
        return expiration.before(new Date());
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String email = extractEmail(token);
        final String id = extractId(token);
        final String role = extractRole(token);

        System.out.println(email + id + role);

        if (userDetails instanceof User user) {
            if (email.equals(user.getEmail()) && id.equals(user.getId())) {
                isTokenExpired(token);
            }
            return false;
        }
        return false;
    }

    public String generateToken(User user) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("id", user.getId());

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(user.getEmail())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 43_200_000))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }
}
