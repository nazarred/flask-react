from app import ma, db

# SCHEMA MIXINS


class SaveMixin(object):

    def save(self, data):
        error, obj = None, None
        result = self.load(data)
        if not result.errors:
            obj = result.data
            db.session.add(obj)
            db.session.commit()
        else:
            error = result.errors
        return obj, error


# VIEW MIXINS:

class SchemaMixin(object):

    schema_class = None

    def get_schema(self, many=False):
        return self.schema_class(many=many)
