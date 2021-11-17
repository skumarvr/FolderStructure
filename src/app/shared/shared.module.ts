import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonViewComponent } from './components/json-view/json-view.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    JsonViewComponent,
    TreeViewComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    JsonViewComponent,
    TreeViewComponent
  ],
})
export class SharedModule { }
