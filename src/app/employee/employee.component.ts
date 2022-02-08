import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  constructor(private usedhere :ServiceService ) { }
   
  delete( r:any){
    this.result.splice( r,1)
  }
  result:any =[]
    ngOnInit(): void {
      this.usedhere.getData().subscribe((val)=>{
  this.result=val
      })
    }
}
