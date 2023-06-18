import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ErrorComponent } from './components/error/error.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { ChildrenHomeComponent } from './components/home/children-home/children-home.component';
import { ChildrenHomeDosComponent } from './components/home/children-home-dos/children-home-dos.component';

const routes: Routes = [
  {path: 'home', children: [
    {path: 'children-home', component: ChildrenHomeComponent},
    {path: 'children-home-dos', component: ChildrenHomeDosComponent},
    {path: '', component: HomeComponent}
  ]},
  {path: 'usuarios', component: UsuariosComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'ruta', component: RutaComponent},
  {path: 'ruta/:surname', component: RutaComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
