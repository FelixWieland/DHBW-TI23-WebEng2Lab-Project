package org.dhbw.musikkatalog.controller;

import io.swagger.v3.oas.models.annotations.OpenAPI30;
import lombok.AllArgsConstructor;
import org.dhbw.musikkatalog.model.Post;
import org.dhbw.musikkatalog.repository.PostNotFoundException;
import org.dhbw.musikkatalog.repository.PostRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@OpenAPI30
public class PostsController {

    private PostRepository postRepository;

    @GetMapping("/")
    public String readInfo() {
        return "Try /posts";
    }

    @GetMapping("/posts")
    public List<Post> readPosts() {
        return this.postRepository.findAll();
    }

    @PostMapping("/posts")
    public long createPost(@RequestBody @Validated Post post) {
        return this.postRepository.save(post).getId();
    }

    @GetMapping("/posts/{id}")
    public ResponseEntity<Post> readPost(@PathVariable long id) {
        var post = this.postRepository.findById(id);
        if (post.isEmpty()) {
            throw new PostNotFoundException();
        }
        // ResponseEntity.notFound(); <- HTTP Status Codes
        return ResponseEntity.ok(post.get());
    }

    @PutMapping("/posts/{id}")
    public Post updatePost(@RequestBody Post post) {
        return this.postRepository.save(post);
    }

    @DeleteMapping("/posts/{id}")
    public void deletePost(@PathVariable long id) {
        this.postRepository.deleteById(id);
    }

    @ExceptionHandler(value = PostNotFoundException.class)
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public String handlePostNotFoundException(PostNotFoundException exception) {
        return exception.toErrorResponse();
    }

}
