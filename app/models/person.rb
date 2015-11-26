class Person < ActiveRecord::Base
  belongs_to(
    :creator,
    class_name: "User",
    foreign_key: :creator_id,
    primary_key: :id
  )

  has_many(
    :cats,
    class_name: "Cat",
    foreign_key: :owner_id,
    primary_key: :id
  )
  has_attached_file :profile_image, styles: { medium: "300x300>", thumb: "85x65>" }, default_url: "missing.jpg"
  validates_attachment_content_type :profile_image, content_type: /\Aimage\/.*\Z/

end
