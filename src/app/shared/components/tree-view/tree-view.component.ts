import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NodeService } from 'src/app/core/services/node.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {
  @Output() updated = new EventEmitter<boolean>();
  
  private id: number = 1;

  constructor(private nodeService: NodeService) { }

  ngOnInit(): void {
  }

  onAddFolderToRoot() {
    this.nodeService.AddToRoot("folder", ''+this.id, ''+this.id);
    this.id+=1;
    this.updated.emit(true);
  }
}
