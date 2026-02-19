import { Component, OnInit, Input, input, signal, computed, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
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
  selector: 'app-recipes-list',
  imports: [RecipeCard],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.scss',
})
export class RecipesList implements OnInit, OnChanges {
  recipes = signal<RecipeType[]>([]);
  @Input()
  id?: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url = "assets/data.json";
    this.http.get(url).subscribe((data) => {
      this.recipes.set(data as RecipeType[]);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const url = "assets/data.json";
    this.http.get(url).subscribe((data) => {
      this.recipes.set(data as RecipeType[]);
    });
  }

  displayData = computed(() => {
    let ye: any[] = [];
    if(this.id !== undefined && this.id > 0) {
      ye = [0, 1, 2].map(offset => {
        const index = (this.id  as number + offset) % this.recipes().length;
        return this.recipes()[index];
      });
      return ye;
    } else {
      return this.recipes();
    }
  });
}
