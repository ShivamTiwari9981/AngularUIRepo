import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { StudentComponent } from './components/students/student/student.component';
import { UserComponent } from './components/users/user/user.component';
import { PageNotFoundComponent } from './components/pagenotfound/page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    UserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
