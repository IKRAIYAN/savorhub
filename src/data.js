import { ImSpoonKnife } from "react-icons/im";
import { GiMeal } from "react-icons/gi"
import { LuSoup, LuSalad, LuDessert, LuCoffee } from "react-icons/lu"; 
import appetizer1 from "../src/images/appetizer1.png"
import appetizer2 from "../src/images/appetizer2.png"
import appetizer3 from "../src/images/appetizer3.png";
import soup1 from "../src/images/soup1.png"
import soup2 from "../src/images/soup2.png";
import soup3 from "../src/images/soup3.png";
import salad1 from "../src/images/salad1.png"
import salad2 from "../src/images/salad2.png";
import salad3 from "../src/images/salad3.png";
import mainCourse1 from "../src/images/main-course1.png"
import mainCourse2 from "../src/images/main-course2.png";
import mainCourse3 from "../src/images/main-course3.png";
import dessert1 from "../src/images/dessert1.png"
import dessert2 from "../src/images/dessert2.png";
import dessert3 from "../src/images/dessert3.png";
import coffee1 from "../src/images/coffee1.png"
import coffee2 from "../src/images/coffee2.png"
import coffee3 from "../src/images/coffee3.jpg"
import special1 from "../src/images/special1.jpg"
import special2 from "../src/images/special2.jpg"
import special3 from "../src/images/special3.png"

export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Menu",
        path: '/menu'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]


export const courses = [
  {
    id: 1,
    icon: <ImSpoonKnife />,
    title: "Appetizers",
    info: "The initial dishes served at the beginning of a meal to stimulate the appetite. Examples include soups, salads, bruschetta, or small plates.",
  },
  {
    id: 2,
    icon: <LuSoup />,
    title: "Soup",
    info: "A course dedicated to various types of soups, often served after appetizers as a light meal.",
  },
  {
    id: 3,
    icon: <LuSalad />,
    title: "Salad",
    info: "A course featuring salads with fresh greens, vegetables, and dressings, usually served after the appetizers or as a palate cleanser before the main course.",
  },
  {
    id: 4,
    icon: <GiMeal />,
    title: "Main Course",
    info: "The central and substantial part of the meal, typically featuring a protein source (meat, fish, or vegetarian) accompanied by side dishes like vegetables, starches, and sauces.",
  },
  {
    id: 5,
    icon: <LuDessert />,
    title: "Dessert",
    info: "Sweet and indulgent dishes served at the end of the meal to satisfy the sweet tooth. Desserts include cakes, pastries, ice cream, and more.",
  },
  {
    id: 6,
    icon: <LuCoffee />,
    title: "Coffee & Tea",
    info: " The final course that includes coffee or tea, often served with small accompaniments like chocolates or petit fours.",
  }
];

