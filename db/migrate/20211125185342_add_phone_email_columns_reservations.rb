class AddPhoneEmailColumnsReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :phone, :string, null: false
    add_column :reservations, :email, :string, null: false
  end
end
