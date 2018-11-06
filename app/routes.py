from flask import request, jsonify

from app import app, db

from app.base_view import ModelApiView, ModelDetailApiView
from app.models import Project, Task
from app.schemas import ProjectSchema, TaskSchema


class ProjectsAPI(ModelApiView):
    model = Project
    schema_class = ProjectSchema


app.add_url_rule('/api/projects/', view_func=ProjectsAPI.as_view('projects'))


class ProjectDetailAPI(ModelDetailApiView):
    model = Project
    schema_class = ProjectSchema


app.add_url_rule('/api/projects/<id>/', view_func=ProjectDetailAPI.as_view('project'))


class TasksAPI(ModelApiView):
    model = Task
    schema_class = TaskSchema


app.add_url_rule('/api/tasks/', view_func=TasksAPI.as_view('tasks'))


class TaskDetailAPI(ModelDetailApiView):
    model = Task
    schema_class = TaskSchema


app.add_url_rule('/api/tasks/<id>/', view_func=TaskDetailAPI.as_view('task'))


class ProjectTasksApi(ModelApiView):
    model = Task
    schema_class = TaskSchema

    def get_query(self, **kwargs):
        query = super(ProjectTasksApi, self).get_query(**kwargs)
        project_id = kwargs.get('id')
        query = self.filter_query_by_field(query, 'project_id', project_id)
        return query

    
app.add_url_rule('/api/projects/<id>/tasks/', view_func=ProjectTasksApi.as_view('project-tasks'))


class AllTasksByDaysAPI(ModelDetailApiView):
    model = Task
    schema_class = TaskSchema

    def get_queryset(self, day):
        tasks = self.model.query.filter_by(deadline=day).all()
        return tasks

    def get(self):
        schema = self.get_schema(many=True)
        result = {}
        for day in TaskSchema.DEADLINES:
            qs = self.get_queryset(day=day)
            result[day] = schema.dump(qs).data
        return jsonify(result)


app.add_url_rule('/api/tasks/by-days/', view_func=AllTasksByDaysAPI.as_view('all-tasks-by-days'))
