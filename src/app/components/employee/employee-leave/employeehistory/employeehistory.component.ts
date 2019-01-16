import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../../../service/leave.service';
import{ Router } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-employeehistory',
  templateUrl: './employeehistory.component.html',
  styleUrls: ['./employeehistory.component.css']
})
export class EmployeehistoryComponent implements OnInit {
query:string='';//search pipe query
  employeehistory:Object[]=[];
  constructor(private LeaveService:LeaveService,
    private router:Router ) { }

  ngOnInit() {
    this.EmployeeHistory()
  }
    EmployeeHistory(){
      this.LeaveService.getEmployeehistroy().subscribe((data)=>{//get method employee history subscribe
      this.employeehistory=data;
      })
    }
    

}
