import { Task, TaskStatus } from "./task.model";
import { TaskRepository } from "./task.repository";

 export class TaskService {
    constructor(private taskRepository: TaskRepository) {}
  
    async createTask(title: string, description: string, status: string): Promise<Task> {
      const validStatus = this.validateStatus(status);
      const task = new Task(0, title, description, validStatus);
      return this.taskRepository.create(task);
    }
  
    async getTasks(): Promise<Task[]> {
      return this.taskRepository.findAll();
    }
  
    async getTaskById(id: number): Promise<Task> {
      const task = await this.taskRepository.findById(id);
      if (!task) {
        throw new Error(`Task with ID ${id} not found`);
      }
      return task;
    }
  
    async updateTask(id: number, status: string): Promise<Task> {
      const validStatus = this.validateStatus(status);
      const updatedTask = await this.taskRepository.update(id, validStatus);
      if (!updatedTask) {
        throw new Error(`Task with ID ${id} not found`);
      }
      return updatedTask;
    }
  
    async deleteTask(id: number): Promise<void> {
      const task = await this.taskRepository.findById(id);
      if (!task) {
        throw new Error(`Task with ID ${id} not found`);
      }
      await this.taskRepository.delete(id);
    }
  
    private validateStatus(status: string): TaskStatus {
      const statusValue = status.toLowerCase() as TaskStatus;
      if (!Object.values(TaskStatus).includes(statusValue)) {
        throw new Error(`Invalid status. Must be one of: ${Object.values(TaskStatus).join(', ')}`);
      }
      return statusValue;
    }
  }