import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

//import to the interface datatypes

import { Employeedetails } from '../leave/employeedetails';
import{Login} from '../leave/login';
import{EmployeeApplicable} from '../leave/employee-applicable';
import{ EmployeeLeaveReq} from '../leave/employee-leave-req';
import { Employeehistory } from '../leave/employeehistory';
import{ AdminApplicable} from '../leave/admin-applicable';
import{AdminHistory } from '../leave/admin-history';
import{AdminCancelHistory} from '../leave/admin-cancel-history';
import{ManagerPending } from '../leave/manager-pending';
import{Managerid} from '../leave/managerid';




@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  //abstract to interface class
            employeedetails: Employeedetails[]= [];
             login: Login[]=[];
             employeeapplicable:EmployeeApplicable[]=[];
             employeeleavereq: EmployeeLeaveReq[]=[];
             employeehistory: Employeehistory[]=[];
             adminapplicable:  AdminApplicable[]=[];
             adminhistory:AdminHistory[]=[];
            admincancelhistory: AdminCancelHistory[]=[];
           managerpending :ManagerPending []=[];
           managerid:Managerid[]=[];
  
  
 constructor(private http: HttpClient) { }

//login post method()....
 getUserDetails(username, password){
                 return this.http.post<Login>("/api/employee/login/", //login database API link
              {
                 "username" : username,
                 "password" : password
             });
          }
//Employee database using GET and POST methods 
//Employee apply new leave request GET method()...
getApplicable():Observable<[EmployeeApplicable]>{
               return this.http.get<[EmployeeApplicable]>("/api/leaves/user/applicable_leave/", //employee new request Database API
                 {
                     headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token')) // send to header Authorize
                   });
             }

//Employee new leave request submit POST()...
PostEmployeeLeaveReq(leave_type,reason,start_date,no_of_days){
                 return this.http.post<EmployeeLeaveReq>("/api/leaves/user/leave_request/create/",//employee leave req database API Link
                     {
                       "leave_type" : leave_type,
                      "reason" : reason,
                     "start_date" : start_date,
                     "no_of_days" : no_of_days,
              },{
                   headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header Authorize
              });
            
            }

//Employee History display GET method()...
getEmployeehistroy():Observable<Employeehistory[]>{
                return this.http.get<Employeehistory[]>("/api/leaves/user/leave_request/list/", //employee history database API Link
              {
                 headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))//send to header
            });
       }

//Admin database using GET PUT and POST methods 
//Admin applied leave using  GET method()...
getAdminAppliedLeave():Observable<AdminApplicable[]>{
             return this.http.get<AdminApplicable[]>("/api/leaves/applicable_leave/", //Admin applied database API
           {
               headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))//send to header
           });
         }

//Admin AppliedLeave Edit using GET method()...
getAdminAppliedEdit(id):Observable<AdminApplicable[]>{
        return this.http.get<AdminApplicable[]>("/api/leaves/applicable_leave/"+id+"/", //Admin applied leave edit database API
         {
             headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))//send to header
        });
    }

//Admin AppliedLeave Edit Submit using PUT method()..
PutAdminEditLeave(leaves,id){
            return this.http.put<AdminApplicable>("/api/leaves/applicable_leave/"+id+"/",//Admin applied leave edit API Link
             {
                "leaves" : leaves,
             },{
                   headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))//send to header
               });
        }

//Admin LeaveHistory using GET method()...
getAdminLeaveHistory():Observable<AdminHistory[]>{
                return this.http.get<AdminHistory[]>("/api/leaves/admin/leave_applications/list/", //Admin history database API LInk
                 {
                     headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
                  });       
              }

//Admin LeaveHistory Details using GET method()...
getAdminLeaveHistoryDetails(id):Observable<AdminHistory[]>{
             return this.http.get<AdminHistory[]>("/api/leaves/admin/leave_applications/"+id+"/details/", //Admin history details API Link
             {
                headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))//send to header 
            });
          }

// Admin LeaveHistory Details Cancel History POST method()...
postCancelDetails(id){
              return this.http.post<AdminCancelHistory[]>("/api/leaves/admin/leave_applications/"+id+"/details/cancel/", //Admin history details cancel API
         {
            'id':id,
           },
          {
             headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))//send header token
         });
        }

//Manager  database using GET and POST methods 
//Manager pending List using GET method()...
getMangerpendingList():Observable<ManagerPending[]> {
               return this.http.get<ManagerPending[]>('/api/leaves/pending_approval/list/' ,//Manager Pending list API
               {
                   headers: new HttpHeaders().set('Authorization','Token' + localStorage.getItem('token'))
              });
          }

//manager Pending Details id  using GET method().... 
getManagerpendingdetails(id):Observable<ManagerPending[]> {
               return this.http.get< ManagerPending[]>('/api/leaves/pending_approval/list/'+id+"/", //manager pendingdetails ID API
               {
                   headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))
                }); 
            }

//Manager Pending Details Approval using POST method()..
PostApprovalList(id){
                 return this.http.post<Managerid[]>("/api/leaves/pending_approval/"+id+"/approve/", //manager pending Approval list API
            {
               'id':id,
             },
             {
                 headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))//send to header
             });
          }

//manager pending Details Reject using POST method()..
PostRejectList(id){
          return this.http.post<Managerid[]>("api/leaves/pending_approval/"+id+"/reject/", //manager pending list reject API
  {
    'id':id,
  },
  {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))//send to header
  });
}
//Manager Leave History using GET method()...
getManagerLeaveHistory():Observable<AdminHistory[]>{
       return this.http.get<AdminHistory[]>("/api/leaves/admin/leave_applications/list/",// manager leave History API
   {
     headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))
});
}
}
