import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddFormationsComponent } from './add-formations.component';
import { AddCertificatComponent } from './add-certificat.component';
import { ListCertificatComponent } from './list-certificat.component';
import { ListFormationComponent } from './list-formation.component';

const routes: Routes =[
  {

    path: '',
    data: {
      title: 'Formation'
    },
    children: [
      {
        path: '',
        redirectTo: 'nouvelle-formation'
      },
      {
        path: 'nouvelle-formation',
        component: AddFormationsComponent,
        data: {
          title: 'Nouvelle Formation'
        }
      },
      {
        path: 'nouvelle-formation/edit/:id',
        component: AddFormationsComponent,
        data: {
          title: 'modifier la formation'
        }
      },
      {
        path: 'liste-formation',
        component: ListFormationComponent,
        data: {
          title: 'liste des Formations'
        }
      },
      {
        path: 'nouveau-certificat',
        component: AddCertificatComponent,
        data: {
          title: 'Nouveau Certificat'
        }
      },
      {
        path: 'liste-certificat',
        component: ListCertificatComponent,
        data: {
          title: 'Liste des Certificats'
        }
      }


    ]

  }
 
  
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
