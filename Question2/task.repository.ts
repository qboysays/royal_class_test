import { Task, TaskStatus } from "./task.model";

export class TaskRepository {
    private tasks: Task[] = [];
    private idCounter = 0;
  
    async create(task: Task): Promise<Task> {
      task.id = ++this.idCounter;
      this.tasks.push(task);
      return task;
    }
  
    async findAll(): Promise<Task[]> {
      return this.tasks;
    }
  
    async findById(id: number): Promise<Task | undefined> {
      return this.tasks.find(task => task.id === id);
    }
  
    async update(id: number, status: TaskStatus): Promise<Task | undefined> {
      const task = await this.findById(id);
      if (task) {
        task.status = status;
        return task;
      }
      return undefined;
    }
  
    async delete(id: number): Promise<void> {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  }