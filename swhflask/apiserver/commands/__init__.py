

def init_app(app):
    @app.cli.command('create-db')
    def create_db_cli():
        # Is this an acceptable solution for getting db
        from .. import db
        db.create_all()

    @app.cli.command('reset-db')
    def reset_db_cli():
        # Is this an acceptable solution for getting db
        from .. import db

        ans = None
        while ans not in ("yes", "no"):
            ans = input("Warning: This will reset the entire database, destroying all data. Continue? yes/no > ")
            if ans == 'yes':
                print('resets db')
                db.drop_all()
                return
            elif ans == 'no':
                print('No changes.')
                return

    @app.cli.command('wipe-tables')
    def wipe_tables_cli():
        pass

    @app.cli.command('add-dev-data')
    def add_dev_data_cli():
        from .. import db


