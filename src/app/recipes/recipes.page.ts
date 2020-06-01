import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    console.log("ngOnInit");
    // this.recipes = this.recipeService.getAllRecipe();
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter");
    this.recipes = this.recipeService.getAllRecipe();

  }
  ionViewDidEnter() {
    console.log("ionViewDidEnter");
  }
  ionViewWillLeave() {
    console.log("ionViewWillLeave");
  }
  ionViewDidLeave() {
    console.log("ionViewDidLeave");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
