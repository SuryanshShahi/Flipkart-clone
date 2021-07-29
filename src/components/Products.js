import React from "react";
import { Electronics } from "../Data/Dropdown";

function Products() {
  return (
    <section id="home">
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-white topnav w-100 fixed-top"
          style={{ boxShadow: "0 1px 1px 0 rgb(0 0 0 / 16%)" }}
        >
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav mx-4 px-2">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link fsize dropdown-toggle text-dark"
                    href="#"
                    // data-toggle="dropdown1"
                  >
                    Electronics
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
                    className="nav-link fsize dropdown-toggle text-dark"
                    href="#"
                    data-toggle="dropdown"
                  >
                    TVs & Appliances
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
                    className="nav-link fsize dropdown-toggle text-dark"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Men
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
                    className="nav-link fsize dropdown-toggle text-dark"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Women
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
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Products;
