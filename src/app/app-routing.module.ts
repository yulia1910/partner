import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUserComponent } from './all-user/all-user.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'all-user', component:  AllUserComponent },
  { path: 'app-component', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
