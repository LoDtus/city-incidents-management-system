package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.entity.mysql.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByRole(String role);
}
