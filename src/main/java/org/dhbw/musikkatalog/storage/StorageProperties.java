package org.dhbw.musikkatalog.storage;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Setter
@Getter
@Component
public class StorageProperties {

    /**
     * Folder location for storing files
     */
    private String location = "uploaded-files";
}