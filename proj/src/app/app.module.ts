import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginComponent} from './components/app.login';
import {UserComponent} from './components/app.user';
import {FormsModule} from '@angular/forms'
import {Http, HttpModule} from '@angular/http'
import {routing} from './app.routing';
import { AuthGuard } from './auth.gaurd';
import { PostService } from './services/posts.service';
import { ImageService } from './services/image.service';
import {HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import {HistoryComponent} from './components/app.history';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, UserComponent, HistoryComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, routing,HttpClientModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvAFcipfNzRjvdqXNpVXpZfNSqXSw4RsU'
    })
  ],
  
  bootstrap: [AppComponent],
  providers: [AuthGuard,PostService, ImageService]
})
export class AppModule { }
