import { NgModule } from '@angular/core';
import { MenuComponent } from './icons/menu/menu.component';
import { UserComponent } from './icons/user/user.component';

@NgModule({
  declarations: [MenuComponent, UserComponent],
  imports: [],
  exports: [MenuComponent, UserComponent],
})
export class SharedModule {}
