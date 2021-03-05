import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './pages/profile/profile.component';
import { BackofficeComponent } from './backoffice.component';
import { CoreModule } from '../../core/core.module';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';

@NgModule({
  declarations: [BackofficeComponent, ProfileComponent, ProductComponent, CategoryComponent],
  imports: [CommonModule, RouterModule, CoreModule],
})
export class BackofficeModule {}
