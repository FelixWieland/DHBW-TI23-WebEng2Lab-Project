package org.dhbw.musikkatalog.repository;

public class PostNotFoundException extends RuntimeException {

    public String toErrorResponse() {
        return "Post not found";
    }
}
