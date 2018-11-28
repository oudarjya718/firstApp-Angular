import { Component, OnInit } from '@angular/core';
import { CribService } from './../services/cribs.service';



@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.cribService.getAllCribs()
      .subscribe(
        data => this.cribs => DataCue,
        error => this.error = error.ststusText
      )
  }
  onCribSubmit(data): void {
    console.log(data);
  }

}
