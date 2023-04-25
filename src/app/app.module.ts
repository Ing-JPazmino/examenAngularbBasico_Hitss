import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PantallaExamenComponent } from './pantalla-examen/pantalla-examen.component';
import { ServicesComponent } from './services/services.component';
import { PaginaTablaComponent } from './pages/pagina-tabla/pagina-tabla.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AppRoutingModule } from './app-routing.module';

import { TableModule } from 'primeng/table';

import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { PanelModule } from 'primeng/panel';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    PantallaExamenComponent,
    ServicesComponent,
    PaginaTablaComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    PanelModule,
    TabMenuModule,
    MenubarModule,
    ToastModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
