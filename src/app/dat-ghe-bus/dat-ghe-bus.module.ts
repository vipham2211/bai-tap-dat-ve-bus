import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatGheBusComponent } from './dat-ghe-bus.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';



@NgModule({
  declarations: [DatGheBusComponent, DanhSachGheComponent, ItemGheComponent],
  imports: [
    CommonModule
  ],
  exports:[DatGheBusComponent]
})
export class DatGheBusModule { }
