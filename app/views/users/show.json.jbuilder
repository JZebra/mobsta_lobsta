# profile info
json.extract! @user, :id, :name, :email, :phone1,
                      :phone2, :zipcode,
                      :created_at, :updated_at

json.skills @user.skills
json.availability @user.availability
json.markers @user.markers

# dashboard info
json.average_score @user.average_score
json.image_md_url @user.image.url(:medium)
json.image_sm_url @user.image.url(:small)
json.review @user.sample_review
json.total_reviews @user.total_reviews
json.sample_skills @user.sample_skills
json.posted_tasks @user.posted_tasks
json.accepted_tasks @user.accepted_tasks