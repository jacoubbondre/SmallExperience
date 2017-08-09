import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainNavButtonsComponent } from './main-nav-buttons/main-nav-buttons.component';
import { MainNavButtonDirective } from './main-nav-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    WorkWithUsComponent,
    HomeComponent,
    MainNavComponent,
    MainNavButtonsComponent,
    MainNavButtonDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'work-with-us',
        component: WorkWithUsComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
