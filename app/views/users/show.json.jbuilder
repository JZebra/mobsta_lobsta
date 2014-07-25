json.extract! @user, :id, :name, :email, :phone1,
                      :phone2, :zipcode, :image_file_name,
                      :created_at, :updated_at

json.average_score @user.average_score

json.review @user.sample_review
json.total_reviews @user.total_reviews
json.skills @user.sample_skills

if @user.sample_skills[0]
  json.rate @user.sample_skills[0].rate
  json.skill @user.sample_skills[0].category.title
  json.pitch @user.sample_skills[0].pitch
else
  json.rate 0
  json.skill "Being useless"
  json.pitch "This is not the lobster you're looking for..."
end