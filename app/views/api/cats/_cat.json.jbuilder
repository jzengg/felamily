json.extract! cat, :id, :name, :available, :location, :sex, :creator_id, :description, :owner, :dob, :owner_id
json.vaccines cat.vaccines
json.time_on_shelter time_ago_in_words(cat.created_at)
json.entered_shelter cat.created_at.to_formatted_s(:long_ordinal).split(" ").take(3).join(" ")
json.left_shelter cat.left_shelter.to_formatted_s(:long_ordinal).split(" ").take(3).join(" ") unless cat.left_shelter.nil?
json.age humanize_age(cat)
json.updated_at cat.updated_at.to_formatted_s(:short)
json.created_at cat.created_at.to_formatted_s(:short)
json.profile_image_url_thumb asset_path(cat.profile_image.url(:thumb))
json.profile_image_url asset_path(cat.profile_image.url)
