import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Resultat } from '../../models/resultat';
import { Formation } from '../../models/formation';
import { FormationService } from '../../services/formation.service';

@Component({
  selector: 'app-add-formations',
  templateUrl: './add-formations.component.html'
})
export class AddFormationsComponent implements OnInit {

  formationForm: FormGroup;
  resultat: Resultat<Formation>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private formationService: FormationService) {
     // this.initForm
     }

  ngOnInit() {
    
    this.initForm();
  }

  onSubmit(){

    const formValue = this.formationForm.value;
    const newFormation = new Formation(
      formValue['id'],
      formValue['type'],
      formValue['description'] 
    )
    this.formationService.ajoutFormation(newFormation).subscribe(rest=>{
      console.log("operation reussi")
    })

console.log(newFormation);
  }

  private initForm() {
   const ab = new Formation(null, "", "");
    this.formationForm = this.fb.group({
      id: '',
      type: '',
      description: ''  
    });
    
  }


}
