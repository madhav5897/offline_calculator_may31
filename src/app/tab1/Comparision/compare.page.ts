import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsComponent } from '../Products/products.page';
@Component({
  selector: 'app-compare',
  templateUrl: 'compare.page.html',
  styleUrls: ['compare.page.scss']
})
export class CompareComponent implements OnInit {

  data: any = [
    {
      "zone1": {
        "individual": {
          "1year": {
            "0-10": {
              "100000": "5291",
              "200000": "6289",
              "500000": "10677",
            },

            "10-20": {
              "100000": "5299",
              "200000": "6289",
              "500000": "10677",

            }
          },
          "2year":{
            "0-10": {
              "100000": "5291",
              "200000": "6289",
              "500000": "10677",
            },

            "10-20": {
              "100000": "5399",
              "200000": "6289",
              "500000": "10677",

            }
          },
          "3year":{
            "0-10": {
              "100000": "5491",
              "200000": "6289",
              "500000": "10677",
            },

            "10-20": {
              "100000": "5499",
              "200000": "6289",
              "500000": "10677",

            }
          }

        },

        "1A+1C": {
          "0-10": {
            "100000": "5291",
            "200000": "6289",
            "500000": "10677",
          },

          "10-20": {
            "100000": "5299",
            "200000": "6289",
            "500000": "10677",
          },
          "20-30": {
            "100000": "5592",
            "200000": "6341",
            "500000": "11577",
          }

        }
      },
    }
  ];

  subPlan: any;
  Detail: boolean = false;

  sum: number = 100000;
  tenure: any = '1year';
  premium: number = 0;
  adults: number = 0;
  childs: number = 0;
  zone: any = 'zone1';
  members: any = 'individual';

  personalAccident:boolean=false;
  internationalCoverage:boolean=false;
  OPD:boolean=false;


  constructor(private router: Router) {
    this.subPlan = ProductsComponent.subPlan;

  }

  ngOnInit(): void {
    this.set()
    this.calculate()

  }

  set() {

  }
  
  setTenure(tenure:any){
    
this.tenure=tenure.detail.value;
this.calculate()
  }

  setSI(SI:any){
    
    this.sum=SI.detail.value;
    this.calculate()
      }
    

  calculate() {
    this.premium = this.data[0][this.zone][this.members][this.tenure]['10-20'][this.sum]
  }

  prev() {
    this.router.navigateByUrl('tabs/tab1/products')

  }
  next() {
    this.router.navigateByUrl('tabs/tab1/suminsure')

  }

}
