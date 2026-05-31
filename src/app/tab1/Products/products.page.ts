import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InfoService } from 'src/app/services/activehealth/info.service';
import { ActiveoneService } from 'src/app/services/Active_One/activeone.service';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-products',
  templateUrl: 'products.page.html',
  styleUrls: ['products.page.scss']
})
export class ProductsComponent {

  static subPlan: any;
  subPlan: any;
  Detail: boolean = false;

  sum: number = 100000;
  tenure: any = '1year';
  premium: number = 0;
  adults: number = 0;
  childs: number = 0;
  zone: any = 'zone1';
  members: any = 'individual';

  personalAccident: boolean = false;
  internationalCoverage: boolean = false;
  OPD: boolean = false;


  path: any;
  activehealth: boolean = false;
  ProductsData = [{ 'name': 'Activ Health' }, { 'name': 'Activ Top' }, { 'name': 'Personal Accident' }]

  constructor(private router: Router, private componenService:ComponentService , public form: FormBuilder, private infoService: InfoService, private activeoneService: ActiveoneService) {

  }

  ngOnInIt() {
  }


  prev() {
    this.activehealth = !this.activehealth;
    this.router.navigateByUrl('tabs/tab1/quotes')
  }

  next() {
    this.router.navigateByUrl('tabs/tab1/coverages')
  }

  selectPlatinumEnhanced() {
    this.infoService.platinumPlan = 'platinumEnhanced';
    localStorage.setItem('planname', this.infoService.platinumPlan);
     this.componenService.isChanged.next(true)
  }
  selectPlatinumEssential() {
    this.infoService.platinumPlan = 'platinumEssential';
    localStorage.setItem('planname', this.infoService.platinumPlan)
    this.componenService.isChanged.next(true)

  }
  selectPlatinumPremiere() {
    this.infoService.platinumPlan = 'platinumPremiere';
    localStorage.setItem('planname', this.infoService.platinumPlan);
    this.componenService.isChanged.next(true)

  }

  selectActiveOneNxt() {
    this.activeoneService.info.plan = 'NXT';
    localStorage.setItem('planname', this.activeoneService.info.plan)
    this.componenService.isChanged.next(true)

    this.router.navigateByUrl('tabs/tab1/activeone')
  }
  selectActiveOneVytl() {

    this.activeoneService.info.plan = 'VYTL';
    localStorage.setItem('planname', this.activeoneService.info.plan)
    this.componenService.isChanged.next(true)

    this.router.navigateByUrl('tabs/tab1/activeone')
  }
  selectActiveOneMass() {

    this.activeoneService.info.plan = 'MASS';
    localStorage.setItem('planname', this.activeoneService.info.plan)
    this.componenService.isChanged.next(true)

    this.router.navigateByUrl('tabs/tab1/activeone')
  }





  select(path: any) {
    this.path = path;

  }

  selectSubPlan(plan: any) {

    ProductsComponent.subPlan = plan;
    this.activehealth = !this.activehealth;


    switch (this.path) {
      case 0:
        this.router.navigateByUrl('tabs/tab1/activehealth')
        break;

      case 1:
        this.router.navigateByUrl('tabs/tab1/activeone')
        break;

      case 2:
        this.router.navigateByUrl('tabs/tab1/personalaccident')
        break;

    }


  }


  showSubPlans() {
    this.activehealth = !this.activehealth;
  }

  setTenure(tenure: any) {

    this.tenure = tenure.detail.value;
    this.calculate()
  }

  setSI(SI: any) {

    this.sum = SI.detail.value;
    this.calculate()
  }


  calculate() {
    // this.premium = this.data[0][this.zone][this.members][this.tenure]['10-20'][this.sum]
  }

  compare() {
    this.router.navigateByUrl('tabs/tab1/compare')

  }
  details() {
    this.router.navigateByUrl('tabs/tab1/details')

  }
  coverages() {
    this.router.navigateByUrl('tabs/tab1/coverages')

  }





}
