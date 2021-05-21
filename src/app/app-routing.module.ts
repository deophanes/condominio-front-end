import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCondominioComponent } from './pages/cadastro/condominio/list-condominio/list-condominio.component';
import { HomeComponent } from './pages/home/home.component';
import { FormCondominioComponent } from './pages/cadastro/condominio/form-condominio/form-condominio.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'condominio',
    component: ListCondominioComponent
  },
  {
    path:'condominio/novo',
    component: FormCondominioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
