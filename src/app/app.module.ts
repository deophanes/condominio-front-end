import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavComponent } from './core/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RootNavComponent } from './core/root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

import { FormCondominioComponent } from './pages/cadastro/condominio/form-condominio/form-condominio.component';
import { ListCondominioComponent } from './pages/cadastro/condominio/list-condominio/list-condominio.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    RootNavComponent,
    FormCondominioComponent,
    ListCondominioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
