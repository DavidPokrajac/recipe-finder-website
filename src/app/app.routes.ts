import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Aboutpage } from './aboutpage/aboutpage';
import  { Recipespage } from './recipespage/recipespage';
import { RecipeInfo } from './recipe-info/recipe-info';

export const routes: Routes = [
    {
        path: "",
        component: Homepage,
    },
    {
        path: "about",
        component: Aboutpage
    },
    {
        path: "recipes",
        component: Recipespage
    },
    {
        path: "recipes/:id",
        component: RecipeInfo
    }
];
