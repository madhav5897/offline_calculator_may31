import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsComponent } from '../Products/products.page';
@Component({
  selector: 'app-questions',
  templateUrl: 'questions.page.html',
  styleUrls: ['questions.page.scss']
})
export class QuestionsComponent implements OnInit {



  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

  prev() {
    this.router.navigateByUrl('tabs/tab1/coverages')

  }
  next() {
    this.router.navigateByUrl('tabs/tab1/successful')

  }

}
