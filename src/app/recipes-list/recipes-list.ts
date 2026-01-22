import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeCard } from "../recipe-card/recipe-card";

@Component({
  selector: 'app-recipes-list',
  imports: [RecipeCard],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.scss',
})
export class RecipesList implements OnInit {
  recipes: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url = "assets/data.json"
    this.http.get(url).subscribe((data) => {
        this.recipes = data
    });
  }
}
