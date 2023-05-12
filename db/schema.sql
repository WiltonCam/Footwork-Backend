DROP DATABASE IF EXISTS footware_dev;
CREATE DATABASE footware_dev;

\c footware_dev;

CREATE TABLE footwares (
    id SERIAL PRIMARY KEY,
    image TEXT NOT NULL,
    name TEXT NOT NULL,
    cost DECIMAL,
    category TEXT,
    url TEXT,
    is_trending BOOLEAN
);

