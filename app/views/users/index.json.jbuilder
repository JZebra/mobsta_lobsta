json.extract! @user, :id, :name, :email, :created_at, :updated_at

json.received_reviews @user.received_reviews do |review|
  