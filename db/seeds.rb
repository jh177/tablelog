# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
Restaurant.delete_all

demo = User.create!(
  email: "demo@tablelog.com",
  password: "12345678",
  fname: "Demo",
  lname: "User"
)

restaurant1 = Restaurant.create!(
  name: "Meizhou Dongpo Restaurant",
  description: "Meizhou Dongpo has been serving millions of Chinese customers across China through its now 110 locations since 1996. We are now proudly providing such experience to the U.S. diners. Our masterful chefs from China strive to share the storied Sichuanese cuisine and authentic Meizhou innovations with each and every one of you. ",
  category: "Chinese",
  address: "10250 Santa Monica Blvd. Suite 200A Los Angeles, CA 90067",
  city: "Los Angeles"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/meizhou-#{i}.jpeg")
  restaurant1.photos.attach(io:res_photo, filename: "meizhou-#{i}.jpeg")
end

# res1_photo1 = open('https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/meizhou-1.jpeg')
# res1_photo2 = open('https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/meizhou-2.jpeg')
# res1_photo3 = open('https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/meizhou-3.jpeg')
# res1_photo4 = open('https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/meizhou-4.jpeg')
# res1_photo5 = open('https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/meizhou-5.jpeg')
# res1_photo6 = open('https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/meizhou-6.jpeg')
# res1_photo7 = open('https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/meizhou-7.jpeg')
# res1_photo8 = open('https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/meizhou-8.jpeg')
# res1_photo9 = open('https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/meizhou-9.jpeg')
# res1_photo10 = open('https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/meizhou-10.jpeg')

# restaurant1.photos.attach(io:res1_photo1, filename: "meizhou-1.jpeg")
# restaurant1.photos.attach(io:res1_photo2, filename: "meizhou-2.jpeg")
# restaurant1.photos.attach(io:res1_photo3, filename: "meizhou-3.jpeg")
# restaurant1.photos.attach(io:res1_photo4, filename: "meizhou-4.jpeg")
# restaurant1.photos.attach(io:res1_photo5, filename: "meizhou-5.jpeg")
# restaurant1.photos.attach(io:res1_photo6, filename: "meizhou-6.jpeg")
# restaurant1.photos.attach(io:res1_photo7, filename: "meizhou-7.jpeg")
# restaurant1.photos.attach(io:res1_photo8, filename: "meizhou-8.jpeg")
# restaurant1.photos.attach(io:res1_photo9, filename: "meizhou-9.jpeg")
# restaurant1.photos.attach(io:res1_photo10, filename: "meizhou-10.jpeg")


restaurant2 = Restaurant.create!(
  name: "Terra - Eataly",
  description: "Located on the third floor of Eataly Los Angeles, Terra is a rooftop restaurant featuring a wood-burning Italian grill and views of the Hollywood Hills. Named for 'earth' in Italian, Terra's menu is centered around the grill, resulting in earthy dishes paired perfectly with botanical cocktails, premium Italian wines, and more.l",
  category: "Italian",
  address: "10250 Santa Monica Blvd Los Angeles, CA 90067",
  city: "Los Angeles"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/terra-#{i}.jpeg")
  restaurant2.photos.attach(io:res_photo, filename: "terra-#{i}.jpeg")
end

restaurant3 = Restaurant.create!(
  name: "Torihei",
  description: "We cook every single Yakitori skewer on the charcoal grill with chef's secret salt or traditional handmade Yakitori sauce.",
  category: "Japanese",
  address: "1757 W Carson St, Ste A, Torrance, CA 90501",
  city: "Los Angeles"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/torihei-#{i}.jpeg")
  restaurant3.photos.attach(io:res_photo, filename: "torihei-#{i}.jpeg")
end


restaurant4 = Restaurant.create!(
  name: "Sea Harbour",
  description: "This highly regarded Cantonese restaurant could easily glide solely on its reputation, and yet, its devoted chefs bring the goods again and again. One of the first of its kind to offer dim sum à la carte, rather than by an actual cart, items arrive piping hot, fresh from the steamer.",
  category: "Chinese",
  address: "3939 Rosemead Blvd Rosemead, CA 91770",
  city: "Los Angeles"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/seaharbour-#{i}.jpeg")
  restaurant4.photos.attach(io:res_photo, filename: "seaharbour-#{i}.jpeg")
end

restaurant5 = Restaurant.create!(
  name: "Master Ha",
  description: "Authentic Korean Cuisine BRING YOU CLOSER TO KOREAN CULTURES AND FOODS. Just like history of Korean cuisine has evolved together with its people, culture and tradition, Master Ha Restaurant has evolved keeping its original taste of Korea.",
  category: "Korean",
  address: "1147 S Western Ave Los Angeles, CA 90006",
  city: "Los Angeles"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/masterha-#{i}.jpeg")
  restaurant5.photos.attach(io:res_photo, filename: "masterha-#{i}.jpeg")
end