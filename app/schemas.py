import re
from marshmallow import ValidationError, validates

from app import ma

from app.models import Task, Project
from app.mixins import SaveMixin


class ProjectSchema(SaveMixin, ma.ModelSchema):

    class Meta:
        model = Project
        fields = ('id', 'name', 'colour')

    @validates('colour')
    def validates_colour(self, data):
        if not re.match(r"^#(\d|\w){5}", data):
            raise ValidationError("Wrong value for field 'colour'")


class TaskSchema(SaveMixin, ma.ModelSchema):
    DEADLINES = ['today', 'tomorrow', 'day_after_t']
    PRIORITY = ['high', 'medium', 'low', 'closed']

    class Meta:
        model = Task
        fields = ('id', 'name', 'deadline', 'priority', 'project')

    @validates('deadline')
    def validates_deadline(self, data):

        if data not in self.DEADLINES:
            raise ValidationError("Wrong value for field 'deadlines'")

    @validates('priority')
    def validates_priority(self, data):

        if data not in self.PRIORITY:
            raise ValidationError("Wrong value for field 'priority'")
