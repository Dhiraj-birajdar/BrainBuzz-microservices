/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createQuiz } from '../fn/quiz/create-quiz';
import { CreateQuiz$Params } from '../fn/quiz/create-quiz';
import { deleteQuiz } from '../fn/quiz/delete-quiz';
import { DeleteQuiz$Params } from '../fn/quiz/delete-quiz';
import { getQuiz } from '../fn/quiz/get-quiz';
import { GetQuiz$Params } from '../fn/quiz/get-quiz';
import { getQuizQuestions } from '../fn/quiz/get-quiz-questions';
import { GetQuizQuestions$Params } from '../fn/quiz/get-quiz-questions';
import { QuestionWrapper } from '../models/question-wrapper';
import { QuizResponse } from '../models/quiz-response';
import { submitQuiz } from '../fn/quiz/submit-quiz';
import { SubmitQuiz$Params } from '../fn/quiz/submit-quiz';

@Injectable({ providedIn: 'root' })
export class QuizService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `submitQuiz()` */
  static readonly SubmitQuizPath = '/quiz/submit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `submitQuiz()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  submitQuiz$Response(params: SubmitQuiz$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return submitQuiz(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `submitQuiz$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  submitQuiz(params: SubmitQuiz$Params, context?: HttpContext): Observable<number> {
    return this.submitQuiz$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `createQuiz()` */
  static readonly CreateQuizPath = '/quiz/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createQuiz()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createQuiz$Response(params: CreateQuiz$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: string;
}>> {
    return createQuiz(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createQuiz$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createQuiz(params: CreateQuiz$Params, context?: HttpContext): Observable<{
[key: string]: string;
}> {
    return this.createQuiz$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: string;
}>): {
[key: string]: string;
} => r.body)
    );
  }

  /** Path part for operation `getQuiz()` */
  static readonly GetQuizPath = '/quiz/getquiz';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuiz()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuiz$Response(params?: GetQuiz$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<QuizResponse>>> {
    return getQuiz(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQuiz$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuiz(params?: GetQuiz$Params, context?: HttpContext): Observable<Array<QuizResponse>> {
    return this.getQuiz$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<QuizResponse>>): Array<QuizResponse> => r.body)
    );
  }

  /** Path part for operation `getQuizQuestions()` */
  static readonly GetQuizQuestionsPath = '/quiz/get/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuizQuestions()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizQuestions$Response(params: GetQuizQuestions$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<QuestionWrapper>>> {
    return getQuizQuestions(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQuizQuestions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizQuestions(params: GetQuizQuestions$Params, context?: HttpContext): Observable<Array<QuestionWrapper>> {
    return this.getQuizQuestions$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<QuestionWrapper>>): Array<QuestionWrapper> => r.body)
    );
  }

  /** Path part for operation `deleteQuiz()` */
  static readonly DeleteQuizPath = '/quiz/deletequiz/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteQuiz()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteQuiz$Response(params: DeleteQuiz$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteQuiz(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteQuiz$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteQuiz(params: DeleteQuiz$Params, context?: HttpContext): Observable<void> {
    return this.deleteQuiz$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
