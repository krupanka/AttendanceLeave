import { Component, OnInit} from '@angular/core';
import{ClaimService} from '../../../../service/claim.service';
import{ Router } from '@angular/router';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';


@Component({
  selector: 'app-employee-new-claim',
  templateUrl: './employee-new-claim.component.html',
  styleUrls: ['./employee-new-claim.component.css']
})
export class EmployeeNewClaimComponent implements OnInit {
 newclaim:object[]=[];
 claimtype:object[]=[];
  model:any={};


  constructor(private ClaimService:ClaimService,  private router:Router) { }

   
  ngOnInit() {
    this.getClaimType();
    this.getclaimApplicable();
  }
  getclaimApplicable(){
    this.ClaimService.getClaimApplicable().subscribe((data)=>{
      this.newclaim=data;
      console.log(this.newclaim);
  });
}
getClaimType(){
  this.ClaimService.getNewClaimType().subscribe((data)=>{
    this.claimtype=data;
    console.log(this.claimtype);
  });
}

submitclaim(){
}
submitnewclaim(event){

  this.ClaimService.PostEmployeeNewClaim(this.model.claim_type,
     this.model.description,this.model.amount, this.model.date,this.model.document).subscribe(data => {
    console.log(data);
   
  })
}
}
