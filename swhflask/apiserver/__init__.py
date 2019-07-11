from flask import Flask


def create_app():
    app = Flask(__name__, instance_relative_config=True)

    from .config import configs
    import os
    app.config.from_object(configs[os.environ['FLASK_ENV']])

    return app
