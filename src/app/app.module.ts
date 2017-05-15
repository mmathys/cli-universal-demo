import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';

export { AppComponent };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'cli-universal-demo' }),
    TranslateModule.forRoot(),
    RouterModule.forRoot([
      { path: '', loadChildren: './home/home.module#HomeModule' },
      { path: 'about', loadChildren: './about/about.module#AboutModule' },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ])
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
