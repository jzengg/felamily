class Person < ActiveRecord::Base

  has_many :cats
  has_attached_file :profile_image, styles: { medium: "300x300>", thumb: "85x65>" }, default_url: "missing.jpg"
  validates_attachment_content_type :profile_image, content_type: /\Aimage\/.*\Z/

end
