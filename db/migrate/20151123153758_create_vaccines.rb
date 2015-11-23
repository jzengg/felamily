class CreateVaccines < ActiveRecord::Migration
  def change
    create_table :vaccines do |t|
      t.integer :cat_id, null: false, index: true
      t.integer :category, null: false, default: 0
      t.date :given
      t.date :expires
      t.text :comments
      t.timestamps null: false
    end

  end
end
