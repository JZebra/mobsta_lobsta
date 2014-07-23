class User < ActiveRecord::Base
  validates :name, :email, :phone1, :token, :password_digest, presence: true
  validates :email, uniqueness: true, format: { with: /\A\S+@.+\.\S+\z/ }
  
  has_many(
  :posted_tasks,
  class_name: "Task",
  foreign_key: :poster_id
  )
  
  has_many(
  :accepted_tasks,
  class_name: "Task",
  foreign_key: :lobster_id
  )
  
  has_many :sent_transactions, through: :posted_tasks, source: :transaction
  has_many :received_transactions, through: :accepted_tasks, source: :transaction
  
  attr_reader :password
  after_initialize :ensure_token
  
  def self.find_by_credentials(user_params)
    user = User.find_by_email(user_params[:email])
    user.try(:is_password?, user_params[:password]) ? user : nil
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def reset_token
    self.token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.token
  end
  
  def ensure_token
    self.token ||= SecureRandom.urlsafe_base64(16)
  end

end
