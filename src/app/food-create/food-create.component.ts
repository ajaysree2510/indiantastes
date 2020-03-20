import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-create',
  templateUrl: './food-create.component.html',
  styleUrls: ['./food-create.component.scss']
})
export class FoodCreateComponent implements OnInit {

  constructor(private foodService:FoodService) {}

  public recipeName:String;
  public authorName:String;
  public recipeImage:String;
  public recipeDescription:String;
  public recipeIngredients:String;
  public recipeInstructions:String;

  ngOnInit() {
  }

  public createRecipe():any{

      let recipeData = {
        name:this.recipeName,
        author:this.authorName,
        image:this.recipeImage,
        description:this.recipeDescription,
        ingredients:this.recipeIngredients.split("\n"),
        instructions:this.recipeInstructions.split("\n")
      }
  
      console.log(recipeData)

      this.foodService.createRecipe(recipeData).subscribe(
        data=>{
          console.log("Recipe created")
          alert("Recipe created successfully");
        },
        error =>{
          console.log("Some error occured");
          console.log(error.errorMessage);
          alert('Some error occured')
        }
      )
  }

}
