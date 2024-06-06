package org.dhbw.musikkatalog.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.Date;
import java.util.List;

@Document
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Song {

    @Id
    private String id;

    @NotNull
    @NotEmpty
    private String title;

    private String producer;

    @NotNull
    private int duration;

    @NotNull
    private Date release_date;

    @NotNull
    private List<String> albums;

    @NotNull
    private List<String> artists;

    @NotNull
    private List<String> genres;
}
