import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foods = [ ]
  constructor(private foodService:FoodService) { }

  ngOnInit() {

    this.foodService.getAll().subscribe(

      data=>{
        this.foods=data.data;
      },
      err=>{
        console.log(err);
      }
    )
  }

}
