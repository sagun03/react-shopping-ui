import jkLiquid from "../pages/images/jkl.png";
import Liquid2 from "../pages/images/liquid2.png";
import HandWash from "../pages/images/handWash.png";
import FrontLoadCollection1 from "../pages/images/frontLoadCollection1.png";
// import DishGel from "../pages/images/DishGel.png";
import HandwashColection3 from "../pages/images/handwashCollection3.png";
import ToiletColection3 from "../pages/images/ToiletCollection3.png";
import Colin from "../pages/images/colin.png";
import Alovera1l from "../pages/images/alovera1l1.png";
import Alovera250ml from "../pages/images/alovera250ml.png";
import colin1l from "../pages/images/Colin1l.png";
import colin5l from "../pages/images/colin5lp.png";
import colin250ml from "../pages/images/colin500mlp.png";
import dishcup from "../pages/images/dishcup.png";
import dishgel1l from "../pages/images/dishgel1l.png";
import dishgel500l from "../pages/images/dishgel500ml.png";
import dishge5l from "../pages/images/dishge5l.png";
import topload5l from "../pages/images/topload5l.png";
import topload1l from "../pages/images/topLoad1l.png";
import topload250ml from "../pages/images/TopLoad250ml.png";
import easywash500ml from "../pages/images/easywash500ml.png";
import easywash1l from "../pages/images/easywash.png";
import Strawberry250ml from "../pages/images/handWash.png";
import Strawberry1L from "../pages/images/stawberry1l.png";
import Rose5l from "../pages/images/rose5l.png";
import Rose250ml from "../pages/images/rose250ml.png";
import RoseRefill from "../pages/images/roserefil1l.png";
import RoseTransparent1l from "../pages/images/rosetranparent1l.png";
import RoseTransparent250ml from "../pages/images/rosetransparent250ml.png";
import toiletCleaner250ml from "../pages/images/toiletcleaner250ml.png";
import toiletCleaner1l from "../pages/images/toiletcleaner1l.png";
import toiletCleaner5l from "../pages/images/toiletcleaner5l.png";
import floorCleaner250ml from "../pages/images/surfacecleaner500ml.png";
import floorCleaner1l from "../pages/images/surfacecleaner1l.png";
import floorCleaner5l from "../pages/images/surfacecleaner5l.png";
import floorCleaner1lwhite from "../pages/images/wfloorcleaner1ml.png";
import floorCleaner5lwhite from "../pages/images/wfloorcleaner5l.png";
import frontLoad1 from "../pages/images/FrontLoad1l.png";
import frontLoad250 from "../pages/images/frontLoad250ml.png";
import frontLoad5 from "../pages/images/frontload5l.png";
import TopfrontLoad1 from "../pages/images/ftload1l.png";
import TopfrontLoad250 from "../pages/images/ftload250ml.png";
import TopfrontLoad5 from "../pages/images/tfload5l.png";
export const SlidesItems = [
  {
    id: 1,
    img: Liquid2,
    title: "Liquid Detergents",
    categoryTitle: "Liquid Detergent",
    desc: "DON'T COMPROMISE ON CLEANING! GET FLAT 20% FOR NEW USERS",
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
    bg: "f5fafd",
    height: "100%",
  },
  {
    id: 2,
    img: HandWash,
    title: "HANDWASH COLLECTION",
    desc: "DON'T COMPROMISE ON CLEANING! GET FLAT 20% FOR NEW USERS",
    bg: "fcf1ed",
    height: "100%",
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 3,
    img: jkLiquid,
    title: "DISH WASHERS",
    desc: "DON'T COMPROMISE ON CLEANING! GET FLAT 20% FOR NEW USERS",
    height: "100%",
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
];

export const categories = [
  {
    id: 4,
    title: "Top Load Liquid Detergent",
    detail: "Clean beyond measure with our liquid treasure",
    productDescription:
     ["Experience the pinnacle of stain removal with JK Liquid Detergent – the ultimate solution for spotless laundry.",
    "Achieve faster stain removal directly in your washing machine. This powerful liquid detergent swiftly dissolves in high water levels, effortlessly reaching stains without leaving any residue on your clothes or machine.",
    "Unveil freshness beyond appearance. Our detergent not only rejuvenates your attire but also imparts a lasting, invigorating scent.",
    "Tackle tough stains while preserving your fabric's original color. Trust in the efficacy of JK Liquid Detergent for a laundry experience that's unparalleled."
    ],
    img: {
      "250 ml": topload250ml,
      "1 liter": topload1l,
      "5 liter": topload5l
    },
    defaultSize: "250 ml",
    size: ["250 ml", "1 liter", "5 liter"],
    price: { "250 ml": 65, "1 liter": 200, "5 liter": 900 },
  },
  {
    id: 5,
    title: "Transparent Alovera Liquid Soap",
    detail: "Clean hands, happy heart - with every wash",
    productDescription: [
      "A touch of luxury for your cleansing ritual.",
      "Experience the epitome of purity with our transparent liquid soap enriched with the goodness of Aloe Vera. Gently cleanse and nourish your skin with every use, while enjoying the soothing benefits of Aloe Vera.",
      "Crafted for those who seek quality, this premium liquid soap provides a transparent and invigorating cleansing experience. Elevate your daily routine with the goodness of Aloe Vera and the trusted excellence of JK.",
    ],
    img: {
      "250 ml": Alovera250ml,
      "1.2 liter": Alovera1l,
    },
    defaultSize: "250 ml",
    size: ["250 ml", "1.2 liter",],
    price: { "250 ml": 89, "1.2 liter": 250 },
  },
  {
    id: 6,
    img: {
      "500 ml": dishgel500l,
      "1.2 liter": dishgel1l,
      "5 liter": dishge5l,
    },
    title: "Dish Gel",
    detail:
      "Let your dishwasher do the dirty work - for sparkling clean dishes every time",
    price: { "500  ml": 85, "1.2 liter": 130, "5 liter": 600 },
    productDescription: [
      "Experience the luxury of cleaning expensive crockery and cookware without the worry of scratches. Its gentle touch preserves your items' integrity while the superior fragrance lingers long after your utensils are rinsed.",
      "Soft on your hands, J.K. Dish Gel's powerful formula cuts through tough grease, ensuring sparkling clean results. Just one spoonful is enough to conquer a sink-full of dirty dishes, making your cleaning routine efficient and effective.",
      "Unlike traditional bars, J.K. Dish Gel deep cleans without leaving any white residue. Feel the difference as it removes foul smells and introduces a refreshing lime fragrance. Choose the ultimate, choose J.K. Dish Gel – where stains vanish, and brilliance emerges.",
    ],
    defaultSize: "500 ml",
    size: ["500 ml", "1.2 liter", "5 liter"],
  },
  {
    id: 7,
    img: {
      "250 ml": toiletCleaner250ml,
      "650 ml": toiletCleaner1l,
      "5 liter": toiletCleaner5l,
    },
    title: "Toilet Cleaner",
    detail: "Powerful cleaning for a refreshing, hygienic throne",
    price: { "250 ml": 45, "650 ml": 85, "5 liter": 500 },
    productDescription: [
      "Say goodbye to foul odors as our potent cleaner keeps your bathroom smelling fresh. The easy-to-use nozzle targets tricky spots in toilet pot rims, leaving no corner untouched. Designed for both Indian and Western toilets, J.K. Toilet Cleaner's unique shape allows easy pouring into deep corners under the toilet rim.",
      "Unleash 50 times more cleaning power with J.K. Toilet Cleaner. Its powerful agents obliterate tough stains like hard water stains, rust, and lime scale, ensuring an immaculate and shiny toilet bowl. The enduring fragrance leaves your bathroom pleasantly scented for hours, catering to even the busiest households.",
      "Elevate your toilet cleaning experience with J.K. Toilet Cleaner. Trust in its effectiveness, trust in its hygiene, and embrace the brilliance of a truly pristine toilet.",
    ],
    defaultSize: "650 ml",
    size: ["250 ml", "650 ml", "5 liter"],
  },
  {
    id: 8,
    img: {
      "500 ml": floorCleaner250ml,
      "1 liter": floorCleaner1l,
      "5 liter": floorCleaner5l,
    },
    title: "Surface cleaner",
    detail: "Step into a spotless world - with every sweep, mop and swirl",
    price: { "500 ml": 80, "1 liter": 150, "5 liter": 625 },
    productDescription: [
      "Discover the power of J.K. Surface Cleaner – the versatile cleaner that obliterates tough stains, from coffee to ketchup, soy sauce, mustard sauce, and even olive oil.",
      "Experience the invigorating aroma of lavender as you clean, leaving behind refreshed surfaces and a delightful ambiance. With a user-friendly formula that safeguards your hands, cleaning becomes a breeze.",
      "From ceramic to marble, granite to mosaic, J.K. Surface Cleaner proves its adaptability on a myriad of surfaces. Elevate your cleaning game with J.K. Surface Cleaner – where stains are conquered, and surfaces shine a new.",
    ],
    defaultSize: "500 ml",
    size: ["500 ml", "1 liter", "5 liter"],
  },
];

export const popularProducts = [
  {
    id: 21,
    img: topload5l,
    type: "detergent",
    size: "5 liter",
    title: "Top Load LiquidDetergent",
    price: 950,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 219,
    img: topload1l,
    type: "detergent",
    size: "1 liter",
    title: "Top Load LiquidDetergent",
    price: 190,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 212,
    img: topload250ml,
    type: "detergent",
    size: "250 ml",
    title: "Top Load LiquidDetergent",
    price: 50,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 210,
    img: frontLoad1,
    type: "detergent",
    size: "1 liter",
    title: "Front Load LiquidDetergent",
    price: 250,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 211,
    img: frontLoad250,
    type: "detergent",
    size: "250 ml",
    title: "Front Load LiquidDetergent",
    price: 50,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 212,
    img: frontLoad5,
    type: "detergent",
    size: "5 liter",
    title: "Front Load LiquidDetergent",
    price: 900,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 213,
    img: TopfrontLoad1,
    type: "detergent",
    size: "1 liter",
    title: "Top/Front Load Detergent",
    price: 250,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 214,
    img: TopfrontLoad250,
    type: "detergent",
    size: "250 ml",
    title: "Top/Front Load Detergent",
    price: 50,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 215,
    img: TopfrontLoad5,
    type: "detergent",
    size: "5 liter",
    title: "Top/Front Load Detergent",
    price: 900,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 9,
    img: Alovera1l,
    type: "handWash",
    title: "Aloe Vera Hand Wash",
    size: "1 liter",
    price: 190,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 12,
    img: Alovera250ml,
    type: "handWash",
    title: "Aloe Vera Hand Wash",
    size: "250 ml",
    price: 60,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 124,
    img: Strawberry250ml,
    type: "handWash",
    title: "Strawberry Hand Wash",
    size: "250 ml",
    price: 60,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 125,
    img: Strawberry1L,
    type: "handWash",
    title: "Strawberry Hand Wash",
    size: "1 liter",
    price: 120,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 126,
    img: Rose5l,
    type: "handWash",
    title: "Rose Hand Wash",
    size: "5 liter",
    price: 120,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 127,
    img: Rose250ml,
    type: "handWash",
    title: "Rose Hand Wash",
    size: "250 ml",
    price: 120,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 128,
    img: RoseRefill,
    type: "handWash",
    title: "Rose Hand Wash Refill",
    size: "1 liter",
    price: 120,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 129,
    img: RoseTransparent1l,
    type: "handWash",
    title: "Rose Transparent Hand Wash",
    size: "1 liter",
    price: 120,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 135,
    img: RoseTransparent250ml,
    type: "handWash",
    title: "Rose Transparent Hand Wash",
    size: "250 ml",
    price: 60,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 13,
    img: colin1l,
    type: "colin",
    title: "Glass and Household Cleaner",
    size: "1 l",
    price: 90,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 130,
    img: colin5l,
    type: "colin",
    title: "Glass and Household Cleaner",
    size: "5 l",
    price: 190,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 131,
    img: colin250ml,
    type: "colin",
    title: "Household Cleaner",
    size: "250 l",
    price: 60,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 140,
    img: easywash500ml,
    type: "easyWash",
    title: "Easy Wash",
    size: "500 ml",
    price: 90,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 141,
    img: easywash1l,
    type: "easyWash",
    title: "Easy Wash",
    size: "1 liter",
    price: 190,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 142,
    img: toiletCleaner250ml,
    type: "toiletCleaner",
    title: "Toilet Cleaner",
    size: "250 ml",
    price: 30,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 143,
    img: toiletCleaner5l,
    type: "toiletCleaner",
    title: "Toilet Cleaner",
    size: "5 liter",
    price: 190,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 144,
    img: toiletCleaner1l,
    type: "toiletCleaner",
    title: "Toilet Cleaner",
    size: "1 liter",
    price: 60,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },

  {
    id: 15,
    img: floorCleaner1l,
    type: "floorCleaner",
    title: "Floor Cleaner",
    size: "1 liter",
    price: 90,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 16,
    img: floorCleaner250ml,
    type: "floorCleaner",
    title: "Floor Cleaner",
    size: "250 ml",
    price: 40,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 16,
    img: floorCleaner5l,
    type: "floorCleaner",
    title: "Floor Cleaner",
    size: "5 liter",
    price: 160,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 166,
    img: floorCleaner1lwhite,
    type: "floorCleaner",
    title: "White Floor Cleaner",
    size: "1 liter",
    price: 90,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 167,
    img: floorCleaner5lwhite,
    type: "floorCleaner",
    title: "White Floor Cleaner",
    size: "5 liter",
    price: 260,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 17,
    img: dishcup,
    type: "dishWasher",
    title: "Dish Cup",
    size: "250 ml",
    price: 60,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 19,
    img: dishgel1l,
    type: "dishWasher",
    title: "Dish Gel",
    size: "1 liter",
    price: 190,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 20,
    img: dishgel500l,
    type: "dishWasher",
    title: "Dish Gel",
    size: "250 ml",
    price: 60,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },
  {
    id: 200,
    img: dishge5l,
    type: "dishWasher",
    title: "Dish Gel",
    size: "5 liter",
    price: 90,
    productDescription:
      "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  },

  // {
  //   id: 22,
  //   img: Liquid2,
  //   type: "bathingSoap",
  //   title: "Bathing Soap",
  //   size: "100 ml",
  //   price: 30,
  //   productDescription:
  //     "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  // },
  // {
  //   id: 23,
  //   img: Liquid2,
  //   type: "bathingSoap",
  //   title: "Bathing Soap",
  //   size: "100 ml",
  //   price: 30,
  //   productDescription:
  //     "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  // },
  // {
  //   id: 23,
  //   img: Liquid2,
  //   type: "handWash",
  //   size: "500 ml",
  //   title: "Hand Wash",
  //   price: 90,
  //   productDescription:
  //     "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  // },
  // {
  //   id: 24,
  //   img: Liquid2,
  //   type: "bathingSoap",
  //   title: "Bathing Soap",
  //   size: "100 ml",
  //   price: 30,
  //   productDescription:
  //     "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  // },
  // {
  //   id: 44,
  //   img: Liquid2,
  //   type: "glassCleaner",
  //   title: "Glass Cleaner",
  //   size: "100 ml",
  //   price: 30,
  //   productDescription:
  //     "PROTECT EVERY FIBER, PREVENT COLOUR FADING IN FABRIC, IT DOES NOT FADE COLOURS INFACT IT INCREASES THE LIFE OF THE FABRIC AS IT ACT AS CONDITIONER, REMOVE STAIN BETTER THAN POWDER, MADE FOR ALL FABRICS WOOLEN ,COTTON ETC",
  // },
];

export const ClouserItems = [
  {
    id: 1,
    img: FrontLoadCollection1,
    title: "Liquid Detergent Collection",
    categoryTitle: "Liquid Detergent",
    name: "detergent",
    desc: "Experience the Power of Clean.",
  },
  {
    id: 3,
    img: HandwashColection3,
    title: "Handwash Collection",
    categoryTitle: "Hand Wash",
    name: "handWash",
    desc: "Keep Your Hands Protected and Refreshed.",
  },

  {
    id: 2,
    img: ToiletColection3,
    title: "Toilet Cleaner Collection",
    categoryTitle: "Toilet Cleaner",
    name: "toiletCleaner",
    desc: "Say Goodbye to Stubborn Stains and Embrace a Spotless Toilet.",
  },
  {
    id: 20,
    img: Colin,
    title: "Glass Cleaner Collection",
    categoryTitle: "Glass Cleaner",
    name: "glassCleaner",
    desc: "Crystal clear shine, every time!",
  },
];
