import React from "react";
import { Electronics } from "../Data/Dropdown";

function Products() {
  return (
    <section id="home">
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-white topnav w-100"
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
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link fsize dropdown-toggle text-dark"
                    href="#"
                    // data-toggle="dropdown1"
                  >
                    Electronics
                  </a>

                  <div className="dropdown-menu rounded-0 border-0">
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
                    TV & Appliances
                  </a>
                  <div className="dropdown-menu menu1 rounded-0 border-0">
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
                        <li className="text-dark">
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

                <li className="nav-item dropdown">
                  <a
                    className="nav-link fsize dropdown-toggle text-dark"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Electronics
                  </a>
                  <div className="dropdown-menu menu2 rounded-0 border-0">
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
                        <li className="text-dark">
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
                        <li className="text-dark" className="text-dark">
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
                    Electronics
                  </a>
                  <div className="dropdown-menu menu3 rounded-0 border-0">
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
                        <li className="text-dark">
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
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Products;
