import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {

@Input() ghe;
@Output()  eventDatGhe = new EventEmitter(); 
  trangThaiGhe:boolean = false;


  datGhe(){
    this.trangThaiGhe = !this.trangThaiGhe;
  
    this.eventDatGhe.emit(this.trangThaiGhe);
  }
  constructor() { }

  ngOnInit() {
  }

}
