export enum TaskStatus {
    PENDING = 'pending',
    IN_PROGRESS = 'in-progress',
    COMPLETED = 'completed'
  }
  
  export class Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
  
    constructor(id: number, title: string, description: string, status: TaskStatus) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.status = status;
    }
  }
  