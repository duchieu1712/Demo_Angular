import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { BannerComponent } from './banner/banner.component';
import { ShowTimeComponent } from './show-time/show-time.component';


@NgModule({
  declarations: [MovieComponent, BannerComponent, ShowTimeComponent],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
