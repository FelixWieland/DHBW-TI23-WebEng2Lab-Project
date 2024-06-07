package org.dhbw.musikkatalog.controller;

import io.swagger.v3.oas.models.annotations.OpenAPI30;
import lombok.AllArgsConstructor;
import org.dhbw.musikkatalog.model.Song;
import org.dhbw.musikkatalog.repository.SongNotFoundException;
import org.dhbw.musikkatalog.repository.SongRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.*;


@RestController
@AllArgsConstructor
@OpenAPI30
public class SongController {

    private SongRepository songRepository;

    @GetMapping("/songs")
    public List<Song> readSongs() {
        return this.songRepository.findAll();
    }

    @PostMapping("/songs")
    public Song createSong(@RequestBody @Validated Song song) {
        return this.songRepository.save(song);
    }

    @GetMapping("/songs/{id}")
    public ResponseEntity<Song> readSong(@PathVariable String id) {
        var post = this.songRepository.findById(id);
        if (post.isEmpty()) {
            throw new SongNotFoundException();
        }
        // ResponseEntity.notFound(); <- HTTP Status Codes
        return ResponseEntity.ok(post.get());
    }

    @GetMapping("/songs/{id}/recommendations")
    public List<Song> recommendationsBasedOnSong(@PathVariable String id) {
        Optional<Song> toRecommendFor = this.songRepository.findById(id);
        if (toRecommendFor.isEmpty()) {
            throw new SongNotFoundException();
        }

        List<Song> allSongsToRecommend = new LinkedList<>();
        allSongsToRecommend.addAll(this.songRepository.findTop10ByGenres(toRecommendFor.get().getGenres()));
        allSongsToRecommend.addAll(this.songRepository.findTop10ByAlbums(toRecommendFor.get().getAlbums()));
        allSongsToRecommend.addAll(this.songRepository.findTop10ByArtists(toRecommendFor.get().getArtists()));

        Collections.shuffle(allSongsToRecommend);

        return allSongsToRecommend;
    }

    @GetMapping("/songs/genre/{id}")
    public List<Song> readSongsOfGenre(@PathVariable String id) {
        return this.songRepository.findByGenres(Collections.singletonList(id));
    }

    @GetMapping("/songs/artist/{id}")
    public List<Song> readSongsOfArtist(@PathVariable String id) {
        return this.songRepository.findByArtists(Collections.singletonList(id));
    }

    @PutMapping("/songs")
    public Song updateSong(@RequestBody Song song) {
        return this.songRepository.save(song);
    }

    @DeleteMapping("/songs/{id}")
    public void deleteSong(@PathVariable String id) {
        this.songRepository.deleteById(id);
    }

    @ExceptionHandler(value = SongNotFoundException.class)
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public String handleSongNotFoundException(SongNotFoundException exception) {
        return exception.toErrorResponse();
    }

    @ExceptionHandler(value = RuntimeException.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    public String handleRuntimeException(RuntimeException exception) {
        return "Internal server error";
    }
}
