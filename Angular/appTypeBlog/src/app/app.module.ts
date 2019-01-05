import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
// for two way binding
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { PostTestComponent } from './post-test/post-test.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeroesComponent,
    PostTestComponent
  ],
  imports: [
    BrowserModule,
    // for two way binding
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
