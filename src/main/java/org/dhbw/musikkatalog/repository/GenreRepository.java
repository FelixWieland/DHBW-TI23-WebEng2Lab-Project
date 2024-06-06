package org.dhbw.musikkatalog.repository;

import org.dhbw.musikkatalog.model.Genre;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface GenreRepository extends MongoRepository<Genre, String> {
}
