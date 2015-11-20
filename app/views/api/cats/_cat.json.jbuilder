json.extract! cat, :id, :name, :available, :location, :sex, :updated_at, :creator_id
json.profile_image_url_thumb asset_path(cat.profile_image.url(:thumb))
json.profile_image_url asset_path(cat.profile_image.url)
