INSERT INTO Product (name, description, price, imageurl) VALUES($1, $2, $3, $4)
RETURNING *
;
