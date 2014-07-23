class User < ActiveRecord::Base
  validates :name, :email, :phone1, :token, :password_digest, presence: true
  validates :email, uniqueness: true, format: { with: /\A\S+@.+\.\S+\z/ }
  
  has_many(
  :posted_tasks,
  class_name: "Task",
  foreign_key: :poster_id
  )
  
  has_many(
  :accepted_tasks
  class_name: "Task",
  foreign_key: :lobster_id
  )
  
  has_many :sent_transactions, through: :posted_tasks, source: :transaction
  has_many :received_transactions, through: :accepted_tasks, source: :transaction
end
