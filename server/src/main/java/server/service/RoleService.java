package server.service;

import server.entity.Role;

import java.util.List;

public interface RoleService {
    List<Role> findAll();
    Role findById(int id);
    Role findByRole(String role);
}
