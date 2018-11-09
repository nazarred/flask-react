import client from './Client';

export function clientGetProjectList() {
  const url = 'projects/';
  return client.get(url);
}


export function clientAddProject(data) {
  const url = 'projects/';
  return client.post(url, {
    name: data.get('name'),
    colour: data.get('colour'),
  });
}


export function clientUpdateProject(data, id) {
  const url = `projects/${id}/`;
  return client.put(url, {
    name: data.get('name'),
    colour: data.get('colour'),
  });
}

export function clientDeleteProject(id) {
  const url = `tasks/${id}/`;
  return client.delete(url);
}
