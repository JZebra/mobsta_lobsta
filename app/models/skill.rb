# == Schema Information
#
# Table name: skills
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  cat_id     :integer          not null
#  rate       :integer          not null
#  pitch      :string(255)      not null
#  created_at :datetime
#  updated_at :datetime
#

class Skill < ActiveRecord::Base
  validates :user_id, :cat_id, :rate, :pitch, presence: true
  validates_uniqueness_of :user_id, scope: :cat_id
  
  belongs_to :user
  belongs_to(:category, foreign_key: :cat_id)
end
