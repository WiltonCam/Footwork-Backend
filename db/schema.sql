DROP DATABASE IF EXISTS footware_dev;
CREATE DATABASE footware_dev;

\c footware_dev;

CREATE TABLE footware (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    cost DECIMAL,
    category TEXT,
    url TEXT,
    is_Trending BOOLEAN
);