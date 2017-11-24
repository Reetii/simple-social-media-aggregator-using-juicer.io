import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { routing } from './app.routes';
import { FeedService } from './feed.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [
    FeedComponent,
    SignUpComponent,
    AppComponent,
    SafePipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
