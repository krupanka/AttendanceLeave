import { Component, OnInit, ɵConsole } from '@angular/core';
import{LeaveService} from '../../../../service/leave.service';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import{ Router } from '@angular/router';
@Component({
  selector: 'app-new-leave-req',
  templateUrl: './new-leave-req.component.html',
  styleUrls: ['./new-leave-req.component.css']
})
export class NewLeaveReqComponent implements OnInit {
applicable;
newleave:Object[]=[];//create an object
model:any={};

  //dependency injection leave Service and Router
  constructor(private LeaveService:LeaveService,  private router:Router ) { }

  ngOnInit() {
    this.getApplicable(); //intialized data to handle tasks
  }
  getApplicable(){
    this.LeaveService.getApplicable().subscribe((data)=>{// subscribe the data is used with Obserable
      this.applicable = data[0]['leaves'];
      this.newleave=data;
      console.log(this.newleave);
      

    });
  }
  submitleave(){
    localStorage.setItem('user', this.model.leave_type);
  }
  submitnewleave(event){

    this.LeaveService.PostEmployeeLeaveReq(this.model.leave_type,
       this.model.reason,this.model.start_date, this.model.no_of_days).subscribe(data => {
         alert('your leave request as been success');
        this.router.navigate(['/employee/employeeLeave/employeehistory']);//navigate another another page
      console.log(data);//display the console
     
       },
       data=>{
        alert('employee leave not consider request');//display the alert message
      
    })
  }
  

}