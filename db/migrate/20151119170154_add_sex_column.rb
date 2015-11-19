class AddSexColumn < ActiveRecord::Migration
  def change
    add_column :cats, :sex, :integer, null: false, default: 0
  end
end
