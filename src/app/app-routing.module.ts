import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubcatComponent } from './components/subcat/subcat.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { InfoProductoComponent } from './components/info-producto/info-producto.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: PrincipalComponent},
  {path: ':cat/:subcat', component: SubcatComponent},
  {path: ':cat/:subcat/:pid', component: InfoProductoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
