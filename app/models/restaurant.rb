# == Schema Information
#
# Table name: restaurants
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#  category    :string           not null
#  address     :string           not null
#  city        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  lat         :float            not null
#  lng         :float            not null
#
class Restaurant < ApplicationRecord
  validates :name, :description, :category, :address, :city, presence:true
  validates :name, uniqueness: { scope: :address, message: "should not have duplicate names for one address" }

  has_many_attached :photos

  has_many :reservations
  has_many :reviews

  def average_rating
    reviews.average(:overall)
  end

end
