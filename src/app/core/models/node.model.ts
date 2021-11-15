export type NodeModelType = 'folder' | 'file' | 'unset' | null;

export class NodeModel {
    public type: NodeModelType;
    public name?: string;
    public children?: NodeModel[];
    public id: string;

    constructor(theId: string, theType: NodeModelType, theName: string) {
        this.type = theType;
        this.name = theName;
        this.id = theId;
    }
}