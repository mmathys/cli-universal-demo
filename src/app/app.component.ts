import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  post: Observable<any>;

  constructor(private _http: Http) { }

  ngOnInit() {
    this.post = this._http.get('https://jsonplaceholder.typicode.com/posts/1')
      .map(res => res.json());
  }
}
