class AddLocationColumn < ActiveRecord::Migration
  def change
    add_column :cats, :location, :integer, default: 0, null: false
  end
end
