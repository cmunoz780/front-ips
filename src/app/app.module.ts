import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';
import { FormprincipalComponent } from './formprincipal/formprincipal.component';
import { LoginComponent } from './usuarios/login.component';
import { FormpersonaComponent } from './formpersona/formpersona.component';
import { FormfiltroimponenteComponent } from './formfiltroimponente/formfiltroimponente.component';
import { FormmodificacionComponent } from './formmodificacion/formmodificacion.component'

const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/form/:id', component: FormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'formprincipal', component: FormprincipalComponent},
  {path: 'formpersona', component: FormpersonaComponent},
  {path: 'formfiltroimponente', component: FormfiltroimponenteComponent},
  {path: 'formmodificacion', component: FormmodificacionComponent}
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent,
    FormprincipalComponent,
    LoginComponent,
    FormpersonaComponent,
    FormfiltroimponenteComponent,
    FormmodificacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
