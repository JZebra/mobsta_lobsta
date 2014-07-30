json.array! @skills do |skill|
  json.extract! skill, :user_id, :cat_id, :pitch, :rate
end