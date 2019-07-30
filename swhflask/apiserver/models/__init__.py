from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import JSON as PG_JSON
from flask_marshmallow import Marshmallow
from marshmallow import Schema, fields, pre_load, validate


db = SQLAlchemy()
ma = Marshmallow()


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(254), unique=True, index=True)
    screen_name = db.Column(db.String(64), index=True)


class UserSchema(ma.Schema):
    id = fields.Integer()


class Group(db.Model):
    __tablename__ = 'group'
    id = db.Column(db.Integer, primary_key=True)


class GroupMenu(db.Model):
    __tablename__ = 'group_menu'
    id = db.Column(db.Integer, primary_key=True)


class MenuItem(db.Model):
    __tablename__ = 'menu_item'
    id = db.Column(db.Integer, primary_key=True)


