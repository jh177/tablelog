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
#  website     :string
#
class Restaurant < ApplicationRecord
  validates :name, :description, :category, :address, :city, presence:true
  validates :name, uniqueness: { scope: :address, message: "should not have duplicate names for one address" }

  has_many_attached :photos

  has_many :reservations
  has_many :reviews

  def num_reviews
    reviews.size
  end

  def num_reservations
    reservations.size
  end

  def average_rating
    reviews.average(:overall)
  end

  def average_food
    reviews.average(:food)
  end

  def average_service
    reviews.average(:service)
  end

  def average_ambience
    reviews.average(:ambience)
  end

  def average_value
    reviews.average(:value)
  end

  def average_noise
    reviews.average(:noise)
  end

end
