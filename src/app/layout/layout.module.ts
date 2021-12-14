import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [LayoutComponent, HeaderComponent, FooterComponent],
    imports: [RouterModule, CommonModule],
    exports: [LayoutComponent]
})

export class LayoutModule { }