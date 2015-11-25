class AddImageToPerson < ActiveRecord::Migration
  def change
    add_attachment :people, :profile_image
  end
end
