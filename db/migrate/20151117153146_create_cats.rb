class CreateCats < ActiveRecord::Migration
  def change
    create_table :cats do |t|
      t.string :name, null: false
      t.boolean :available, null: false

      t.timestamps null: false
    end
  end
end
