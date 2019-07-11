import os


configs = {
    "development": "apiserver.config.DevelopmentConfig",
    "testing": "apiserver.config.TestingConfig",
    "production": "apiserver.config.ProductionConfig"
}


def get_postgres_db_uri():
    """
    Return DB URI for use with Flask+SQLALCHEMY
    :return:
    """

    db_uri = 'postgresql+psycopg2://{user}:{pw}@{host}/{db}'.format(
        user=os.environ['POSTGRES_USER'],
        pw=os.environ['POSTGRES_PASSWORD'],
        host=os.environ['POSTGRES_HOST'],
        db=os.environ['POSTGRES_DB'],
    )

    return db_uri


class BaseConfig(object):
    """
    Base config
    """
    DEBUG = True
    TESTING = False


class DevelopmentConfig(BaseConfig):
    TESTING = True
    SECRET_KEY = 'dev'
    SQLALCHEMY_DATABASE_URI = get_postgres_db_uri()


class ProductionConfig(BaseConfig):
    DEBUG = False
    SECRET_KEY = os.environ['FLASK_SECRET_KEY']
    SQLALCHEMY_DATABASE_URI = get_postgres_db_uri()


class TestingConfig(BaseConfig):
    TESTING = True
