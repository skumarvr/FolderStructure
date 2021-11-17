import { Component } from '@angular/core';
import { NodeService } from './core/services/node.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FolderStructure';
  folderStructureJson = '';

  constructor(private nodeService: NodeService) { 
    this.folderStructureJson = this.nodeService.ToJson();
  }

  onUpdated(updated: boolean) {
    this.folderStructureJson = this.nodeService.ToJson();
  }

}
