import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from "@angular/core";
import { Product } from "../models/product.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnChanges, OnInit, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  remove() {
    this.productClicked.emit(this.product.id);
  }
  addCart() {
    console.log("anadir al carrito");
    this.productClicked.emit(this.product.id);
  }
  constructor() {
    console.log("construccion");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges");
    console.log(changes);
  }
  ngOnInit() {
    console.log("Init");
  }
  ngOnDestroy() {
    console.log("c fuee");
  }
}
