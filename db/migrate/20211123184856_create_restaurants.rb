class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null:false
      t.text :description, null:false
      t.string :category, null:false
      t.string :address, null: false
      t.string :location, null: false
      t.timestamps
    end
  end
end
