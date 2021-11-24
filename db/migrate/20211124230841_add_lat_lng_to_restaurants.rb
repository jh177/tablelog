class AddLatLngToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :lat, :float
    add_column :restaurants, :lng, :float
  end
end
