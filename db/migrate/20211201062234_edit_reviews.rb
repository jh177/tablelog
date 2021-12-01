class EditReviews < ActiveRecord::Migration[5.2]
  def change
    rename_column :reviews, :noice, :noise
  end
end
