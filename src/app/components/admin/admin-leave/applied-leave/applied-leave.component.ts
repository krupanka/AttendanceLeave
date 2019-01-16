import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../../../service/leave.service';
import{ Router } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-applied-leave',
  templateUrl: './applied-leave.component.html',
  styleUrls: ['./applied-leave.component.css']
})
export class AppliedLeaveComponent implements OnInit {
appliedLeave:Object[]=[];
query:string='';
constructor(private LeaveService:LeaveService,
              private router:Router) { }

ngOnInit() {
    this.AdminAppliedLeave()
}
AdminAppliedLeave(){
    this.LeaveService.getAdminAppliedLeave().subscribe((data)=>{
     this.appliedLeave=data;
      console.log(this.appliedLeave);
 })
}
}
