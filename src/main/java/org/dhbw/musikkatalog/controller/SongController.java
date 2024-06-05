package org.dhbw.musikkatalog.controller;

import io.swagger.v3.oas.models.annotations.OpenAPI30;
import lombok.AllArgsConstructor;
import org.dhbw.musikkatalog.model.Music;
import org.dhbw.musikkatalog.repository.MusicNotFoundException;
import org.dhbw.musikkatalog.repository.MusicRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@OpenAPI30
public class MusicController {

    private MusicRepository musicRepository;

    @GetMapping("/")
    public String readInfo() {
        return "Try /music";
    }

    @GetMapping("/posts")
    public List<Music> readSongs() {
        return this.musicRepository.findAll();
    }

    @PostMapping("/posts")
    public long createPost(@RequestBody @Validated Music music) {
        return this.musicRepository.save(music).getId();
    }

    @GetMapping("/posts/{id}")
    public ResponseEntity<Music> readPost(@PathVariable long id) {
        var post = this.musicRepository.findById(id);
        if (post.isEmpty()) {
            throw new MusicNotFoundException();
        }
        // ResponseEntity.notFound(); <- HTTP Status Codes
        return ResponseEntity.ok(post.get());
    }

    @PutMapping("/posts/{id}")
    public Music updatePost(@RequestBody Music music) {
        return this.musicRepository.save(music);
    }

    @DeleteMapping("/posts/{id}")
    public void deletePost(@PathVariable long id) {
        this.musicRepository.deleteById(id);
    }

    @ExceptionHandler(value = MusicNotFoundException.class)
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public String handlePostNotFoundException(MusicNotFoundException exception) {
        return exception.toErrorResponse();
    }

}
