import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FoodListComponent } from './food-list/food-list.component';
import { HttpClientModule } from '@angular/common/http'
import { FoodService } from './food.service';
import { FoodRecipeComponent } from './food-recipe/food-recipe.component';
import { FoodCreateComponent } from './food-create/food-create.component';

import {FormsModule} from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FoodListComponent,
    FoodRecipeComponent,
    FoodCreateComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home', component:FoodListComponent },
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'view/:recipeId', component:FoodRecipeComponent},
      {path:'createRecipe', component:FoodCreateComponent},
      {path:'contact', component: ContactComponent}
    ]),
    FormsModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
