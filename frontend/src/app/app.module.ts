import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HomepageComponent } from './homepage/homepage.component';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';
import { GoalEditComponent } from './goal-edit/goal-edit.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from './material.module';
import { RegisterComponent } from './register/register.component';
import { AccountpageComponent } from './accountpage/accountpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GoalFormComponent,
    GoalDetailComponent,
    SearchComponent,
    MenuComponent,
    GoalEditComponent,
    LoginComponent,
    RegisterComponent,
    AccountpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    CustomMaterialModule ,
    //HttpClientInMemoryWebApiModule.forRoot(
      //InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
