import React, { useState } from 'react'
import './order.css'
import HEADERIMG from '../../assets/order-header-img.jpg'
import { BiSolidHot } from 'react-icons/bi';

const Order = () => {
  const [showNyOrderMenu, setShowNOrderMenu] = useState(true);
  const [showNjOrderMenu, setShowNjOrderMenu] = useState(false);

  const handleNyOrderMenuClick = () => {
    setShowNOrderMenu(true);
    setShowNjOrderMenu(false);
  };

  const handleNjOrderMenuClick = () => {
    setShowNOrderMenu(false);
    setShowNjOrderMenu(true);
  };

  const nyOrderAppetizerData = [
    {
      id: 1,
      name: "Spring Rolls",
      price: "7.99",
      spice: null,
      description: "6 crispy spring rolls filled with a savory mixture of vegetables and protein, served with dipping sauce"
    },
    {
      id: 2,
      name: "Egg Rolls",
      price: "5.99",
      spice: null,
      description: "6 deep fried egg rolls stuffed with a combination of meats and vegetables, served with dipping sauce"
    },
    {
      id: 3,
      name: "Dumplings",
      price: "6.99",
      spice: null,
      description: "6 dumplings filled with your choice of beef, pork, or shrimp, and prepared either steamed or pan-fried"
    },
    {
      id: 4,
      name: "Scallion Pancakes",
      price: "3.99",
      spice: null,
      description: "4 flaky scallion pancakes infused with a delicate blend of green onions and sesame seeds, served with dipping sauce"
    },
    {
      id: 5,
      name: "Beef Bulgogi",
      price: "8.99",
      spice: 
      <div className="spice-rating">
        <BiSolidHot className="order-spice-icon"/>
      </div>
      ,
      description: "Grilled beef slices marinated in a sweet-savory sauce, topped with scallions and seasame seeds"
    },
    {
      id: 6,
      name: "Bao Buns",
      price: "12.99",
      spice: 
      <div className="spice-rating">
        <BiSolidHot className="order-spice-icon"/>
      </div>
      ,
      description: "3 steamed buns filled with char siu (barbecue pork), pickled carrots and cucumbers, paired with spicy hoisin sauce"
    }
  ];

  const nyOrderCourseData = [
    {
      id: 1,
      name: "Mapo Tofu",
      price: "9.99",
      spice: 
      <div className="spice-rating">
       <BiSolidHot className="order-spice-icon"/>
       <BiSolidHot className="order-spice-icon"/>
      </div>
      ,
      description: "Soft tofu cubes cooked in spicy Sichuan chili bean sauce with minced pork, served over steamed rice"
    },
    {
      id: 2,
      name: "Kung Pao Chicken",
      price: "11.99",
      spice: 
      <div className="spice-rating">
        <BiSolidHot className="order-spice-icon"/>
        <BiSolidHot className="order-spice-icon"/>
      </div>
      ,
      description: "Tender chicken chunks stir-fried with peanuts, Sichuan peppercorns, served over steamed rice"
    },
    {
      id: 3,
      name: "Beef Chow Fun",
      spice: null,
      price: "12.99",
      description: "Wide rice noodles stir-fried with slices of beef, bean sprouts, and scallions tossed in a savory soy-based sauce"
    },
    {
      id: 4,
      name: "Honey Walnut Shrimp",
      price: "12.99",
      spice: null,
      description: "Crispy shrimp coated in a creamy honey-mayonnaise sauce with candied walnuts, served over steamed rice"
    },
    {
      id: 5,
      name: "Bibimbap",
      price: "13.99",
      spice: 
      <div className="spice-rating">
        <BiSolidHot className="order-spice-icon"/>
      </div>,
      description: "Colorful bowl featuring steamed rice topped with an assortment of vegetables, marinated beef, and fried egg, served with spicy gochujang sauce"
    },
    {
      id: 6,
      name: "Japchae",
      price: "11.99",
      spice: null,
      description: "Glass noodles stir fried with various vegetables and your choice of protein (chicken, pork, beef), tossed in a sweet soy sauce"
    },
    {
      id: 7,
      name: "Jjajangmyeon",
      price: "10.99",
      spice: null,
      description: "Noodles topped with a rich black bean sauce, along with diced pork and assorted vegetables"
    },
    {
      id: 8,
      name: "Kimchi Stew",
      price: "9.99",
      spice: 
        <div className="spice-rating">
          <BiSolidHot className="order-spice-icon"/>
          <BiSolidHot className="order-spice-icon"/>
          <BiSolidHot className="order-spice-icon"/>
        </div>
        ,
      description: "Hearty stew made with fermented kimchi, tofu, vegetables, pork or seafood, simmered in a spicy broth"
    }
  ];

  const nyOrderDessertData = [
    {
      id: 1,
      name: "Egg Custard Tart",
      price: "1.99",
      description: "Flaky pastry crust filled with a creamy, sweet egg custard"
    },
    {
      id: 2,
      name: "Seasame Balls",
      price: "3.99",
      description: "5 deep-fried glutinous rice balls filled with sweet red bean paste (crispy exterior and chewy interior)"
    },
    {
      id: 3,
      name: "Red Bean Soup",
      price: "2.99",
      description: "Warm dessert soup made from simmering red beans with water and sugar"
    },
    {
      id: 4,
      name: "Bingsu",
      price: "3.99",
      description: "Shaved ice dessert topped with sweetend condensed milk, fruit, red bean paste, and ice cream."
    },
    {
      id: 5,
      name: "Sweet Pancakes",
      price: "3.99",
      description: "Two fried pancakes filled with a sweet mixture of brown sugar, cinnamon, and chopped nuts"
    },
  ];

  const nyOrderDrinksData = [
    {
      id: 1,
      name: "Bubble Tea",
      price: "3.99",
      description: "Sweet drink that combines tea with milk or fruit flavors and served with chewy tapioca pearls"
    },
    {
      id: 2,
      name: "Carbonated Beverages",
      price: "1.99",
      description: null
    },
    {
      id: 3,
      name: "Juices",
      price: "2.49",
      description: null
    },
    {
      id: 4,
      name: "Water",
      price: "0.99",
      description: null
    }
  ];

  const njOrderAppetizerData = [
    {
      id: 1,
      name: "Egg Rolls",
      price: "4.49",
      spice: null,
      description: "6 deep fried egg rolls stuffed with a combination of meats and vegetables, served with dipping sauce"
    },
    {
      id: 2,
      name: "Spring Rolls",
      price: "6.49",
      spice: null,
      description: "6 crispy spring rolls filled with a savory mixture of vegetables and protein, served with dipping sauce"
    },
    {
      id: 3,
      name: "Dumplings",
      price: "5.49",
      spice: null,
      description: "6 dumplings filled with your choice of beef, pork, or shrimp, and prepared either steamed or pan-fried"
    },
    {
      id: 4,
      name: "Scallion Pancakes",
      price: "3.49",
      spice: null,
      description: "4 flaky scallion pancakes infused with a delicate blend of green onions and sesame seeds, served with dipping sauce"
    },
    {
      id: 5,
      name: "Peking Duck Rolls",
      price: "8.99",
      spice: null,
      description: "3 rolls of thin slices of roasted duck meat wrapped in thin pancakes with hoisin sauce, cucumbers, and scallions"
    },
    {
      id: 6,
      name: "Beef Bulgogi Lettuce Wraps",
      price: "8.99",
      spice: null,
      description: "Grilled marinated beef served with lettuce leaves for wrapping, often accompanied by garlic, sesame oil, and ssamjang sauce"
    },
    {
      id: 7,
      name: "Bao Buns",
      price: "11.99",
      spice: 
      <div className="spice-rating">
        <BiSolidHot className="order-spice-icon"/>
      </div>
      ,
      description: "3 steamed buns filled with char siu (barbecue pork), pickled carrots and cucumbers, paired with spicy hoisin sauce"
    }
  ];

  const njOrderCourseData = [
    {
      id: 1,
      name: "Beef Chow Fun",
      spice: null,
      price: "10.99",
      description: "Wide rice noodles stir-fried with slices of beef, bean sprouts, and scallions tossed in a savory soy-based sauce"
    },
    {
      id: 2,
      name: "Mongolian Beef",
      price: "11.99",
      spice: null,
      description: "Sliced beef cooked with green onions and onions in a savory soy-based sauce, served over our popular crispy noodles"
    },
    {
      id: 3,
      name: "Kung Pao Chicken",
      price: "9.99",
      spice: 
      <div className="spice-rating">
        <BiSolidHot className="order-spice-icon"/>
        <BiSolidHot className="order-spice-icon"/>
      </div>
      ,
      description: "Tender chicken chunks stir-fried with peanuts, Sichuan peppercorns, served over steamed rice"
    },
    {
      id: 4,
      name: "Sweet & Sour Pork",
      price: "10.99",
      spice: null,
      description: "Battered and deep-fried pork pieces in a tangy sauce with bell peppers, onions, and pineapple, served with steamed rice"
    },
    {
      id: 5,
      name: "Korean BBQ Short Ribs",
      price: "11.99",
      spice: null,
      description: "Grilled marinated beef or pork ribs served with steamed rice and a two choices of side dishes"
    },
    {
      id: 6,
      name: "Bibimbap",
      price: "13.99",
      spice: 
      <div className="spice-rating">
        <BiSolidHot className="order-spice-icon"/>
      </div>,
      description: "Colorful bowl featuring steamed rice topped with an assortment of vegetables, marinated beef, and fried egg, served with spicy gochujang sauce"
    },
    {
      id: 7,
      name: "Japchae",
      price: "10.99",
      spice: null,
      description: "Glass noodles stir fried with various vegetables and your choice of protein (chicken, pork, beef), tossed in a sweet soy sauce"
    },
    {
      id: 8,
      name: "Jjajangmyeon",
      price: "9.99",
      spice: null,
      description: "Noodles topped with a rich black bean sauce, along with diced pork and assorted vegetables"
    }
  ];

  const njOrderDessertData = [
    {
      id: 1,
      name: "Egg Custard Tart",
      price: "0.99",
      description: "Flaky pastry crust filled with a creamy, sweet egg custard"
    },
    {
      id: 2,
      name: "Seasame Balls",
      price: "2.99",
      description: "5 deep-fried glutinous rice balls filled with sweet red bean paste (crispy exterior and chewy interior)"
    },
    {
      id: 3,
      name: "Red Bean Soup",
      price: "1.99",
      description: "Warm dessert soup made from simmering red beans with water and sugar"
    },
    {
      id: 4,
      name: "Mango Pudding",
      price: "2.99",
      description: "A creamy dessert made from fresh mango puree, gelatin, and evaporated milk"
    },
    {
      id: 4,
      name: "Almond Jelly",
      price: "2.99",
      description: "A light and refreshing dessert made from almond-flavored jelly, served with fruits"
    },
    {
      id: 5,
      name: "Bingsu",
      price: "3.49",
      description: "Shaved ice dessert topped with sweetend condensed milk, fruit, red bean paste, and ice cream."
    },
    {
      id: 6,
      name: "Sweet Pancakes",
      price: "3.49",
      description: "Two fried pancakes filled with a sweet mixture of brown sugar, cinnamon, and chopped nuts"
    },
  ];

  return (
    <div className="order-container">
      <div className="order-header">
        <img className="order-header-img" src={HEADERIMG} alt="order" />
      </div>
      <div className="order-location">
        <button className="new-york-order-location" onClick={handleNyOrderMenuClick}>New York</button>
        <button className="new-jersey-order-location" onClick={handleNjOrderMenuClick}>New Jersey</button>
      </div>
      {showNyOrderMenu && (
        <div className="ny-order-container">
        <ul className="order-navbar">
          <li className="order-nav-link"><a className="order-nav-link-link" href="#appetizer-section">Appetizers</a></li>
          <li className="order-nav-link"><a className="order-nav-link-link" href="#main-course-section">Main Courses</a></li>
          <li className="order-nav-link"><a className="order-nav-link-link" href="#dessert-section">Desserts</a></li>
          <li className="order-nav-link"><a className="order-nav-link-link" href="#drinks-section">Drinks</a></li>
        </ul>
        <div className="order-items-container">
          <div className="appetizer-container" id="appetizer-section">
            <h2 className="order-section-title">Appetizers</h2>
            <div className="order-section-items">
              {
                nyOrderAppetizerData.map(({id, name, price, spice, description}) => {
                  return (
                    <article key={id} className="order-item-container">
                      <div className="order-item-name-and-spice">
                        <h3 className="order-item-name">{name}</h3>
                        {spice}
                      </div>
                      <h3 className="order-item-description">{description}</h3>
                      <h3 className="order-item-price">{price}</h3>
                    </article>
                  )
                })
              }
            </div>
          </div>
          <div className="main-course-container" id="main-course-section">
            <h2 className="order-section-title">Main Courses</h2>
            <div className="order-section-items">
              {
                nyOrderCourseData.map(({id, name, price, spice, description}) => {
                  return (
                    <article key={id} className="order-item-container">
                      <div className="order-item-name-and-spice">
                        <h3 className="order-item-name">{name}</h3>
                        {spice}
                      </div>
                      <h3 className="order-item-description">{description}</h3>
                      <h3 className="order-item-price">{price}</h3>
                    </article>
                  )
                })
              }
            </div>
          </div>
          <div className="dessert-container" id="dessert-section">
            <h2 className="order-section-title">Desserts</h2>
            <div className="order-section-items">
              {
                nyOrderDessertData.map(({id, name, price, spice, description}) => {
                  return (
                    <article key={id} className="order-item-container">
                      <div className="order-item-name-and-spice">
                        <h3 className="order-item-name">{name}</h3>
                        {spice}
                      </div>
                      <h3 className="order-item-description">{description}</h3>
                      <h3 className="order-item-price">{price}</h3>
                    </article>
                  )
                })
              }
            </div>
          </div>
          <div className="drinks-container" id="drinks-section">
          <h2 className="order-section-title">Drinks</h2>
            <div className="order-section-items">
              {
                nyOrderDrinksData.map(({id, name, price, spice, description}) => {
                  return (
                    <article key={id} className="order-item-container">
                      <div className="order-item-name-and-spice">
                        <h3 className="order-item-name">{name}</h3>
                        {spice}
                      </div>
                      <h3 className="order-item-description">{description}</h3>
                      <h3 className="order-item-price">{price}</h3>
                    </article>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      )}
      {showNjOrderMenu && (
      <div className="nj-order-container">
        <ul className="order-navbar">
          <li className="order-nav-link"><a className="order-nav-link-link" href="#appetizer-section">Appetizers</a></li>
          <li className="order-nav-link"><a className="order-nav-link-link" href="#main-course-section">Main Courses</a></li>
          <li className="order-nav-link"><a className="order-nav-link-link" href="#dessert-section">Desserts</a></li>
          <li className="order-nav-link"><a className="order-nav-link-link" href="#drinks-section">Drinks</a></li>
        </ul>
        <div className="order-items-container">
          <div className="appetizer-container" id="appetizer-section">
            <h2 className="order-section-title">Appetizers</h2>
            <div className="order-section-items">
              {
                njOrderAppetizerData.map(({id, name, price, spice, description}) => {
                  return (
                    <article key={id} className="order-item-container">
                      <div className="order-item-name-and-spice">
                        <h3 className="order-item-name">{name}</h3>
                        {spice}
                      </div>
                      <h3 className="order-item-description">{description}</h3>
                      <h3 className="order-item-price">{price}</h3>
                    </article>
                  )
                })
              }
            </div>
          </div>
          <div className="main-course-container" id="main-course-section">
            <h2 className="order-section-title">Main Courses</h2>
            <div className="order-section-items">
              {
                njOrderCourseData.map(({id, name, price, spice, description}) => {
                  return (
                    <article key={id} className="order-item-container">
                      <div className="order-item-name-and-spice">
                        <h3 className="order-item-name">{name}</h3>
                        {spice}
                      </div>
                      <h3 className="order-item-description">{description}</h3>
                      <h3 className="order-item-price">{price}</h3>
                    </article>
                  )
                })
              }
            </div>
          </div>
          <div className="dessert-container" id="dessert-section">
            <h2 className="order-section-title">Desserts</h2>
            <div className="order-section-items">
              {
                njOrderDessertData.map(({id, name, price, spice, description}) => {
                  return (
                    <article key={id} className="order-item-container">
                      <div className="order-item-name-and-spice">
                        <h3 className="order-item-name">{name}</h3>
                        {spice}
                      </div>
                      <h3 className="order-item-description">{description}</h3>
                      <h3 className="order-item-price">{price}</h3>
                    </article>
                  )
                })
              }
            </div>
          </div>
          <div className="drinks-container" id="drinks-section">
          <h2 className="order-section-title">Drinks</h2>
            <div className="order-section-items">
              {
                nyOrderDrinksData.map(({id, name, price, spice, description}) => {
                  return (
                    <article key={id} className="order-item-container">
                      <div className="order-item-name-and-spice">
                        <h3 className="order-item-name">{name}</h3>
                        {spice}
                      </div>
                      <h3 className="order-item-description">{description}</h3>
                      <h3 className="order-item-price">{price}</h3>
                    </article>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      )}
      <div className="functionality-note-container">
        <h3 className="functionality-note">Shopping Cart Functionality In Progress</h3>
      </div>
    </div>
  )
}

export default Order