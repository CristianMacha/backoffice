import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackofficeComponent } from './backoffice.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: 'backoffice',
    component: BackofficeComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'product', component: ProductComponent },
      { path: 'category', component: CategoryComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}
