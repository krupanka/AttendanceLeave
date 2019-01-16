import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FileSelectDirective} from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import{Routes,RouterModule}from '@angular/router';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LeaveService } from './service/leave.service' 
import { AuthGuard } from './auth.guard';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeLeaveComponent } from './components/employee/employee-leave/employee-leave.component';
import { NewLeaveReqComponent } from './components/employee/employee-leave/new-leave-req/new-leave-req.component';
import { EmployeehistoryComponent } from './components/employee/employee-leave/employeehistory/employeehistory.component';
import { EmployeedetailsComponent } from './components/employee/employee-leave/employeehistory/employeedetails/employeedetails.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLeaveComponent } from './components/admin/admin-leave/admin-leave.component';
import{ AppliedLeaveComponent } from './components/admin/admin-leave/applied-leave/applied-leave.component';
import { AdminLeaveHistoryComponent } from './components/admin/admin-leave/admin-leave-history/admin-leave-history.component';
import { AppliedLeaveEditComponent } from './components/admin/admin-leave/applied-leave/applied-leave-edit/applied-leave-edit.component';
import { AdminHistoryDetailsComponent } from './components/admin/admin-leave/admin-leave-history/admin-history-details/admin-history-details.component';
import { EmployeeClaimComponent } from './components/employee/employee-claim/employee-claim.component';
import { EmployeeNewClaimComponent } from './components/employee/employee-claim/employee-new-claim/employee-new-claim.component';
import { EmployeeClaimHistoryComponent } from './components/employee/employee-claim/employee-claim-history/employee-claim-history.component';
import { EmployeeClaimHistoryDetailsComponent } from './components/employee/employee-claim/employee-claim-history/employee-claim-history-details/employee-claim-history-details.component';
import { ManagerComponent } from './components/manager/manager.component';
import { ManagerLeaveComponent } from './components/manager/manager-leave/manager-leave.component';
import { ManagerPendingLeaveComponent } from './components/manager/manager-leave/manager-pending-leave/manager-pending-leave.component';
import { ManagerPendingDetailsComponent } from './components/manager/manager-leave/manager-pending-leave/manager-pending-details/manager-pending-details.component';
import { ManagerHistoryComponent } from './components/manager/manager-leave/manager-history/manager-history.component';
import { SearchPipe } from './pipes/search.pipe';
import { Search1Pipe } from './pipes/search1.pipe';
import { EmployeeClaimEditComponent } from './components/employee/employee-claim/employee-claim-history/employee-claim-history-details/employee-claim-edit/employee-claim-edit.component';
//Router is the path indicate routes in the place


const routes :Routes=[
  //route redirects a URL that fully matches the empty path to the route
                         {path:'',redirectTo:'/login',pathMatch:'full'},
                         {path:'login',component:LoginComponent},
                         {path:'login/home',component:HomeComponent,canActivate:[AuthGuard]},
                         {path:'employee',component: EmployeeComponent},
                         {path:'employee/employeeLeave',component:  EmployeeLeaveComponent},
                         {path:'employee/employeeLeave/newleaverequest',component:NewLeaveReqComponent },
                         {path:'employee/employeeLeave/employeehistory',component: EmployeehistoryComponent,canActivate:[AuthGuard] },
                         {path:'employee/employeeLeave/employeehistory/employeedetails',component:  EmployeedetailsComponent  },
                          {path:'admin',component:  AdminComponent },
                          {path:'admin/adminLeave',component: AdminLeaveComponent },
                          {path:'admin/adminLeave/applicableLeave',component: AppliedLeaveComponent },
                           {path:'admin/adminLeave/adminleavehistory',component: AdminLeaveHistoryComponent },{path:'employee/employeeClaim',component: EmployeeClaimComponent},
                          {path:'employee/employeeClaim/employeeNewClaim',component:  EmployeeNewClaimComponent},
                          {path:'employee/employeeClaim/employeeClaimHistory',component: EmployeeClaimHistoryComponent },
                          
                          {path:'manager',component:ManagerComponent },
                          {path:'manager/managerleave',component:  ManagerLeaveComponent },
                          {path:'manager/managerleave/managerpendingleave',component: ManagerPendingLeaveComponent},
                          {path:'manager/managerleave/managerhistory',component: ManagerHistoryComponent  },

  //The colon (:) in the path indicates that :id is a placeholder for a specific 
                         {path:'admin/adminLeave/applicableLeave/appliedleaveedit/:id',component:  AppliedLeaveEditComponent},
                         {path:'admin/adminLeave/adminleavehistory/adminhistorydetails/:id',component: AdminHistoryDetailsComponent},
                        {path:'manager/managerleave/managerpendingleave/managerpendingdetails/:id',component:  ManagerPendingDetailsComponent   },
                        {path:'employee/employeeClaim/employeeClaimHistory/employeeClaimHistoryDetails/:id',component: EmployeeClaimHistoryDetailsComponent},
                        {path :'employeeClaimHistory/employeeClaimHistoryDetails/employeeClaimEdit/:id', component: EmployeeClaimEditComponent}
                      ]


@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    LoginComponent,
    HomeComponent,
    EmployeeComponent,
    EmployeeLeaveComponent,
    NewLeaveReqComponent,
    EmployeehistoryComponent,
    EmployeedetailsComponent,
    AdminComponent,
    AdminLeaveComponent,
    AppliedLeaveComponent,
    AdminLeaveHistoryComponent,
    AppliedLeaveEditComponent,
    AdminHistoryDetailsComponent,
    EmployeeClaimComponent,
    EmployeeNewClaimComponent,
    EmployeeClaimHistoryComponent,
    EmployeeClaimHistoryDetailsComponent,
    ManagerComponent,
    ManagerLeaveComponent,
    ManagerPendingLeaveComponent,
    ManagerPendingDetailsComponent,
    ManagerHistoryComponent,
    SearchPipe,
    Search1Pipe,
    EmployeeClaimEditComponent,
  
  
  
  
   
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule 
  ],
  providers: [LeaveService],
  bootstrap: [AppComponent]
})
export class AppModule { }

