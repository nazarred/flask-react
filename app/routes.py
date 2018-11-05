from flask import request, jsonify

from app import app, db

from app.base_view import ModelListApiView, ModelCreateApiView, ModelDetailApiView
from app.models import Project, Task
from app.schemas import projects_schema, project_schema, task_schema, tasks_schema


class ProjectsListAPI(ModelListApiView):
    model = Project
    schema = projects_schema


app.add_url_rule('/api/projects/', view_func=ProjectsListAPI.as_view('projects'))


class ProjectCreateAPI(ModelCreateApiView):
    model = Project
    schema = project_schema


app.add_url_rule('/api/project/create/', view_func=ProjectCreateAPI.as_view('project-create'))


class ProjectDetailAPI(ModelDetailApiView):
    model = Project
    schema = project_schema


app.add_url_rule('/api/projects/<id>/', view_func=ProjectDetailAPI.as_view('project'))


class TasksListAPI(ModelListApiView):
    model = Task
    schema = tasks_schema


app.add_url_rule('/api/tasks/', view_func=TasksListAPI.as_view('tasks'))


class TaskCreateAPI(ModelCreateApiView):
    model = Task
    schema = task_schema

    def post(self):
        json_data = request.get_json()
        if not json_data:
            return jsonify({'message': 'No input data provided'}), 400
        obj = self.schema.load(json_data).data
        db.session.add(obj)
        db.session.commit()
        result = self.schema.dump(obj)
        return jsonify(result)


app.add_url_rule('/api/task/create/', view_func=TaskCreateAPI.as_view('task-create'))


class TaskDetailAPI(ModelDetailApiView):
    model = Task
    schema = task_schema

    def put(self, **kwargs):
        obj = self.get_object(**kwargs)
        json_data = request.get_json()
        if 'project' in json_data:
            project = Project.query.get(int(json_data['project']))
            json_data['project'] = project
        for field, value in json_data.items():
            setattr(obj, field, value)
        db.session.add(obj)
        db.session.commit()
        result = self.schema.dump(obj)
        return jsonify(result.data)


app.add_url_rule('/api/tasks/<id>/', view_func=TaskDetailAPI.as_view('task'))


class ProjectTasksApi(ModelListApiView):
    model = Task
    schema = tasks_schema

    def get_queryset(self, **kwargs):
        project_id = kwargs.get('id')
        tasks = self.model.query.filter_by(project_id=int(project_id)).all()
        return tasks


app.add_url_rule('/api/projects/<id>/tasks/', view_func=ProjectTasksApi.as_view('project-tasks'))


class TasksByDayApi(ModelListApiView):
    model = Task
    schema = tasks_schema

    def get_queryset(self, **kwargs):
        day = kwargs.get('day')
        tasks = self.model.query.filter_by(deadline=day).all()
        return tasks


app.add_url_rule('/api/tasks/day/<day>/', view_func=TasksByDayApi.as_view('tasks-by-day'))

DAYS = ['today', 'tomorrow', 'day_after_t']


class AllTasksByDaysAPI(TasksByDayApi):
    model = Task
    schema = tasks_schema

    def get(self):
        result = {}
        for day in DAYS:
            qs = self.get_queryset(day=day)
            result[day] = self.schema.dump(qs).data
        return jsonify(result)


app.add_url_rule('/api/tasks/by-days/', view_func=AllTasksByDaysAPI.as_view('all-tasks-by-days'))
