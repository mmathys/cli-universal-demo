import { isPlatformServer } from '@angular/common';
import { Component, OnInit, Inject, Injector, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _router: Router, private _meta: Meta, private _title: Title, private injector: Injector, @Inject(PLATFORM_ID) private platformId: Object) {
    console.log('hi, we\'re here!');
    if (isPlatformServer(this.platformId)) {
      let req = this.injector.get('request');
      console.log("locales from crawlers: " + req.headers["accept-language"]);
    } else {
      console.log('we\'re rendering from the browser, there is no request object.');
    }
  }

  ngOnInit() {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/':
            this._title.setTitle('Home Page');
            this._meta.updateTag({ name: 'description', content: 'Home Page Description' });
            break;
          case '/about':
            this._title.setTitle('About Page');
            this._meta.updateTag({ name: 'description', content: 'About Page Description' });
            break;
        }
      }
    });
  }
}
