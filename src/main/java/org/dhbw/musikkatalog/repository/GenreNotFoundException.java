package org.dhbw.musikkatalog.repository;

public class SongNotFoundException extends RuntimeException {

    public String toErrorResponse() {
        return "Post not found";
    }
}
