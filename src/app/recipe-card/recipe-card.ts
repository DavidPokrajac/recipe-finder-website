import { Component, inject, Input, model } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  imports: [RouterModule],
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

  private router = inject(Router);

  navigate(id:any) {
    this.router.navigate(['/recipes', id]);
  }
}
