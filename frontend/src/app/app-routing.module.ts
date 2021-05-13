import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { MenuComponent } from './menu/menu.component';
import { GoalEditComponent } from './goal-edit/goal-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'goal-form', component: GoalFormComponent },
  { path: 'detail/:id', component: GoalDetailComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'edit/:id', component: GoalEditComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
