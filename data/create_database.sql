DROP TABLE IF EXISTS boards;
DROP TABLE IF EXISTS cards;
DROP TABLE IF EXISTS statuses;


CREATE TABLE boards (
    id       SERIAL PRIMARY KEY,
    title    VARCHAR(200) NOT NULL
);


CREATE TABLE cards (
    id   SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(30) NOT NULL,
    board_id INTEGER NOT NULL,
    status_id INTEGER NOT NULL DEFAULT 1,
    rank INTEGER NOT NULL
);


CREATE TABLE statuses (
    id        SERIAL PRIMARY KEY NOT NULL,
    title      VARCHAR(200)        NOT NULL
);

--
-- ALTER TABLE ONLY cards
--     ADD CONSTRAINT fk_cards_board_id FOREIGN KEY (board_id) REFERENCES boards(id),
--     ADD CONSTRAINT fk_cards_status_id FOREIGN KEY (status_id) REFERENCES statuses(id);


INSERT INTO boards (title) VALUES ('Board 1');
INSERT INTO boards (title) VALUES ('Board 2');
INSERT INTO boards (title) VALUES ('Board 3');


INSERT INTO statuses (title) VALUES ('New');
INSERT INTO statuses (title) VALUES ('In progress');
INSERT INTO statuses (title) VALUES ('Testing');
INSERT INTO statuses (title) VALUES ('Done');


INSERT INTO cards (board_id, title, rank) VALUES (1, 'new card 1', 0);
INSERT INTO cards (board_id, title, rank) VALUES (1, 'new card 2', 0);
INSERT INTO cards (board_id, title, rank) VALUES (1, 'in progress card', 0);
INSERT INTO cards (board_id, title, rank) VALUES (1, 'planning', 0);
INSERT INTO cards (board_id, title, rank) VALUES (1, 'done card 1', 0);
INSERT INTO cards (board_id, title, rank) VALUES (1, 'done card 1', 1);
INSERT INTO cards (board_id, title, rank) VALUES (2, 'new card 1', 0);
INSERT INTO cards (board_id, title, rank) VALUES (2, 'new card 2', 1);
INSERT INTO cards (board_id, title, rank) VALUES (2, 'planning', 0);
INSERT INTO cards (board_id, title, rank) VALUES (2, 'done card 1', 0);
INSERT INTO cards (board_id, title, rank) VALUES (2, 'done card 1', 1);


-- ALTER TABLE cards
--     ADD CONSTRAINT fk_cards_board_id FOREIGN KEY (board_id) REFERENCES boards(id) ON DELETE CASCADE,
--     ADD CONSTRAINT fk_cards_status_id FOREIGN KEY (status_id) REFERENCES statuses(id) ON DELETE CASCADE,
--     DROP CONSTRAINT fk_cards_board_id,
--     DROP CONSTRAINT fk_cards_status_id;
