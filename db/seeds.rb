# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

cats = Cat.create([
  {name: "Emmanuel", available: "available", location: "quarantine", creator_id: 1 },
  {name: "Jose", available: "unavailable", location: "kittens", creator_id: 2}
  ])
