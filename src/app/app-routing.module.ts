import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
