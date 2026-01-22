import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import recipeInfo from "../../../public/assets/data.json";

@Component({
  selector: 'app-recipe-info',
  imports: [],
  templateUrl: './recipe-info.html',
  styleUrl: './recipe-info.scss',
})
export class RecipeInfo {
  public recipeInfo = recipeInfo;
  constructor(route: ActivatedRoute) {
  }
}
