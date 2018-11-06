import client from './Client';

export function clientGetProjectList() {
  const url = 'projects/';
  return client.get(url);
}


export function clientAddProject(name, colour) {
  const url = 'projects/';
  return client.post(url, {
    name,
    colour,
  });
}
