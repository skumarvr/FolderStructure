import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { JsonViewComponent } from './components/json-view/json-view.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { TreeViewNodeComponent } from './components/tree-view-node/tree-view-node.component';


@NgModule({
  declarations: [
    JsonViewComponent,
    TreeViewComponent,
    TreeViewNodeComponent
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
