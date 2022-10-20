import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string = 'Murali Veerla';
  flow_image: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUCrYLOt03K57HDhmVqYesGG3Fht4kLzHQUw&usqp=CAU';
  flag : boolean = false;
  public num1 : number =0;
  public num2 : number = 0;
  counter : number = 0;
  f1(){
    alert('funciton working');
  }
  toggle(){
    this.flag = !this.flag;
  }
  Increment(){
    this.counter++;
  }

}
