package org.dhbw.musikkatalog.controller;

import io.swagger.v3.oas.models.annotations.OpenAPI30;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.dhbw.musikkatalog.repository.SongNotFoundException;
import org.dhbw.musikkatalog.storage.StorageFileNotFoundException;
import org.dhbw.musikkatalog.storage.StorageService;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;



@RestController
@AllArgsConstructor
@OpenAPI30
public class FileController {

    private final StorageService storageService;

    @GetMapping("/files/song/cover/{id}")
    @ResponseBody
    public void serveSongCover(HttpServletResponse response, @PathVariable String id) {
        Resource file = storageService.loadAsResource(String.format("song/cover/%s.png", id));
        if (file == null) {
            throw new SongNotFoundException();
        }
        this.serveFile(MediaType.IMAGE_PNG_VALUE, file, response);
    }

    @GetMapping("/files/album/cover/{id}")
    @ResponseBody
    public void serveAlbumCover(HttpServletResponse response, @PathVariable String id) {
        Resource file = storageService.loadAsResource(String.format("album/cover/%s.png", id));
        if (file == null) {
            throw new SongNotFoundException();
        }
        this.serveFile(MediaType.IMAGE_PNG_VALUE, file, response);
    }

    @GetMapping("/files/artist/profile/{id}")
    @ResponseBody
    public void serveArtistProfile(HttpServletResponse response, @PathVariable String id) {
        Resource file = storageService.loadAsResource(String.format("artist/profile/%s.png", id));
        if (file == null) {
            throw new SongNotFoundException();
        }
        this.serveFile(MediaType.IMAGE_PNG_VALUE, file, response);
    }

    @GetMapping("/files/song/audio/{id}")
    @ResponseBody
    public void serveSongAudio(HttpServletResponse response, @PathVariable String id) {
        Resource file = storageService.loadAsResource(String.format("song/audio/%s.mp3", id));
        if (file == null) {
            throw new SongNotFoundException();
        }
        this.serveFile("audio/mpeg", file, response);
    }

    @PostMapping(path = "/files/song/cover/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String handleSongCoverUpload(@RequestPart(value = "file") MultipartFile file, @PathVariable long id) {
        storageService.store(file, String.format("song/cover/%s.png", id));
        return "redirect:/";
    }

    @PostMapping(path = "/files/album/cover/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String handleAlbumCoverUpload(@RequestPart(value = "file") MultipartFile file, @PathVariable long id) {
        storageService.store(file, String.format("album/cover/%s.png", id));
        return "redirect:/";
    }

    @PostMapping(path = "/files/artist/profile/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String handleArtistProfileUpload(@RequestPart(value = "file") MultipartFile file, @PathVariable long id) {
        storageService.store(file, String.format("artist/profile/%s.png", id));
        return "redirect:/";
    }

    @PostMapping(path = "/files/song/audio/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String handleSongAudioUpload(@RequestPart(value = "file") MultipartFile file, @PathVariable long id) {
        System.out.println(file.getName());
        storageService.store(file, String.format("song/audio/%s.mp3", id));
        return "redirect:/";
    }

    @ExceptionHandler(value = StorageFileNotFoundException.class)
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public String handleFileNotFoundException(StorageFileNotFoundException exception) {
        return exception.toErrorResponse();
    }

    private void serveFile(String contentType, Resource file, HttpServletResponse response) {
        response.setContentType(contentType);
        try {
            IOUtils.copy(file.getInputStream(), response.getOutputStream());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
