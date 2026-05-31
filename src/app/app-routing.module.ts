import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login.page';
import { ProductsComponent } from './tab1/Products/products.page';
import { MembersComponent } from './tab1/Members/members.page';

const routes: Routes = [
  {
    path: '',
       component:LoginComponent
  },
    {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
