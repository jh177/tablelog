# == Schema Information
#
# Table name: reviews
#
#  id             :bigint           not null, primary key
#  user_id        :integer          not null
#  restaurant_id  :integer          not null
#  reservation_id :integer          not null
#  overall        :integer          not null
#  food           :integer          not null
#  service        :integer          not null
#  ambience       :integer          not null
#  value          :integer          not null
#  noise          :integer          not null
#  body           :text             not null
#  recommend      :boolean          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
