import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AboutComponent } from './about/about.component';
import { FaberComponent } from './faber/faber.component';
import { SpeakingComponent } from './speaking/speaking.component';
import { TedTalksComponent } from './ted-talks/ted-talks.component';
import { AdvisoryComponent } from './advisory/advisory.component';
import { GITComponent } from './g-i-t/g-i-t.component';
import { FormComponent } from './form/form.component';


import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AboutComponent,
    FaberComponent,
    
    SpeakingComponent,
    TedTalksComponent,
    AdvisoryComponent,
    GITComponent,
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    CommonModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormComponent,
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: 'faber', component: FaberComponent},
      {path: 'speaking', component: SpeakingComponent},
      {path: 'ted-talks', component: TedTalksComponent},
      {path: 'advisory', component: AdvisoryComponent},
      {path: 'g-i-t', component: GITComponent},
      {path: '', redirectTo: '/about', pathMatch: 'full'},
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faChevronLeft, faChevronRight, faInstagram, faLinkedin, faTwitter);
  }
}
