import { Component, OnInit } from '@angular/core';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sortBy() {
    document.getElementById('myModal').classList.add('modal-show');
    document.getElementById('myModal').classList.remove('modal-close');
 }
}
