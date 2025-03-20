package server.dto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import server.enums.ChatRoomType;
import server.enums.MessageType;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Message {
    private String id;
    private Integer idSender;
    private String replyToMessageId;
    private String content; // neu content == "" → da xoa
    private MessageType type;
    private String sendAt;
    private String updateAt;
}
