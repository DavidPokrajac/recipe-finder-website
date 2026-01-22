import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  imports: [RouterLink, RouterModule],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss',
})
export class RecipeCard {
  @Input() recipe: any = {
    id: 0,
    title: "",
    image: {
      large: "",
      small: ""
    },
    overview: "",
    servings: 0,
    prepMinutes: 0,
    cookMinutes: 0
  }
}
