# Schema Information

## Cat
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
dob         | date      |
owner_id    | integer   | not null, foreign key (Person), indexed
location_id | integer   | not null, foreign key (references Location), indexed
description | integer   | not null, foreign key (Person), indexed
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
fname   | integer   | not null, foreign key (references users), indexed
lname       | string    | not null
description | string    |

## reminders
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
note_id     | string    | not null, foreign key (references notes), indexed
date        | datetime  | not null
type        | string    | not null
prev_id     | integer   | foreign key (references reminders), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
note_id     | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
