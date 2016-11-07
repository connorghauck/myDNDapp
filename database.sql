--create the users table--
CREATE TABLE users (
id SERIAL PRIMARY KEY,
username varchar(80) UNIQUE NOT NULL,
password varchar(120) NOT NULL
);



-- create the character template table --
CREATE TABLE characters (
id SERIAL PRIMARY KEY,
charname varchar(80),
level int,
background varchar(80),
alignment varchar(80),
exp varchar(80),
strength int,
dexterity int,
constitution int,
intelligence int,
wisdom int,
charisma int,
inspiration varchar(80),
proficiency varchar(80),
savingthrows varchar(80),
perception int,
otherproficiencies varchar(240),
armor int,
initiative int,
speed int,
currenthp int,
temphp int,
hitdice varchar(80),
deathsaves varchar(80),
attacksandspells varchar(240),
equipment varchar(240),
personality varchar(240),
ideals varchar(120),
bonds varchar(120),
flaws varchar(120),
featuresandtraits varchar(240)
);

--create classes, races, and alignments tables--
CREATE TABLE classes (
id SERIAL PRIMARY KEY,
class varchar(80) NOT NULL
);

CREATE TABLE races (
id SERIAL PRIMARY KEY,
race varchar(80) NOT NULL
);

CREATE TABLE alignments (
id SERIAL PRIMARY KEY,
alignment varchar(80) NOT NULL
);




--add the races, alignments, and classes columns to the characters table--
ALTER TABLE characters
ADD races int REFERENCES races

ALTER TABLE characters
ADD alignment int REFERENCES alignments

ALTER TABLE characters
ADD charclass int REFERENCES classes

ALTER TABLE characters
ADD acrobaticsskill int,
ADD animalhandlingskill int,
ADD arcanaskill int,
ADD athleticsskill int,
ADD deceptionskill int,
ADD historyskill int,
ADD insightskill int,
ADD intimidationskill int,
ADD investigationskill int,
ADD medicineskill int,
ADD natureskill int,
ADD perceptionskill int,
ADD performanceskill int,
ADD persuasionskill int,
ADD religionskill int,
ADD sleightofhandskill int,
ADD stealthskill int,
ADD survivalskill int
