# == Schema Information
#
# Table name: reservations
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  party_size    :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  date          :date             not null
#  time          :string           not null
#
class Reservation < ApplicationRecord
  validates :user_id, :restaurant_id, :date, :time, :party_size, presence:true
  validates :user_id, uniqueness: {scope: [:restaurant_id, :date, :time, :party_size], message: "should not have duplicate reservations"}

  belongs_to :user
  belongs_to :restaurant

end
