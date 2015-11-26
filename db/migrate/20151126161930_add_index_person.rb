class AddIndexPerson < ActiveRecord::Migration
  def change
    add_index :people, :creator_id
  end
end
