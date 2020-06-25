import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilieresComponent } from './filieres.component';
import { FormsModule } from '@angular/forms';
import { FilieresRoutingModule } from './filieres-routing.module';
import { ListFilieresComponent } from './list-filieres.component';



@NgModule({
  declarations: [
    FilieresComponent, 
    ListFilieresComponent],
  imports: [
    FilieresRoutingModule,
    FormsModule,
    CommonModule
  ]
})
export class FilieresModule { }
