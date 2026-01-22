import { Component } from '@angular/core';
import { RecipesList } from '../recipes-list/recipes-list';

@Component({
  selector: 'app-recipespage',
  imports: [RecipesList],
  templateUrl: './recipespage.html',
  styleUrl: './recipespage.scss',
})
export class Recipespage {
  clearMaxPrepRadios() {
    const maxCookPopover = document.querySelector("#max-prep-popover");
    const radios = maxCookPopover?.querySelectorAll("input[type='radio']") as NodeListOf<Element>;
    Array.from(radios).forEach((radio) => {
      (radio as HTMLInputElement).checked = false;
    });
  }

  clearMaxCookRadios() {
    const maxCookPopover = document.querySelector("#max-cook-popover");
    const radios = maxCookPopover?.querySelectorAll("input[type='radio']") as NodeListOf<Element>;
    Array.from(radios).forEach((radio) => {
      (radio as HTMLInputElement).checked = false;
    });
  }
}
