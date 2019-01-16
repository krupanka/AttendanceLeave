import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../../../../service/leave.service';
import{ Router } from '@angular/router';
import{ ActivatedRoute} from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { leave } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-applied-leave-edit',
  templateUrl: './applied-leave-edit.component.html',
  styleUrls: ['./applied-leave-edit.component.css']
})
export class AppliedLeaveEditComponent implements OnInit {
 
 leave = 0;
 model:any={};
 public applicableId;
  constructor(private LeaveService:LeaveService,
    private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    this.applicableId=id;
    console.log(id);
    this.AdminAppliedEdit(id)
  }
  AdminAppliedEdit(id){
    this.LeaveService.getAdminAppliedEdit(id).subscribe((data)=>{
    //this.leave = data['no_of_leaves'];
    console.log(data)
    console.log(data['leaves']);
    this.leave = data['leaves']
      //console.log(this.appliededit);
    })

  }
  submitleaveapplied(){
    localStorage.setItem('admin', this.model.leaves);
  }
  submitappliedleave(event){
    this.LeaveService.PutAdminEditLeave(this.model.leaves,this.route.snapshot.paramMap.get('id')).subscribe(data => {
      alert('Your pending leave as been success');
      this.router.navigate(['/admin/adminLeave/applicableLeave']);
      console.log(data);
   
    })
  }
  

}
