import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter();

  recipes: Array<Recipe> = [
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://www.telegraph.co.uk/content/dam/food-and-drink/2019/01/11/TELEMMGLPICT000185036503_trans_NvBQzQNjv4Bq8m3xuhMyFOjUOkuEnTdW-M-bhHwB87o-r13mliye62g.jpeg?imwidth=1400',
    ),
    new Recipe(
      'Another recipe',
      'This is another useless test',
      'https://www.telegraph.co.uk/content/dam/food-and-drink/2019/01/11/TELEMMGLPICT000185036503_trans_NvBQzQNjv4Bq8m3xuhMyFOjUOkuEnTdW-M-bhHwB87o-r13mliye62g.jpeg?imwidth=1400',
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe): void {
    this.recipeSelected.emit(recipe);
  }
}
