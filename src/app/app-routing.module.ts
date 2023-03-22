import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from '../shared/enums';

const routes: Routes = [
  {
    path: Path.Form,
    loadChildren: () => import('../modules/form/form.module').then(m => m.FormModule)
  },
  {
    path: '',
    redirectTo: Path.Form,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
