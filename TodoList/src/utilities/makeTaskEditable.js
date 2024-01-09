export const makeTaskEditable = (tasks, taskId) =>
  tasks.map((task) =>
    taskId === task.id ? { ...task, isEditable: true } : task
  );
