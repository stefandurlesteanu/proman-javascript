import psycopg2
import data_connection as dc


@dc.connection_handler
def get_all_boards(cursor):
    cursor.execute(
            """
    SELECT * FROM boards;
    """)
    return cursor.fetchall()
