import { Component, inject, signal } from '@angular/core';
import { AllRecipesList } from '../all-recipes-list/all-recipes-list';

@Component({
  selector: 'app-recipespage',
  imports: [AllRecipesList],
  templateUrl: './recipespage.html',
  styleUrl: './recipespage.scss',
})
export class Recipespage {

  name = signal("");
  maxCookTime = signal<number | null>(null);
  maxPrepTime = signal<number | null>(null);

  handleSearch(event: Event) {
    this.name.update(v => v = (event.target as HTMLInputElement).value);
  }

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
    this.maxCookTime.set(null);
  }

  handleMaxCookTime(event: Event) {
    this.maxCookTime.set(+(event.target as HTMLInputElement).value);
  }

  handleMaxPrepTime(event: Event) {
    this.maxPrepTime.set(+(event.target as HTMLInputElement).value);
  }
}
