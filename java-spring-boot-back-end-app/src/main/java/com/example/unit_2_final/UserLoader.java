package com.example.unit_2_final;

import com.example.unit_2_final.models.User;
import com.example.unit_2_final.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class UserLoader {

    @Bean
    public CommandLineRunner loadUser(UserRepository userRepository) {
        return args -> {
            if (!userRepository.findByUsername("User1").isPresent()) {
                User user = new User();
                user.setUsername("User1");
                user.setPassword("User1Password");
                userRepository.save(user);
            }
        };
    }

}
