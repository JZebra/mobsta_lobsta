class Task < ActiveRecord::Base
  validates :poster_id, :category, :date, :time_of_day, presence: true
  
  belongs_to(
  :poster,
  class_name: "User",
  foreign_key: :poster_id
  )
  
  belongs_to(
  :lobster,
  class_name: "User",
  foreign_key: :lobster_id
  )
  
  has_one :transaction
  
end
