import React from "react";
import { NavLink } from "react-router-dom";
import { Electronics } from "../Data/Dropdown";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Products() {
  return (
    <section id="home">
      <div>
        <nav
          className="navbar navbar-expand-lg bg-white topnav w-100"
          style={{ boxShadow: "0 1px 1px 0 rgb(0 0 0 / 16%)" }}
        >
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav ">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link fsize dropdown-toggle"
                    href="#"
                    // data-toggle="dropdown1"
                  >
                    <b>Electronics</b>
                  </a>

                  <div className="dropdown-menu menu rounded-0 border-0">
                    <div className="row pl-2 mr-2 pr-1">
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Mobiles</b>
                        </li>
                        <li>Mi</li>
                        <li>Realme</li>
                        <li>Samsung</li>
                        <li>Infinix</li>
                        <li>OPPO</li>
                        <li>Apple</li>
                        <li>Vivo</li>
                        <li>Honor</li>
                        <li>Asus</li>
                        <li>Poco X2</li>
                        <li>realme Narzo 10</li>
                        <li>Infinix Hot 9</li>
                        <li>IQOO 3</li>
                        <li>iPhone SE</li>
                        <li>Motorola razr</li>
                        <li>realme Narzo 10A</li>
                        <li>Motorola g8 power lite</li>
                      </div>
                      <div
                        className="col px-4 pt-2"
                        style={{
                          backgroundColor: "#f9f9f9",
                          backgroundSize: "cover",
                        }}
                      >
                        <li className="text-dark">
                          <b>Mobile Accessories</b>
                        </li>
                        <li>Mobile Cases</li>
                        <li>Headphones & Headsets</li>
                        <li>Power Banks</li>
                        <li>Screengaurds</li>
                        <li>Memory Cards</li>
                        <li>Smart Headphones</li>
                        <li>Mobile Cables</li>
                        <li>Mobile Charges</li>
                        <li>Mobile Holders</li>
                        <li className="text-dark">
                          <b>Smart Wearable Tech</b>
                        </li>
                        <li>Smart Watches</li>
                        <li>Smart Glasses</li>
                        <li>Smart Bands</li>
                        <li className="text-dark">
                          <b>Health Care Appliances</b>
                        </li>
                        <li>Bp Monitors</li>
                        <li>Weighing Scale</li>
                      </div>
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Laptops</b>
                        </li>
                        <li>Gaming Laptops</li>
                        <li className="text-dark">
                          <b>Desktop PCs</b>
                        </li>
                        <li className="text-dark">
                          <b>Gaming & Accessories</b>
                        </li>
                        <li className="text-dark">
                          <b>Computer Accessories</b>
                        </li>
                        <li>External Hard Disks</li>
                        <li>Pendrives</li>
                        <li>Laptop Skins & Decals</li>
                        <li>Laptop Bags</li>
                        <li>Mouse</li>
                        <li className="text-dark">
                          <b>Computer Peripherals</b>
                        </li>
                        <li>Printers & Ink Cartridges</li>
                        <li>Monitors</li>
                        <li className="text-dark" className="text-dark">
                          <b>Tablets</b>
                        </li>
                        <li>Apple iPads</li>
                      </div>
                      <div
                        className="col px-4 pt-2 pb-3"
                        style={{ backgroundColor: "#f9f9f9" }}
                      >
                        <li>Televisions</li>
                        <li className="text-dark">
                          <b>Speakers</b>
                        </li>
                        <li>Home Audio Speakers</li>
                        <li>Home Threaters</li>
                        <li>Soundbars</li>
                        <li>Bluetooth Speakers</li>
                        <li>DTH Set Top Box</li>
                        <li className="text-dark">
                          <b>Smart Home Automation</b>
                        </li>
                        <li>Google Nest</li>
                        <li className="text-dark">
                          <b>Camera</b>
                        </li>
                        <li>DSLR & Mirrorless</li>
                        <li>Compact & Bridge Cameras</li>
                        <li>Sports & Action</li>
                        <li className="text-dark">
                          <b>Camera Accessories</b>
                        </li>
                        <li>Lens</li>
                        <li>Tripods</li>
                        <li className="text-dark">
                          <b>Network Components</b>
                        </li>
                        <li>Routers</li>
                      </div>
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Featured</b>
                        </li>
                        <li>Google Assistant Store</li>
                        <li>Laptops on Buyback Guarantee</li>
                        <li>Flipkart SmartBuy</li>
                        <li>Li-Polymer Power Banks</li>
                        <li>Sony PS4 Pro & Slim</li>
                        <li>Apple Products</li>
                        <li>Microsoft Store</li>
                        <li>Lenovo Phab Series</li>
                        <li>JBL Speakers</li>
                        <li>SamrtPhones On Buyback Guarantee</li>
                        <li>Philips</li>
                        <li>Dr. Morepen</li>
                        <li>Complete Mobile Protection</li>
                        <li>Mobiles No Cost EMI</li>
                        <li>Huawei Watch Gt 2e Smart Watch</li>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item mx-5 dropdown">
                  <a
                    className="nav-link fsize dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <b>TVs & Appliances</b>
                  </a>
                  <div className="dropdown-menu menu1 rounded-0 border-0">
                    <div className="row pl-2 mr-2 pr-1">
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Television</b>
                        </li>
                        <li className="text-dark">
                          <b>New Launches</b>
                        </li>
                        <li className="text-dark">
                          <b>Smart & Ultra HD</b>
                        </li>
                        <li className="text-dark">
                          <b>Top Brands</b>
                        </li>
                        <li>Mi</li>
                        <li>Vu</li>
                        <li>Samsung</li>
                        <li>Thomoson</li>
                        <li>IFFALCON by TCL</li>
                        <li>Nokia</li>
                        <li>LG</li>
                        <li>realme</li>
                        <li>Motorola</li>
                        <li className="text-dark">
                          <b>Shop by Screen Size</b>
                        </li>
                        <li>24 & below</li>
                        <li>28 - 32</li>
                        <li>39 - 43</li>
                        <li>48 - 55</li>
                        <li>60 & above</li>
                      </div>
                      <div
                        className="col px-4 pt-2"
                        style={{
                          backgroundColor: "#f9f9f9",
                          backgroundSize: "cover",
                        }}
                      >
                        <li className="text-dark">
                          <b>Washing Machine</b>
                        </li>
                        <li>Fully Automatic Front Load</li>
                        <li>Semi Automatic Top Load</li>
                        <li>Fully Automatic Top Load</li>
                        <li className="text-dark">
                          <b>Air Conditioners</b>
                        </li>
                        <li>Inverter AC</li>
                        <li>Split ACs</li>
                        <li>Window ACs</li>
                        <li className="text-dark">
                          <b>Shop By Brand</b>
                        </li>
                        <li>LG</li>

                        <li>Hitachi</li>
                        <li>Carrier</li>

                        <li className="text-dark">
                          <b>Refrigerators</b>
                        </li>
                        <li>Single Door</li>
                        <li>Double Door</li>
                        <li>Triple Door</li>
                        <li>Side by Side</li>
                        <li>Convertible</li>
                      </div>
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Kitchen Appliances</b>
                        </li>
                        <li>Microwave Ovens</li>

                        <li>Ovens Toaster Grills (OTG)</li>
                        <li>Juicer/Mixer/Grinder</li>
                        <li>Electric Kettle</li>
                        <li>Induction Cooktops</li>
                        <li>Chimmeys</li>

                        <li>Hand Blenders</li>
                        <li>Sandwich Makers</li>

                        <li>Pop Up Toasters</li>
                        <li>Electric Cookers</li>
                        <li>Wet Grinders</li>
                        <li>Food Processors</li>
                        <li>Coffee Makers</li>
                        <li>Dishwashers</li>
                        <li className="text-dark">
                          <b>Healthy Living Appliances</b>
                        </li>
                      </div>
                      <div
                        className="col px-4 pt-2 pb-3"
                        style={{ backgroundColor: "#f9f9f9" }}
                      >
                        <li className="text-dark">
                          <b>Small Home Appliances</b>
                        </li>
                        <li>Irons</li>
                        <li>Water Purifiers</li>
                        <li>Fans</li>
                        <li>Air Coolers</li>
                        <li>Inverters</li>
                        <li>Vacuum Cleaners</li>
                        <li>Sewing Machines</li>
                        <li>Voltage Stabilizers</li>
                        <li>Water Geysers</li>
                        <li>Immersion Rods</li>
                        <li className="text-dark">
                          <b>Top Brands</b>
                        </li>
                        <li>Livpure</li>
                        <li>Philips</li>
                        <li>Bajaj</li>
                        <li>IFB</li>
                        <li>Eureka Forbes</li>
                        <li>Kaff</li>
                      </div>
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Buying Guides</b>
                        </li>
                        <li>Washing Machines</li>
                        <li>Refrigerators</li>
                        <li>Air Conditioners</li>
                        <li>Water Purifiers</li>
                        <li>Air Purifiers</li>
                        <li>Chimmeys</li>
                        <li>Water Geysers</li>
                        <li className="text-dark">
                          <b>New Launches</b>
                        </li>
                        <li>Coocaa Smart TVs</li>
                        <li>Nokia (55) 4K Android TV</li>
                        <li>Mi (32) 4A Pro Android TV</li>
                        <li>MarQ (43) FHD Smart TV</li>
                        <li>LG Refrigerators</li>
                        <li>Thomoson (40) 4K Smart TV</li>
                        <li>Whirlpool Refrigerators</li>
                        <li>Kodak (22) (32) LED TVs</li>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link fsize dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <b>Men</b>
                  </a>
                  <div className="dropdown-menu menu2 rounded-0 border-0">
                    <div className="row pl-2 mr-2 pr-1">
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Footwear</b>
                        </li>
                        <li>Sports Shoes</li>
                        <li>Casual Shoes</li>
                        <li>Formal Shoes</li>
                        <li>Sandals & Floaters</li>
                        <li>Flip-Flops</li>
                        <li>Loafers</li>
                        <li>Boots</li>
                        <li>Running Shoes</li>
                        <li>Sneakers</li>
                        <li className="text-dark">
                          <b>Men's Grooming</b>
                        </li>
                        <li>Deodorants</li>
                        <li>Perfumes</li>
                        <li>Beard Care & Grooming</li>
                        <li>Shaving & Aftershave</li>
                        <li>Sexual Wellness</li>
                      </div>
                      <div
                        className="col px-4 pt-2"
                        style={{
                          backgroundColor: "#f9f9f9",
                          backgroundSize: "cover",
                        }}
                      >
                        <li className="text-dark">
                          <b>Clothing</b>
                        </li>
                        <li className="text-dark">
                          <b>Top Wear</b>
                        </li>
                        <li>T-Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Casual Shirts</li>
                        <li className="text-dark">
                          <b>Bottom Wear</b>
                        </li>
                        <li>Jeans</li>
                        <li>Casual Trousers</li>
                        <li>Formal Trousers</li>
                        <li>Track Pants</li>
                        <li>Shorts</li>
                        <li>Cargos</li>
                        <li>Three Fourths</li>
                        <li className="text-dark">
                          <b>Suits, Blazers & Waistcoats</b>
                        </li>
                        <li className="text-dark">
                          <b>Ties,Socks,Caps & More</b>
                        </li>
                        <li className="text-dark">
                          <b>Fabrics</b>
                        </li>
                      </div>
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Winter Wear</b>
                        </li>
                        <li>Sweatshirts</li>
                        <li>Jackets</li>
                        <li>Sweater</li>
                        <li>Tracksuits</li>
                        <li className="text-dark">
                          <b>Ethnic Wear</b>
                        </li>
                        <li>Kurta</li>
                        <li>Ethnic Sets</li>
                        <li>Sherwanis</li>
                        <li>Ethnic Pyjama</li>
                        <li>Dhoti</li>
                        <li>Lungi</li>
                        <li className="text-dark">
                          <b>Innerwear & Loungewear</b>
                        </li>
                        <li>Briefs & Trunks</li>
                        <li>Vests</li>
                        <li>Boxers</li>
                        <li>Pyjamas & Lounge Pants</li>
                        <li>Thermals</li>
                        <li>Night Suits</li>

                        <li className="text-dark">
                          <b>Raincoats & Windcheaters</b>
                        </li>
                      </div>
                      <div
                        className="col px-4 pt-2"
                        style={{
                          backgroundColor: "#f9f9f9",
                          backgroundSize: "cover",
                        }}
                      >
                        <li className="text-dark">
                          <b>Watches</b>
                        </li>
                        <li>Fastrack</li>
                        <li>Casio</li>
                        <li>Titan</li>
                        <li>Fossil</li>
                        <li>Sonata</li>
                        <li className="text-dark">
                          <b>Accessories</b>
                        </li>
                        <li>Backpacks</li>
                        <li>Wallets</li>
                        <li>Belts</li>
                        <li>Sunglasses</li>
                        <li>Luggage & Travel</li>
                        <li>Frames</li>
                        <li>Jewellery</li>
                        <li className="text-dark">
                          <b>Sports & Fitness Store</b>
                        </li>
                      </div>
                      <div className="col px-4 pt-2 pb-3">
                        <li className="text-dark">
                          <b>Smart Watches</b>
                        </li>
                        <li className="text-dark">
                          <b>Smart Brands</b>
                        </li>
                        <li className="text-dark">
                          <b>Personal Care Appliances</b>
                        </li>
                        <li>Trimmers</li>
                        <li>Shavers</li>
                        <li>Grooming Kits</li>
                        <li className="text-dark">
                          <b>Featured</b>
                        </li>
                        <li>Watches Store</li>
                        <li>Footwear Club</li>
                        <li>Bags & Wallet</li>
                        <li>T-Shirt Store</li>
                        <li>Adidas</li>
                        <li>Beardo</li>
                        <li>Reebok</li>
                        <li>Skechers</li>
                        <li>Nike</li>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item mx-5 dropdown">
                  <a
                    className="nav-link fsize dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <b>Women</b>
                  </a>
                  <div className="dropdown-menu menu3 rounded-0 border-0">
                    <div className="row pl-2 mr-2 pr-1">
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Clothing</b>
                        </li>
                        <li className="text-dark">
                          <b>Women Western & Maternity Wear</b>
                        </li>
                        <li>Topwear</li>
                        <li>Dresses</li>
                        <li>Jeans</li>
                        <li>Shorts</li>
                        <li>Skirts</li>
                        <li>Jeggings & Tights</li>
                        <li>Trousers & Capris</li>
                        <li className="text-dark">
                          <b>Lingerie & Sleepwear</b>
                        </li>
                        <li>Bras</li>
                        <li>Panties</li>
                        <li>Lingerie Sets</li>
                        <li>Night Dresses & Nighties</li>
                        <li>Shapewear</li>
                        <li>Camisoles & Slips</li>
                        <li className="text-dark">
                          <b>Swim & Beachwear</b>
                        </li>
                        <li className="text-dark">
                          <b>Party Dresses</b>
                        </li>
                        <li className="text-dark">
                          <b>Sports Wear</b>
                        </li>
                        <li className="text-dark">
                          <b>Winter Wear</b>
                        </li>
                      </div>
                      <div
                        className="col px-4 pt-2"
                        style={{
                          backgroundColor: "#f9f9f9",
                          backgroundSize: "cover",
                        }}
                      >
                        <li className="text-dark">
                          <b>Ethnic Wear</b>
                        </li>
                        <li>Sarees</li>
                        <li>Kurtas & Kurtis</li>
                        <li>Dress Material</li>
                        <li>Lehenga Choli</li>
                        <li>Blouse</li>
                        <li>Kurtas Sets & Salwar Suits</li>
                        <li>Gowns</li>
                        <li>Dupattas</li>
                        <li className="text-dark">
                          <b>Ethnic Bottoms</b>
                        </li>
                        <li>Leggings & Churidars</li>
                        <li>Palazzos</li>
                        <li>Shararas</li>
                        <li>Salwars & Patiala</li>
                        <li>Dhoti Pants</li>
                        <li>Ethnic Trousers</li>
                        <li>Saree Shapewear & Petticoats</li>
                      </div>
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Footwear</b>
                        </li>
                        <li className="text-dark">
                          <b>Sandals</b>
                        </li>
                        <li>Flats</li>
                        <li>Heels</li>
                        <li>Wedges</li>
                        <li className="text-dark">
                          <b>Shoes</b>
                        </li>
                        <li>Sports Shoes</li>
                        <li>Casual Shoes</li>
                        <li>Boots</li>
                        <li className="text-dark">
                          <b>Ballerinas</b>
                        </li>
                        <li className="text-dark">
                          <b>Slippers & Flip-Flop's</b>
                        </li>
                        <li className="text-dark">
                          <b>Watches</b>
                        </li>
                        <li className="text-dark">
                          <b>Smart Watches</b>
                        </li>
                        <li className="text-dark">
                          <b>Personal Care Appliances</b>
                        </li>
                        <li>Hair Straightners</li>
                        <li>Hair Dryers</li>
                        <li>Epilators</li>
                      </div>
                      <div
                        className="col px-4 pt-2 pb-3"
                        style={{ backgroundColor: "#f9f9f9" }}
                      >
                        <li className="text-dark">
                          <b>Beauty & Grooming</b>
                        </li>
                        <li>Make Up</li>
                        <li>Skin Care</li>
                        <li>Hair Care</li>
                        <li>Bath & Spa</li>
                        <li>Deodorants & Perfumes</li>
                        <li className="text-dark">
                          <b>Jewellery</b>
                        </li>
                        <li>Artificial Jewellery</li>
                        <li>Silver Jewellery</li>
                        <li>Precious Jewellery</li>
                        <li>Coins and Bars</li>
                        <li className="text-dark">
                          <b>Accessories</b>
                        </li>
                        <li>Handbags</li>
                        <li>Shoulder Bags</li>
                        <li>Totes</li>
                        <li>Sling bags</li>

                        <li>Clutches</li>
                        <li>Wallets & Belts</li>
                        <li>Luggage & Travel</li>
                        <li>Sunglasses</li>
                        <li>Frames</li>
                      </div>
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Featured</b>
                        </li>
                        <li>Forever 21</li>
                        <li>Accessorize</li>
                        <li>W</li>
                        <li>Pantaloons</li>
                        <li>Chemistry</li>
                        <li>Lakme</li>
                        <li>Nivea</li>
                        <li>Catwalk</li>
                        <li>Titan-Raga</li>
                        <li>Fastrack</li>
                        <li>Divastri</li>
                        <li>Rare Roots</li>
                        <li>Anmi</li>
                        <li>Coins & Bars</li>
                        <li>Crocs</li>
                        <li className="text-dark">
                          <b>Trending today!</b>
                        </li>
                        <li>Ruffles & Frills</li>
                        <li>Pastel Kurtas & Kurtis</li>
                        <li>Designer Net Sarees</li>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link fsize dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <b>Baby & Kids</b>
                  </a>
                  <div className="dropdown-menu menu4 rounded-0 border-0">
                    <div className="row pl-2 mr-2 pr-1">
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Clothing</b>
                        </li>
                        <li className="text-dark">
                          <b>Kids Clothing</b>
                        </li>
                        <li className="text-dark">
                          <b>Boys Clothing</b>
                        </li>
                        <li>T-Shirts</li>
                        <li>Ethnic Wear</li>
                        <li>Shorts</li>
                        <li>Shirts</li>
                        <li>Innerwear</li>
                        <li className="text-dark">
                          <b>Girls Clothing</b>
                        </li>
                        <li>Dresses & Skirts</li>
                        <li>Ethnic Wear</li>
                        <li>T-Shirts & Tops</li>
                        <li>Innerwear</li>
                        <li className="text-dark">
                          <b>Baby Boys Clothing</b>
                        </li>
                        <li>Combos Sets</li>
                        <li>T-Shirts</li>
                        <li>Innerwear</li>
                        <li className="text-dark">
                          <b>Baby Girls Clothing</b>
                        </li>
                        <li>Combos Sets</li>
                        <li>Dresses & Gowns</li>
                        <li>Innerwear</li>
                      </div>
                      <div
                        className="col px-4 pt-2"
                        style={{
                          backgroundColor: "#f9f9f9",
                          backgroundSize: "cover",
                        }}
                      >
                        <li className="text-dark">
                          <b>Kids Footwear</b>
                        </li>
                        <li className="text-dark">
                          <b>Boys Footwear</b>
                        </li>
                        <li>Sandals</li>
                        <li>Sport Shoes</li>
                        <li className="text-dark">
                          <b>Girls Footwear</b>
                        </li>
                        <li>Flats & Bellies</li>
                        <li>Sports Shoes</li>
                        <li className="text-dark">
                          <b>Infant Footwear</b>
                        </li>
                        <li className="text-dark">
                          <b>Character Shoes</b>
                        </li>
                        <li>Kids Watches</li>
                        <li>Kids Sunglasses</li>
                        <li className="text-dark">
                          <b>Kids Winter Wear</b>
                        </li>
                        <li className="text-dark">
                          <b>Boys Winter Wear</b>
                        </li>
                        <li>Boys Sweatshirts</li>
                        <li>Boys Jackets</li>
                        <li className="text-dark">
                          <b>Girls Winter Wear</b>
                        </li>
                        <li>Girls Sweatshirts</li>
                        <li>Girls Jackets</li>
                        <li>Infant Winter Wear</li>
                        <li>Thermals</li>
                      </div>
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Toys</b>
                        </li>

                        <li>Remote Control Toys</li>
                        <li>Educational Toys</li>
                        <li>Soft Toys</li>
                        <li>Cars & Die-cast Vehicles</li>
                        <li>Outdoor Toys</li>
                        <li>Action Figures</li>
                        <li>Board Games</li>
                        <li>Musical Toys</li>
                        <li>Dolls & Doll Houses</li>
                        <li>Puzzels</li>
                        <li>S.T.E.M Toys</li>
                        <li>Helicopters & Drones</li>
                        <li>Toy Guns</li>
                        <li>Party Supplies</li>
                        <li className="text-dark">
                          <b>School Supplies</b>
                        </li>
                        <li>School Bags</li>
                        <li>School Combo Sets</li>
                        <li>Lunch Box</li>
                      </div>
                      <div
                        className="col px-4 pt-2 pb-3"
                        style={{ backgroundColor: "#f9f9f9" }}
                      >
                        <li className="text-dark">
                          <b>Baby Care</b>
                        </li>
                        <li>Diapers</li>
                        <li>Wipes</li>
                        <li>Diapering & Potty Training</li>
                        <li>Baby Bath, Hair & Skin Care</li>
                        <li>Baby Grooming</li>

                        <li>Baby Bathing Accessories</li>
                        <li>Baby Gift Sets & Combo</li>
                        <li>Baby Oral Care</li>
                        <li>Nursing & Breast Feeding</li>
                        <li>Baby Food</li>
                        <li>Baby Feeding Bottle & Accessories</li>
                        <li>Baby Feeding Utensils & Accessories</li>
                        <li>Baby Bedding</li>
                        <li>Baby Gear</li>
                        <li>Baby Medical & Health Care</li>
                        <li>Baby Proofing & Saftey</li>
                        <li>Baby Cleaners & Detergents</li>
                      </div>
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Featured Brands</b>
                        </li>
                        <li>Miss & Chief</li>
                        <li>Barbie</li>
                        <li>Disney</li>
                        <li>United Colors of Benetton</li>
                        <li>The Children Place</li>
                        <li>US Polo</li>
                        <li>Flying Machine</li>
                        <li>Crocs</li>
                        <li>Puma</li>
                        <li>Funskool</li>
                        <li>Lego</li>
                        <li>Luvlap</li>
                        <li>Mamy Poko</li>
                        <li>Mee Mee</li>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item mx-5 dropdown">
                  <a
                    className="nav-link fsize dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <b>Home & Furniture</b>
                  </a>
                  <div className="dropdown-menu menu5 rounded-0 border-0">
                    <div className="row pl-2 mr-2 pr-1">
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Clothing</b>
                        </li>
                        <li className="text-dark">
                          <b>Women Western & Maternity Wear</b>
                        </li>
                        <li>Topwear</li>
                        <li>Dresses</li>
                        <li>Jeans</li>
                        <li>Shorts</li>
                        <li>Skirts</li>
                        <li>Jeggings & Tights</li>
                        <li>Trousers & Capris</li>
                        <li className="text-dark">
                          <b>Lingerie & Sleepwear</b>
                        </li>
                        <li>Bras</li>
                        <li>Panties</li>
                        <li>Lingerie Sets</li>
                        <li>Night Dresses & Nighties</li>
                        <li>Shapewear</li>
                        <li>Camisoles & Slips</li>
                        <li className="text-dark">
                          <b>Swim & Beachwear</b>
                        </li>
                        <li className="text-dark">
                          <b>Party Dresses</b>
                        </li>
                        <li className="text-dark">
                          <b>Sports Wear</b>
                        </li>
                        <li className="text-dark">
                          <b>Winter Wear</b>
                        </li>
                      </div>
                      <div
                        className="col px-4 pt-2"
                        style={{
                          backgroundColor: "#f9f9f9",
                          backgroundSize: "cover",
                        }}
                      >
                        <li className="text-dark">
                          <b>Ethnic Wear</b>
                        </li>
                        <li>Sarees</li>
                        <li>Kurtas & Kurtis</li>
                        <li>Dress Material</li>
                        <li>Lehenga Choli</li>
                        <li>Blouse</li>
                        <li>Kurtas Sets & Salwar Suits</li>
                        <li>Gowns</li>
                        <li>Dupattas</li>
                        <li className="text-dark">
                          <b>Ethnic Bottoms</b>
                        </li>
                        <li>Leggings & Churidars</li>
                        <li>Palazzos</li>
                        <li>Shararas</li>
                        <li>Salwars & Patiala</li>
                        <li>Dhoti Pants</li>
                        <li>Ethnic Trousers</li>
                        <li>Saree Shapewear & Petticoats</li>
                      </div>
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Footwear</b>
                        </li>
                        <li className="text-dark">
                          <b>Sandals</b>
                        </li>
                        <li>Flats</li>
                        <li>Heels</li>
                        <li>Wedges</li>
                        <li className="text-dark">
                          <b>Shoes</b>
                        </li>
                        <li>Sports Shoes</li>
                        <li>Casual Shoes</li>
                        <li>Boots</li>
                        <li className="text-dark">
                          <b>Ballerinas</b>
                        </li>
                        <li className="text-dark">
                          <b>Slippers & Flip-Flop's</b>
                        </li>
                        <li className="text-dark">
                          <b>Watches</b>
                        </li>
                        <li className="text-dark">
                          <b>Smart Watches</b>
                        </li>
                        <li className="text-dark">
                          <b>Personal Care Appliances</b>
                        </li>
                        <li>Hair Straightners</li>
                        <li>Hair Dryers</li>
                        <li>Epilators</li>
                      </div>
                      <div
                        className="col px-4 pt-2 pb-3"
                        style={{ backgroundColor: "#f9f9f9" }}
                      >
                        <li className="text-dark">
                          <b>Beauty & Grooming</b>
                        </li>
                        <li>Make Up</li>
                        <li>Skin Care</li>
                        <li>Hair Care</li>
                        <li>Bath & Spa</li>
                        <li>Deodorants & Perfumes</li>
                        <li className="text-dark">
                          <b>Jewellery</b>
                        </li>
                        <li>Artificial Jewellery</li>
                        <li>Silver Jewellery</li>
                        <li>Precious Jewellery</li>
                        <li>Coins and Bars</li>
                        <li className="text-dark">
                          <b>Accessories</b>
                        </li>
                        <li>Handbags</li>
                        <li>Shoulder Bags</li>
                        <li>Totes</li>
                        <li>Sling bags</li>

                        <li>Clutches</li>
                        <li>Wallets & Belts</li>
                        <li>Luggage & Travel</li>
                        <li>Sunglasses</li>
                        <li>Frames</li>
                      </div>
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Featured</b>
                        </li>
                        <li>Forever 21</li>
                        <li>Accessorize</li>
                        <li>W</li>
                        <li>Pantaloons</li>
                        <li>Chemistry</li>
                        <li>Lakme</li>
                        <li>Nivea</li>
                        <li>Catwalk</li>
                        <li>Titan-Raga</li>
                        <li>Fastrack</li>
                        <li>Divastri</li>
                        <li>Rare Roots</li>
                        <li>Anmi</li>
                        <li>Coins & Bars</li>
                        <li>Crocs</li>
                        <li className="text-dark">
                          <b>Trending today!</b>
                        </li>
                        <li>Ruffles & Frills</li>
                        <li>Pastel Kurtas & Kurtis</li>
                        <li>Designer Net Sarees</li>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link fsize dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <b>Sports, Books & More</b>
                  </a>
                  <div className="dropdown-menu menu6 rounded-0 border-0">
                    <div className="row pl-2 mr-2 pr-1">
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Clothing</b>
                        </li>
                        <li className="text-dark">
                          <b>Kids Clothing</b>
                        </li>
                        <li className="text-dark">
                          <b>Boys Clothing</b>
                        </li>
                        <li>T-Shirts</li>
                        <li>Ethnic Wear</li>
                        <li>Shorts</li>
                        <li>Shirts</li>
                        <li>Innerwear</li>
                        <li className="text-dark">
                          <b>Girls Clothing</b>
                        </li>
                        <li>Dresses & Skirts</li>
                        <li>Ethnic Wear</li>
                        <li>T-Shirts & Tops</li>
                        <li>Innerwear</li>
                        <li className="text-dark">
                          <b>Baby Boys Clothing</b>
                        </li>
                        <li>Combos Sets</li>
                        <li>T-Shirts</li>
                        <li>Innerwear</li>
                        <li className="text-dark">
                          <b>Baby Girls Clothing</b>
                        </li>
                        <li>Combos Sets</li>
                        <li>Dresses & Gowns</li>
                        <li>Innerwear</li>
                      </div>
                      <div
                        className="col px-4 pt-2"
                        style={{
                          backgroundColor: "#f9f9f9",
                          backgroundSize: "cover",
                        }}
                      >
                        <li className="text-dark">
                          <b>Kids Footwear</b>
                        </li>
                        <li className="text-dark">
                          <b>Boys Footwear</b>
                        </li>
                        <li>Sandals</li>
                        <li>Sport Shoes</li>
                        <li className="text-dark">
                          <b>Girls Footwear</b>
                        </li>
                        <li>Flats & Bellies</li>
                        <li>Sports Shoes</li>
                        <li className="text-dark">
                          <b>Infant Footwear</b>
                        </li>
                        <li className="text-dark">
                          <b>Character Shoes</b>
                        </li>
                        <li>Kids Watches</li>
                        <li>Kids Sunglasses</li>
                        <li className="text-dark">
                          <b>Kids Winter Wear</b>
                        </li>
                        <li className="text-dark">
                          <b>Boys Winter Wear</b>
                        </li>
                        <li>Boys Sweatshirts</li>
                        <li>Boys Jackets</li>
                        <li className="text-dark">
                          <b>Girls Winter Wear</b>
                        </li>
                        <li>Girls Sweatshirts</li>
                        <li>Girls Jackets</li>
                        <li>Infant Winter Wear</li>
                        <li>Thermals</li>
                      </div>
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Toys</b>
                        </li>

                        <li>Remote Control Toys</li>
                        <li>Educational Toys</li>
                        <li>Soft Toys</li>
                        <li>Cars & Die-cast Vehicles</li>
                        <li>Outdoor Toys</li>
                        <li>Action Figures</li>
                        <li>Board Games</li>
                        <li>Musical Toys</li>
                        <li>Dolls & Doll Houses</li>
                        <li>Puzzels</li>
                        <li>S.T.E.M Toys</li>
                        <li>Helicopters & Drones</li>
                        <li>Toy Guns</li>
                        <li>Party Supplies</li>
                        <li className="text-dark">
                          <b>School Supplies</b>
                        </li>
                        <li>School Bags</li>
                        <li>School Combo Sets</li>
                        <li>Lunch Box</li>
                      </div>
                      <div
                        className="col px-4 pt-2 pb-3"
                        style={{ backgroundColor: "#f9f9f9" }}
                      >
                        <li className="text-dark">
                          <b>Baby Care</b>
                        </li>
                        <li>Diapers</li>
                        <li>Wipes</li>
                        <li>Diapering & Potty Training</li>
                        <li>Baby Bath, Hair & Skin Care</li>
                        <li>Baby Grooming</li>

                        <li>Baby Bathing Accessories</li>
                        <li>Baby Gift Sets & Combo</li>
                        <li>Baby Oral Care</li>
                        <li>Nursing & Breast Feeding</li>
                        <li>Baby Food</li>
                        <li>Baby Feeding Bottle & Accessories</li>
                        <li>Baby Feeding Utensils & Accessories</li>
                        <li>Baby Bedding</li>
                        <li>Baby Gear</li>
                        <li>Baby Medical & Health Care</li>
                        <li>Baby Proofing & Saftey</li>
                        <li>Baby Cleaners & Detergents</li>
                      </div>
                      <div className="col px-4 pt-2">
                        <li className="text-dark">
                          <b>Featured Brands</b>
                        </li>
                        <li>Miss & Chief</li>
                        <li>Barbie</li>
                        <li>Disney</li>
                        <li>United Colors of Benetton</li>
                        <li>The Children Place</li>
                        <li>US Polo</li>
                        <li>Flying Machine</li>
                        <li>Crocs</li>
                        <li>Puma</li>
                        <li>Funskool</li>
                        <li>Lego</li>
                        <li>Luvlap</li>
                        <li>Mamy Poko</li>
                        <li>Mee Mee</li>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item mx-5 dropdown">
                  <NavLink className="nav-link fsize" to="/">
                    <b>Flights</b>
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <NavLink className="nav-link fsize" to="/">
                    <b>Offer Zone</b>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
          <div className="row py-2">
            <div className="col-2">
              <div className="card shadow-sm border-0 rounded-0 py-3">
                <h6 className="px-3 font-weight-bolder">FILTERS</h6>
                <hr></hr>
                <div
                  className="px-3 pb-3 font-weight-bold"
                  style={{ fontSize: "12px" }}
                >
                  CATEGORIES
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
                <hr></hr>
                <div
                  className="px-3 pb-3 font-weight-bold"
                  style={{ fontSize: "12px" }}
                >
                  PRICE
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
                <hr></hr>
                <div
                  className="px-3 pb-3 font-weight-bold"
                  style={{ fontSize: "12px" }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkbox"
                  />
                  <img
                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                    className="img-fluid pl-3"
                    style={{ height: "21px" }}
                  ></img>
                </div>
                <div className="">
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>CUSTOMER RATINGS</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox"
                        />
                        <h7 className="font-weight-bolder pl-3">4★ & Above</h7>
                      </div>
                      <div className="mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox"
                        />
                        <h7 className="font-weight-bolder pl-3">3★ & Above</h7>
                      </div>
                      <div className="mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox"
                        />
                        <h7 className="font-weight-bolder pl-3">2★ & Above</h7>
                      </div>
                      <div className="mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox"
                        />{" "}
                        <h7
                          className="font-weight-bolder"
                          style={{ marginLeft: "12px" }}
                        >
                          1★ & Above
                        </h7>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>DISCOUNT</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox"
                        />
                        <h7 className="font-weight-bolder pl-3">70% or more</h7>
                      </div>
                      <div className="mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox"
                        />
                        <h7 className="font-weight-bolder pl-3">60% or more</h7>
                      </div>
                      <div className="mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox"
                        />
                        <h7 className="font-weight-bolder pl-3">50% or more</h7>
                      </div>
                      <div className="mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox"
                        />{" "}
                        <h7 className="font-weight-bolder pl-3">40% or more</h7>
                      </div>
                      <div className="mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox"
                        />{" "}
                        <h7 className="font-weight-bolder pl-3">30% or more</h7>
                      </div>
                      <div className="mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox"
                        />{" "}
                        <h7 className="font-weight-bolder pl-3">
                          30% and below
                        </h7>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>AVAILABILITY</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox"
                        />{" "}
                        <h7 className="font-weight-bolder pl-3">
                          Include Out of Stock
                        </h7>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>OFFERS</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox"
                        />{" "}
                        <h7 className="font-weight-bolder pl-3">
                          Special Price
                        </h7>
                      </div>
                      <div className="mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox"
                        />{" "}
                        <h7 className="font-weight-bolder pl-3">
                          Buy More, Save More
                        </h7>
                      </div>
                      <div className="mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox"
                        />{" "}
                        <h7 className="font-weight-bolder pl-3">No Cost EMI</h7>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography> GST INVOICE AVAILABLE</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox"
                        />{" "}
                        <h7 className="font-weight-bolder pl-3">
                          GST Invoice Available
                        </h7>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="col-10">
              <div className="card rounded-0 border-0 shadow-sm">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
