package server.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import server.entity.mysql.User;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuthRequest {
    private String email;
    private String password;
}
