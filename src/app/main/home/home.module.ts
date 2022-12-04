import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomeComponent } from './home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [CarouselComponent, MovieListComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class HomeModule { }
