import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AereosComponent } from "./components/aereos/aereos.component";
import { AcuaticosComponent } from "./components/acuaticos/acuaticos.component";
import { TerrestresComponent } from "./components/terrestres/terrestres.component";
import { ViewsRoutingModule } from "./views-routing.module";
import { AnimalComponent } from './components/animal/animal.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AuthorizedPageComponent } from './components/authorized-page/authorized-page.component';

@NgModule({
  imports: [
    ViewsRoutingModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    TerrestresComponent,
    AereosComponent,
    AcuaticosComponent,
    AnimalComponent,
    AuthorizedPageComponent,
  ]
})

export class ViewsModule {}