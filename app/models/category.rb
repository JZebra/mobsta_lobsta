# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Category < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true
  
  has_many :tasks
  has_many(:skills, foreign_key: :cat_id)
  has_many :users, through: :skills, source: :user
end
