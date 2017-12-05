import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './user/register/register.component';

const r : Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  },

  {
    path: 'user', component: UserComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'userinfo', component: UserinfoComponent
  },
  
  { 
    path: 'heroes' , component: HeroesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    UserinfoComponent,
    HeroesDetailsComponent,
    UserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(r)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
