from app import db
from flask import request, jsonify
from flask.views import MethodView


class ModelListApiView(MethodView):
    model = None
    schema = None

    def get_queryset(self, **kwargs):
        return self.model.query.all()

    def get(self, **kwargs):
        qs = self.get_queryset(**kwargs)
        result = self.schema.dump(qs)
        return jsonify(result.data)


class ModelCreateApiView(MethodView):
    model = None
    schema = None

    def post(self):
        json_data = request.get_json()
        if not json_data:
            return jsonify({'message': 'No input data provided'}), 400
        obj = self.schema.load(json_data).data
        db.session.add(obj)
        db.session.commit()
        result = self.schema.dump(obj)
        return jsonify(result)


class ModelDetailApiView(MethodView):
    model = None
    schema = None
    slug_name = 'id'

    def get_object(self, **kwargs):
        obj_id = kwargs.get(self.slug_name)
        return self.model.query.get(int(obj_id))

    def get(self, **kwargs):
        obj = self.get_object(**kwargs)
        result = self.schema.dump(obj)
        return jsonify(result.data)

    def delete(self, **kwargs):
        obj = self.get_object(**kwargs)
        db.session.delete(obj)
        db.session.commit()
        return jsonify({'delete': 'ok'})

    def put(self, **kwargs):
        obj = self.get_object(**kwargs)
        for field, value in request.get_json().items():
            setattr(obj, field, value)
        db.session.add(obj)
        db.session.commit()
        result = self.schema.dump(obj)
        return jsonify(result.data)
