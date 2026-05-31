import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuoteService } from 'src/app/services/activehealth/quote.service';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-quotes',
  templateUrl: 'quotes.page.html',
  styleUrls: ['quotes.page.scss']
})
export class QuotesComponent {
  quoteArray: any = [];
  showarray:any=false;
  show: boolean = false;
  arraylength: number = 0;
  quotenumber: number = 0;

  constructor(private router: Router, private componentService:ComponentService, private quoteService: QuoteService) {
    this.getquotes();
    localStorage.setItem('quoteid','Empty')
    this.componentService.isquoteschanged.subscribe((change:boolean)=>{
      if(change){
        this.getquotes()
      }
    })
  }

  showQuote(quoteid:any){
    
    localStorage.setItem('quoteid',quoteid);
    this.router.navigateByUrl('tabs/tab1/successful');
    this.componentService.quoteselectedchanged.next(true);
  }

  getquotes(){
    let arr=localStorage.getItem('quotearray')
    
    if(arr!==null && arr!=='null' ){
      
      this.quoteArray = JSON.parse(localStorage.getItem('quotearray'));
      this.quotenumber = this.quoteArray.length;
      this.showarray=this.quoteArray.reverse();
    }
    if (this.quotenumber==0){
      this.show=true;
    }
    else{
      this.show=false;
    }
    console.log('quotarray >> ' + this.quoteArray);
  }

  deleteall(){
    this.quoteArray=null;
    this.showarray=null;
    this.quotenumber=0;
    this.show=true;
    localStorage.setItem('quotearray', JSON.stringify(this.quoteArray));
  }

  delete(i: any) {
    console.log('deleted >>' +  i);
    this.quoteArray = this.quoteArray.filter(function (q: any) {
      console.log(q.id)
      return q.id !== i;
    })
    console.log(this.quoteArray);
    this.showarray=this.quoteArray;
    this.quotenumber=this.quoteArray.length;
    if(this.quotenumber==0){
      this.show=true;
    }
    localStorage.setItem('quotearray', JSON.stringify(this.quoteArray));
  }

  menu() {
    this.router.navigateByUrl('tabs/tab3')
  }
  create() {
    this.router.navigateByUrl('tabs/tab1/products')
  }

}
