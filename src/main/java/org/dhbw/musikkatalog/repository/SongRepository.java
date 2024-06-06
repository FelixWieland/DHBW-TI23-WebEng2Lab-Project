package org.dhbw.musikkatalog.repository;

import jakarta.validation.constraints.NotNull;
import org.dhbw.musikkatalog.model.Artist;
import org.dhbw.musikkatalog.model.Genre;
import org.dhbw.musikkatalog.model.Song;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;


public interface SongRepository extends MongoRepository<Song, String> {

    List<Song> findByGenres(@NotNull List<String> genres);
    List<Song> findTop10ByGenres(@NotNull List<String> genres);
    List<Song> findByArtists(@NotNull List<String> artists);
    List<Song> findTop10ByArtists(@NotNull List<String> artists);
    List<Song> findTop10ByAlbums(@NotNull List<String> albums);
}
