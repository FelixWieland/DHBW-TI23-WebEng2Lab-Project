package org.dhbw.musikkatalog.storage;

import org.dhbw.musikkatalog.storage.StorageException;

public class StorageFileNotFoundException extends StorageException {

    public StorageFileNotFoundException(String message) {
        super(message);
    }

    public StorageFileNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public String toErrorResponse() {
        return String.format("%s not found", this.getMessage());
    }
}