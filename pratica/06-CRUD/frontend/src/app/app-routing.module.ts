import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistriesComponent } from './registries/registries.component';
import { RegistryEditComponent } from './registry-edit/registry-edit.component';

const routes: Routes = [
  {
    path: 'registries',
    component: RegistriesComponent,
  },
  {
    path: 'registry',
    component: RegistryEditComponent,
  },
  {
    path: 'registry/:id',
    component: RegistryEditComponent,
  },
  {
    path: '',
    redirectTo: 'registries',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
