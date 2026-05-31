import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InfoService } from 'src/app/services/activehealth/info.service';
import { Validations } from 'src/app/services/validation';
import { QuoteService } from 'src/app/services/activehealth/quote.service';
import { StorageService } from 'src/app/services/storage.service';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-members',
  templateUrl: 'members.page.html',
  styleUrls: ['members.page.scss']
})
export class MembersComponent {

  show: boolean = false;
  public form: FormGroup;

  sons: any[] = [];
  daughters: any[] = [];
  soncounter: number = 0;
  daughtercounter: number = 0;

  selfselected: boolean = false;
  spouseselected: boolean = false;
  fatherselected: boolean = false;
  motherselected: boolean = false;
  fatherinlawselected: boolean = false;
  motherinlawselected: boolean = false;
  brotherselected: boolean = false;
  sisterselected: boolean = false;

  quoteobject: any;

  quotearray: any[] = [];
  test:any;

  constructor(private router: Router,private componentService:ComponentService, private quoteService: QuoteService, private formBuilder: FormBuilder, private infoService: InfoService, private storageService: StorageService) {
   let email=localStorage.getItem('email');
   if(email==null){
    email=''
   }
    this.form = this.formBuilder.group({
      firstname: [localStorage.getItem('firstname'), [Validators.required]],
      middlename: [localStorage.getItem('middlename')],
      lastname: [localStorage.getItem('lastname'), [Validators.required]],
      mobile: [localStorage.getItem('mobile'), [Validators.required, Validators.pattern(Validations.mobilePattern)]],
      email: [email],
      pincode: [localStorage.getItem('pincode'), [Validators.required, Validators.pattern(Validations.pincode), Validators.minLength(6), Validators.maxLength(6)]],
      selfage: [''],
      spouseage: [''],
      fatherage: [''],
      motherselfage: [''],
      brotherselfage: [''],
      sisterselfage: [''],
      fatherinlawselfage: [''],
      motherinlawage: [''],

    });
     this.quoteobject=this.quoteService.quoteObject;
     console.log(this.quoteobject)
    // this.form.value.pincode=localStorage.getItem('pincode')
  }

  setFirstName(){
localStorage.setItem('firstname',this.form.value.firstname)
  }
  setMiddleName(){
    localStorage.setItem('middlename',this.form.value.middlename)
  }
  setLastName(){
    localStorage.setItem('lastname',this.form.value.lastname)
  }
  setMobile(){
    localStorage.setItem('mobile',this.form.value.mobile)
  }
  setEmail(){
    localStorage.setItem('email',this.form.value.email) 
  }


  prev() {
    this.router.navigateByUrl('tabs/tab1/coverages')
  }
  next() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }

    localStorage.setItem('firstname','')
    localStorage.setItem('middlename','')
    localStorage.setItem('lastname','')
    localStorage.setItem('email','')
    localStorage.setItem('mobile','')

    // this.quotearray=localStorage.getItem('quotearray'
    
    this.quoteobject.name = this.form.value.firstname + ' ' + this.form.value.lastname;
    this.quoteobject.mobile = this.form.value.mobile;
    // this.quoteobject.sum=localStorage.getItem('sum')

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    this.quoteobject.date = currentDate;

    let p:[]=JSON.parse (localStorage.getItem('quotearray'));
    console.log(p)

    if(p!==null){
      this.quotearray=p
    }
    let l: any = 0;
    let arr=this.quotearray.length
    l = arr;
    console.log('arraylength  >> ' +l)
    this.quoteobject.id = Date.now();
    
    if(this.quotearray!==null){
      this.quotearray[l] = this.quoteobject;
      console.log(this.quotearray)
    }else{
      this.quotearray= this.quoteobject;
    }
    this.quoteService.quoteObject = this.quoteobject;

    // let arr: any[] = [2, 3, 4]
    this.storageService.set('array', this.quotearray)
    this.test = this.storageService.get('array');
    this.quoteService.quoteArray = this.quotearray;
    localStorage.setItem('quotearray', JSON.stringify(this.quotearray))
    // this.componentService.isquoteschanged.next(true);
    // localStorage.setItem('quoteid','Empty')
    this.router.navigateByUrl('tabs/tab1/successful')
  }
}
