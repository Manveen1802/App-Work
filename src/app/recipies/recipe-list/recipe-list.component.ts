import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[]= [
    new Recipe('A test Recipe','this is simply a test',"https://www.bonappetit.com/recipe/baked-ziti-spaghetti-squash")
  ];

  constructor() {}

  ngOnInit(): void {
    
  }
}
