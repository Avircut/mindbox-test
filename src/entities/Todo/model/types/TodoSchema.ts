export interface Todo {
  id?:string;
  userId: string;
  title: string;
  todos?: Todo[];
  isCompleted: boolean;
  todoId?: string;
}
