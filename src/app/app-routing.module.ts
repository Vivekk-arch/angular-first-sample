import { DashboardComponent } from './dashboard/dashboard.component';
import { CardstatusComponent } from './cards/cardstatus/cardstatus.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'cardstatus', component: CardstatusComponent},
{path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
