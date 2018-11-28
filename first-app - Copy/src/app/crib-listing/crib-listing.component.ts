import { Component, OnInit } from '@angular/core';
import  { CribsService } from './../services/cribs.service';

// import {cribs} from "src/data/cribs";
// import  { CribsService } from './../services/cribs.service';

// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';
// import { Observable, of, Subject } from 'rxjs';

// import { Injectable } from '@angular/core';




@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  // cribs: Array<any>;
  cribs;
  error: string;
    
  constructor(private cribListing: CribsService) 
    { }

  ngOnInit() {
    
   
  this.cribListing.getAllCribs().subscribe(data => this.cribs = data);   
  
  this.ribService.newCribSubject.subscribe(
    data => this.cribs.push(data);
  )
       
   }

  }



