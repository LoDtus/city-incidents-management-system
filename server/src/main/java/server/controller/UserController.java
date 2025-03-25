package server.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import server.common.ValidationUtils;
import server.config.security.JwtService;
import server.dto.AuthRequest;
import server.dto.AuthResponse;
import server.entity.mysql.Role;
import server.entity.mysql.User;
import server.service.RoleService;
import server.service.UserService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;
    private final RoleService roleService;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @GetMapping("/get-all")
    public ResponseEntity<List<User>> findAll() {
        return ResponseEntity.ok(userService.findAll());
    }

    @GetMapping("/get-by-id/{id}")
    public ResponseEntity<Object> findById(@PathVariable int id) {
        User user = userService.findById(id);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
        return ResponseEntity.ok(user);
    }

    @GetMapping("/check-email-exists/{email}")
    public ResponseEntity<Boolean> checkEmailExists(@PathVariable String email) {
        User user = userService.findByEmail(email);
        if (user == null) {
            return ResponseEntity.ok(false);
        }
        return ResponseEntity.ok(true);
    }

//    try {
//        authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(
//                        request.getEmail(),
//                        request.getPassword()
//                )
//        );
//        System.out.println("Auth");
//    } catch (BadCredentialsException e) {
//        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
//    }

    @PostMapping("/sign-in")
    public ResponseEntity<Object> signIn(@RequestBody AuthRequest request) {
        System.out.println("sign in");
        User result = userService.findByEmail(request.getEmail());
        if (result == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Invalid email");
        }
        if (!result.getPassword().equals(request.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
        }

        String token = jwtService.generateToken(result);
        AuthResponse authResponse = AuthResponse.builder()
                .token(token)
                .user(result)
                .build();
        return ResponseEntity.ok(authResponse);
    }

    @PostMapping("/sign-up")
    public ResponseEntity<Object> signUp(@RequestBody User user) {
        if (!ValidationUtils.isValidEmail(user.getEmail())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid email");
        }

        User result = userService.findByEmail(user.getEmail());
        if (result != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already exists");
        }
        if (user.getPassword().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid password");
        }

        Role role = roleService.findByRole("ROLE_USER");
        user.getRoles().clear();
        user.getRoles().add(role);
        user.setId(null);
        user.setActive(1);

        User userDb = userService.save(user);
        String token = jwtService.generateToken(userDb);
        AuthResponse authResponse = AuthResponse.builder()
                .token(token)
                .user(userDb)
                .build();

        return ResponseEntity.ok(authResponse);
    }

    @PutMapping("/update")
    public ResponseEntity<Object> update(@RequestBody User user) {
        User result = userService.findById(user.getId());
        if (result == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        if (!ValidationUtils.isValidEmail(user.getEmail())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid email");
        }

        User existingEmail = userService.findByEmail(user.getEmail());
        if (existingEmail != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already exists");
        }

        if (user.getPassword().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid password");
        }

        if (user.getActive() == null) user.setActive(result.getActive());
        if (user.getRoles() == null || user.getRoles().isEmpty()) user.setRoles(result.getRoles());

        User userDb = userService.save(user);
        return ResponseEntity.ok(userDb);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable int id) {
        User result = userService.findById(id);
        if (result == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
        userService.deleteById(id);
        return ResponseEntity.ok("Deleted user: " + id);
    }
}
