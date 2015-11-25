class AddDobCats < ActiveRecord::Migration
  def change
    add_column :cats, :dob, :date
  end
end
