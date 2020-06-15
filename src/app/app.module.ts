import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgxTypedJsModule} from 'ngx-typed-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { DividerHeaderComponent } from './shared/components/divider-header/divider-header.component';
import { SkillsComponent } from './shared/components/skills/skills.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { SwipeCertifiedComponent } from './swipe-certified/swipe-certified.component';
import { NgxTypedJsComponent } from './ngx-typed-js/ngx-typed-js.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    DividerHeaderComponent,
    SkillsComponent,
    GalleryComponent,
    SwipeCertifiedComponent,
    NgxTypedJsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgxTypedJsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
