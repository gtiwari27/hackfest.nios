import { Component, OnInit } from '@angular/core';
import ZonesJSON from '../zones.json';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { data } from 'jquery';
import { NgForm } from '@angular/forms';



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

  displayModal: boolean;

  Zones: ZONES[] = ZonesJSON;
  
  closeResult = '';
  zone: any;
  zone1 : any;
  

  constructor(private modalService: NgbModal) { 
    console.log(this.Zones);
  }

  ngOnInit() {
  }

  showModalDialog() { 
    this.displayModal = true;
}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addZone(d){
    this.Zones.push(d);
  }

  openZoneForm() {
    console.log("hello");
  }

  deleteRow(d){
    const index = this.Zones.indexOf(d);
    this.Zones.splice(index, 1);
  }

  saveDialogData(data:NgForm) {
    //var name = document
    console.log(data.value);
    
    this.zone = this.Zones.pop();
    var abc = data.value;
    this.zone.comment = abc.comment;
    this.zone.name = abc.name;
    this.zone.id = "Mumbai";
    this.zone.type = "Reverse";
    this.Zones.push(this.zone);
  }

}
