# == Schema Information
#
# Table name: availabilities
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Availability < ActiveRecord::Base
  has_many :availability_markers, dependent: :destroy
  belongs_to :user
end
