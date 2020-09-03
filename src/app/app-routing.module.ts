import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import {ProfileComponent} from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import{GroupComponent} from './group/group.component';
import{ChatComponent} from './chat/chat.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'account/:user', component: AccountComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'logout', component: LogoutComponent},
  {path:'group', component:GroupComponent},
  {path:'chat', component:ChatComponent},
  {path:'add', component:AddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
