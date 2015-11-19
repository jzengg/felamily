class RemoveAvailableColumn < ActiveRecord::Migration
  def change
    remove_column :cats, :available, :boolean
  end
end
