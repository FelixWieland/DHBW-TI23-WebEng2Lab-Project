package org.dhbw.musikkatalog.repository;

import org.dhbw.musikkatalog.model.Album;
import org.springframework.data.mongodb.repository.MongoRepository;



public interface AlbumRepository extends MongoRepository<Album, String> {
}
