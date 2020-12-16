import { Component, VERSION } from "@angular/core";
import { Product } from "./models/product.model";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  productName = "";
  btnSave = "Guardar";

  products: Product[] = [
    {
      id: "1",
      image: "https://i.imgur.com/68y9zus.jpg",
      title: "Chocolate Tradicional",
      price: 320,
      description:
        "Chocolate espumoso compuesto por un 75% de cacao natural. Elaborado de manera artesanal en las zonas fertiles de Chiapas"
    },
    {
      id: "2",
      image: "https://i.imgur.com/1zDEDSs.png",
      title: "Chocolate Especial",
      price: 350,
      description:
        "Este chocolate, ademas ser 75% cacao, tiene adicionado almendras y un toque espeso. Elaborado de manera artesanal en las zonas fertiles de Chiapas"
    },
    {
      id: "3",
      image: "https://i.imgur.com/QJDhm4k.jpg",
      title: "Precios de los chocolates",
      price: 350,
      description:
        "Chocolate artesanal de las zonas fertiles de Chiapas, adicionados con almendras y 75% de cacao natural"
    }
  ];
}
