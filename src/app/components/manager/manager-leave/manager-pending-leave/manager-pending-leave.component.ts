import { Component, OnInit } from '@angular/core';
import{ LeaveService} from '../../../../service/leave.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-manager-pending-leave',
  templateUrl: './manager-pending-leave.component.html',
  styleUrls: ['./manager-pending-leave.component.css']
})
export class ManagerPendingLeaveComponent implements OnInit {
  managerpending:Object[]=[];
  query:string='';
  constructor(private LeaveService:LeaveService,
    private router:Router) { }

  ngOnInit() {
    this.Mangerpending();
  }
Mangerpending(){
this.LeaveService.getMangerpendingList().subscribe((data)=>{
  this.managerpending = data;  
  console.log(this.managerpending);
})
}

 
}
 
