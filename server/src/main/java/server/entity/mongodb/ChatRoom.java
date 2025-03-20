package server.entity.mongodb;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import server.enums.ChatRoomType;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "chat-rooms")
public class ChatRoom {
    @Id
    private String id;
    private String name; // (# - sau này lọc ra ký tự #) group lấy tên các thành viên trừ người dùng, single lấy tên thằng nào đang đc nhắn tới
    private String chatroomImg;
    private ChatRoomType type;
    private List<Integer> members; // list id user
}
