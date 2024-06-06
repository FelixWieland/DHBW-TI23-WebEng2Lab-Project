package org.dhbw.musikkatalog.repository;

public class AlbumNotFoundException extends RuntimeException {

    public String toErrorResponse() {
        return "Album not found";
    }
}
