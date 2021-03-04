import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './pages/profile/profile.component';
import { BackofficeComponent } from './backoffice.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [BackofficeComponent, ProfileComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class BackofficeModule {}
