import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../../../service/leave.service';
import{ Router } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-manager-history',
  templateUrl: './manager-history.component.html',
  styleUrls: ['./manager-history.component.css']
})
export class ManagerHistoryComponent implements OnInit {
  managerhistory:Object[]=[];
  query:string='';
  constructor(private LeaveService:LeaveService,
    private router:Router) { }

  ngOnInit() {
    this.ManagerLeaveHistory()
  }
  ManagerLeaveHistory(){
    this.LeaveService.getManagerLeaveHistory().subscribe((data)=>{
        
      this.managerhistory=data;
      console.log(this.managerhistory);
    })

  }
}


