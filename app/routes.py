from flask_restful import Resource, fields, marshal_with
from werkzeug.urls import url_parse

from app import app, api
from flask import render_template, flash, redirect, url_for, request
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, Post



class ProjectList(Resource):

    @marshal_with(project_fields)
    def get(self, user_id):
        user = Post.query.get(user_id)
        return user

    # def delete(self, todo_id):
    #     abort_if_todo_doesnt_exist(todo_id)
    #     del TODOS[todo_id]
    #     return '', 204
    #
    # def put(self, todo_id):
    #     args = parser.parse_args()
    #     task = {'task': args['task']}
    #     TODOS[todo_id] = task
    #     return task, 201


api.add_resource(ProjectList, '/users/<user_id>')