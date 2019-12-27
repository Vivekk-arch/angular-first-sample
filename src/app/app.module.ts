import { InMemoryDataService } from './in-memory-data.service';
import { MultiplyPipe } from './cards/cardstatus/multiply.pipe';
import { RouterModule } from '@angular/router';
import { SquareRootPipe } from './app.square';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardstatusComponent } from './cards/cardstatus/cardstatus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule, InMemoryDbService} from 'angular-in-memory-web-api';

  import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    SquareRootPipe,
    CardstatusComponent,
    MultiplyPipe,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
