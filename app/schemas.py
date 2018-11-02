from app import ma
from app.models import Task, Project


class TaskSchema(ma.ModelSchema):
    class Meta:
        model = Task


task_schema = TaskSchema()
tasks_schema = TaskSchema(many=True)


class ProjectSchema(ma.ModelSchema):
    class Meta:
        model = Project
        fields = ('id', 'name', 'colour')


project_schema = ProjectSchema()
projects_schema = ProjectSchema(many=True)
