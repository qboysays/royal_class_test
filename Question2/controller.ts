import { Task } from "./task.model.ts";
import {TaskService } from "./task.service.ts";

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('status') status: string,
  ): Promise<Task> {
    return this.taskService.createTask(title, description, status);
  }

  @Get()
  getAllTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: number): Promise<Task> {
    return this.taskService.getTaskById(id);
  }

  @Put(':id')
  updateTask(@Param('id') id: number, @Body('status') status: string): Promise<Task> {
    return this.taskService.updateTask(id, status);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number): Promise<void> {
    return this.taskService.deleteTask(id);
  }
}