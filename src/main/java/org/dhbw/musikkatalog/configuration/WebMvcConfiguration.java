package org.dhbw.musikkatalog.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Applies CORS to all paths
                .allowedOrigins("*") // Allows all origins
                .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS") // Allows specific HTTP methods
                .allowedHeaders("*") // Allows all headers
                .maxAge(3600); // Cache the CORS preflight response for 1 hour
    }
}
