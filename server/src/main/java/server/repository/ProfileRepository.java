package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.entity.mysql.Profile;

public interface ProfileRepository extends JpaRepository<Profile, Integer> {
}
