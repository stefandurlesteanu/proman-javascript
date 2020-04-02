from flask import Flask, render_template, url_for, jsonify
from util import json_response

import data_manager

app = Flask(__name__)


@app.route("/")
def index():
    """
    This is a one-pager which shows all the boards and cards
    """
    return render_template('index.html')


@app.route("/get-boards")
# @json_response
def get_boards():
    """
    All the boards
    """
    user = data_manager.get_all_boards()
    return jsonify(user)


@app.route("/get-cards/<int:board_id>")
# @json_response
def get_cards_for_board(board_id: int):
    """
    All cards that belongs to a board
    :param board_id: id of the parent board
    """
    user = data_manager.get_cards_by_board_id(board_id)
    return  jsonify(user)

@app.route('/get-statuses/<int:card_id>')
def get_statuses_by_card(card_id):
    status = data_manager.get_status_by_card_id(card_id)
    return  jsonify(status)


def main():
    app.run(debug=True)

    # Serving the favicon
    with app.app_context():
        app.add_url_rule('/favicon.ico', redirect_to=url_for('static', filename='favicon/favicon.ico'))


if __name__ == '__main__':
    main()
