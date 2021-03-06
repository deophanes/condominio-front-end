import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'condominio',
        loadChildren: () => import('./pages/cadastro/condominio/shared/condominio/condominio.module').
                then(mod => mod.CondominioModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
