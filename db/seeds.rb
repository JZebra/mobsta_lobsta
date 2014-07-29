# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
SF_ZIPS = %w(94121 94120 94115 94130 94103 94104 94105 94106 94132 94044 94133 94003 94965)

Fabricator(:user) do
  email { Faker::Internet.email }
  name { Faker::Name.first_name + ' ' + Faker::Name.last_name }
  password { "testtest" }
  zipcode { SF_ZIPS.sample }
  phone1 { Faker::Number.number(10) }
end

Fabricator(:review) do
  cat_id { rand(0..7) }
  body { Faker::Lorem.paragraph(2) }
  author_id { rand(0..20) }
  lobster_id { rand(0..20) }
  score { rand(3..5) }
end

Fabricator(:skill) do
  cat_id { rand(0..7) }
  pitch { Faker::Lorem.sentence }
  user_id { rand(0..20) }
  rate { rand(15..100) }
end

# It would be cool to have movie/ famous quotes in the description
Category.create({ title: "Fake Credentials", 
  description: "Creating fake drivers licenses, diplomas, and passports."})
Category.create({ title: "Arson", 
  description: "Some people just want to watch the world burn" })
Category.create({ title: "Procurement", 
  description: "Guns, armor, blueprints, ammunition, documents, red/blu team flags"})
Category.create({ title: "Assassination", 
  description: "Channel your inner ninja"})
Category.create({ title: "Cleaning", 
  description: "The art of making a mess go away"})
Category.create({ title: "Hatching Elaborate Plots",
  description: "You're clever. It doesn't need to be the script for Inside Man." })
Category.create({ title: "Heists",
  description: "You like to follow the footsteps of John Dillinger and those guys from Heat." })
Category.create({ title: "Delivery/Pickup",
  description: "You can get it from point A to point B quickly, securely, discreetly." })
Category.create({ title: "Personal Security",
  description: "You have muscles and know how to use them." })
Category.create({ title: "Kidnapping", 
  description: "It's on like Donkey Kong" })
Category.create({ title: "Other",
  description: "You're a jack of all trades and are open to creative offers" })
  
20.times { Fabricate(:user) }
100.times { Fabricate(:skill) }
200.times { Fabricate(:review) }
