class CreateCatsVaccines < ActiveRecord::Migration
  def change
    create_table :cats_vaccines do |t|
      t.integer :cat_id, null: false, index: true
      t.integer :vaccine_id, null: false, index: true
    end
  end
end
