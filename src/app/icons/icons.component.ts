import { Component, OnInit } from '@angular/core';
import ZonesJSON from '../zones.json';

interface ZONES {
  id: Number;
  name: String;
  username: String;
  email: String;
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

}
