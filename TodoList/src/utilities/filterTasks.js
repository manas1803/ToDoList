export const filterTasks = (tasks, taskId) =>
  tasks.filter((task) => task.id !== taskId);
