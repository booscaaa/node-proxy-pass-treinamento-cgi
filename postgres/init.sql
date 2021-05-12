CREATE TABLE people (
    id serial primary key not null,
    name varchar(255) not null
);

INSERT INTO people(name) values ('Vinicius');