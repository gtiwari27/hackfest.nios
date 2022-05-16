import { Component, OnInit } from '@angular/core';
import ZonesJSON from '../zones.json';

interface ZONES {
  id: String;
  name: String;
  comment: String;
  type: String;
}

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  Zones: ZONES[] = ZonesJSON;
  constructor() { 
    console.log(this.Zones);
  }

  ngOnInit() {
  }

  openZoneForm() {
    console.log("hello");
  }

  deleteRow(d){
    const index = this.Zones.indexOf(d);
    this.Zones.splice(index, 1);
}

}
