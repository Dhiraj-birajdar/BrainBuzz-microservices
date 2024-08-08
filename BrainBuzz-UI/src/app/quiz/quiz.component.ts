import {Component, OnInit} from '@angular/core';
import { QuizService } from '../services/services';
import {ActivatedRoute} from "@angular/router";
import {QuestionWrapper} from "../services/models/question-wrapper";
import {Response} from "../services/models/response";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit{
  quizId!: string;
  quizQuestions: QuestionWrapper[]=[];
  totalQuistions!: number;
  quizSubmit: Response[]=[];
  submitted=false;
  ans:Response={
    'id': '1',
    'option': 'z'
  };
  score=0;
  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
        this.submitted = false;
        this.quizId = this.route.snapshot.paramMap.get("id")!;
        this.quizService.getQuizQuestions(
          {'id':this.quizId}
        ).subscribe({
          next: data => {
            this.quizQuestions = data
            this.totalQuistions = this.quizQuestions.length;
          }
        })
    }

    submitAnswer(){
      this.quizService.submitQuiz({
        body: this.quizSubmit
      }).subscribe({
        next: data => this.score = data
      })
      this.submitted = true;
      console.log(this.score);
    }

  addAns(qid: string | undefined, opt: string) {
    if (qid) {
    // Find if there's already an entry with the given id
    const existingEntry = this.quizSubmit.find(item => item.id === qid);

    if (existingEntry) {
      // Update the option value of the existing entry
      existingEntry.option = opt;
    } else {
      // Add a new entry
      this.quizSubmit.push({ id: qid, option: opt });
    }
  }
  }
}
