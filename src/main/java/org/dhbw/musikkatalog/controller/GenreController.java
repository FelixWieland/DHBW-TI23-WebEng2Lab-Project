package org.dhbw.musikkatalog.controller;

import io.swagger.v3.oas.models.annotations.OpenAPI30;
import lombok.AllArgsConstructor;
import org.dhbw.musikkatalog.model.Artist;
import org.dhbw.musikkatalog.model.Song;
import org.dhbw.musikkatalog.repository.ArtistNotFoundException;
import org.dhbw.musikkatalog.repository.ArtistRepository;
import org.dhbw.musikkatalog.repository.SongNotFoundException;
import org.dhbw.musikkatalog.repository.SongRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@OpenAPI30
public class ArtistController {

    private ArtistRepository artistRepository;

    @GetMapping("/artists")
    public List<Artist> readArtists() {
        return this.artistRepository.findAll();
    }

    @PostMapping("/artists")
    public long createArtist(@RequestBody @Validated Artist artist) {
        return this.artistRepository.save(artist).getId();
    }

    @GetMapping("/artists/{id}")
    public ResponseEntity<Artist> readArtist(@PathVariable long id) {
        var post = this.artistRepository.findById(id);
        if (post.isEmpty()) {
            throw new SongNotFoundException();
        }
        // ResponseEntity.notFound(); <- HTTP Status Codes
        return ResponseEntity.ok(post.get());
    }

    @PutMapping("/artist/{id}")
    public Artist updatePost(@RequestBody Artist artist) {
        return this.artistRepository.save(artist);
    }

    @DeleteMapping("/songs/{id}")
    public void deleteSong(@PathVariable long id) {
        this.artistRepository.deleteById(id);
    }

    @ExceptionHandler(value = ArtistNotFoundException.class)
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public String handleArtistNotFoundException(SongNotFoundException exception) {
        return exception.toErrorResponse();
    }
}
