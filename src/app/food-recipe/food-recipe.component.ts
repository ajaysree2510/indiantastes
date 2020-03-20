import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-food-recipe',
  templateUrl: './food-recipe.component.html',
  styleUrls: ['./food-recipe.component.scss']
})
export class FoodRecipeComponent implements OnInit {

  public foodItem= [];
  public currentRecipe={};
  constructor(private foodService:FoodService, private _route:ActivatedRoute) { }

  ngOnInit() {

    let myRecipeId= this._route.snapshot.paramMap.get('recipeId');
    console.log(myRecipeId);

    this.foodService.getRecipeById(myRecipeId).subscribe(
      data=>{
        this.currentRecipe=data.data;
        console.log(this.currentRecipe);
       // this.getSingleRecipe(myRecipeId)       
      },
      err=>{
        console.log(err);
      }
    )

    

  }

 /*  public getSingleRecipe(currentRecipeId):any{

    for(let x of this.foodItem){
      if(x.recipeId==currentRecipeId){
        this.currentRecipe=x;
      }
    }
    console.log(this.currentRecipe)
  } */

}
