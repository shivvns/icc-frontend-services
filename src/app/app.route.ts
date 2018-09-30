import { ActionComponent } from './action/action.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailListComponent } from './email-list/email-list.component';
import { RulesComponent } from './rules/rules.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SimpleSlcComponent } from './simple-slc/simple-slc.component';
import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'simple-slc', component: SimpleSlcComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'actions', component: ActionComponent},
  {path: 'calendars', component: CalendarComponent},
  {path: 'schedulers', component: SchedulerComponent},
  {path: 'email-list', component: EmailListComponent}
];
