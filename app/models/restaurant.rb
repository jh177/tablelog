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
#
class Restaurant < ApplicationRecord
  validates :name, :description, :category, :address, :city, presence:true
  validates :name, uniqueness: { scope: :address, message: "should not have duplicate names for one address" }
end
