package com.example.EmployeeTp.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000", "http://localhost:3001")  // Allow multiple origins
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowCredentials(true)  // Allow cookies or credentials if needed
                .maxAge(3600);  // Optional: Cache CORS preflight response for 1 hour (optional)
    }
}
