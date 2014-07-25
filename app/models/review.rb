# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  body       :string(255)      not null
#  author_id  :integer          not null
#  lobster_id :integer          not null
#  task_date  :date
#  score      :integer          not null
#  created_at :datetime
#  updated_at :datetime
#  cat_id     :integer
#

class Review < ActiveRecord::Base
  validates :cat_id, :body, :author_id, :lobster_id, :score, presence: true
  
  belongs_to(:author, class_name: "User")
  belongs_to(:lobster, class_name: "User")
  belongs_to(:category, class_name: "Category", foreign_key: :cat_id)
end
