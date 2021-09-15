import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';

@Component({
  selector: 'app-retry-interceptor',
  templateUrl: './retry-interceptor.component.html',
  styleUrls: ['./retry-interceptor.component.scss']
})
export class RetryInterceptorComponent implements OnInit {
 data: any = []
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('https://example.com/404').pipe(
      catchError(err => of('there was an error')) // return a Observable with a error message to display
    ).subscribe(data => this.data = data);
  }
}
