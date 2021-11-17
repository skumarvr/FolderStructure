import { Injectable } from '@angular/core';
import { AcceptedNodeModelType, NodeModel, NodeModelType } from '../models/node.model'; '../models/node.model';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  private rootNode: NodeModel;
  private idMap = new Map<string, NodeModel>();
  private parentId = '0';

  constructor() { 
    this.rootNode = {
      id: this.parentId,
      type: null,
      children: [],
      parentId: this.parentId
    };
  }
  
  public ToJson(): string {
    return JSON.stringify(this.rootNode.children);
  }

  public AddToRoot(type: AcceptedNodeModelType, id: string, name: string):boolean {
    if(!this.IsValidId(id)) return false;
    this.rootNode.children?.push(new NodeModel(type, id, name, this.parentId));
    return true;
  }

  public AddAsChild(parentId: string, type: AcceptedNodeModelType, id: string, name: string):boolean {
    if(!this.IsIdExists(parentId)) return false;
    if(!this.IsValidId(id)) return false;

    if(!this.rootNode.children) return false;
    if(this.rootNode.children?.length === 0) return false;

    for( let n of this.rootNode.children) {
      if(n.id === parentId) {
        n.children?.push(new NodeModel(type, id, name, parentId));
        return true;
      }
    }
    return false;
  }

  public Remove(id: string) {
    let node = this.idMap.get(id);
    if(node) {
      this.RemoveChildIdFromMap(node);

      let parNode = this.idMap.get(node.parentId);
      if(parNode && parNode.children) {
        let index = parNode.children.findIndex(cn => cn.id === id);
        if (index > -1) {
          parNode.children.splice(index, 1);
        }
      }
    }
  }

  public RemoveChildIdFromMap(node: NodeModel) {
    if(node.children && node.children.length > 0) {
      for(let n of node.children) {
        this.RemoveChildIdFromMap(n);
      }
    }
    this.idMap.delete(node.id);
  }

  public IsIdExists(id: string): boolean {
    if(!id || id.trim().length === 0) return false;
    if(!this.idMap.has(id)) return false;
    return true;
  }

  public IsValidId(id: string): boolean {
    if(!id || id.trim().length === 0) return false;
    if(this.idMap.has(id)) return false;
    return true;
  }
}
