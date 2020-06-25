import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiveauRoutingModule } from './niveau-routing.module';
import { FormsModule } from '@angular/forms';
import { AddNiveauComponent } from './add-niveau.component';
import { ListNiveauComponent } from './list-niveau.component';



@NgModule({
  declarations: [
    AddNiveauComponent,
    ListNiveauComponent
],
  imports: [
    NiveauRoutingModule,
    FormsModule,
    CommonModule
  ]
})
export class NiveauModule { }
