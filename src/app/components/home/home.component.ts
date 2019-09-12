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
    console.log('click');
    document.getElementById('myModal').classList.add('modal-show');
 }
}
