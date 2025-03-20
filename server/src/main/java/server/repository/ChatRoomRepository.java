package server.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import server.entity.mongodb.ChatRoom;

public interface ChatRoomRepository extends MongoRepository<ChatRoom, String> {
}
