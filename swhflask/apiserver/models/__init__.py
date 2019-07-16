from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import JSON as PG_JSON

db = SQLAlchemy()


def init_app(app):
    db.init_app(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
