package server.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.entity.Role;
import server.service.RoleService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/roles")
public class RoleController {
    final private RoleService roleService;

    @GetMapping("/get-all")
    public ResponseEntity<List<Role>> findAll() {
        return ResponseEntity.ok(roleService.findAll());
    }

    @GetMapping("/get-by-id/{id}")
    public ResponseEntity<Object> findById(@PathVariable int id) {
        Role role = roleService.findById(id);
        if (role == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Role not found");
        }
        return ResponseEntity.ok(role);
    }

    @GetMapping("get-by-role/{role}")
    public ResponseEntity<Object> findByRole(@PathVariable String role) {
        Role result = roleService.findByRole(role);
        if (result == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Role not found");
        }
        return ResponseEntity.ok(result);
    }
}
