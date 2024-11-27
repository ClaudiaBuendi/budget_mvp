-- (Re)create the tables

-- clearing the tables if they already exist
DROP TABLE IF EXISTS Transactions;
DROP TABLE IF EXISTS Categories;
DROP TABLE IF EXISTS Users;

CREATE TABLE `Categories`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `budget` INT NOT NULL
);

CREATE TABLE `Users`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL
);

-- create transaction tables
CREATE TABLE `Transactions`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `category_id` INT UNSIGNED NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL, 
    `total` INT NOT NULL, 
    `date` DATE NOT NULL, 
    `user` VARCHAR(255) NOT NULL, 
    `user_id` INT UNSIGNED NOT NULL,
    FOREIGN KEY (`category_id`) REFERENCES `Categories`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE CASCADE
);

-- Insert initial categories
INSERT INTO categories (name, budget) VALUES ('Food', 500);
INSERT INTO categories (name, budget) VALUES ('Bills', 1000);
INSERT INTO categories (name, budget) VALUES ('Utilities', 1000);
INSERT INTO categories (name, budget) VALUES ('Transport', 1000);
INSERT INTO categories (name, budget) VALUES ('Income', 1000);
INSERT INTO categories (name, budget) VALUES ('Eating out', 1000);
INSERT INTO categories (name, budget) VALUES ('Entertainment', 1000);
INSERT INTO categories (name, budget) VALUES ('Insurance', 1000);
INSERT INTO categories (name, budget) VALUES ('Rent', 1000);

-- SELECT * FROM Transactions;
-- --get all transactions by category id
-- SELECT * FROM transaction WHERE category_id = ?; 

-- POST /transactions
-- INSERT INTO transactions (category_id, amount, description) VALUES (?, ?, ?);

-- DELETE FROM transactions WHERE id = ?;
