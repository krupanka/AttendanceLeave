import { Component, OnInit } from '@angular/core';
import{ClaimService} from '../../../../service/claim.service';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-employee-claim-history',
  templateUrl: './employee-claim-history.component.html',
  styleUrls: ['./employee-claim-history.component.css']
})
export class EmployeeClaimHistoryComponent implements OnInit {
claimhistory:object[]=[];
  constructor(private ClaimService:ClaimService,  private router:Router) { }

  ngOnInit() {
    this.getclaimHistory();
  }
  getclaimHistory(){
    this.ClaimService.getClaimHistory().subscribe((data)=>{
      this.claimhistory=data;
      console.log(this.claimhistory);
  });
}
  }
