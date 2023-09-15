export interface Todo {
  id?:string;
  userId: string;
  title: string;
  isParent: boolean;
  parentId?: string;
  state: 'active' | 'completed'
}
