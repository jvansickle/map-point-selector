import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PathBuilderComponent } from './path-builder/path-builder.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'path', component: PathBuilderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
