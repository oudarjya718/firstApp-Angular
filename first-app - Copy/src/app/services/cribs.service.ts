 import { Injectable } from '@angular/core';
// import { Http } from '@angular/core';
// import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';



// import {cribs} from "src/data/cribs";

@Injectable({
  providedIn: 'root'
})
export class CribsService {

  // cribsService = cribs;
  url = "/assets/data/cribs.json";

  

  constructor( private http: HttpClient) {
      // console.log("cribsService", cribs);
     }

   getAllCribs() {
      // return this.http.get('data/CribsService.json').map(res => res.json());
      // return this.cribsService;
      return this.http.get(this.url);
      return this.http.get('assets/data/cribs.json').map(res=>res.json);

   }

}
