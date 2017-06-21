CREATE TABLE IF NOT EXISTS product(
  id serial primary key,
  name varchar(255),
  description varchar(255),
  price integer,
  imageurl varchar(255)
);
