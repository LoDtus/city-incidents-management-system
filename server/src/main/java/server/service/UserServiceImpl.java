package server.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import server.repository.UserRepository;
import server.entity.mysql.User;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository repository;

    @Override
    public List<User> findAll() {
        return repository.findAll();
    }

    @Override
    public User findById(int id) {
        Optional<User> user = repository.findById(id);
        return user.orElse(null);
    }

    @Override
    public User findByEmail(String email) {
        Optional<User> user = repository.findByEmail(email);
        return user.orElse(null);
    }

    @Override
    public User save(User user) {
        return repository.save(user);
    }

    @Override
    public void deleteById(int id) {
        repository.deleteById(id);
    }
}
