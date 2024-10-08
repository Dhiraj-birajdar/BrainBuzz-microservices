package com.dhiraj.quizengineservice.model;

import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Data
@Document
@ToString
public class Quiz {

    @Id
    private String id;
    private String title;
    private String category;

//    @DocumentReference(lazy = true) // todo: Simple string list no need of document ref
    private List<String> questionIds;

}
