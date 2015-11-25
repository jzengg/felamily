Cat.create!([
  {name: "Jose", location: 1, available: 2, sex: 0, creator_id: 1, description: "The one that's never gonna play", dob: 27.months.ago},
  {name: "Emmanuel", location: 2, available: 1, sex: 0, creator_id: 1, description: "The one that's big", dob: 3.years.ago},
  {name: "Wilhelm", location: "kittens", available: "available", creator_id: 2, description: "The kitten", dob: 3.weeks.ago}
])
User.create!([
  {username: "jzengg", password_digest: "$2a$10$lWbuesmTXmSaQzvZE4cwau6mxp/6Ny/TntPKe7LKYD46f34laidYK"},
  {username: "guest", password_digest: "$2a$10$lWbuesmTXmSaQzvZE4cwau6mxp/6Ny/TntPKe7LKYD46f34laidYK"}
])
