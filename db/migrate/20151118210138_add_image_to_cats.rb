class AddImageToCats < ActiveRecord::Migration
  def change
    add_attachment :cats, :profile_image
  end
end
