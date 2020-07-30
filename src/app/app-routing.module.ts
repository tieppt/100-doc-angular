import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInRfComponent } from './sign-in-rf/sign-in-rf.component';

const routes: Routes = [{
  path: 'sign-in',
  component: SignInComponent
}, {
  path: 'sign-in-rf',
  component: SignInRfComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
