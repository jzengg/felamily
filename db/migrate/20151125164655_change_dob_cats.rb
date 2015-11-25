class ChangeDobCats < ActiveRecord::Migration
  def change
    change_column :cats, :dob, :date, default: 100.years.ago
  end
end
