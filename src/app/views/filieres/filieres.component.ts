import { Component, OnInit } from '@angular/core';
import { Filiere } from '../../models/filiere';

@Component({
  selector: 'app-filieres',
  templateUrl: './filieres.component.html'
})
export class FilieresComponent implements OnInit {

  filiere = new Filiere();
  formation =  ['formation initiale', 'formation continue'];

  constructor() { }

  ngOnInit(): void {
  }

  filiereSubmit(){
    console.log(this.filiere)
  }

}
