from flask import Flask


def create_app(run_config=None):
    app = Flask(__name__, instance_relative_config=True)

    from .config import configs

    if run_config is None:
        import os
        app.config.from_object(configs[os.environ.get('FLASK_ENV')])
    else:
        app.config.from_object(configs[run_config])


    from . import models
    models.init_app(app)


    from . import commands
    commands.init_app(app)

    return app




