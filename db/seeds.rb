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

aji = User.create!(
  email: "aji@tablelog.com",
  password: "12345678",
  fname: "Aji",
  lname: "Hong"
)

restaurant1 = Restaurant.create!(
  name: "Meizhou Dongpo Restaurant",
  description: "Meizhou Dongpo has been serving millions of Chinese customers across China through its now 110 locations since 1996. We are now proudly providing such experience to the U.S. diners. Our masterful chefs from China strive to share the storied Sichuanese cuisine and authentic Meizhou innovations with each and every one of you. ",
  category: "Chinese",
  address: "10250 Santa Monica Blvd., Suite 200A, Los Angeles, CA 90067",
  city: "Los Angeles",
  lat: 34.05917194123745,
  lng: -118.41887672671965,
  website: "www.meizhoudongpola.com",
  phone: "(310) 788-0120"
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
  address: "10250 Santa Monica Blvd, Los Angeles, CA 90067",
  city: "Los Angeles",
  lat: 34.05919860658435, 
  lng: -118.41885526617024,
  website: "www.eataly.com",
  phone: "(213) 310-8008"
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
  city: "Torrance",
  lat: 33.83239859117153,
  lng: -118.31066155131064,
  website: "www.torihei-usa.com",
  phone: "(310) 781-9407"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/torihei-#{i}.jpeg")
  restaurant3.photos.attach(io:res_photo, filename: "torihei-#{i}.jpeg")
end


restaurant4 = Restaurant.create!(
  name: "Sea Harbour",
  description: "This highly regarded Cantonese restaurant could easily glide solely on its reputation, and yet, its devoted chefs bring the goods again and again. One of the first of its kind to offer dim sum à la carte, rather than by an actual cart, items arrive piping hot, fresh from the steamer.",
  category: "Chinese",
  address: "3939 Rosemead Blvd, Rosemead, CA 91770",
  city: "Rosemead",
  lat: 34.080006013852824,
  lng: -118.07346412487877,
  website: "www.seaharbourrosemead.com",
  phone: "(626) 288-3939"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/seaharbour-#{i}.jpeg")
  restaurant4.photos.attach(io:res_photo, filename: "seaharbour-#{i}.jpeg")
end

restaurant5 = Restaurant.create!(
  name: "Master Ha",
  description: "Authentic Korean Cuisine BRING YOU CLOSER TO KOREAN CULTURES AND FOODS. Just like history of Korean cuisine has evolved together with its people, culture and tradition, Master Ha Restaurant has evolved keeping its original taste of Korea.",
  category: "Korean",
  address: "1147 S Western Ave, Los Angeles, CA 90006",
  city: "Los Angeles",
  lat: 34.049808176587185,
  lng: -118.30960463839052,
  website: "www.masterhala.com",
  phone: "(323) 998-0427"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/masterha-#{i}.jpeg")
  restaurant5.photos.attach(io:res_photo, filename: "masterha-#{i}.jpeg")
end


restaurant6 = Restaurant.create!(
  name: "Electric Karma",
  description: "Delicious Indian for all! In the heart of West Hollywood, we serve rich Indian cuisine along with crafted cocktails at our full bar. Indulge in the flavors of India with great vibes in our sky-room (patio) featuring traditional Indian-style floor seating. Serving good karma!",
  category: "Indian",
  address: "8222 W 3rd St, Los Angeles, CA 90048",
  city: "Los Angeles",
  lat: 34.07324430230325, 
  lng: -118.3685743631232,
  website: "www.electrickarma.com",
  phone: "(323) 653-2121"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/electric-#{i}.jpeg")
  restaurant6.photos.attach(io:res_photo, filename: "electric-#{i}.jpeg")
end


restaurant7 = Restaurant.create!(
  name: "Spice Affair",
  description: "Spice Affair invites you to indulge in a special affair with our luscious Indian dishes from an award-winning menu featuring a number vegetarian, vegan, and gluten free options. There is a wide selection to choose from including some of our most popular Chicken tikka masala, Shrimp biryani, garlic naan, Tandoori chicken, Butter chicken, Chicken Tikka, Saag paneer and many other exquisite offerings.",
  category: "Indian",
  address: "50 N La Cienega Blvd #120, Beverly Hills, CA 90211",
  city: "Beverly Hills",
  lat: 34.067452410676985,
  lng: -118.37605674212803,
  website: "www.spice-affair.com",
  phone: "(310) 400-6800"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/spice-#{i}.jpeg")
  restaurant7.photos.attach(io:res_photo, filename: "spice-#{i}.jpeg")
end


restaurant8 = Restaurant.create!(
  name: "Thai District",
  description: "First and only in Downtown Long Beach Modern Thai, very authentic in taste and ingredients. Features northern style, street food in a hip and modern decor.",
  category: "Thai",
  address: "149 Linden Ave ste e, Long Beach, CA 90802",
  city: "Long Beach",
  lat: 33.76931638536786, 
  lng: -118.186645665074,
  website: "thaidistrictrestaurant.com",
  phone: "(562) 951-7181"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/thai-#{i}.jpeg")
  restaurant8.photos.attach(io:res_photo, filename: "thai-#{i}.jpeg")
end


restaurant9 = Restaurant.create!(
  name: "Otus Thai Kitchen",
  description: "Otus Thai Kitchen, located in West Hollywood, California, serves a variety of Thai cuisine in a cozy atmosphere. The extensive menu includes curries, soups, noodles and more. Otus Thai Kitchen makes each meal to order with the finest and freshest ingredients available.",
  category: "Thai",
  address: "1253 N La Brea Ave, West Hollywood, CA 90038",
  city: "West Hollywood",
  lat: 34.094226509755096,
  lng: -118.34427377948285,
  website: "www.otusthaikitchen.com",
  phone: "(323) 969-8611"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/otus-#{i}.jpeg")
  restaurant9.photos.attach(io:res_photo, filename: "otus-#{i}.jpeg")
end

restaurant10 = Restaurant.create!(
  name: "Ombu Grill",
  description: "Ombu Grill is a casual chic Los Angeles Korean barbecue restaurant, featuring a twist of Argentinian asado in a unique mix of cuisines. Our premium quality Korean meats include favorites such as prime beef short ribs, pork, and seafood alongside authentic side dishes (banchan) and fresh salads. We also provide an Argentinian asado experience. Enjoy it alone, or pair the ribs with essential achuras for a complete parrillada combination.",
  category: "Korean",
  address: "400 S Western Ave Unit 104, Los Angeles, CA 90020",
  city: "Los Angeles",
  lat: 34.0670557134207,
  lng: -118.3086689527045,
  website: "ombugrill.com",
  phone: "(213) 637-0262"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/ombu-#{i}.jpeg")
  restaurant10.photos.attach(io:res_photo, filename: "ombu-#{i}.jpeg")
end



restaurant11 = Restaurant.create!(
  name: "Tesse",
  description: "Tesse is a collaboration between restauranteur Bill Chait, Michelin-starred Chef Raphael Francois, and managing partner and wine director, Jordan Ogron. Tesse marries rustic Mediterranean/French cuisine with innovative cocktails and a unique wine program, to create a truly singular dining experience.",
  category: "Mediterranean",
  address: "8500 Sunset Blvd Suite B, West Hollywood, CA 90069",
  city: "West Hollywood",
  lat: 34.0939258796702,
  lng: -118.3765813209436,
  website: "www.tesserestaurant.com",
  phone: "(310) 360-3866"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/tesse-#{i}.jpeg")
  restaurant11.photos.attach(io:res_photo, filename: "tesse-#{i}.jpeg")
end


restaurant12 = Restaurant.create!(
  name: "Le Petit Paris",
  description: "Elegant bi-level French brasserie with a patio serving classic fare & cocktails.",
  category: "French",
  address: "418 S Spring St, Los Angeles, CA 90013",
  city: "Los Angeles",
  lat: 34.04856549904734,
  lng: -118.24848407875433,
  website: "www.lepetitparisla.com",
  phone: "(213) 217-4445"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/le-#{i}.jpeg")
  restaurant12.photos.attach(io:res_photo, filename: "le-#{i}.jpeg")
end


restaurant13 = Restaurant.create!(
  name: "Della Terra",
  description: "Wood-fired pizzas, brochettes & other Italian specialties are served in a cozy space with a patio.",
  category: "Italian",
  address: "7675 Beverly Blvd, Los Angeles, CA 90036",
  city: "Los Angeles",
  lat: 34.07651150630142,
  lng: -118.35722883793092,
  website: "dellaterrarestaurant.com",
  phone: "(323) 933-7675"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/della-#{i}.jpeg")
  restaurant13.photos.attach(io:res_photo, filename: "della-#{i}.jpeg")
end


restaurant14 = Restaurant.create!(
  name: "AOC - 3rd Street",
  description: "A.O.C. is a small plates restaurant driven by seasonal ingredients, locally sourced. Our California French cuisine was developed by Chef Suzanne Goin, and also features Mediterranean influences. We have 24 wines by the glass and 150 bottles to choose from, curated by Caroline Styne, all of which are either organic, biodynamic or sustainable. Featuring a full bar with premium spirits and specialty cocktails.",
  category: "Californian",
  address: "8700 W 3rd St, Los Angeles, CA 90048",
  city: "Los Angeles",
  lat: 34.07360897458366,
  lng: -118.38200229723992,
  website: "aocwinebar.com",
  phone: "(310) 859-9859"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/aoc-#{i}.jpeg")
  restaurant14.photos.attach(io:res_photo, filename: "aoc-#{i}.jpeg")
end



restaurant15 = Restaurant.create!(
  name: "The Factory Kitchen - Los Angeles",
  description: "Defining a culinary journey through the Italian Peninsula and hosted in the loading docks of the Factory Place Arts Complex in The Arts District in Los Angeles, The Factory Kitchen is a typical Italian Trattoria with simple and approachable fare.",
  category: "Italian",
  address: "1300 Factory Pl, Los Angeles, CA 90013",
  city: "Los Angeles",
  lat: 34.03917865293018, 
  lng: -118.23588902391506,
  website: "www.thefactorykitchen.com",
  phone: "(213) 996-6000"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/factory-#{i}.jpeg")
  restaurant15.photos.attach(io:res_photo, filename: "factory-#{i}.jpeg")
end


restaurant16 = Restaurant.create!(
  name: "Gabbi's Mexican Kitchen",
  description: "Gabbi Patrick is dedicated to integrating modern gastronomy with the indigenous and traditional recipes of Mexican cuisine. In her pursuit of preserving the rich culinary heritage of Mexico, Gabbi has adopted an eco-gastronomic approach in her interpretation of “Old World” recipes. Her passion and vision are reflected in every detail of her craft, from supporting local farms to her extensive travels throughout Mexico.",
  category: "Mexican",
  address: "141 S Glassell St, Orange, CA 92866",
  city: "Orange",
  lat: 33.78700766830207,
  lng: -117.85295291241017,
  website: "www.gabbipatrick.com",
  phone: "(714) 633-3038"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/gabbi-#{i}.jpeg")
  restaurant16.photos.attach(io:res_photo, filename: "gabbi-#{i}.jpeg")
end


restaurant17 = Restaurant.create!(
  name: "Puesto Los Olivos",
  description: "Owned and operated by a Mexican American family whose best memories all include tacos, Puesto is an award-winning Mexican Artisan Kitchen & Bar providing an innovative approach to authentic Mexican flavors. Puesto has garnered national acclaim for its Mexico City-style crispy melted cheese tacos, served on handmade non-GMO, organic, maíz azul stone-ground tortillas. In addition to tacos, offerings include a selection of fresh catch ceviches, guacamoles, starters and ensaladas, courtesy of Chef/Partner Luisteen Gonzales. The bar program showcases the best of Mexico City through the use of fresh ingredients in our hand crafted cocktails and housemade Micheladas, tequilas, mezcals, Baja craft beers, and Valle de Guadalupe wines you can’t find elsewhere We’re honored to have been featured by media outlets nationally and internationally, some of which include National Geographic, Huffington Post, Refinery 29, MSN, Insider, Zagat, Eater, Food and Wine, and LA Times.",
  category: "Mexican",
  address: "8577 Irvine Center Dr, Irvine, CA 92618",
  city: "Irvine",
  lat: 33.644994199217194,
  lng: -117.74426602509914, 
  website: "eatpuesto.com",
  phone: "(949) 608-9990"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/puesto-#{i}.jpeg")
  restaurant17.photos.attach(io:res_photo, filename: "puesto-#{i}.jpeg")
end



restaurant18 = Restaurant.create!(
  name: "RED O Taste of Mexico - Newport Beach",
  description: "Dining at RED O is an experience like no other that offers a unique combination of Prime Steak and Seafood with Rick Bayless’ signature Mexican inspired influences. With sustainably sourced and local ingredients, RED O creates flavorful dishes true to the authentic flavors of Mexico. RED O’s team of friendly employees creates a welcoming atmosphere that parallels the luxury resort interior of the restaurant. RED O also features an impressive bar and lounge where you’ll find specialty cocktails, an extensive tequila list and an award winning wine list. The bar also offers Happy Hour from 3-6 p.m. daily.",
  category: "Mexican",
  address: "143 Newport Center Dr, Newport Beach, CA 92660",
  city: "Newport Beach",
  lat: 33.61329484761493,
  lng: -117.8754244610664,
  website: "www.redorestaurant.com",
  phone: "(949) 718-0300"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/red-#{i}.jpeg")
  restaurant18.photos.attach(io:res_photo, filename: "red-#{i}.jpeg")
end



restaurant19 = Restaurant.create!(
  name: "SOL Mexican Cocina - Newport Beach",
  description: "Our restaurants are inspired by the best of coastal Baja California: Warm, welcoming, friendly, inspired by old and new Mexican design. SOL’s kitchens feature our unique spin on fresh, healthy, coastal Mexican food, lovingly made from scratch.",
  category: "Mexican",
  address: "251 Pacific Coast Hwy, Newport Beach, CA 92660",
  city: "Newport Beach",
  lat: 33.61606668865622, 
  lng: -117.9015669953016,
  website: "solcocina.com",
  phone: "(949) 675-9800"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/sol-#{i}.jpeg")
  restaurant19.photos.attach(io:res_photo, filename: "sol-#{i}.jpeg")
end



restaurant20 = Restaurant.create!(
  name: "Hamasaku",
  description: "Hamasaku is a sophisticated harmony of Japanese cuisine and Californian exuberance. Sincere and succinct, Hamasaku's literal translation is one who creates food from the sea. Celebrated for its whimsical reverence for sushi and understated elegance, warmth in hospitality and modern sensibilities underscore a quintessential dining experience.",
  category: "Japanese",
  address: "11043 Santa Monica Blvd, Los Angeles, CA 90025",
  city: "Los Angeles",
  lat: 34.048577931815274,
  lng: -118.44335571059685,
  website: "www.hamasakula.com",
  phone: "(310) 479-7636"
)

(1..10).each do |i|
  res_photo = open("https://tablelog-seed.s3.us-west-1.amazonaws.com/restaurants/hamasaku-#{i}.jpeg")
  restaurant20.photos.attach(io:res_photo, filename: "hamasaku-#{i}.jpeg")
end



