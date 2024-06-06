package org.dhbw.musikkatalog.repository;

public class GenreNotFoundException extends RuntimeException {

    public String toErrorResponse() {
        return "Genre not found";
    }
}
