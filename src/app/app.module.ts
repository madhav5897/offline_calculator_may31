import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsPageModule } from './tabs/tabs.module'
import { ProductsComponent } from './tab1/Products/products.page';
import { MembersComponent } from './tab1/Members/members.page';
import { IonicStorageModule } from '@ionic/storage-angular';
import { CompareComponent } from './tab1/Comparision/compare.page';
import { QuotesComponent } from './tab1/quotes/quotes.page';
import { DetailsComponent } from './tab1/Details/details.page';
import { CoveragesComponent } from './tab1/Coverages/coverages.page';
import { SuccessfulComponent } from './tab1/Successful/successful.page';
import { QuestionsComponent } from './tab1/Questions/questions.page';
import { ActiveOneComponent } from './tab1/Active_one/activeone.page';
// import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],

  declarations: [AppComponent, LoginComponent, ProductsComponent, MembersComponent, CompareComponent, QuotesComponent, DetailsComponent, CoveragesComponent, SuccessfulComponent, QuestionsComponent
    , ActiveOneComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,
     IonicModule.forRoot(),
      AppRoutingModule, TabsPageModule, IonicStorageModule.forRoot()],
  providers: [
    // PDFGenerator,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
