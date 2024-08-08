import {Component, OnInit} from '@angular/core';
import {QuizResponse} from "../services/models/quiz-response";
import {QuizService} from "../services/services/quiz.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  quizResponse!: QuizResponse[];
  error!:string;

  constructor(
    private quizService: QuizService
  ) {
  }

  ngOnInit(): void {
        this.quizService.getQuiz().subscribe({
          next: value => {this.quizResponse = value; console.log(value)}
          // error: err => this.error = err.error.error
        })
  }

  deleteQuiz(qid: string | undefined) {
    if(qid){
      this.quizService.deleteQuiz({
        'id': qid
      }).subscribe({
next: () => {
        console.log('Delete successful');
        // Remove the deleted item from the local array
        this.quizResponse = this.quizResponse.filter(q => q.id !== qid);
      },
      error: (error) => {
        console.error('Error deleting quiz:', error);
      }
      });
      this.quizResponse = this.quizResponse.filter(q=>q.id!==qid);
    }
  }
}
