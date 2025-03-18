package server.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import server.repository.RoleRepository;
import server.entity.Role;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {
    final private RoleRepository repository;

    @Override
    public List<Role> findAll() {
        return repository.findAll();
    }

    @Override
    public Role findById(int id) {
        Optional<Role> role = repository.findById(id);
        return role.orElse(null);
    }

    @Override
    public Role findByRole(String role) {
        Optional<Role> result = repository.findByRole(role);
        return result.orElse(null);
    }
}
