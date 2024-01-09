export const makeTaskNonEditable = (tasks, taskId) =>
  tasks.map((task) =>
    taskId === task.id ? { ...task, isEditable: false } : task
  );
