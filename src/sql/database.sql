CREATE DATABASE new_portal;

USE new_portal;

CREATE TABLE news(
    id_news INT NOT NULL KEY AUTO_INCREMENT, 
    title VARCHAR(100),
    news TEXT,
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE news;

INSERT INTO news(title, news) VALUES('my title','content of the news');

SELECT * FROM news;