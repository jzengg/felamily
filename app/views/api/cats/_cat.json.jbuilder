json.extract! cat, :id, :name, :available, :location, :sex, :creator_id
json.updated_at cat.updated_at.to_formatted_s(:short)
json.creator_name @creator_name
json.profile_image_url_thumb asset_path(cat.profile_image.url(:thumb))
json.profile_image_url asset_path(cat.profile_image.url)
