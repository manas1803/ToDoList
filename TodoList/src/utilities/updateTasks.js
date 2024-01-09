export const updateTasks = (tasks, taskId, taskName) =>
  tasks.map((task) =>
    task.id === taskId ? { ...task, taskName: taskName,isEditable:false } : task
  );
