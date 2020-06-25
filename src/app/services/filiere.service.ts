import { Injectable } from '@angular/core';
import { Filiere } from '../models/filiere';
import { Subject, Observable} from 'rxjs';
import { Resultat } from '../models/resultat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  private urlFiliere = 'http://192.168.1.105:8080/formation';
  
  
 
  
  // observables sources
  private filiereCreerSource = new Subject<Resultat<Filiere>>();
  private filiereModifSource = new Subject<Resultat<Filiere>>();
  private filiereFiltreSource = new Subject<string>();
 

// observables streams
filiereCreer$ = this.filiereCreerSource.asObservable();
filiereModif$ = this.filiereModifSource.asObservable();
filiereFiltre$ = this.filiereFiltreSource.asObservable();
  

  constructor(private  http: HttpClient) {
  }

  getAllFormation(): Observable<Resultat<Filiere[]>> {
    return this.http.get<Resultat<Filiere[]>>(this.urlFiliere);
  }

  ajoutFormation(ab: Filiere): Observable<Resultat<Filiere>> {
    console.log('methode du service qui ajoute un enseignant', ab);
    return this.http.post<Resultat<Filiere>>(this.urlFiliere, ab);
  }

  modifierFormation(abModif: Filiere): Observable<Resultat<Filiere>> {
    return this.http.put<Resultat<Filiere>>(this.urlFiliere, abModif);
  }

g
  getFormationById(id: number): Observable<Resultat<Filiere>> {
    return this.http.get<Resultat<Filiere>>(`${this.urlFiliere}/${id}`)
  }
  
// supprimer un formation
supprimerFormation(id: number): Observable<Resultat<boolean>> {
  return this.http.delete<Resultat<boolean>> (`${this.urlFiliere}/${id}`);
}

   formationCreer(res: Resultat<Filiere>) {
    console.log('Formation a ete  creer correctement essaie source');
    this.filiereCreerSource.next(res);
  }

  formationModif(res: Resultat<Filiere>) {
    this.filiereModifSource.next(res);
  }

  filtreFormation(text: string) {
    this.filiereFiltreSource.next(text);
  }
}
