import { Component, OnInit } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router';
import{ ClaimService} from '../../../../../service/Claim.service';
import{ HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-employee-claim-history-details',
  templateUrl: './employee-claim-history-details.component.html',
  styleUrls: ['./employee-claim-history-details.component.css']
})
export class EmployeeClaimHistoryDetailsComponent implements OnInit {
employeeclaimdetails:Object[]=[];
claim_type: "";
description:"";
amount: any;
date: any;
document:any;
status:"";
id="";
public claimId;
  constructor(private ClaimService:ClaimService,
    private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    this.claimId=id;
     console.log(id);
     this. EmployeeClaimDetails(id);
  }
  EmployeeClaimDetails(id){
    this.ClaimService.getEmployeeClaimdetails(id).subscribe((data)=>{
      this.employeeclaimdetails=data;
      console.log(this.employeeclaimdetails);
      this.claim_type = data['claim_type']
      this.description = data['description']
      this.amount=data['amount']
      this.date=data['date']
      this.document=data['document']
      this.status=data['status']
      this.id=data['id']
 

     console.log(data['claim_type'])
     console.log(data['description']);
     console.log(data['amount']);
     console.log(data['date']);
     console.log(data['document']);
     console.log(data['status']);
  });
}
}
