import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public parentData;
  
 @Output()  public MyEvent = new EventEmitter();

  //MyEvent.emit = "Hi from Child";

  constructor() { }

  ngOnInit() {
  }

 // fun(str:string){
  fun(){
    //console.log(str);
   // this.uinput= str;
   //this.MyEvent.emit(str);

    this.MyEvent.emit("Hi From Child");
  }
 
}


