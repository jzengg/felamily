class RemoveCatIdFromVaccines < ActiveRecord::Migration
  def change
    remove_column :vaccines, :cat_id
  end
end
