class Transaction < ActiveRecord::Base
  validates :task_id, :completion_datetime, presence: true
  
  belongs_to :task
end
