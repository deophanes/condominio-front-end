import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { RootNavComponent } from './core/root-nav/root-nav.component';
import { FooterComponent } from './core/footer/footer.component';
import { CondominioModule } from './pages/cadastro/condominio/shared/condominio/condominio.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    RootNavComponent
  ],
  imports: [
    CoreModule,
    CondominioModule,
    AppRoutingModule,
  ],
  exports: [
    CoreModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
