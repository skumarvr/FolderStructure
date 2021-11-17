export type NodeModelType = 'folder' | 'file' | 'unset' | null;
export type AcceptedNodeModelType = 'folder' | 'file';

export class NodeModel {
    public type: NodeModelType;
    public name?: string;
    public children?: NodeModel[];
    public id: string;
    public parentId: string;

    constructor(type: AcceptedNodeModelType, id: string, name: string, parentId: string) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.children = [];
        this.parentId = parentId;
    }
}