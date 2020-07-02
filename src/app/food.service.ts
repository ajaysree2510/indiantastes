import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFood } from './food';



@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private _url:string = "https://sleepy-shore-31158.herokuapp.com/api/v1/foods"
 //private _url:string = "http://localhost:3000/api/v1/foods";
  //private _url:string = "http://api.indiantastes.club/api/v1/foods";

  constructor(private _http:HttpClient) { }

  getAll():any{

    return this._http.get<IFood[]>(this._url+'/food-display');
    
  }

  createRecipe(recipeData):any{

    let myResponse = this._http.post(this._url+'/create', recipeData)
    return myResponse;
  }

  getRecipeById(recipeId):any{
    let myResponse=this._http.get(this._url+'/recipeView/'+recipeId);
    return myResponse;
  }
}
