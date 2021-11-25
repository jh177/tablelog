class EditReservations < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :date_time
    add_column :reservations, :date, :date
    add_column :reservations, :time, :string
  end
end
