package org.dhbw.musikkatalog.controller;

import io.swagger.v3.oas.models.annotations.OpenAPI30;
import lombok.AllArgsConstructor;
import org.dhbw.musikkatalog.model.Artist;
import org.dhbw.musikkatalog.model.Genre;
import org.dhbw.musikkatalog.model.Song;
import org.dhbw.musikkatalog.repository.ArtistNotFoundException;
import org.dhbw.musikkatalog.repository.GenreNotFoundException;
import org.dhbw.musikkatalog.repository.GenreRepository;
import org.dhbw.musikkatalog.repository.SongNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@AllArgsConstructor
@OpenAPI30
public class GenreController {

    private GenreRepository genreRepository;

    @GetMapping("/genres")
    public List<Genre> readGenres() {
        return this.genreRepository.findAll();
    }

    @PostMapping("/genres")
    public Genre createGenre(@RequestBody @Validated Genre genre) {
        return this.genreRepository.save(genre);
    }

    @GetMapping("/genres/{id}")
    public ResponseEntity<Genre> readGenre(@PathVariable String id) {
        var post = this.genreRepository.findById(id);
        if (post.isEmpty()) {
            throw new GenreNotFoundException();
        }
        // ResponseEntity.notFound(); <- HTTP Status Codes
        return ResponseEntity.ok(post.get());
    }

    @PutMapping("/genres")
    public Genre updateGenre(@RequestBody Genre genre) {
        return this.genreRepository.save(genre);
    }

    @DeleteMapping("/genres/{id}")
    public void deleteGenre(@PathVariable String id) {
        this.genreRepository.deleteById(id);
    }

    @ExceptionHandler(value = GenreNotFoundException.class)
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public String handleGenreNotFoundException(SongNotFoundException exception) {
        return exception.toErrorResponse();
    }

    @ExceptionHandler(value = RuntimeException.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    public String handleRuntimeException(RuntimeException exception) {
        return "Internal server error";
    }

}
