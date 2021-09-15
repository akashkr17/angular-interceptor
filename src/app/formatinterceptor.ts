import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpSentEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class FormatInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler):
   Observable<HttpEvent<any>> {
    return next.handle(httpRequest)
    .pipe(
      filter((event: any) => event instanceof HttpResponse && httpRequest.url.includes('format')),
      map((event: HttpResponse<any>) => <any>event.clone({ body: event.body.data.users.list })),
    );
  }
}
