# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  name               :string(255)      not null
#  email              :string(255)      not null
#  phone1             :string(15)       not null
#  phone2             :string(15)
#  zipcode            :string(10)
#  password_digest    :string(255)      not null
#  token              :string(255)      not null
#  created_at         :datetime
#  updated_at         :datetime
#  image_file_name    :string(255)
#  image_content_type :string(255)
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ActiveRecord::Base
  validates :name, :email, :phone1, :token, :password_digest, presence: true
  validates :email, uniqueness: true, format: { with: /\A\S+@.+\.\S+\z/ }
  
  has_many(:posted_tasks, class_name: "Task", foreign_key: :poster_id)
  
  has_many(:accepted_tasks, class_name: "Task", foreign_key: :lobster_id)
  
  has_many(:authored_reviews, class_name: "Review", foreign_key: :author_id)
  has_many(:received_reviews, class_name: "Review", foreign_key: :lobster_id)
  
  has_many :sent_deals, through: :posted_tasks, source: :deal
  has_many :received_deals, through: :accepted_tasks, source: :deal
  has_many :skills
  has_many :categories, through: :skills, source: :category
  
  has_one :availability
  has_many :markers, through: :availability, source: :availability_markers
  
  has_attached_file :image, styles: { 
      medium: "225x225", 
      small: "144x144" }, 
      default_url: "https://s3-us-west-1.amazonaws.com/mobstrlobstr-development/icons/no_image.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
  validates_attachment_file_name :image, :matches => [/png\Z/, /jpe?g\Z/]
  
  
  def average_score
    if !received_reviews
      ((received_reviews.average(:score) / 5) * 100).round
    else
      "No tasks yet"
    end
  end
  
  def total_reviews
    received_reviews.count
  end
  
  def sample_skills
    skills.sample(3)
  end
  
  def sample_review
    received_reviews.sample
  end
  
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
