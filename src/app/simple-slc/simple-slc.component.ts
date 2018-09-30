import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-slc',
  templateUrl: './simple-slc.component.html',
  styleUrls: ['./simple-slc.component.css']
})
export class SimpleSlcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formSubmit(formData){
    alert("form submited"+JSON.stringify(formData));
    
  }

}
