/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { QuestionWrapper } from '../../models/question-wrapper';

export interface GetQuizQuestions$Params {
  id: string;
}

export function getQuizQuestions(http: HttpClient, rootUrl: string, params: GetQuizQuestions$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<QuestionWrapper>>> {
  const rb = new RequestBuilder(rootUrl, getQuizQuestions.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<QuestionWrapper>>;
    })
  );
}

getQuizQuestions.PATH = '/quiz/get/{id}';
