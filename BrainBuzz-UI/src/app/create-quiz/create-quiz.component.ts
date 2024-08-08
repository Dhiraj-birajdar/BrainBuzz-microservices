import { Component } from '@angular/core';
import {QuizService} from "../services/services/quiz.service";
import {QuizRequest} from "../services/models/quiz-request";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent {

  quizRequest: QuizRequest = {title:"",category:"Java",totalQuestions:5};
  constructor(
    private quizService: QuizService,
    private router: Router
  ) {
  }

  createQuiz(){
    this.quizService.createQuiz({
      body: this.quizRequest
    }).subscribe({
      next: data=> console.log("response of create quiz"+data.toString())
    });
    console.log(this.quizRequest);
     this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/quizlist']);
  });
  }
}
