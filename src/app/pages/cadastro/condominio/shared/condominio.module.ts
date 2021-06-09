import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CoreModule } from '../../../../core/core.module';
import { FormCondominioComponent } from '../form-condominio/form-condominio.component';
import { ListCondominioComponent } from '../list-condominio/list-condominio.component';

import { CondominioRoutes } from './condominio.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    FormCondominioComponent,
    ListCondominioComponent,
  ],
  imports: [
    CoreModule,
    CondominioRoutes,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
   ],
  providers: [],
})
export class CondominioModule {}
