import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizListComponent} from "./quiz-list/quiz-list.component";
import {CreateQuizComponent} from "./create-quiz/create-quiz.component";
import {QuizComponent} from "./quiz/quiz.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'quizlist',
    component: QuizListComponent
  },
  {
    path:'create',
    component: CreateQuizComponent
  },
  {
    path: 'quizlist/play/:id',
    component: QuizComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
