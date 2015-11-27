class AddLeftShelterToCats < ActiveRecord::Migration
  def change
    add_column :cats, :left_shelter, :date
  end
end
