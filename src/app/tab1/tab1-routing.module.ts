import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { ProductsComponent } from './Products/products.page';
import { MembersComponent } from './Members/members.page';
import { QuotesComponent } from './quotes/quotes.page';
import { DetailsComponent } from './Details/details.page';
import { CoveragesComponent } from './Coverages/coverages.page';
import { CompareComponent } from './Comparision/compare.page';
import { SuccessfulComponent } from './Successful/successful.page';
import { QuestionsComponent } from './Questions/questions.page';
import { LoginComponent } from '../Login/login.page';
import { ActiveOneComponent } from './Active_one/activeone.page';

const routes: Routes = [
  {
    path: '',
    component: QuotesComponent,
  },
  { 
     path: 'members',
     component:MembersComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'compare',
    component: CompareComponent,
  },
  {
    path: 'quotes',
    component: QuotesComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'coverages',
    component: CoveragesComponent,
  },

  {
    path: 'questions',
    component: QuestionsComponent,
  },
  {
    path: 'successful',
    component: SuccessfulComponent,
  },
  {
    path: 'activeone',
    component: ActiveOneComponent,
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
