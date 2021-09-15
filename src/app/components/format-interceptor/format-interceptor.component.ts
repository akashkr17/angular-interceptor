import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format-interceptor',
  templateUrl: './format-interceptor.component.html',
  styleUrls: ['./format-interceptor.component.scss']
})
export class FormatInterceptorComponent implements OnInit {
  data: any = []
  rawJson = `
{
  "id": "1575",
    "metadata": "akash",
    "data": {
      "users": {
      "count": 4,
      "list": [
        "vipul",
        "nikhil",
        "arpit"
      ]
    }
  }
}
`
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/assets/format.json').subscribe(data  =>{
      this.data = data
    })
    console.log(this.data)
  }
  
}

