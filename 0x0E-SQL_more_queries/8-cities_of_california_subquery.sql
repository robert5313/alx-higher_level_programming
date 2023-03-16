-- Script that lists all the cities of Califormia found in db
SELECT id, name
FROM cities
WHERE state_id IN (
SELECT id
FROM states
WHERE name LIKE '%California%')
ORDER BY id ASC;
