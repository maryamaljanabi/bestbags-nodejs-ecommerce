const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  //----------------------Backpacks
  const backpacks_titles = [
    "Classic Blue Backpack",
    "Black Fjallraven Backpack",
    "Brown and Green Leather Backpack",
    "Grey Stylish Backpack",
    "Elegant Black Backpack",
    "Practical Blue Backpack With Leather Straps",
    "Soft Classic Biege Backpack",
    "Practical Durable Backpack",
    "Comfortable Laptop Backpack",
    "Extra Large Grey Backpack",
  ];
  const backpacks_imgs = [
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1562546106-b9cb3a76a206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "https://images.pexels.com/photos/2422476/pexels-photo-2422476.png?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "https://images.pexels.com/photos/1545998/pexels-photo-1545998.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "https://live.staticflickr.com/3428/3361015646_303a2d0571_b.jpg",
    "https://storage.needpix.com/rsynced_images/backpack-2634622_1280.jpg",
  ];

  //--------------------Travel Bags
  const travel_titles = [
    "Stylish Pastel Pink Travel Bag",
    "A Fahionable Set of Two Pink Travel Bags",
    "White and Black Hard Luggage",
    "Rainbow Dotted Duffle Bag Luggage",
    "Blue and Gray Classic Suitcase",
    "A Set of Three Hard Durable Suitcases",
    "Light Blue Hard Luggage",
    "Black Leather Vintage Suitcase",
    "A Set of Three Large Travel Bags",
    "Two Stylish Light Green Travel Bags With Different Sizes",
    "Simple Blue Luggage with Many Compartments",
  ];

  const travel_imgs = [
    "https://p1.pxfuel.com/preview/899/786/420/travel-bag-hard-and-bag.jpg",
    "https://p1.pxfuel.com/preview/479/120/981/luggage-metallic-luguagge-case.jpg",
    "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    "https://cdn.pixabay.com/photo/2019/06/20/16/10/duffle-bag-4287485_960_720.png",
    "https://p0.pikrepo.com/preview/74/133/blue-and-gray-suede-rolling-luggage-thumbnail.jpg",
    "https://cdn.pixabay.com/photo/2019/01/22/15/53/suitcases-3948389_960_720.png",
    "https://cdn.pixabay.com/photo/2019/07/09/11/52/travel-bag-4326738_960_720.jpg",
    "https://p0.pxfuel.com/preview/942/496/984/various-bag-bags-luggage.jpg",
    "https://p0.pxfuel.com/preview/273/580/962/travelvarious-bag-bags-holiday.jpg",
    "https://p1.pxfuel.com/preview/926/897/247/travel-bag-hard-and-bag.jpg",
    "https://p0.pxfuel.com/preview/963/699/697/bag-blue-handbag-white.jpg",
  ];

  //--------------------Briefcases
  const briefcases_titles = [
    "Aluminium Metal Suitcase",
    "Black Leather Durable Suitcase",
  ];

  const briefcases_imgs = [
    "https://upload.wikimedia.org/wikipedia/commons/6/6d/Aluminium_Briefcase.jpg",
    "http://res.freestockphotos.biz/pictures/1/1751-black-leather-briefcase-on-a-white-background-pv.jpg",
  ];

  //--------------------Mini Bags
  const miniBags_titles = [
    "Pink Leather Crossbody Bag",
    "Stylish Pink Crossbody Bag",
    "Mini Black Carra Shoulder Bag",
    "White Leather Mini Bag with Crossbody Strap",
    "Blue Jeans Mini Bag",
    "Biege Be Dior Mini Bag with Crossbody Strap",
    "Red Be Dior Mini Bag with Crossbody Strap",
    "Light Blue Mini Bag with Golden Strap",
    "Light Green Mini Bag with Golden Strap",
    "Pastel Pink Mini Bag with Golden Strap",
    "Biege Leather Crossbody Bag",
    "White Leather Crossbody Bag",
    "Elegant White Mini Bag with Silver Strap",
    "Simple Red Mini Bag",
  ];
  const miniBags_imgs = [
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/DKNY_Mini_Flap_Crossbody_W_-_SS_Crossbody_R1513004_Kalbsleder_beige_%281%29_%2816080518124%29.jpg",
    "https://p1.pxfuel.com/preview/177/215/691/handbag-bag-today-the-postwoman-fashion-style-skin.jpg",
    "https://p2.piqsels.com/preview/392/1016/905/handbags-white-fashion-bag-shoulder-bag.jpg",
    "https://c.pxhere.com/photos/37/cb/camera_bag_scene_package_fashion-900156.jpg!d",
    "https://c.pxhere.com/photos/94/0e/bag_dior_x_n-867928.jpg!d",
    "https://c.pxhere.com/photos/92/ad/bag_dior_u-867943.jpg!d",
    "https://c.pxhere.com/photos/5b/ea/bag_fashion_style-518819.jpg!d",
    "https://c.pxhere.com/photos/19/aa/bag_fashion_style-518820.jpg!d",
    "https://c.pxhere.com/photos/41/9e/bag_fashion_style-518821.jpg!d",
    "https://c.pxhere.com/photos/24/f9/bag_fashion_style-518803.jpg!d",
    "https://c.pxhere.com/photos/16/e8/bag_fashion_style-518804.jpg!d",
    "https://images.unsplash.com/photo-1564422167509-4f8763ff046e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    "https://c.pxhere.com/photos/87/f0/bag_crimson_product_photos_padlock_bag_women_bags_dot_white-1000331.jpg!d",
  ];

  //--------------------Large Handags

  const largeHandbags_titles = [
    "Elegant Shiny Brown Leather Handbag",
    "Black Leather Handbag with Golden Chains",
    "Elegant Black Leather Handbag",
    "Stylish Blue Handbag with its Purse",
    "A set of Two Elegant Handbags",
    "Practical Blue Leather Handbag with its Purse",
    "Simple Black Leather Handbag",
    "Golden Leather Handbag",
    "Shiny Black Leather Handbag",
    "Gray and Yellow Flowery Shoulder Bag",
    "Blue and Brown Leather Handbag with Shoulder Strap",
  ];
  const largeHandbags_imgs = [
    "https://c.pxhere.com/photos/a8/b7/handbag_purse_fashion_bag_female_style_women_elegance-703150.jpg!d",
    "https://c.pxhere.com/photos/b6/5c/handbag_purse_fashion_bag_female_women_accessory_modern-703145.jpg!d",
    "https://c.pxhere.com/photos/4b/82/handbag_purse_fashion_bag_female_style_women_lady-703156.jpg!d",
    "https://images.unsplash.com/photo-1564422170194-896b89110ef8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    "https://images.unsplash.com/photo-1564222256577-45e728f2c611?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    "https://p1.pxfuel.com/preview/680/478/429/online-shopping-lisaswardrobe-handbags-shopping.jpg",
    "https://p1.pxfuel.com/preview/762/878/334/handbag-black-gold.jpg",
    "https://p1.pxfuel.com/preview/550/178/484/bag-handbag-haberdashery.jpg",
    "https://p1.pxfuel.com/preview/5/396/904/package-briefcase-leather-bags.jpg",
    "https://p1.pxfuel.com/preview/843/210/542/vera-bradley-purse-handbag-shoulder-bag.jpg",
    "https://p1.pxfuel.com/preview/57/634/392/purse-bag-handbag-fashion.jpg",
  ];

  //-----------------------Purses
  const purses_titles = [
    "Hot Pink Leather Purse",
    "Glittery Black Purse with Golden Strap",
    "Practical Black Leather Purse",
    "Red Leather Pouche with Free Earrings",
    "Lavender Leather Purse",
    "White and Black Snakeskin Purse",
    "Dark Brown Simple Purse",
    "Red Kipling Pouche",
    "Biege Kipling Pouche",
  ];
  const purses_imgs = [
    "https://c.pxhere.com/photos/c2/fc/bag_fashion_style-518806.jpg!d",
    "https://images.unsplash.com/photo-1564222195116-8a74a96b2c8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    "https://c.pxhere.com/photos/cb/9e/wallet_black_clutch_purse_leather_fashion_style_accessory-952715.jpg!d",
    "https://c.pxhere.com/photos/63/90/purse_handbag_fashion_bag_style_design_leather_accessory-780266.jpg!d",
    "https://c.pxhere.com/photos/2d/da/wallet_purple_wallet_purple_money_purse_billfold_lavender_fashion-863005.jpg!d",
    "https://images.unsplash.com/photo-1563904092230-7ec217b65fe2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    "https://www.publicdomainpictures.net/pictures/60000/velka/leather-purse-isolated-background.jpg",
    "https://c.pxhere.com/photos/94/29/bag_handbag_purse_pink_red_fashion_glamour_accessory-952105.jpg!d",
    "https://c.pxhere.com/photos/9b/57/bag_purse_handbag_fashion_style_accessory_white-1336949.jpg!d",
  ];

  //-----------------Totes

  const totes_titles = [
    "Plain White Cotton Tote",
    "Elegant Red Leather Tote",
    "Handmade Embroided White Tote with Red Roses",
    "Multicolored White Tote",
    "Owl White Cotton Tote",
    "Simple Grey Zipped Tote",
    "Earth Positive Tote Bag",
    "Deep Purple Handstamped Tote",
    "White Cotton Tote with Drawings",
    "Grey Wolf Tote",
    "Yellow and Green Bold Tote",
  ];
  const totes_imgs = [
    "https://p1.pxfuel.com/preview/1021/986/529/bag-cotton-cotton-bag-textile-wall-white.jpg",
    "https://p1.pxfuel.com/preview/741/996/910/handbag-fashion-fashionable-woman.jpg",
    "https://p1.pxfuel.com/preview/58/205/88/shop-bag-bags-sale.jpg",
    "https://p1.pxfuel.com/preview/367/279/652/bag-bag-elephant-cloth-bag.jpg",
    "https://p0.pikrepo.com/preview/627/393/white-blue-and-red-owl-print-tote-bag.jpg",
    "https://farm5.staticflickr.com/4022/4714518639_8d9e06be13_b.jpg",
    "https://live.staticflickr.com/3538/3674472019_727d8c4669.jpg",
    "https://live.staticflickr.com/5161/5342130557_7fa8cc5935_b.jpg",
    "https://p1.pxfuel.com/preview/368/540/34/bag-cotton-natural-cotton-bag-advertising-royalty-free-thumbnail.jpg",
    "https://p1.pxfuel.com/preview/726/975/813/bag-handbag-womans-bag-sport-bag.jpg",
    "https://p1.pxfuel.com/preview/844/198/547/bag-burlap-advertising.jpg",
  ];

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 10, max: 50 }),
          manufacturer: faker.company.companyName(0),
          available: true,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(backpacks_titles, backpacks_imgs, "Backpacks");
  await seedProducts(briefcases_titles, briefcases_imgs, "Briefcases");
  await seedProducts(travel_titles, travel_imgs, "Travel");
  await seedProducts(miniBags_titles, miniBags_imgs, "Mini Bags");
  await seedProducts(
    largeHandbags_titles,
    largeHandbags_imgs,
    "Large Handbags"
  );
  await seedProducts(purses_titles, purses_imgs, "Purses");
  await seedProducts(totes_titles, totes_imgs, "Totes");

  await closeDB();
}

seedDB();
