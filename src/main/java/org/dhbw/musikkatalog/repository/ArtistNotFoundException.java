package org.dhbw.musikkatalog.repository;

public class ArtistNotFoundException extends RuntimeException {

    public String toErrorResponse() {
        return "Artist not found";
    }
}
