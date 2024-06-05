package org.dhbw.musikkatalog.repository;

import org.dhbw.musikkatalog.model.Music;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MusicRepository extends MongoRepository<Music, Long> {
}
