import { Component, OnInit } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router';
import{ ClaimService} from '../../../../../../service/Claim.service';
import{ HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-employee-claim-edit',
  templateUrl: './employee-claim-edit.component.html',
  styleUrls: ['./employee-claim-edit.component.css']
})
export class EmployeeClaimEditComponent implements OnInit {
  employeeclaimedit:Object[]=[];
  model:any={};
  public claimeditId;
  claim_type:"";
  description:"";
  amount:any;
  date:any;
  document:"";
  status:"";

  constructor(private ClaimService:ClaimService,
    private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    this.claimeditId=id;
     console.log(id);
     this. EmployeeClaimEdit(id);
  }
  EmployeeClaimEdit(id){
    this.ClaimService.getEmployeeClaimdetails(id).subscribe((data)=>{
    console.log(data)
      console.log(data['claim_type']);
      console.log(data['description']);
      console.log(data['amount']);
      console.log(data['date']);
      console.log(data['document']);
      console.log(data['status']);
      this.claim_type=data['claim_type']
      this.description=data['description']
      this.amount=data['date']
      this.date=data['document']
      this.status=data['status']

});
  }

}
