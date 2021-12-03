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
require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
