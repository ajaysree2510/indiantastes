import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { ThemePalette } from "@angular/material/core";



@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  color: ThemePalette = "warn";
  mode: ProgressSpinnerMode = "indeterminate";

  public foods:[]=null
  constructor(private foodService:FoodService) { }

  ngOnInit() {

    this.foodService.getAll().subscribe(

      data=>{
        this.foods=data.data;
      },
      err=>{
        console.log(err);
        this.foods=null;
      }
    )
  }

}
