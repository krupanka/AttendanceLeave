import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../../../../service/leave.service';
import{ Router } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
 
  employeedetails:Object[]=[];
  constructor(private LeaveService:LeaveService,
    private router:Router ) { }

  ngOnInit() {
   
  }
}
