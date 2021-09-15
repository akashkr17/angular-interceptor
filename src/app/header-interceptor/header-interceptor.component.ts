import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-header-interceptor',
  templateUrl: './header-interceptor.component.html',
  styleUrls: ['./header-interceptor.component.scss']
})
export class HeaderInterceptorComponent implements OnInit {
    data:any= []
    constructor(private httpClient: HttpClient) { }
    ngOnInit() {
      this.httpClient.get('/assets/format.json').subscribe(data  =>{
        this.data = data
      })
      console.log(this.data)
    }
}
