class ChangePersonColumn < ActiveRecord::Migration
  def change
    change_column :people, :email, :string, null: false
    change_column :people, :zipcode, :integer, null: false
    change_column :people, :creator_id, :integer, index: true
  end
end
