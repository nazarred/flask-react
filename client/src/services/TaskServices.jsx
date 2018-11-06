import client from './Client';

export function clientGetTaskListByDays() {
  const url = 'tasks/by-days/';
  return client.get(url);
}

export function clientGetTaskListByProject(id) {
  const url = `projects/${id}/tasks/`;
  return client.get(url);
}

export function clientAddTask(data) {
  const url = 'tasks/';
  return client.post(url, {
    name: data.get('name'),
    deadline: data.get('deadline'),
    priority: data.get('priority'),
    project: data.get('project'),
  });
}
