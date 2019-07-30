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
        user=os.environ.get('POSTGRES_USER'),
        pw=os.environ.get('POSTGRES_PASSWORD'),
        host=os.environ.get('POSTGRES_HOST'),
        db=os.environ.get('POSTGRES_DB'),
    )

    return db_uri


class BaseConfig(object):
    """
    Base config
    """
    DEBUG = True
    TESTING = False
    # cross site request forgery protection
    CSRF_ENABLED = True


class DevelopmentConfig(BaseConfig):
    TESTING = True
    SECRET_KEY = 'dev'
    SQLALCHEMY_DATABASE_URI = get_postgres_db_uri()
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class ProductionConfig(BaseConfig):
    DEBUG = False
    SECRET_KEY = os.environ.get('FLASK_SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = get_postgres_db_uri()


class TestingConfig(BaseConfig):
    TESTING = True
