json.array! @users do |user|

  json.extract! user, :id, :name, :zipcode
  json.image_sm_url user.image.url(:small)
  json.image_md_url user.image.url(:medium)

  json.average_score user.average_score

  json.review user.sample_review
  json.total_reviews user.total_reviews
  json.skills user.sample_skills
  json.categories user.categories
  
  json.availability user.availability
  
  #Replace this once skills filtering is functional
  if user.sample_skills[0]
    json.rate user.sample_skills[0].rate
    json.skill user.sample_skills[0].category.title
    json.pitch user.sample_skills[0].pitch
  else
    json.rate 0
    json.skill "Being useless"
    json.pitch "This is not the lobster you're looking for..."
  end
end

# json.members @board.members do |member|
#   json.id member.id
#   json.email member.email
#   json.gravatar_url member.gravatar_url
# end
#
# json.lists @board.lists do |list|
#   json.extract! list, :id, :title, :ord, :created_at, :updated_at
#
#   json.cards list.cards do |card|
#     json.extract! card, :id, :title, :ord, :created_at, :updated_at
#   end
# end
