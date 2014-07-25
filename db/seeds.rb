# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
ZIPS = %w(94121 94120 94115 94130 94103 94104 94105 94106 94132 94044 94133 94003 94965)

Fabricator(:user) do
  email { Faker::Internet.email }
  name { Faker::Name.first_name + ' ' + Faker::Name.last_name }
  password { "testtest" }
  zipcode { ZIPS.sample }
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

Category.create({ title: "Assassination" })
Category.create({ title: "Cleaning" })
Category.create({ title: "Hatching Elaborate Plots" })
Category.create({ title: "Bank Robbery" })
Category.create({ title: "Drug Delivery" })
Category.create({ title: "Personal Security" })
Category.create({ title: "Kidnapping" })
Category.create({ title: "Other" })
20.times { Fabricate(:user) }
100.times { Fabricate(:skill) }
200.times { Fabricate(:review) }
