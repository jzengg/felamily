# Schema Information

## cats
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
dob         | date      | not null
dob_estimate         | boolean      | not null
available         | boolean | not null
altered         | boolean | not null
declawed         | boolean | not null
good_with_cats         | boolean |
good_with_dogs         | boolean |
good_with_kids         | boolean |
declawed         | boolean | not null
special_needs         | boolean | not null
health_problems         | text |
user_id    | integer   | foreign key
owner_id    | integer   | foreign key (references people), indexed
location | string   | not null, in: ["cats", "kittens", "quarantine", "isolation", "foster"]
entry_category | string | not null, in: ["unable to cope", "abandoned", "abuse", "allergies", "biting/scratching", "died", "unable to afford", "unsuitable accommodation", "stray", "sick/injured", "separation from partner" ]
description | text   | not null, foreign key (Person), indexed
time_at_shelter    | integer   | not null
entered_shelter    | date   | not null
microchip    | integer   |
sex    | string   | not null
color    | string   | not null
coat_type    | string   | not null, in: ["short", "medium", "long"]
size    | string   | not null, in: ["small", "medium", "large"]
breed    | string   | not null
weight    | integer   | not null
litter    | string   |  default: false

## people
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
flags | string    | not null, in: ["staff", "fosterer", "volunteer", "member", "banned", "vet"]

## vaccines
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
type | string   | not null, in: ["temporary", "second", "parvovirus", "leukaemia", "first", "booster"]
required       | date    |
given | date    |
expires | date    |
manufacturer | string    | not null
comments | text    |

## tests
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
type | string   | not null, in: ["fiv", "flv", "heartworm"]
required       | date    | not null
performed | date    |
result | string    | not null, in: ["positive", "negative", "unknown"]
comments | text    |

## medications
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
profile | string   | not null
name       | string    | not null
dosage | string    | not null
start_date | date    | not null
frequency | integer    | not null
duration | integer    | not null
comments | text    |

## cat_tests
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
cat_id | integer   | not null, foreign key
test_id       | integer    | not null, foreign key

## cat_medications
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
cat_id | integer   | not null, foreign key
medication_id_id       | integer    | not null, foreign key

## cat_vaccines
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
cat_id | integer   | not null, foreign key
vaccine_id       | integer    | not null, foreign key

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
