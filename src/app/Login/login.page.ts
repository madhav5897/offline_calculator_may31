import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule,FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginComponent {
showloader:boolean=true;
  public loginForm:FormGroup;
  otp:boolean=false;
  IMDCode:any='';

  constructor(private router:Router, public form:FormBuilder) {
    this.loginForm = this.form.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
this.time();
  }

  time(){
    setTimeout(() => {
      this.showloader=false;
      console.log(this.showloader)
    }, 2000);

  }



Login(){
if(this.loginForm.value.username=='a' && this.loginForm.value.password=='a'){
  this.loginForm.reset()
   this.router.navigateByUrl('tabs/tab1/quotes');
}

}

proceed(){
  this.otp=false;
  this.router.navigateByUrl('tabs/tab1/quotes');
this.IMDCode='';
}

}
