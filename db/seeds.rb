people = Person.create!([
  {fname: "James", lname: "McAdoo", email: "jmaccer@gmail.com", zipcode: 94101, creator_id: 2, profile_image: File.new("#{Rails.root}/app/assets/images/mac.jpg")},
  {fname: "Arron", lname: "Affalo", email: "aaffalo@gmail.com", zipcode: 11044, creator_id: 1, profile_image: File.new("#{Rails.root}/app/assets/images/affalo.jpg")},
  {fname: "Kendrick", lname: "Perkins", email: "kperkins@gmail.com", zipcode: 70112, creator_id: 1, profile_image: File.new("#{Rails.root}/app/assets/images/perkins.png")},
  {fname: "Paul", lname: "George", email: "pg13@gmail.com", zipcode: 46001, creator_id: 2, profile_image: File.new("#{Rails.root}/app/assets/images/pg.jpg")},
  {fname: "Andrea", lname: "Bargnani", email: "primo@gmail.com", zipcode: 11204, creator_id: 1, profile_image: File.new("#{Rails.root}/app/assets/images/primo.jpg")},
  ])

cats = Cat.create!([
  {name: "Jose", location: "cats", available: "available", sex: 0, creator_id: 1, description: "The one that's never gonna play", dob: 27.months.ago,
    profile_image: File.new("#{Rails.root}/app/assets/images/jose.jpg")},
  {name: "Emmanuel", location: "quarantine", available: "temp_unavailable", sex: 0, creator_id: 1, description: "The one that's big", dob: 37.months.ago,
    profile_image: File.new("#{Rails.root}/app/assets/images/emmanuel.gif")},
  {name: "Sam", location: "kittens", available: "available", sex: 0, creator_id: 1, description: "I am already neutered, housetrained, and up to date with shots.", dob: 5.months.ago,
    profile_image: File.new("#{Rails.root}/app/assets/images/sam.jpg")},
  {name: "Ruby", location: "cats", available: "available", sex: 1, creator_id: 1, description: "Ruby is very curious and social. She loves food and comes running each time I feed her.", dob: 14.months.ago,
    profile_image: File.new("#{Rails.root}/app/assets/images/ruby.jpg")},
  {name: "Finn", location: "cats", available: "available", sex: 0, creator_id: 2, description: "I am already neutered, housetrained, and up to date with shots.", dob: 42.month.ago,
    profile_image: File.new("#{Rails.root}/app/assets/images/finn.jpg")},
  {name: "Donnie", location: "cats", available: "available", sex: 0, creator_id: 2, description: "I've got a fat face and I know it. I've got the prettiest eyes.", dob: 52.month.ago,
    profile_image: File.new("#{Rails.root}/app/assets/images/donnie.jpg")},
  {name: "Abby", location: "foster", available: "available", sex: 1, creator_id: 1, description: "I've got a big butt", dob: 85.months.ago,
    profile_image: File.new("#{Rails.root}/app/assets/images/abby.jpg")},
  {name: "Grayson", location: "isolation", available: "unavailable", sex: 0, creator_id: 1, description: "This one looks like a wolf. He's got a long tail like a beaver", dob: 13.month.ago,
    profile_image: File.new("#{Rails.root}/app/assets/images/grayson.jpg")},
  {name: "Kathie", location: "kittens", available: "temp_unavailable", sex: 1, creator_id: 2, description: "This one's going to get whatever she wants.", dob: 3.weeks.ago,
    profile_image: File.new("#{Rails.root}/app/assets/images/kathie.jpg")},
  {name: "Arthur", location: "isolation", available: "unavailable", sex: 0, creator_id: 1, description: "The once and future king.", dob: 1500.years.ago,
    profile_image: File.new("#{Rails.root}/app/assets/images/arthur.jpg")},
  {name: "Willa", location: "adopted", available: "unavailable", creator_id: 2, sex: 1, description: "The kitten", dob: 7.weeks.ago, owner_id: 2,
    profile_image: File.new("#{Rails.root}/app/assets/images/willa.jpg")}
])

users = User.create!([
  {username: "jzengg", password_digest: "$2a$10$lWbuesmTXmSaQzvZE4cwau6mxp/6Ny/TntPKe7LKYD46f34laidYK"},
  {username: "guest", password_digest: "$2a$10$lWbuesmTXmSaQzvZE4cwau6mxp/6Ny/TntPKe7LKYD46f34laidYK"}
])
