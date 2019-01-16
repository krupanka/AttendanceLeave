import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../../../service/leave.service';
import{ Router } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-admin-leave-history',
  templateUrl: './admin-leave-history.component.html',
  styleUrls: ['./admin-leave-history.component.css']
})
export class AdminLeaveHistoryComponent implements OnInit {
  adminhistory:Object[]=[];
  query:string='';
  buttonDisabled:boolean=false;
  constructor(private LeaveService:LeaveService,
    private router:Router) { }

  ngOnInit() {
    this.AdminLeaveHistory()
  }
  AdminLeaveHistory(){
    this.LeaveService.getAdminLeaveHistory().subscribe((data)=>{  
      this.adminhistory=data;

    })

  }
}
