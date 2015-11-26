json.extract! person, :id, :fname, :lname, :zipcode, :email
json.cats person.cats
json.updated_at person.updated_at.to_formatted_s(:short)
json.created_at person.created_at.to_formatted_s(:short)
json.profile_image_url_thumb asset_path(person.profile_image.url(:thumb))
json.profile_image_url asset_path(person.profile_image.url)
