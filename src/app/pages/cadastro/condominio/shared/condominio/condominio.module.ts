import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CondominioRoutes } from './condominio.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ListCondominioComponent } from '../../list-condominio/list-condominio.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { CoreModule } from '../../../../../core/core.module';
import { FormCondominioComponent } from '../../form-condominio/form-condominio.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FormCondominioComponent,
    ListCondominioComponent,
  ],
  imports: [
    CoreModule,
    CondominioRoutes,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
   ],
  providers: [],
})
export class CondominioModule {}
