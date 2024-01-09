export const completedTasks = (tasks, taskId) =>
  tasks.map(task =>
    task.id === taskId
      ? { ...task, isComplete: true }
      : task
  );
