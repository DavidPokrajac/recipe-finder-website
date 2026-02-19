import { Component, inject, signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import recipeInfo from "../../../public/assets/data.json";
import { RecipesList } from "../recipes-list/recipes-list";

interface RecipeType {
  id: number;
  title: string;
  slug: string;
  image: { large: string; small: string; };
  overview: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  ingredients: string[];
  instructions: string[];
}[]

@Component({
  selector: 'app-recipe-info',
  imports: [RecipesList],
  templateUrl: './recipe-info.html',
  styleUrl: './recipe-info.scss',
})
export class RecipeInfo {
  public recipeInfo = recipeInfo;
  recipeId = signal<RecipeType | null>(null);
  breadCrumbsValue = signal<string[]>([]);
  route = inject(ActivatedRoute);

  constructor() {
    this.route.params.subscribe(values => {
      const hi = recipeInfo.find(recipe => recipe.id === Number(values["id"])) as RecipeType
      this.recipeId.set(hi);
    });
    this.route.url.subscribe(values => {
      for(let value of values) {
        let { path } = value;
        this.breadCrumbsValue.update(v => [...v, path])
      }
    });
  }

  updatedBreadcrumbs = computed(() => {
    this.breadCrumbsValue()[0] = this.breadCrumbsValue()[0][0].toUpperCase() + this.breadCrumbsValue()[0].slice(1);
    this.breadCrumbsValue()[1] = this.recipeId()!.title;
    this.breadCrumbsValue().splice(2, 2);
    return this.breadCrumbsValue();
  })
}

