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

require 'test_helper'

class SkillTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
