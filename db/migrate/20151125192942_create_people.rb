class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.integer :zipcode
      t.string :phone_number
      t.string :email
      t.string :fname, null: false
      t.string :lname, null: false
      t.timestamps null: false
    end
  end
end
