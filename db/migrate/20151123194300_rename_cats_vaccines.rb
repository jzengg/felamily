class RenameCatsVaccines < ActiveRecord::Migration
  def change
    rename_table :cats_vaccines, :vaccinations
  end
end
