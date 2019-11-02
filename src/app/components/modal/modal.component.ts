import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  closeModal() {
    document.getElementById('myModal').classList.add('modal-close');
    document.getElementById('myModal').classList.remove('modal-show');
 }
}
