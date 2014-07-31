# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  poster_id   :integer          not null
#  lobster_id  :integer
#  title       :string(255)
#  description :text
#  zipcode     :string(10)
#  date        :date             not null
#  timeframe   :integer          not null
#  address     :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  cat_id      :integer
#

class Task < ActiveRecord::Base
  validates :poster_id, :cat_id, :timeframe, presence: true
  
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
  
  has_one :deal
  
end
