class AddAvailableAsEnums < ActiveRecord::Migration
  def change
    add_column :cats, :available, :integer, default: 0, null: false

  end
end
