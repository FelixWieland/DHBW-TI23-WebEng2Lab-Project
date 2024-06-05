package org.dhbw.musikkatalog.repository;

import org.dhbw.musikkatalog.model.Song;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SongRepository extends MongoRepository<Song, Long> {
}
