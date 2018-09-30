import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from './app.route';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { RulesComponent } from './rules/rules.component';
import { SimpleSlcComponent } from './simple-slc/simple-slc.component';
import { EmailListComponent } from './email-list/email-list.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ActionComponent } from './action/action.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    DashboardComponent,
    FooterComponent,
    RulesComponent,
    SimpleSlcComponent,
    EmailListComponent,
    SchedulerComponent,
    CalendarComponent,
    ActionComponent
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
