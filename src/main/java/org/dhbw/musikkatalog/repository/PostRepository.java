package org.dhbw.musikkatalog.repository;

import org.dhbw.musikkatalog.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post, Long> {
}
