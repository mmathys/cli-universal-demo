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

  constructor(private _router: Router, private _meta: Meta, private _title: Title, /*@Inject('request') private request: any,*/ private injector: Injector, @Inject(PLATFORM_ID) private platformId: Object) {
    console.log('hi, we\'re here!');
    //console.log(this.request);
    if (isPlatformServer(this.platformId)) {
      console.log(this.injector.get('request'))
    } else {
      console.log('we\'re rendering from the browser, there is no request object.');
    }
    //console.log(Zone == null);
    //console.log(Zone.current.get('req'));
    //console.log(Zone.current);
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
