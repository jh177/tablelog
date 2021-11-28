# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :email, presence: {message: "Please enter your Email"}
  validates :email, uniqueness: true
  validates :fname, presence: {message: "Please enter your first name."}
  validates :lname, presence: {message: "Please enter your last name."}
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 8, message: "Passwords must be 8 characters or more."}, allow_nil: true

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :reservations

  has_many :restaurants, through: :reservations, source: :restaurant

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_valid_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
