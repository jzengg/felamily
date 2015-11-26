class AddCreatorIdToPeople < ActiveRecord::Migration
  def change
    add_column :people, :creator_id, :integer, index: true
  end
end
