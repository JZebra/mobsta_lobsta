# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
SF_ZIPS = %w(94121 94120 94115 94130 94103 94104 94105 94106 94132 94044 94133 94003 94965)

NAMES = ("Bane, Boba Fett, Dr. Wily, Glados, Jabba the Hutt, Keyser Soze, Omar Little, Saruman, Sauron, Black Mage, Walter White, Lavos, Cthulhu, Darth Vader, Kefka, Gollum, Hans Gruber, Jim Moriarty, Joffrey Baratheon, Little Finger, Mr. Blonde, Mr. White").split(', ')
  
# It would be cool to have movie/ famous quotes in the description
u0 = Category.create({ title: "Fake Credentials", description: "Creating fake drivers licenses, diplomas, and passports."})
u1 = Category.create({ title: "Procurement", description: "Guns, armor, blueprints, ammunition, documents, red/blu team flags."})
u2 = Category.create({ title: "Heists", description: "You like to follow the footsteps of John Dillinger and those guys from Heat." })
u3 = Category.create({ title: "Arson", description: "Some people just want to watch the world burn." })
u4 = Category.create({ title: "Assassination", description: "Channel your inner ninja."})
u5 = Category.create({ title: "Cleaning", description: "The art of making a big mess then making it go away."})
u6 = Category.create({ title: "Hatching Elaborate Plots", description: "You're clever. You can come up with something even better than the script for Inside Man." })
u7 = Category.create({ title: "Delivery/Pickup", description: "You can get it from point A to point B quickly, securely, discreetly." })
u8 = Category.create({ title: "Personal Security", description: "You have muscles and know how to use them." })
u9 = Category.create({ title: "Kidnapping", description: "It's on like Donkey Kong." })
u10 = Category.create({ title: "Fire and Brimstone", description: "Laying waste to the realms of Man." })
u11 = Category.create({ title: "Other", description: "You're a jack of all trades and are open to creative offers." })

# categories = %w(u0 u1 u2 u3 u4 u5 u6 u7 u8 u9 u10)

NAMES.each do |name|
  User.create({
    name: name,
    email: Faker::Internet.email,
    password: "testtest",
    zipcode: SF_ZIPS.sample,
    phone1: Faker::Number.number(10)
  })
end

Fabricator(:skill) do
  cat_id { Category.all.sample.id }
  pitch { Faker::Lorem.sentence }
  user_id { User.all.sample.id }
  rate { rand(7..150) * 5 }
end

Fabricator(:review) do
  cat_id { Category.all.sample.id }
  body { Faker::Lorem.paragraph(2) }
  author_id { User.all.sample.id }
  lobster_id { User.all.sample.id }
  score { rand(4..5) }
end

# Fabricator(:user) do
#   email { Faker::Internet.email }
#   name { Faker::Name.first_name + ' ' + Faker::Name.last_name }
#   password { "testtest" }
#   zipcode { SF_ZIPS.sample }
#   phone1 { Faker::Number.number(10) }
# end

    # 20.times { Fabricate(:user) }
200.times { Fabricate(:skill) }
600.times { Fabricate(:review) }
