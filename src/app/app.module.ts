// Declaraciones - apodos para los modulos
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SidebarComponent} from './sidebar/sidebar.component';
import { TablaComponent} from './tabla/tabla.component';
import { NavComponent} from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

//Importaciones - como extensiones

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//Proveedores - servicios
import { AnimeService } from './services/Anime.service';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';



 const appRoutes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'tabla', component: TablaComponent},
  {path: 'navv', component: NavComponent},
  {path: '', redirectTo: '/login' , pathMatch: 'full'},
  {path: '**', redirectTo: '/login' , pathMatch: 'full'},
  ];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    TablaComponent,
    NavComponent,

 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    HttpModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      preventDuplicates: true,
    }),

  ],
  providers: [ 
    AnimeService,
     { provide: APP_BASE_HREF, useValue: '/' },
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
