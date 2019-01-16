import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../service/leave.service';
import{ Router } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model : any={};
  constructor(private LeaveService:LeaveService,
    private router:Router  ) { }

  ngOnInit() {
    localStorage.removeItem('user');
  }
  login(){
    localStorage.setItem('home', this.model.inputUsername);
   

  }
  loginUser(event){

    this.LeaveService.getUserDetails(this.model.inputUsername, this.model.inputPassword).subscribe(data => {
      alert('Your login as been success');
       localStorage.setItem('token', data.token);
      localStorage.setItem('hr_user_type', data.hr_user_type);
      this.router.navigate(['/login/home']);
      console.log(data);
    
    },
    data=>{
      alert('wrong username, password');
    
    });
   
  }

  }
    
  

