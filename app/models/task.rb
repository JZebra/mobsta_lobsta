# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  poster_id   :integer          not null
#  lobster_id  :integer
#  title       :string(255)
#  description :text
#  category    :string(255)      not null
#  zipcode     :string(10)
#  date        :date             not null
#  timeframe   :integer          not null
#  address     :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#

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
  
  has_one :deal
  
end
