class ChangeColumnNameToReservations < ActiveRecord::Migration[5.2]
  def change
    rename_column :reservations, :data_time, :date_time
  end
end
