import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AereosComponent } from './components/aereos/aereos.component';
import { AcuaticosComponent } from './components/acuaticos/acuaticos.component';
import { TerrestresComponent } from './components/terrestres/terrestres.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalComponent } from './components/animal/animal.component';
import { AuthorizedPageComponent } from './components/authorized-page/authorized-page.component';
import { SearchAccesoGuard } from './guards/search-acceso.guard';

const routes: Routes = [
  { path: 'terrestres', component: TerrestresComponent},
  { path: 'acuaticos', component: AcuaticosComponent},
  { path: 'aereos', component: AereosComponent},
  { path: 'home', component: HomeComponent},
  { path: 'authorized', component: AuthorizedPageComponent, canActivate: [SearchAccesoGuard]},
  { path: 'terrestres/:tipo', component: AnimalComponent},
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
