import psycopg2
import data_connection as dc


@dc.connection_handler
def get_all_boards(cursor):
    cursor.execute(
            """
    SELECT * FROM boards;
    """)
    return cursor.fetchall()


@dc.connection_handler
def get_all_cards(cursor):
    cursor.execute(
            """
    SELECT * FROM cards;
    """)
    return cursor.fetchall()


@dc.connection_handler
def get_all_statuses(cursor):
    cursor.execute(
            """
    SELECT * FROM statuses;
    """)
    return cursor.fetchall()


@dc.connection_handler
def get_cards_by_board_id(cursor, board_id):
    query = """
            SELECT cards.id, cards.status_id, cards.title as card_title, statuses.title as status_name FROM cards JOIN statuses ON cards.status_id = statuses.id WHERE cards.board_id = %(board_id)s;"""
    cursor.execute(query, {"board_id":board_id})
    return cursor.fetchall()


@dc.connection_handler
def get_status_by_card_id(cursor,card_id):
    cursor.execute(""" SELECT statuses.title, statuses.id FROM statuses JOIN cards  ON statuses.id = cards.status_id WHERE cards.id = %s;""", (card_id,))
    return cursor.fetchone()


