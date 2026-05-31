import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  showDetails:boolean[]=[false];
  membersData:any=[
    {'name':'Aakash Sharma',
    'mobile':'9865768776',
    'createdOn':'06-04-2023',
    'tenure':' 1 yr',
    'sumInsure':'5,00,00',
    'premium':'1499'
    },
    {'name':'Sandip Sharma',
    'mobile':'9465768776',
    'createdOn':'06-03-2023',
    'tenure':' 1 yr',
    'sumInsure':'5,00,00',
    'premium':'1199'
    },
    {'name':'Deepa Sharma',
    'mobile':'9965768776',
    'createdOn':'034-04-2023',
    'tenure':' 2 yr',
    'sumInsure':'10,00,00',
    'premium':'1399'
    },

  ];

  constructor(){

  }
  
  details(i:any){
  this.showDetails[i]=!this.showDetails[i];
  }

  renew(){

  }
  
  

}
