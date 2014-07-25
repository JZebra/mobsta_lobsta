json.array! @users do |user|

  json.extract! user, :id, :name, :zipcode
  json.image_sm_url user.image.url

  json.average_score user.average_score

  json.review user.sample_review
  json.total_reviews user.total_reviews
  json.skills user.sample_skills
  
  if user.sample_skills[0]
    json.rate user.sample_skills[0].rate
    json.skill user.sample_skills[0].category.title
  else
    json.rate 0
    json.skill "no skills available"
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
