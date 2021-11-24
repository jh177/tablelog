class ChangeLatLngNullToRestaurants < ActiveRecord::Migration[5.2]
  def change
    change_column_null :restaurants, :lat, false
    change_column_null :restaurants, :lng, false
  end
end
