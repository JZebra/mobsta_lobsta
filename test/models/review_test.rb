# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  category   :string(255)      not null
#  body       :string(255)      not null
#  author_id  :integer          not null
#  lobster_id :integer          not null
#  task_date  :date
#  score      :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
