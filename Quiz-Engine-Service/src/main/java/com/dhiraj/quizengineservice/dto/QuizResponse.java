package com.dhiraj.quizengineservice.dto;


import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class QuizResponse {
    private String id;
    private String title;
    private String category;
    private int totalQuestions;
}
