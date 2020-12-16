import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { ProductComponent } from "./components/product.component";
import { SucursalComponent } from './components/sucursal/sucursal.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ProductComponent, SucursalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
