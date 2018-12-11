import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenSourceComponent } from './open-source/open-source.component';
import { gsCaptchaComponent } from './contactus/gscaptcha.component';

import * as myjs from '../assets/js/main.js';
import { GscaptchaDirective } from './gscaptcha.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    ContactusComponent,
    FooterComponent,
    PageNotFoundComponent,
    OpenSourceComponent,
    GscaptchaDirective,
    gsCaptchaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [gsCaptchaComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
