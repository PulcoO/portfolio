import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs'; // afin de pouvoir passer en assin
import { map, catchError } from 'rxjs/operators';



import { WORKANDPLAYLIST } from '../../data/work-and-play-list';
import { WorkAndPlay } from "../../models/WorkAndPlay/WorkAndPlay.model";

@Injectable({
  providedIn: 'root'
})
export class WorkAndPlayService {

  constructor() { }
  // Pour le moment la méthode a une siganture synchrone
  // getWorks(): WorkAndPlay[] {
  //   return WORKANDPLAYLIST;
  // }

  // La méthode est désormé asynchrone
  getWorks(): Observable<WorkAndPlay[]>{
    return of (WORKANDPLAYLIST); // renvoi un seul Oberservable de type Work[], qui émet une seule valeur, le tableau des héros fictifs
  }

  
  /**
  * @param {string} workName
  */
  getWorkByName(workname): Observable<WorkAndPlay>{
    return this.getWorks().pipe(
      map(WORKANDPLAYLIST => WORKANDPLAYLIST.find(WorkAndPlay => WorkAndPlay.name == workname))
    )      
  }

  /**
  * @param {string} workId
  */
  getWorkById(workId): Observable<WorkAndPlay>{
    return this.getWorks().pipe(
      map(WORKANDPLAYLIST => WORKANDPLAYLIST.find(WorkAndPlay => WorkAndPlay.name == workId))
    )      
  }

  
}
