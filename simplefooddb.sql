create database simplefooddb;

use simplefooddb;

CREATE TABLE users (
    userid INTEGER(10) AUTO_INCREMENT NOT NULL,
    username VARCHAR(10),
    email VARCHAR(100),
    pass VARCHAR(30),
    PRIMARY KEY (userid)
);

CREATE TABLE ingredient (
    foodid  INTEGER(11) AUTO_INCREMENT NOT NULL,
    foodname VARCHAR(50),
    foodimg VARCHAR(255),
    PRIMARY KEY (foodid)
);

CREATE TABLE useringredient (
    pantryid  INTEGER(11) AUTO_INCREMENT NOT NULL,
    userid INTEGER(11) NOT NULL,
    foodid INTEGER(11) NOT NULL,
    PRIMARY KEY (pantryid)
    /*FOREIGN KEY (userid) REFERENCES users(userid), */
    /*FOREIGN KEY (foodid) REFERENCES ingredient(foodid) 

    Jesse suggested to use Foreign key cascading. So if a record in a parent table is
    deleted, then corresponding child records will be deleted as well. 
    A source: https://www.techonthenet.com/oracle/foreign_keys/foreign_delete.php*/
);

CREATE TABLE recipe (
    recipeid  INTEGER(11) AUTO_INCREMENT NOT NULL,
    recipename VARCHAR(50) NOT NULL,
    recipeurl VARCHAR(255),
    recipedesc VARCHAR(255),
    PRIMARY KEY (recipeid)
);

CREATE TABLE userrecipe (
    userrecipeid  INTEGER(11) AUTO_INCREMENT NOT NULL,
    userid INTEGER(11) NOT NULL,
    recipeid INTEGER(11) NOT NULL,
    PRIMARY KEY (userrecipeid)
    /*FOREIGN KEY (userid) REFERENCES users(userid), */
    /*FOREIGN KEY (foodid) REFERENCES ingredient(foodid) */
);

/*Hard-coding values for all tables for testing purposes*/

INSERT INTO recipe (recipeid, recipename, recipeurl, recipedesc) VALUES (823536, "Carrot-potato-soup", "https://spoonacular.com/Carrot-potato-soup,-healthy-Indian-soup-823536", "This is a classic healthy carrot potato soup.");
INSERT INTO recipe (recipeid, recipename, recipeurl, recipedesc) VALUES (823571, "Grammy's-coconut-pie", "https://spoonacular.com/recipes/grammy%E2%80%99s-coconut-pie-823571", "This is Grammy's special recipe for her coconut pie");
INSERT INTO recipe (recipeid, recipename, recipeurl, recipedesc) VALUES (823572, "Coconut-mochi", "https://spoonacular.com/recipes/coconut-mochi-823572", "If you like Coconut, then you will love this Asian inspired mochi");
INSERT INTO recipe (recipeid, recipename, recipeurl, recipedesc) VALUES (823569, "Pumpkin-chai-crumble-muffins", "https://spoonacular.com/recipes/pumpkin-chai-crumble-muffins-823569", "Welcome to fall by trying these pumpkin chai muffins!");
INSERT INTO recipe (recipeid, recipename, recipeurl, recipedesc) VALUES (823562, "peanut-butter-jelly-torte", "https://spoonacular.com/recipes/peanut-butter-jelly-torte-823562", "This is our spin on peanut butter and jelly!");


INSERT INTO users (username, email, pass) VALUES ("amreetac", "a@abc.com", "123");
INSERT INTO users (username, email, pass) VALUES ("stefc", "st@abc.com", "122");
INSERT INTO users (username, email, pass) VALUES ("sudac", "su@abc.com", "121");
INSERT INTO users (username, email, pass) VALUES ("johnd", "j@abc.com", "1213");
INSERT INTO users (username, email, pass) VALUES ("padmak", "p@abc.com", "1213");

INSERT INTO ingredient (foodname, foodimg) VALUES ("apple", "https://tse1.mm.bing.net/th?id=OIP.Mac10efbc9d45571d4532d99c8f05da1aH0&pid=15.1&P=0&w=164&h=151");
INSERT INTO ingredient (foodname, foodimg) VALUES ("orange", "https://tse2.mm.bing.net/th?id=OIP.M71c5c81c3b6a77450a9e802a3fa297baH0&pid=15.1&P=0&w=300&h=300");
INSERT INTO ingredient (foodname, foodimg) VALUES ("pear", "https://c1.staticflickr.com/7/6199/6127957629_2b59d0cbf1_n.jpg");
INSERT INTO ingredient (foodname, foodimg) VALUES ("grape", "https://c1.staticflickr.com/4/3928/15510979361_f11b92d0d5_n.jpg");
INSERT INTO ingredient (foodname, foodimg) VALUES ("lemon", "https://tse1.mm.bing.net/th?id=OIP.M1c5b46bd1bfd0ae0b6d51c99b2293585H0&pid=15.1&P=0&w=214&h=155");


INSERT INTO useringredient (userid, foodid) VALUES (1, 1); /* Amreetac has an apple */
INSERT INTO useringredient (userid, foodid) VALUES (2, 5); /* Stefc has a lemon */
INSERT INTO useringredient (userid, foodid) VALUES (5, 1); /* Padmak has an apple */
INSERT INTO useringredient (userid, foodid) VALUES (3, 2); /* Sudac has an orange */
INSERT INTO useringredient (userid, foodid) VALUES (4, 1); /* Johnd has an apple */
INSERT INTO useringredient (userid, foodid) VALUES (1, 3); /* Amreetac has an apple */
INSERT INTO useringredient (userid, foodid) VALUES (1, 5); /* Stefc has a lemon */
INSERT INTO useringredient (userid, foodid) VALUES (2, 4); /* Padmak has an apple */
INSERT INTO useringredient (userid, foodid) VALUES (2, 2); /* Sudac has an orange */
INSERT INTO useringredient (userid, foodid) VALUES (2, 1); /* Johnd has an apple */

INSERT INTO userrecipe (userid, recipeid) VALUES (1, 823536); /* Amreetac has a carrot potato soup */
INSERT INTO userrecipe (userid, recipeid) VALUES (2, 823571); /* Stefc has a grammys coconut pie */
INSERT INTO userrecipe (userid, recipeid) VALUES (4, 823536); /* Johnd has a carrot potato soup */
INSERT INTO userrecipe (userid, recipeid) VALUES (5, 823569); /* Padmak has a pumpkin chai */
INSERT INTO userrecipe (userid, recipeid) VALUES (3, 823572); /* Sudac has a coconut mochi */

SELECT u.userid, u.username, ing.*
FROM users AS u, useringredient AS ui, ingredient AS ing
WHERE u.userid = ui.userid AND ui.foodid = ing.foodid
ORDER BY u.userid

SELECT u.userid, r.*
FROM users AS u, userrecipe AS ur, recipe AS r
WHERE u.userid = ur.userid AND ur.recipeid = r.recipeid
