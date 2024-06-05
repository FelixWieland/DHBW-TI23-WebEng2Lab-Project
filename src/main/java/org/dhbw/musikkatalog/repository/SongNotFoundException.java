package org.dhbw.musikkatalog.repository;

public class MusicNotFoundException extends RuntimeException {

    public String toErrorResponse() {
        return "Post not found";
    }
}
