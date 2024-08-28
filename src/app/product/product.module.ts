import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card'
import { FlexModule} from '@angular/flex-layout'

import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    ProductListComponent,
    FlexModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class ProductModule { }
