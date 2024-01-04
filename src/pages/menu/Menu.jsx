import React, { useState } from 'react';
import './menu.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import HEADERIMG from '../../assets/menu-header-img.jpg';
import { BiSolidHot } from 'react-icons/bi';

const Menu = () => {
  const [showNyMenu, setShowNyMenu] = useState(true);
  const [showNjMenu, setShowNjMenu] = useState(false);

  const handleNyMenuClick = () => {
    setShowNyMenu(true);
    setShowNjMenu(false);
  };

  const handleNjMenuClick = () => {
    setShowNyMenu(false);
    setShowNjMenu(true);
  };

  const nyAppetizerData = [
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
        <BiSolidHot className="spice-icon"/>
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
        <BiSolidHot className="spice-icon"/>
      </div>
      ,
      description: "3 steamed buns filled with char siu (barbecue pork), pickled carrots and cucumbers, paired with spicy hoisin sauce"
    }
  ];

  const njAppetizerData = [
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
        <BiSolidHot className="spice-icon"/>
      </div>
      ,
      description: "3 steamed buns filled with char siu (barbecue pork), pickled carrots and cucumbers, paired with spicy hoisin sauce"
    }
  ]
  
  const nyCourseData = [
    {
      id: 1,
      name: "Mapo Tofu",
      price: "9.99",
      spice: 
      <div className="spice-rating">
        <BiSolidHot className="spice-icon"/>
        <BiSolidHot className="spice-icon"/>
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
        <BiSolidHot className="spice-icon"/>
        <BiSolidHot className="spice-icon"/>
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
        <BiSolidHot className="spice-icon"/>
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
          <BiSolidHot className="spice-icon"/>
          <BiSolidHot className="spice-icon"/>
          <BiSolidHot className="spice-icon"/>
        </div>
        ,
      description: "Hearty stew made with fermented kimchi, tofu, vegetables, pork or seafood, simmered in a spicy broth"
    }
  ];

  const njCourseData = [
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
        <BiSolidHot className="spice-icon"/>
        <BiSolidHot className="spice-icon"/>
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
        <BiSolidHot className="spice-icon"/>
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
  ]

  const nyDessertData = [
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

  const njDessertData = [
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
    <div className="menu-container">
      <Header title="Menus" imgSrc={HEADERIMG} />
      <div className="menu-second-container">
        <div className="menu-choice">
          <button className="ny-menu-btn" onClick={handleNyMenuClick}>
            New York
          </button>
          <button className="nj-menu-btn" onClick={handleNjMenuClick}>
            New Jersey
          </button>
        </div>

        {showNyMenu && (
          <div className="ny-menu">
            <div className="ny-menu-left">
              <div className="appetizer-section">
                <h1 className="course-title">Appetizers</h1>
                <div className="divider"></div>
                {
                  nyAppetizerData.map(({id, name, price, spice, description}) => {
                    return (
                      <article key={id} className="menu-item">
                      <div className="name-and-price">
                        <div className="name-and-spice">
                          <h3 className="food-name">{name}</h3>
                          {spice}
                        </div>
                        <h3 className="food-price">{price}</h3>
                      </div>
                      <h5 className="food-info">{description}</h5>
                      </article>
                    )
                  })
                }
              </div>
              <div className="main-course-section">
                <h1 className="course-title">Main Courses</h1>
                <div className="divider"></div>
                {
                  nyCourseData.map(({id, name, price, spice, description}) => {
                    return (
                      <article key={id} className="menu-item">
                      <div className="name-and-price">
                        <div className="name-and-spice">
                          <h3 className="food-name">{name}</h3>
                          {spice}
                        </div>
                        <h3 className="food-price">{price}</h3>
                      </div>
                      <h5 className="food-info">{description}</h5>
                      </article>
                    )
                  })
                }
              </div>
            </div>
            <div className="ny-menu-right">
            <div className="dessert-section">
                <h1 className="course-title">Desserts</h1>
                <div className="divider"></div>
                {
                  nyDessertData.map(({id, name, price, description}) => {
                    return (
                      <article key={id} className="menu-item">
                      <div className="name-and-price">
                        <h3 className="food-name">{name}</h3>
                        <h3 className="food-price">{price}</h3>
                      </div>
                      <h5 className="food-info">{description}</h5>
                      </article>
                    )
                  })
                }
              </div>
              <div className="drinks-section">
                <h1 className="course-title">Drinks</h1>
                <div className="divider"></div>
                  <article className="menu-item">
                    <div className="name-and-price">
                      <h3 className="food-name">Bubble Tea</h3>
                      <h3 className="food-price">3.99</h3>
                    </div>
                    <h5 className="food-info">Sweet drink that combines tea with milk or fruit flavors and served with chewy tapioca pearls</h5>
                    <div className="flavors">
                      <h5 className="drink-flavors">Classic Milk Tea</h5>
                      <h5 className="drink-flavors">Taro</h5>
                      <h5 className="drink-flavors">Matcha Green Tea</h5>
                      <h5 className="drink-flavors">Strawberry</h5>
                      <h5 className="drink-flavors">Honeydew</h5>
                      <h5 className="drink-flavors">Mango</h5>
                      <h5 className="drink-flavors">Lychee</h5>
                      <h5 className="drink-flavors">Passion Fruit</h5>
                      <h5 className="drink-flavors">Peach</h5>
                      <h5 className="drink-flavors">Brown Sugar</h5>
                      <h5 className="drink-flavors">Coffee</h5>
                    </div>
                  </article>
                  <article className="menu-item">
                    <div className="name-and-price">
                      <h3 className="food-name">Carbonated Beverages</h3>
                      <h3 className="food-price">1.99</h3>
                    </div>
                    <div className="flavors">
                      <h5 className="drink-flavors">Cola</h5>
                      <h5 className="drink-flavors">Lemon-Lime Soda</h5>
                      <h5 className="drink-flavors">Orange Soda</h5>
                      <h5 className="drink-flavors">Ginger Ale</h5>
                      <h5 className="drink-flavors">Cream Soda</h5>
                      <h5 className="drink-flavors">Root Beer</h5>
                      <h5 className="drink-flavors">Milkis</h5>
                      <h5 className="drink-flavors">Sparkling Water</h5>
                    </div>
                  </article>
                  <article className="menu-item">
                    <div className="name-and-price">
                      <h3 className="food-name">Juices</h3>
                      <h3 className="food-price">2.49</h3>
                    </div>
                    <div className="flavors">
                      <h5 className="drink-flavors">Apple Juice</h5>
                      <h5 className="drink-flavors">Orange Juice</h5>
                      <h5 className="drink-flavors">Grape Juice</h5>
                      <h5 className="drink-flavors">Cranberry Juice</h5>
                      <h5 className="drink-flavors">Lemonade</h5>
                      <h5 className="drink-flavors">Watermelon Juice</h5>
                      <h5 className="drink-flavors">Mango Juice</h5>
                      <h5 className="drink-flavors">Pinapple Juice</h5>
                    </div>
                  </article>
                  <article className="menu-item">
                    <div className="name-and-price">
                      <h3 className="food-name">Water</h3>
                      <h3 className="food-price">0.99</h3>
                    </div>
                  </article>
              </div>
            </div>
          </div>
        )}
        {showNjMenu && (
          <div className="nj-menu">
            <div className="nj-menu-left">
              <div className="appetizer-section">
                  <h1 className="course-title">Appetizers</h1>
                  <div className="divider"></div>
                  {
                    njAppetizerData.map(({id, name, price, spice, description}) => {
                      return (
                        <article key={id} className="menu-item">
                        <div className="name-and-price">
                          <div className="name-and-spice">
                            <h3 className="food-name">{name}</h3>
                            {spice}
                          </div>
                          <h3 className="food-price">{price}</h3>
                        </div>
                        <h5 className="food-info">{description}</h5>
                        </article>
                      )
                    })
                  }
                </div>
                <div className="main-course-section">
                <h1 className="course-title">Main Courses</h1>
                <div className="divider"></div>
                {
                  njCourseData.map(({id, name, price, spice, description}) => {
                    return (
                      <article key={id} className="menu-item">
                      <div className="name-and-price">
                        <div className="name-and-spice">
                          <h3 className="food-name">{name}</h3>
                          {spice}
                        </div>
                        <h3 className="food-price">{price}</h3>
                      </div>
                      <h5 className="food-info">{description}</h5>
                      </article>
                    )
                  })
                }
              </div>
            </div>
            <div className="nj-menu-right">
            <div className="dessert-section">
                <h1 className="course-title">Desserts</h1>
                <div className="divider"></div>
                {
                  njDessertData.map(({id, name, price, description}) => {
                    return (
                      <article key={id} className="menu-item">
                      <div className="name-and-price">
                        <h3 className="food-name">{name}</h3>
                        <h3 className="food-price">{price}</h3>
                      </div>
                      <h5 className="food-info">{description}</h5>
                      </article>
                    )
                  })
                }
              </div>
              <div className="drinks-section">
                <h1 className="course-title">Drinks</h1>
                <div className="divider"></div>
                  <article className="menu-item">
                    <div className="name-and-price">
                      <h3 className="food-name">Bubble Tea</h3>
                      <h3 className="food-price">3.99</h3>
                    </div>
                    <h5 className="food-info">Sweet drink that combines tea with milk or fruit flavors and served with chewy tapioca pearls</h5>
                    <div className="flavors">
                      <h5 className="drink-flavors">Classic Milk Tea</h5>
                      <h5 className="drink-flavors">Taro</h5>
                      <h5 className="drink-flavors">Matcha Green Tea</h5>
                      <h5 className="drink-flavors">Strawberry</h5>
                      <h5 className="drink-flavors">Honeydew</h5>
                      <h5 className="drink-flavors">Mango</h5>
                      <h5 className="drink-flavors">Lychee</h5>
                      <h5 className="drink-flavors">Passion Fruit</h5>
                      <h5 className="drink-flavors">Peach</h5>
                      <h5 className="drink-flavors">Brown Sugar</h5>
                      <h5 className="drink-flavors">Coffee</h5>
                    </div>
                  </article>
                  <article className="menu-item">
                    <div className="name-and-price">
                      <h3 className="food-name">Carbonated Beverages</h3>
                      <h3 className="food-price">1.99</h3>
                    </div>
                    <div className="flavors">
                      <h5 className="drink-flavors">Cola</h5>
                      <h5 className="drink-flavors">Lemon-Lime Soda</h5>
                      <h5 className="drink-flavors">Orange Soda</h5>
                      <h5 className="drink-flavors">Ginger Ale</h5>
                      <h5 className="drink-flavors">Cream Soda</h5>
                      <h5 className="drink-flavors">Root Beer</h5>
                      <h5 className="drink-flavors">Milkis</h5>
                      <h5 className="drink-flavors">Sparkling Water</h5>
                    </div>
                  </article>
                  <article className="menu-item">
                    <div className="name-and-price">
                      <h3 className="food-name">Juices</h3>
                      <h3 className="food-price">2.49</h3>
                    </div>
                    <div className="flavors">
                      <h5 className="drink-flavors">Apple Juice</h5>
                      <h5 className="drink-flavors">Orange Juice</h5>
                      <h5 className="drink-flavors">Grape Juice</h5>
                      <h5 className="drink-flavors">Cranberry Juice</h5>
                      <h5 className="drink-flavors">Lemonade</h5>
                      <h5 className="drink-flavors">Watermelon Juice</h5>
                      <h5 className="drink-flavors">Mango Juice</h5>
                      <h5 className="drink-flavors">Pinapple Juice</h5>
                    </div>
                  </article>
                  <article className="menu-item">
                    <div className="name-and-price">
                      <h3 className="food-name">Water</h3>
                      <h3 className="food-price">0.99</h3>
                    </div>
                  </article>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Menu;