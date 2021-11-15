import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonViewComponent } from './components/json-view/json-view.component';
import { TreeVewComponent } from './components/tree-vew/tree-vew.component';

@NgModule({
  declarations: [
    JsonViewComponent,
    TreeVewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TreeVewComponent,
    JsonViewComponent
  ]
})
export class SharedModule { }