export const products = [
  {
    id: 1,
    image: appetizer1,
    name: "Fried Prosciutto Tortellini",
    category: "Appetizer",
    desc: "Indulge in a savory symphony of flavors with our Fried Prosciutto Tortellini appetizer. Delicate cheese-filled pasta, wrapped in crispy prosciutto, served with a zesty dipping sauce.",
  },
  {
    id: 2,
    image: appetizer2,
    name: "Teriyaki Pineapple Meatballs",
    category: "Appetizer",
    desc: "Succulent meatballs glazed in sweet teriyaki sauce, paired with grilled pineapple for a perfect harmony of flavors. A tropical twist on a classic favorite",
  },
  {
    id: 3,
    image: appetizer3,
    name: "Western Blotting Imaging System",
    category: "Appetizer",
    desc: "An exquisite Fruit Charcuterie Board bursting with vibrant seasonal fruits, artisanal cheeses, and an array of delectable accompaniments. A visual and flavorful masterpiece for any occasion",
  },
  {
    id: 4,
    image: soup1,
    name: "Cauliflower soup",
    category: "Soup",
    desc: "Silky-smooth Cauliflower Soup, a velvety blend of roasted cauliflower, savory herbs, and a hint of cream. A comforting bowl of pure indulgence.",
  },
  {
    id: 5,
    image: soup2,
    name: "Chicken Noodle Soup",
    category: "Soup",
    desc: "Classic Chicken Noodle Soup, brimming with tender chicken, hearty vegetables, and al dente noodles, in a flavorful broth. A timeless comfort, served hot in every spoonful.",
  },
  {
    id: 6,
    image: soup3,
    name: "Tomato Soup",
    category: "Soup",
    desc: "Velvety Tomato Soup, a harmonious blend of ripe tomatoes, aromatic herbs, and a touch of cream. A comforting classic, served in a bowl of warmth.",
  },
  {
    id: 7,
    image: salad1,
    name: "Strawberry salad with poppy seed dressing",
    category: "Salad",
    desc: "Fresh Strawberry Salad featuring plump strawberries, crisp greens, and a drizzle of poppy seed dressing, a delightful medley of sweet and tangy flavors. A taste of summer in every bite.",
  },
  {
    id: 8,
    image: salad2,
    name: "Italian Chopped Salad",
    category: "Salad",
    desc: "Vibrant Italian Chopped Salad, a symphony of fresh greens, ripe tomatoes, olives, and tangy vinaigrette, topped with Parmesan cheese. A Mediterranean masterpiece, packed with flavor and texture",
  },
  {
    id: 9,
    image: salad3,
    name: "BLT chicken salad",
    category: "Salad",
    desc: "BLT Chicken Salad, a savory sensation combining tender chicken, crispy bacon, lettuce, and juicy tomatoes, drizzled with creamy ranch dressing. A twist on the classic BLT, perfect for salad lovers",
  },
  {
    id: 10,
    image: mainCourse1,
    name: "Ginger, Scallion and Soy Steamed Fish",
    category: "Main Course",
    desc: "Savor the delicate harmony of flavors with Ginger, Scallion, and Soy Steamed Fish—a tender fillet bathed in a fragrant ginger-soy sauce, topped with fresh scallions. An authentic Asian culinary experience",
  },
  {
    id: 11,
    image: mainCourse2,
    name: "Spaghetti Carbonara",
    category: "Main Course",
    desc: "A classic Roman pasta dish featuring al dente spaghetti, creamy egg-based sauce, crispy pancetta, and a generous sprinkle of Parmesan cheese—a symphony of rich flavors in every twirl.",
  },
  {
    id: 12,
    image: mainCourse3,
    name: "Pesto Lasagna",
    category: "Main Course",
    desc: "Layers of tender pasta, creamy ricotta cheese, and aromatic basil pesto sauce, baked to perfection. A delightful fusion of Italian flavors in every bite.",
  },
  {
    id: 13,
    image: dessert1,
    name: "Key Lime Pie",
    category: "Dessert",
    desc: "A zesty and creamy Floridian dessert masterpiece, featuring a tangy key lime filling in a buttery graham cracker crust. A slice of sunshine in every bite.",
  },
  {
    id: 14,
    image: dessert2,
    name: "Biscuit Strawberry Shortcake",
    category: "Dessert",
    desc: "Fluffy homemade biscuits, topped with ripe strawberries and luscious whipped cream—a sweet and comforting treat.",
  },
  {
    id: 15,
    image: dessert3,
    name: "Grilled Banana Brownie Sundae",
    category: "Dessert",
    desc: "Indulge in a Grilled Banana Brownie Sundae—grilled bananas, warm brownie, and vanilla ice cream topped with rich chocolate sauce. A decadent dessert delight.",
  },
  {
    id: 16,
    image: coffee1,
    name: "Cappuccino",
    category: "Coffee & Tea",
    desc: "A velvety espresso-based coffee, topped with a cloud of frothy milk foam and a dusting of cocoa. A perfect harmony of bold and creamy",
  },
  {
    id: 17,
    image: coffee2,
    name: "Lemon Tea",
    category: "Coffee & Tea",
    desc: "A refreshing and zesty blend of black or green tea infused with the bright essence of lemon. A delightful sip of citrusy rejuvenation.",
  },
  {
    id: 18,
    image: coffee3,
    name: "Chamomile Tea",
    category: "Coffee & Tea",
    desc: " A soothing herbal infusion with delicate floral notes, known for its calming and relaxation-inducing properties. A comforting cup of tranquility.",
  },
  {
    id: 19,
    image: special1,
    name: "Shakshuka",
    category: "Specials",
    desc: "A Middle Eastern breakfast favorite, featuring poached eggs in a savory tomato and pepper sauce, spiced to perfection. A hearty and flavorful start to the day.",
  },
  {
    id: 20,
    image: special2,
    name: "Beef biriyani platter",
    category: "Specials",
    desc: "Savor the flavors of our Beef Biryani Platter, a fragrant blend of tender beef, aromatic spices, and long-grain basmati rice, garnished with herbs and served with a side of cooling raita. A mouthwatering journey to the heart of Indian cuisine.",
  },
  {
    id: 21,
    image: special3,
    name: "Mixed Berries soft serve",
    category: "Specials",
    desc: "Indulge in the refreshing delight of Mixed Berries Soft Serve, a swirl of velvety ice cream infused with the sweet and tangy essence of mixed berries. A frozen treat that's both luscious and invigorating",
  },
];