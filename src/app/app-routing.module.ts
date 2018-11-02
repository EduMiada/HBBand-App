import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//custom imports
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
 // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate:[AuthGuard] }, //band home tabbed page
    { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate:[AuthGuard] }, //band home tabbed page
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate:[AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    { path: 'band-create', loadChildren: './pages/band/band-create/band-create.module#BandCreatePageModule',canActivate:[AuthGuard] },   { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'profile-edit', loadChildren: './pages/profile-edit/profile-edit.module#ProfileEditPageModule' },
 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
