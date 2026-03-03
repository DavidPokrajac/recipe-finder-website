import { Component, OnInit, Input, input, signal, computed, OnDestroy, OnChanges, SimpleChanges, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeCard } from "../recipe-card/recipe-card";

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
}

@Component({
  selector: 'app-all-recipes-list',
  imports: [RecipeCard],
  templateUrl: './all-recipes-list.html',
  styleUrl: './all-recipes-list.scss',
})
export class AllRecipesList implements OnInit {
  recipes: any = signal([]);
  // @Input()
  searchName = input<string | undefined>("");
  // @Input()
  maxCookTime = input<number | null>(null);
  maxPrepTime = input<number | null>(null);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url = "assets/data.json";
    this.http.get(url).subscribe((data) => {
      this.recipes.set(data);
    });
  }

  displa = () => {
    let recipesCopy = [...this.recipes()];
    if(this.searchName()) {
      return recipesCopy.filter((r: RecipeType) => {
        return (r.cookMinutes === this.maxCookTime()) || (r.title.includes(this.searchName() as string) || r.title.toLowerCase().includes(this.searchName() as string))
      });
    }
    else if(this.maxCookTime() || this.maxCookTime() === 0) {
      return recipesCopy.filter((r: RecipeType) => {
        return (r.cookMinutes === this.maxCookTime()) && (r.title.includes(this.searchName() as string) || r.title.toLowerCase().includes(this.searchName() as string));
      });
    }
    else if(this.maxPrepTime() || this.maxPrepTime() === 0) {
      return recipesCopy.filter((r: RecipeType) => {
        return (r.prepMinutes === this.maxPrepTime()) && (r.title.includes(this.searchName() as string) || r.title.toLowerCase().includes(this.searchName() as string));
      });
    }
    return recipesCopy;
  }
}
