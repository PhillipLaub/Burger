-- Still in the db folder, create a seeds.sql file. In this file, write insert queries to populate the burgers table with at least three entries.

USE vcl8p17xx1g1z8ht;

INSERT INTO burgers (burger_name, devoured)
VALUES 
("McDouble", 0),
("Double Double", 0),
("Whiskey River BBQ Burger", 1),
("Triple Del", 0);

