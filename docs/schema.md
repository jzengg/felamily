# Schema Information

## Cat
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
dob         | date      |
owner_id    | integer   | not null, foreign key (references Person), indexed
location_id | integer   | not null, foreign key (references Location), indexed
entry_category | string | not null, in: ["unable to cope", "abandoned", "abuse", "allergies", "biting/scratching", "died", "unable to afford", "unsuitable accomodation", "stray", "sick/injured", "separation from partner" ]
description | text   | not null, foreign key (Person), indexed
time_at_shelter    | integer   | not null
entered_shelter    | date   | not null
code    | integer   | not null
sex    | string   | not null
color    | string   | not null
coat_type    | string   | not null, in: ["short", "medium", "long"]
size    | string   | not null, in: ["small", "medium", "large"]
breed    | string   | not null
weight    | integer   | not null
litter    | string   |  default: false

## Person
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
fname       | string   | not null
lname       | string    | not null
address | text    | not null
city | string    | not null
state | string    | not null
zipcode | string    | not null
phone_number | string    | not null
email | string    | not null
flags | string    | not null, in: ["staff", "fosterer", "volunteer", "member", "banned"]

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
