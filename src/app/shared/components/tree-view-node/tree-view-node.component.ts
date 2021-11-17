import { Component, Input, OnInit } from '@angular/core';
import { NodeModel } from 'src/app/core/models/node.model';

@Component({
  selector: 'app-tree-view-node',
  templateUrl: './tree-view-node.component.html',
  styleUrls: ['./tree-view-node.component.scss']
})
export class TreeViewNodeComponent implements OnInit {
  @Input()
  nodes: NodeModel[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
