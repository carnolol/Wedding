INSERT INTO wedding_users
(first_name, last_name, profile_pic, password, email)
VALUES
($1, $2, $3, $4, $5)
returning id, first_name, last_name, profile_pic, email