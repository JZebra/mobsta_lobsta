# == Schema Information
#
# Table name: availability_markers
#
#  id              :integer          not null, primary key
#  availability_id :integer          not null
#  lat             :float            not null
#  lng             :float            not null
#  created_at      :datetime
#  updated_at      :datetime
#

class AvailabilityMarker < ActiveRecord::Base
  belongs_to :availability
end
