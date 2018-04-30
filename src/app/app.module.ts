import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AngularMaterialModule} from './material-design';
import {appRoutes} from './routes';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ElectronService } from 'ngx-electron';

import { SmartDatePipe } from './pipes/smart-date.pipe';
import { RelativeDatePipe } from './pipes/relative-date.pipe';
import { ScrollableDirective } from './directives/scrollable.directive';
import { SideBarNotesComponent } from './components/side-bar-notes/side-bar-notes.component';
import { MainTextAreaComponent } from './components/main-text-area/main-text-area.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    DashboardComponent,
    SmartDatePipe,
    RelativeDatePipe,
    ScrollableDirective,
    SideBarNotesComponent,
    MainTextAreaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{useHash:true}),
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
