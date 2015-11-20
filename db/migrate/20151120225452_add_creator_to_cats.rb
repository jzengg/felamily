class AddCreatorToCats < ActiveRecord::Migration
  def change
    add_column :cats, :creator_id, :integer, index: true
  end
end
