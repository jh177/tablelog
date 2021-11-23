class AddUniquenessToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_index :restaurants, [:name, :address], unique: true
    rename_column :restaurants, :location, :city
  end
end
