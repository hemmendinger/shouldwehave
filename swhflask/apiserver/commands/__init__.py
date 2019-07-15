

def init_app(app):
    @app.cli.command('createdb')
    def createdb_cli():
        print('TODO create createdb')


    @app.cli.command('resetdb')
    def resetdb_cli():
        ans = None
        while ans not in ("yes", "no"):
            ans = input("Warning: This will reset the entire database, destroying all data. Continue? yes/no > ")
            if ans == 'yes':
                print('resets db')
                return
            elif ans == 'no':
                print('No changes.')
                return

        print('TODO create resetdb')


