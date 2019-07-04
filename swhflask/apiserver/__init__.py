import os

from flask import Flask


def get_db_environ_vars():
    postgres_vars = dict()

    try:
        postgres_vars['password'] = os.environ['POSTGRES_PASSWORD']

    except KeyError:
        #msg =
        #raise Exception(msg)
        pass



def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)

    db_uri = 'postgresql:' + os.environe['APISERVER_USER'] + ':' + os.environ['APISERVER_PW'] + '@localhost/apiserver'

    app.config(
        #SECRET_KEY=os.environ['APISERVER_SECRET_KEY'],
        #DATBASE=
        SQLALCHEMY_DATABASE_URI=db_uri,


    )