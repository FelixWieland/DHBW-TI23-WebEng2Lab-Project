package org.dhbw.musikkatalog.controller;

import io.swagger.v3.oas.models.annotations.OpenAPI30;
import lombok.AllArgsConstructor;
import org.dhbw.musikkatalog.model.Album;
import org.dhbw.musikkatalog.model.Artist;
import org.dhbw.musikkatalog.repository.AlbumNotFoundException;
import org.dhbw.musikkatalog.repository.AlbumRepository;
import org.dhbw.musikkatalog.repository.ArtistNotFoundException;
import org.dhbw.musikkatalog.repository.SongNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@AllArgsConstructor
@OpenAPI30
public class AlbumController {

    private AlbumRepository albumRepository;

    @GetMapping("/albums")
    public List<Album> readAlbums() {
        return this.albumRepository.findAll();
    }

    @PostMapping("/albums")
    public Album createAlbum(@RequestBody @Validated Album album) {
        return this.albumRepository.save(album);
    }

    @GetMapping("/albums/{id}")
    public ResponseEntity<Album> readAlbum(@PathVariable String id) {
        var post = this.albumRepository.findById(id);
        if (post.isEmpty()) {
            throw new ArtistNotFoundException();
        }
        return ResponseEntity.ok(post.get());
    }

    @PutMapping("/album")
    public Album updateAlbum(@RequestBody Album album) {
        return this.albumRepository.save(album);
    }

    @DeleteMapping("/album/{id}")
    public void deleteAlbum(@PathVariable String id) {
        this.albumRepository.deleteById(id);
    }

    @ExceptionHandler(value = AlbumNotFoundException.class)
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public String handleAlbumNotFoundException(SongNotFoundException exception) {
        return exception.toErrorResponse();
    }

    @ExceptionHandler(value = RuntimeException.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    public String handleRuntimeException(RuntimeException exception) {
        return "Internal server error";
    }
}
