class AddNullToDateTimeReservations < ActiveRecord::Migration[5.2]
  def change
    change_column_null :reservations, :date, false
    change_column_null :reservations, :time, false
  end
end
