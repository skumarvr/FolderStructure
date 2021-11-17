import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NodeModel } from 'src/app/core/models/node.model';
import { NodeService } from 'src/app/core/services/node.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {
  @Output() updated = new EventEmitter<boolean>();
  
  private id: number = 1;
  public rootNodes: NodeModel[] = [];

  constructor(private nodeService: NodeService) {
    if(nodeService.rootNodes) {
      this.rootNodes = nodeService.rootNodes;
    }
  }

  ngOnInit(): void {
  }

  onAddFolderToRoot() {
    this.nodeService.AddToRoot("folder", ''+this.id, ''+this.id);
    this.id+=1;
    this.updated.emit(true);
  }
}
