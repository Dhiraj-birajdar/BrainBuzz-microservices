package com.dhiraj.questionbankservice.model;

import lombok.Data;

@Data
public class QuestionWrapper {

    private String id;
    private String question;
    private String a;
    private String b;
    private String c;
    private String d;

    public static QuestionWrapper wrap(Question q){
        return new QuestionWrapper(q.getId(),q.getQuestion(),q.getA(),q.getB(),q.getC(),q.getD());
    }

    public QuestionWrapper(String id, String question, String a, String b, String c, String d) {
        this.id = id;
        this.question = question;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
}
