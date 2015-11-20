class User < ActiveRecord::Base
  attr_reader :password
  validates :username, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  has_many(
    :cats,
    class_name: "Cat",
    foreign_key: :creator_id,
    primary_key: :id
  )


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user.try(:is_password?, password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    self.password_digest.is_password?(password)
  end

  def password_digest
    BCrypt::Password.new(super)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end
end
