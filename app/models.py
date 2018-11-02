from app import db


class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(140))
    colour = db.Column(db.String(8))
    tasks = db.relationship('Task', backref='project', lazy='dynamic')

    def __repr__(self):
        return self.name


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(140))
    deadline = db.Column(db.String(12))
    priority = db.Column(db.String(10))

    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))

    def __repr__(self):
        return self.name