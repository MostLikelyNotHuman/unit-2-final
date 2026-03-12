package com.example.unit_2_final.services;

import com.example.unit_2_final.dto.UserProfileDTO;
import com.example.unit_2_final.models.User;
import com.example.unit_2_final.repositories.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserProfileServiceImpl {

    private final ModelMapper modelMapper;
    private final UserRepository userRepository;
    private final PasswordEncoder encoder;

    public UserProfileServiceImpl(ModelMapper modelMapper, UserRepository userProfileRepository, PasswordEncoder encoder) {
        this.modelMapper = modelMapper;
        this.userRepository = userProfileRepository;
        this.encoder = encoder;
    }

    public UserProfileDTO createUserProfile (UserProfileDTO userProfileDTO) {
        if (userRepository.existsByUsername(userProfileDTO.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        userProfileDTO.setPassword(encoder.encode(userProfileDTO.getPassword()));
        User user = mapToProfileEntity(userProfileDTO);
        user = userRepository.save(user);
        return mapToProfileDTO(user);
    }

    private UserProfileDTO mapToProfileDTO(User profileEntity) {
        return modelMapper.map(profileEntity, UserProfileDTO.class);
    }

    private User mapToProfileEntity(UserProfileDTO userProfileDTO) {
        return modelMapper.map(userProfileDTO, User.class);
    }




}
