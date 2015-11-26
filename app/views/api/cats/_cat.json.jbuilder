json.extract! cat, :id, :name, :available, :location, :sex, :creator_id, :description, :owner, :dob, :owner_id
json.vaccines cat.vaccines
json.age humanize_age(cat)
json.updated_at cat.updated_at.to_formatted_s(:short)
json.created_at cat.created_at.to_formatted_s(:short)
json.profile_image_url_thumb asset_path(cat.profile_image.url(:thumb))
json.profile_image_url asset_path(cat.profile_image.url)
