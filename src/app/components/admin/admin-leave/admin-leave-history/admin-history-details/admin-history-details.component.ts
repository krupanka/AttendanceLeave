import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../../../../service/leave.service';
import{ Router, ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-admin-history-details',
  templateUrl: './admin-history-details.component.html',
  styleUrls: ['./admin-history-details.component.css']
})
export class AdminHistoryDetailsComponent implements OnInit {
adminhistorydetails:Object[]=[];
public admindetailsId;
employee_name:Object;
leave_type:"";
reason:"";
start_date:any;
no_of_days:any;
status:"";
  constructor(private LeaveService:LeaveService,  private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    this.admindetailsId=id;
    //console.log(id);
    this.AdminLeaveHistoryDetails(id)
  }
  AdminLeaveHistoryDetails(id){
    this.LeaveService.getAdminLeaveHistoryDetails(id).subscribe((data)=>{
      this.employee_name=data['employee']
      this.leave_type=data['leave_type']
      this.reason=data['reason']
      this.start_date=data['start_date']
      this.no_of_days=data['no_of_days']
      this.status=data['status']
     

      //console.log(data['employee']);
      console.log(data['leave_type']);
      console.log(data['reason']);
      //console.log(data['start_date']);
      console.log(data['no_of_days']);
      console.log(data['status']);
      this.adminhistorydetails=data;
    })

  }
  canceldetails(event){
    this.LeaveService.postCancelDetails(this.route.snapshot.paramMap.get('id')).subscribe(data=>{
      alert('list canceled success');
      this.router.navigate(['admin/adminLeave/adminleavehistory']);
      console.log(data);
      
    })
  }

}
