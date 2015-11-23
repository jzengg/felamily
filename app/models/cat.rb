class Cat < ActiveRecord::Base
  validates :name, length: {minimum: 3}
  belongs_to(
    :creator,
    class_name: "User",
    foreign_key: :creator_id,
    primary_key: :id
  )

  has_many :vaccinations, dependent: :destroy

  has_many :vaccines, through: :vaccinations

  enum location: [:cats, :kittens, :quarantine, :isolation, :foster]
  enum sex: [:male, :female, :unknown]
  enum available: [:temp_unavailable, :available, :unavailable]

  has_attached_file :profile_image, styles: { medium: "300x300>", thumb: "85x65>" }, default_url: "missing.jpg"
  validates_attachment_content_type :profile_image, content_type: /\Aimage\/.*\Z/

end
