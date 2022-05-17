import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-zone-modal',
  templateUrl: './add-zone-modal.component.html',
  styleUrls: ['./add-zone-modal.component.css']
})
export class AddZoneModalComponent implements OnInit {
  closeResult : string;
  constructor(modalService: NgbModal) { }

  ngOnInit(): void {
  }
  
}
