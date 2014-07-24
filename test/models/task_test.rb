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

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
