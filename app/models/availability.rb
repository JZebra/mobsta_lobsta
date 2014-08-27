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
  validates :user_id, presence: true, uniqueness: true
  before_validation :ensure_unique!
  
  has_many :availability_markers, dependent: :destroy
  belongs_to :user
  
  def ensure_unique!
    avail = Availability.find_by_user_id(self.user_id)
    avail.destroy if avail
    return true
  end
end
