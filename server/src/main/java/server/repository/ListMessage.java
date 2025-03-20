package server.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ListMessage extends MongoRepository<ListMessage, String> {
}
