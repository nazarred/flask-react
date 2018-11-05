from app import db
from flask import request, jsonify
from flask.views import MethodView
from app.mixins import SchemaMixin


class ModelApiView(SchemaMixin, MethodView):
    model = None

    def get_queryset(self, **kwargs):
        filter_data = request.args

        query = db.session.query(self.model)
        for attr, value in filter_data.items():
            try:
                query = query.filter(getattr(self.model, attr) == value)
            except AttributeError:
                return []
        return query.all()

    def get(self, **kwargs):
        schema = self.get_schema(many=True)
        qs = self.get_queryset(**kwargs)
        result = schema.dump(qs)
        return jsonify(result.data)

    def post(self):
        schema = self.get_schema()
        json_data = request.get_json()
        if not json_data:
            return jsonify({'message': 'No input data provided'}), 400
        obj, error = schema.save(json_data)
        if error:
            return jsonify(error)
        result = schema.dump(obj)
        return jsonify(result.data)


class ModelDetailApiView(SchemaMixin, MethodView):
    model = None
    slug_name = 'id'

    def get_object(self, **kwargs):
        obj_id = kwargs.get(self.slug_name)
        return self.model.query.get(int(obj_id))

    def get(self, **kwargs):
        schema = self.get_schema()
        obj = self.get_object(**kwargs)
        result = schema.dump(obj)
        return jsonify(result.data)

    def delete(self, **kwargs):
        obj = self.get_object(**kwargs)
        db.session.delete(obj)
        db.session.commit()
        return jsonify({'delete': 'ok'})

    def put(self, **kwargs):
        schema = self.get_schema()
        obj = self.get_object(**kwargs)
        obj_data = schema.dump(obj).data
        json_data = request.get_json()
        obj_data.update(json_data)
        obj, error = schema.save(obj_data)
        if error:
            return jsonify(error)
        result = schema.dump(obj)
        return jsonify(result.data)
