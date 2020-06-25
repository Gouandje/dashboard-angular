import { Component, OnInit } from '@angular/core';
import { Matiere, UE } from '../../models/matiere';

@Component({
  selector: 'app-add-matiere',
  templateUrl: './add-matiere.component.html'
})
export class AddMatiereComponent implements OnInit {

  matiere = new Matiere();
  filiere = ['marketing digital', 'publicité digitale'];
  semestre = ['semestre 1', 'semestre 2'];
  niveau = ['Licence 1(L1)', 'Licence 2(L2)','Licence 3(L3)','Master 1(M1)', 'Master 2(M2)', 'Doctorat 1(D1)', 'Doctorat 2(D2)','Doctorat 3(D3)'];

  constructor() { }

  addMatiere() {
    this.matiere.matiere.push(new UE());
  }
  deleteMatiere(index) {
    this.matiere.matiere.splice(index, 1);
  }

  ngOnInit(): void {
  }

  matieresubmit(){
    console.log(this.matiere);

  }

}
