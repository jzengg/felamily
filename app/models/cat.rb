class Cat < ActiveRecord::Base
  validates :name, length: {minimum: 2}
  belongs_to(
    :owner,
    class_name: "Person",
    foreign_key: :owner_id,
    primary_key: :id
  )

  belongs_to(
    :creator,
    class_name: "User",
    foreign_key: :creator_id,
    primary_key: :id
  )

  has_many :vaccinations, dependent: :destroy

  has_many :vaccines, through: :vaccinations, dependent: :destroy

  enum location: [:cats, :kittens, :quarantine, :isolation, :foster, :adopted]
  enum sex: [:male, :female, :unknown]
  enum available: [:temp_unavailable, :available, :unavailable]

  has_attached_file :profile_image, styles: { medium: "300x300>", thumb: "85x65>" }, default_url: "missing.jpg"
  validates_attachment_content_type :profile_image, content_type: /\Aimage\/.*\Z/

end
