/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { QuizResponse } from '../../models/quiz-response';

export interface GetQuiz$Params {
}

export function getQuiz(http: HttpClient, rootUrl: string, params?: GetQuiz$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<QuizResponse>>> {
  const rb = new RequestBuilder(rootUrl, getQuiz.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<QuizResponse>>;
    })
  );
}

getQuiz.PATH = '/quiz/getquiz';
