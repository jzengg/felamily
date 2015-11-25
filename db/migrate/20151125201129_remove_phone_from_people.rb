class RemovePhoneFromPeople < ActiveRecord::Migration
  def change
    remove_column :people, :phone_number
  end
end
