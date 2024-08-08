package com.dhiraj.quizengineservice.controller;

import com.dhiraj.quizengineservice.dto.QuizRequest;
import com.dhiraj.quizengineservice.dto.QuizResponse;
import com.dhiraj.quizengineservice.model.QuestionWrapper;
import com.dhiraj.quizengineservice.model.Response;
import com.dhiraj.quizengineservice.service.QuizService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.ws.rs.Path;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("quiz")
@Tag(name = "Quiz")
//@CrossOrigin(origins = "http://localhost:4200")
//@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST})
public class QuizController {

    @Autowired
    QuizService quizService;

    @PostMapping(value = "create")
    public ResponseEntity<Map<String,String>> createQuiz(@RequestBody QuizRequest quizRequest) {
        return quizService.createQuiz(quizRequest);
    }

    @GetMapping("get/{id}")
    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(@PathVariable String id) {
        return quizService.getQuizQuestions(id);
    }

    @PostMapping("submit")
    public ResponseEntity<Integer> submitQuiz(@RequestBody List<Response> responses) {
        return quizService.calculateResult(responses);
    }

    @GetMapping("getquiz")
    public ResponseEntity<List<QuizResponse>> getQuiz() {
        return quizService.getQuiz();
    }

    @DeleteMapping("deletequiz/{id}")
    public void deleteQuiz(@PathVariable String id){
        System.out.println(id);
        quizService.deleteQuiz(id);
    }

}
