import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddNiveauComponent } from './add-niveau.component';
import { ListNiveauComponent } from './list-niveau.component';

const routes: Routes =[
  {

    path: '',
    data: {
      title: 'Niveau'
    },
    children: [
      {
        path: '',
        redirectTo: 'nouveau-niveau'
      },
      {
        path: 'nouveau-niveau',
        component: AddNiveauComponent,
        data: {
          title: 'Nouveau Niveau'
        }
      },
      {
        path: 'liste-niveaux',
        component: ListNiveauComponent,
        data: {
          title: 'liste des Niveaux'
        }
      }
    ]

  }
 
  
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NiveauRoutingModule { }
