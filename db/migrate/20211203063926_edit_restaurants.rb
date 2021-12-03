class EditRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_index :restaurants, :category
    add_index :restaurants, :city
    add_column :restaurants, :website, :string
  end
end
