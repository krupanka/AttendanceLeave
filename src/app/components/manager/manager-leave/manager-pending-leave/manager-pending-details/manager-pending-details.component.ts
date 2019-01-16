import { Component, OnInit } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router';
import{ LeaveService} from '../../../../../service/leave.service';
import{ HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-manager-pending-details',
  templateUrl: './manager-pending-details.component.html',
  styleUrls: ['./manager-pending-details.component.css']
})
export class ManagerPendingDetailsComponent implements OnInit {
  details:Object[]=[];
  employee_name:object;
  leave_type : "";
  starting_date:any;
  no_of_days:any;   
  reason : "";
  public pendingId;
  
constructor(private LeaveService:LeaveService,
              private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
             let id=this.route.snapshot.paramMap.get('id');
              this.pendingId=id;
               console.log(id);
               this. Managerpendingdetails(id);
            }

Managerpendingdetails(id){
          this.LeaveService.getManagerpendingdetails(id).subscribe((data)=>{
          this.details=data;
          this.leave_type = data['leave_type']
          this.employee_name = data['employee']
          this.starting_date=data['start_date']
          this.reason=data['reason']
          this.no_of_days=data['no_of_days']
       // console.log(this.detail);

         console.log(data['employee'])
         console.log(data['leave_type']);
         console.log(data['start_date']);
         console.log(data['no_of_days']);
         console.log(data['reason']);
      })
    }
submitApproval(){}

submitApprovalList(event){
    this.LeaveService.PostApprovalList(this.route.snapshot.paramMap.get('id')).subscribe(data=>{
    alert('Approval sucess');
    this.router.navigate(['/manager/managerleave/managerpendingleave']);
    console.log(data);
  })
}
cancelReject(){}

cancelrejectList(event){
    this.LeaveService.PostRejectList(this.route.snapshot.paramMap.get('id')).subscribe(data=>{
    alert('Reject sucess');
    this.router.navigate(['/manager/managerleave/managerpendingleave']);
    console.log(data);
});
}
}



