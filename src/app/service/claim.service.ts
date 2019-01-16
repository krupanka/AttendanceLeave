import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import{NewClaim} from '../claim/new-claim';
import{ClaimType} from '../claim/claim-type';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  newclaim:NewClaim[]=[];
  claimtype:ClaimType[]=[];

  constructor(private http: HttpClient) { }

  getClaimApplicable():Observable<[NewClaim]>{
    return this.http.get<[NewClaim]>("/api/expences/new_claim/", 
      {
          headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token')) 
        });
  }
  PostEmployeeNewClaim(claim_type,description,amount,date,document){
    console.log(document)
    return this.http.post<NewClaim>("/api/expences/new_claim/",
    {
      "claim_type" : claim_type,
      "description" : description,
      "amount" : amount,
      "date" : date,
      "document" : document
},{
  headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))
});
}
getNewClaimType():Observable<[ClaimType]>{
 return this.http.get<[ClaimType]>("/api/expences/claim_types/",
 {
  headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token')) 
 });
}
getClaimHistory():Observable<[NewClaim]>{
  return this.http.get<[NewClaim]>("/api/expences/new_claim/", 
    {
        headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token')) 
      });
}

getEmployeeClaimdetails(id):Observable<NewClaim[]> {
  return this.http.get<NewClaim[]>("/api/expences/new_claim/"+id+"/", 
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))
   }); 
}
EmployeeClaimEdit(id):Observable<NewClaim[]> {
  return this.http.get<NewClaim[]>("/api/expences/new_claim/"+id+"/", 
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))
   }); 
}

  }

