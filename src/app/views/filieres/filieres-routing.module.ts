import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilieresComponent } from './filieres.component';
import { Routes, RouterModule } from '@angular/router';
import { ListFilieresComponent } from './list-filieres.component';

const routes: Routes =[
  {

    path: '',
    data: {
      title: 'Filiere'
    },
    children: [
      {
        path: '',
        redirectTo: 'nouvelle-filiere'
      },
      {
        path: 'nouvelle-filiere',
        component: FilieresComponent,
        data: {
          title: 'Nouvelle Filière'
        }
      },
      {
        path: 'liste-filieres',
        component: ListFilieresComponent,
        data: {
          title: 'liste des Filières'
        }
      }
    ]

  }
 
  
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilieresRoutingModule { }
