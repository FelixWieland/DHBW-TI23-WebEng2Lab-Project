package org.dhbw.musikkatalog.repository;

import org.dhbw.musikkatalog.model.Artist;
import org.dhbw.musikkatalog.model.Song;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ArtistRepository extends MongoRepository<Artist, Long> {
}
