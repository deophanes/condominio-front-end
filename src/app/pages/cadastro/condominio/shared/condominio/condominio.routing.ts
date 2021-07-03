import { Routes, RouterModule } from '@angular/router';
import { ListCondominioComponent } from '../../list-condominio/list-condominio.component';
import { FormCondominioComponent } from '../../form-condominio/form-condominio.component';

const routes: Routes = [
  { path: 'condominio', component: ListCondominioComponent },
  { path: 'condominio/novo', component: FormCondominioComponent }
];

export const CondominioRoutes = RouterModule.forChild(routes);
