import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  banners = [

      {
        'image':'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        'description':'finely cooked meat with long grain rice'
    },

    
    {
        'image':'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'description':'finely cooked vegetables with long grain rice'
    },

    {
        'image':'https://image.shutterstock.com/z/stock-photo-butter-chicken-indian-cuisine-88284652.jpg',
        'description':'One of indias main course dish made with butter and juicy meat'
    },

    {
        'image':'https://images.pexels.com/photos/221143/pexels-photo-221143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'description':'Sout Indias popular dish made with rice'
    },

    {
        'image':'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'description':'A mix of indian breads and rice with gravy'
    },

  ];

  ngOnInit() {
  }

}
