interface Task {
  _id?: string;
  text: string;
  completed: boolean;
  createdAt?: Date;
}

export default Task;
