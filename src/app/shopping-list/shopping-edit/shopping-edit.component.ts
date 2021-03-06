import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
  Input,
  ElementRef,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() add = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  addIngredient(): void {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;

    this.add.emit(new Ingredient(name, amount));
  }
}
