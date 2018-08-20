import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionComponent } from './components/question/question.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginInComponent } from './components/login-in/login-in.component';
import { RegistrComponent } from './components/registr/registr.component';
import { MainComponent } from './components/main/main.component';

import { RouterModule, Routes} from '@angular/router';

import { LoggedInGuard } from './guard/logged-in.guard';
import { AdminGuard} from './guard/admin.guard';


import { environment } from '../environments/environment.prod';
import {QuestionDataService} from './services/question-data.service';
import {SocialAuthService} from './services/social-auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'registration', pathMatch: 'full' },
  { path: 'login', component: LoginInComponent},
  { path: 'registration', component: RegistrComponent},
  { path: 'main', component: MainComponent, canActivate: [LoggedInGuard]},

  {
    path: 'test',
    component: QuestionListComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    QuestionListComponent,
    QuestionComponent,
    AdminComponent,
    LoginInComponent,
    RegistrComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  providers: [
    LoggedInGuard,
    AdminGuard,
    QuestionDataService,
    SocialAuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
