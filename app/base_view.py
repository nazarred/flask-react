from app import db
from flask import request, jsonify
from flask.views import MethodView
from app.mixins import SchemaMixin


class ModelApiView(SchemaMixin, MethodView):
    model = None

    def get_query(self, **kwargs):
        # kwargs use when you need override this method
        return db.session.query(self.model)

    def filter_query_by_field(self, query, field, value):
        return query.filter(getattr(self.model, field) == value)

    def get_filtered_query(self, **kwargs):
        query = self.get_query(**kwargs)

        filter_data = request.args
        for field, value in filter_data.items():
            try:
                query = self.filter_query_by_field(query, field, value)
            except AttributeError:
                return []
        return query.all()

    def get(self, **kwargs):
        schema = self.get_schema(many=True)
        qs = self.get_filtered_query(**kwargs)
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
