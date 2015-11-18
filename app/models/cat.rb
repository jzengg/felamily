class Cat < ActiveRecord::Base
  validates :name, length: {minimum: 3}

  has_attached_file :profile_image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "missing.jpg"
  validates_attachment_content_type :profile_image, content_type: /\Aimage\/.*\Z/


end
