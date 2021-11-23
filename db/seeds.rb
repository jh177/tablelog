# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


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
  description: "Storied Sichuanese cuisine and authentic Meizhou innovations",
  category: "Chinese",
  address: "10250 Santa Monica Blvd. Suite 200A Suite 200A Los Angeles, CA 90067",
  city: "Los Angeles"
)

restaurant2 = Restaurant.create!(
  name: "Terra",
  description: "Rooftop restaurant featuring a wood-burning Italian grill",
  category: "Italian",
  address: "10250 Santa Monica Blvd Los Angeles, CA 90067",
  city: "Los Angeles"
)