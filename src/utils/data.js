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
    title: "Liquid Detergent",
    categoryTitle: "Liquid Detergent",
    desc: "DON'T COMPROMISE ON CLEANING! GET FLAT 20% ON ORDER ABOVE RS. 200",
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
    productDescription: [
      "Experience the pinnacle of stain removal with JK Liquid Detergent – the ultimate solution for spotless laundry.",
      "Achieve faster stain removal directly in your washing machine. This powerful liquid detergent swiftly dissolves in high water levels, effortlessly reaching stains without leaving any residue on your clothes or machine.",
      "Unveil freshness beyond appearance. Our detergent not only rejuvenates your attire but also imparts a lasting, invigorating scent.",
      "Tackle tough stains while preserving your fabric's original color. Trust in the efficacy of JK Liquid Detergent for a laundry experience that's unparalleled.",
    ],
    img: {
      "250 ml": topload250ml,
      "1 liter": topload1l,
      "5 liter": topload5l,
    },
    defaultSize: "250 ml",
    size: ["250 ml", "1 liter", "5 liter"],
    price: { "250 ml": 65, "1 liter": 200, "5 liter": 900 },
  },
  {
    id: 5,
    title: "Alovera Liquid Soap",
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
    size: ["250 ml", "1.2 liter"],
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
    price: { "500 ml": 85, "1.2 liter": 130, "5 liter": 600 },
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
    title: "Surface Cleaner",
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
    type: "detergent",
    title: "Top Load LiquidDetergent",
    productDescription: [
      "Experience the pinnacle of stain removal with JK Liquid Detergent – the ultimate solution for spotless laundry.",
      "Achieve faster stain removal directly in your washing machine. This powerful liquid detergent swiftly dissolves in high water levels, effortlessly reaching stains without leaving any residue on your clothes or machine.",
      "Unveil freshness beyond appearance. Our detergent not only rejuvenates your attire but also imparts a lasting, invigorating scent.",
      "Tackle tough stains while preserving your fabric's original color. Trust in the efficacy of JK Liquid Detergent for a laundry experience that's unparalleled.",
    ],
    img: {
      "250 ml": topload250ml,
      "1 liter": topload1l,
      "5 liter": topload5l,
    },
    defaultSize: "5 liter",
    size: ["250 ml", "1 liter", "5 liter"],
    price: { "250 ml": 65, "1 liter": 200, "5 liter": 900 },
  },
  {
    id: 219,
    type: "detergent",
    title: "Top Load LiquidDetergent",
    productDescription: [
      "Experience the pinnacle of stain removal with JK Liquid Detergent – the ultimate solution for spotless laundry.",
      "Achieve faster stain removal directly in your washing machine. This powerful liquid detergent swiftly dissolves in high water levels, effortlessly reaching stains without leaving any residue on your clothes or machine.",
      "Unveil freshness beyond appearance. Our detergent not only rejuvenates your attire but also imparts a lasting, invigorating scent.",
      "Tackle tough stains while preserving your fabric's original color. Trust in the efficacy of JK Liquid Detergent for a laundry experience that's unparalleled.",
    ],
    img: {
      "250 ml": topload250ml,
      "1 liter": topload1l,
      "5 liter": topload5l,
    },
    defaultSize: "1 liter",
    size: ["250 ml", "1 liter", "5 liter"],
    price: { "250 ml": 65, "1 liter": 200, "5 liter": 900 },
  },
  {
    id: 212,
    type: "detergent",
    title: "Top Load LiquidDetergent",
    productDescription: [
      "Experience the pinnacle of stain removal with JK Liquid Detergent – the ultimate solution for spotless laundry.",
      "Achieve faster stain removal directly in your washing machine. This powerful liquid detergent swiftly dissolves in high water levels, effortlessly reaching stains without leaving any residue on your clothes or machine.",
      "Unveil freshness beyond appearance. Our detergent not only rejuvenates your attire but also imparts a lasting, invigorating scent.",
      "Tackle tough stains while preserving your fabric's original color. Trust in the efficacy of JK Liquid Detergent for a laundry experience that's unparalleled.",
    ],
    img: {
      "250 ml": topload250ml,
      "1 liter": topload1l,
      "5 liter": topload5l,
    },
    defaultSize: "250 ml",
    size: ["250 ml", "1 liter", "5 liter"],
    price: { "250 ml": 65, "1 liter": 200, "5 liter": 900 },
  },

  {
    id: 210,
    type: "detergent",
    title: "Front Load LiquidDetergent",
    productDescription: [
      "Experience the power of efficiency with JK Front Load Liquid Detergent – your ultimate solution for rapid stain removal in washing machines.",
      "Effortless dissolution is guaranteed. Our liquid formula quickly dissolves in the washing machine's high water level environment, effortlessly reaching stains without leaving any residue on clothes or within the machine.",
      "Care for your machine while it cares for your clothes. Our detergent's foam production aligns with various washing machine types, preventing pipe clogging and scaling issues.",
      "Indulge in a superior fragrance that infuses both freshness and cleanliness into your laundry. Preserve your fabric's color integrity as you conquer stubborn stains. JK Front Load Liquid Detergent – where efficiency meets excellence.",
    ],
    img: {
      "250 ml": frontLoad250,
      "1 liter": frontLoad1,
      "5 liter": frontLoad5,
    },
    defaultSize: "1 liter",
    size: ["250 ml", "1 liter", "5 liter"],
    price: { "250 ml": 65, "1 liter": 200, "5 liter": 900 },
  },
  {
    id: 211,
    type: "detergent",
    title: "Front Load LiquidDetergent",
    productDescription: [
      "Experience the power of efficiency with JK Front Load Liquid Detergent – your ultimate solution for rapid stain removal in washing machines.",
      "Effortless dissolution is guaranteed. Our liquid formula quickly dissolves in the washing machine's high water level environment, effortlessly reaching stains without leaving any residue on clothes or within the machine.",
      "Care for your machine while it cares for your clothes. Our detergent's foam production aligns with various washing machine types, preventing pipe clogging and scaling issues.",
      "Indulge in a superior fragrance that infuses both freshness and cleanliness into your laundry. Preserve your fabric's color integrity as you conquer stubborn stains. JK Front Load Liquid Detergent – where efficiency meets excellence.",
    ],
    img: {
      "250 ml": frontLoad250,
      "1 liter": frontLoad1,
      "5 liter": frontLoad5,
    },
    defaultSize: "250 ml",
    size: ["250 ml", "1 liter", "5 liter"],
    price: { "250 ml": 65, "1 liter": 200, "5 liter": 900 },
  },
  {
    id: 212,
    type: "detergent",
    defaultSize: "5 liter",
    title: "Front Load LiquidDetergent",
    productDescription: [
      "Experience the power of efficiency with JK Front Load Liquid Detergent – your ultimate solution for rapid stain removal in washing machines.",
      "Effortless dissolution is guaranteed. Our liquid formula quickly dissolves in the washing machine's high water level environment, effortlessly reaching stains without leaving any residue on clothes or within the machine.",
      "Care for your machine while it cares for your clothes. Our detergent's foam production aligns with various washing machine types, preventing pipe clogging and scaling issues.",
      "Indulge in a superior fragrance that infuses both freshness and cleanliness into your laundry. Preserve your fabric's color integrity as you conquer stubborn stains. JK Front Load Liquid Detergent – where efficiency meets excellence.",
    ],
    img: {
      "250 ml": frontLoad250,
      "1 liter": frontLoad1,
      "5 liter": frontLoad5,
    },
    size: ["250 ml", "1 liter", "5 liter"],
    price: { "250 ml": 65, "1 liter": 200, "5 liter": 900 },
  },
  {
    id: 213,
    type: "detergent",
    defaultSize: "1 liter",
    title: "Top/Front Load Detergent",
    productDescription: [
      "Experience the power of efficiency with JK Front Load Liquid Detergent – your ultimate solution for rapid stain removal in washing machines.",
      "Effortless dissolution is guaranteed. Our liquid formula quickly dissolves in the washing machine's high water level environment, effortlessly reaching stains without leaving any residue on clothes or within the machine.",
      "Care for your machine while it cares for your clothes. Our detergent's foam production aligns with various washing machine types, preventing pipe clogging and scaling issues.",
      "Indulge in a superior fragrance that infuses both freshness and cleanliness into your laundry. Preserve your fabric's color integrity as you conquer stubborn stains. JK Front Load Liquid Detergent – where efficiency meets excellence.",
    ],
    img: {
      "250 ml": TopfrontLoad250,
      "1 liter": TopfrontLoad1,
      "5 liter": TopfrontLoad5,
    },
    size: ["250 ml", "1 liter", "5 liter"],
    price: { "250 ml": 65, "1 liter": 200, "5 liter": 900 },
  },
  {
    id: 214,
    type: "detergent",
    defaultSize: "250 ml",
    title: "Top/Front Load Detergent",
    productDescription: [
      "Experience the power of efficiency with JK Front Load Liquid Detergent – your ultimate solution for rapid stain removal in washing machines.",
      "Effortless dissolution is guaranteed. Our liquid formula quickly dissolves in the washing machine's high water level environment, effortlessly reaching stains without leaving any residue on clothes or within the machine.",
      "Care for your machine while it cares for your clothes. Our detergent's foam production aligns with various washing machine types, preventing pipe clogging and scaling issues.",
      "Indulge in a superior fragrance that infuses both freshness and cleanliness into your laundry. Preserve your fabric's color integrity as you conquer stubborn stains. JK Front Load Liquid Detergent – where efficiency meets excellence.",
    ],
    img: {
      "250 ml": TopfrontLoad250,
      "1 liter": TopfrontLoad1,
      "5 liter": TopfrontLoad5,
    },
    size: ["250 ml", "1 liter", "5 liter"],
    price: { "250 ml": 65, "1 liter": 200, "5 liter": 900 },
  },
  {
    id: 215,
    type: "detergent",
    defaultSize: "5 liter",
    title: "Top/Front Load Detergent",
    productDescription: [
      "Experience the power of efficiency with JK Front Load Liquid Detergent – your ultimate solution for rapid stain removal in washing machines.",
      "Effortless dissolution is guaranteed. Our liquid formula quickly dissolves in the washing machine's high water level environment, effortlessly reaching stains without leaving any residue on clothes or within the machine.",
      "Care for your machine while it cares for your clothes. Our detergent's foam production aligns with various washing machine types, preventing pipe clogging and scaling issues.",
      "Indulge in a superior fragrance that infuses both freshness and cleanliness into your laundry. Preserve your fabric's color integrity as you conquer stubborn stains. JK Front Load Liquid Detergent – where efficiency meets excellence.",
    ],
    img: {
      "250 ml": TopfrontLoad250,
      "1 liter": TopfrontLoad1,
      "5 liter": TopfrontLoad5,
    },
    size: ["250 ml", "1 liter", "5 liter"],
    price: { "250 ml": 65, "1 liter": 200, "5 liter": 900 },
  },
  {
    id: 9,
    type: "handWash",
    title: "Aloe Vera Hand Wash",
    defaultSize: "1.2 liter",
    productDescription: [
      "A touch of luxury for your cleansing ritual.",
      "Experience the epitome of purity with our transparent liquid soap enriched with the goodness of Aloe Vera. Gently cleanse and nourish your skin with every use, while enjoying the soothing benefits of Aloe Vera.",
      "Crafted for those who seek quality, this premium liquid soap provides a transparent and invigorating cleansing experience. Elevate your daily routine with the goodness of Aloe Vera and the trusted excellence of JK.",
    ],
    img: {
      "250 ml": Alovera250ml,
      "1.2 liter": Alovera1l,
    },
    size: ["250 ml", "1.2 liter"],
    price: { "250 ml": 89, "1.2 liter": 250 },
  },
  {
    id: 12,
    type: "handWash",
    title: "Aloe Vera Hand Wash",
    defaultSize: "250 ml",
    productDescription: [
      "A touch of luxury for your cleansing ritual.",
      "Experience the epitome of purity with our transparent liquid soap enriched with the goodness of Aloe Vera. Gently cleanse and nourish your skin with every use, while enjoying the soothing benefits of Aloe Vera.",
      "Crafted for those who seek quality, this premium liquid soap provides a transparent and invigorating cleansing experience. Elevate your daily routine with the goodness of Aloe Vera and the trusted excellence of JK.",
    ],
    img: {
      "250 ml": Alovera250ml,
      "1.2 liter": Alovera1l,
    },
    size: ["250 ml", "1.2 liter"],
    price: { "250 ml": 89, "1.2 liter": 250 },
  },
  {
    id: 124,
    type: "handWash",
    title: "Strawberry Hand Wash",
    defaultSize: "250 ml",
    productDescription: [
      "A touch of luxury for your cleansing ritual.",
      "Experience the epitome of purity with our transparent liquid soap enriched with the goodness of Aloe Vera. Gently cleanse and nourish your skin with every use, while enjoying the soothing benefits of Aloe Vera.",
      "Crafted for those who seek quality, this premium liquid soap provides a transparent and invigorating cleansing experience. Elevate your daily routine with the goodness of Aloe Vera and the trusted excellence of JK.",
    ],
    img: {
      "250 ml": Strawberry250ml,
      "1.2 liter": Strawberry1L,
    },
    size: ["250 ml", "1.2 liter"],
    price: { "250 ml": 89, "1.2 liter": 250 },
  },
  {
    id: 125,
    type: "handWash",
    title: "Strawberry Hand Wash",
    defaultSize: "1.2 liter",
    productDescription: [
      "A touch of luxury for your cleansing ritual.",
      "Experience the epitome of purity with our transparent liquid soap enriched with the goodness of Aloe Vera. Gently cleanse and nourish your skin with every use, while enjoying the soothing benefits of Aloe Vera.",
      "Crafted for those who seek quality, this premium liquid soap provides a transparent and invigorating cleansing experience. Elevate your daily routine with the goodness of Aloe Vera and the trusted excellence of JK.",
    ],
    img: {
      "250 ml": Strawberry250ml,
      "1.2 liter": Strawberry1L,
    },
    size: ["250 ml", "1.2 liter"],
    price: { "250 ml": 89, "1.2 liter": 250 },
  },
  {
    id: 126,
    type: "handWash",
    title: "Rose Hand Wash",
    defaultSize: "5 liter",
    productDescription: [
      "Elevate your skincare routine with the delicate essence of roses. Our liquid soap gently cleanses, leaving your skin refreshed and invigorated, while the captivating fragrance of roses lingers in the air.",
      "Experience the trusted quality of JK as you indulge in the beauty of this fragrant liquid soap. Make every wash a sensory delight with JK Rose Liquid Soap – where cleansing meets elegance.",
    ],
    img: {
      "250 ml": Rose250ml,
      "750 ml": RoseRefill,
      "5 liter": Rose5l,
    },
    size: ["250 ml", "750 ml", "5 liter"],
    price: { "250 ml": 69, "750 ml": 99, "5 liter": 600 },
  },
  {
    id: 127,
    type: "handWash",
    title: "Rose Hand Wash",
    defaultSize: "250 ml",
    productDescription: [
      "Elevate your skincare routine with the delicate essence of roses. Our liquid soap gently cleanses, leaving your skin refreshed and invigorated, while the captivating fragrance of roses lingers in the air.",
      "Experience the trusted quality of JK as you indulge in the beauty of this fragrant liquid soap. Make every wash a sensory delight with JK Rose Liquid Soap – where cleansing meets elegance.",
    ],
    img: {
      "250 ml": Rose250ml,
      "750 ml": RoseRefill,
      "5 liter": Rose5l,
    },
    size: ["250 ml", "750 ml", "5 liter"],
    price: { "250 ml": 69, "750 ml": 99, "5 liter": 600 },
  },
  {
    id: 128,
    type: "handWash",
    title: "Rose Hand Wash Refill",
    defaultSize: "750 ml",
    productDescription: [
      "Elevate your skincare routine with the delicate essence of roses. Our liquid soap gently cleanses, leaving your skin refreshed and invigorated, while the captivating fragrance of roses lingers in the air.",
      "Experience the trusted quality of JK as you indulge in the beauty of this fragrant liquid soap. Make every wash a sensory delight with JK Rose Liquid Soap – where cleansing meets elegance.",
    ],
    img: {
      "250 ml": Rose250ml,
      "750 ml": RoseRefill,
      "5 liter": Rose5l,
    },
    size: ["250 ml", "750 ml", "5 liter"],
    price: { "250 ml": 69, "750 ml": 99, "5 liter": 600 },
  },
  {
    id: 129,
    type: "handWash",
    title: "Rose Transparent Hand Wash",
    defaultSize: "250 ml",
    productDescription: [
      "A touch of luxury for your cleansing ritual.",
      "Experience the elegance of roses with our transparent liquid soap. Gently cleanse and rejuvenate your skin with every use, while immersing yourself in the enchanting fragrance of roses.",
      "Crafted for those who seek quality, this premium liquid soap provides a transparent and invigorating cleansing experience. Elevate your daily routine with the timeless allure of roses and the trusted excellence of JK.",
    ],
    img: {
      "250 ml": RoseTransparent250ml,
      "1.2 liter": RoseTransparent1l,
    },
    size: ["250 ml", "1.2 liter"],
    price: { "250 ml": 89, "1.2 liter": 250 },
  },
  {
    id: 135,
    type: "handWash",
    title: "Rose Transparent Hand Wash",
    defaultSize: "1.2 liter",
    productDescription: [
      "A touch of luxury for your cleansing ritual.",
      "Experience the elegance of roses with our transparent liquid soap. Gently cleanse and rejuvenate your skin with every use, while immersing yourself in the enchanting fragrance of roses.",
      "Crafted for those who seek quality, this premium liquid soap provides a transparent and invigorating cleansing experience. Elevate your daily routine with the timeless allure of roses and the trusted excellence of JK.",
    ],
    img: {
      "250 ml": RoseTransparent250ml,
      "1.2 liter": RoseTransparent1l,
    },
    size: ["250 ml", "1.2 liter"],
    price: { "250 ml": 89, "1.2 liter": 250 },
  },
  {
    id: 13,
    type: "colin",
    title: "Glass and Household Cleaner",
    defaultSize: "1 liter",
    productDescription: [
      "Experience the brilliance of triple shine boosters with J.K. Glass Cleaner. It goes beyond mere dirt removal, delivering 2X more shine than regular cleaners.",
      "Versatility at its finest, it's suitable for various glass and shiny surfaces – from mirrors and glass windows to tabletops, kitchen cabinets, and even car windows.",
      "Safety is paramount – feel confident using it externally on appliances following usage instructions. Elevate your surfaces to new levels of shine with J.K. Glass Cleaner – where cleanliness meets extraordinary brilliance.",
    ],
    img: {
      "500 ml": colin250ml,
      "1 liter": colin1l,
      "5 liter": colin5l,
    },
    size: ["500 ml", "1 liter", "5 liter"],
    price: { "500 ml": 100, "1 liter": 120, "5 liter": 550 },
  },

  {
    id: 130,
    type: "colin",
    title: "Glass and Household Cleaner",
    defaultSize: "5 liter",
    productDescription: [
      "Experience the brilliance of triple shine boosters with J.K. Glass Cleaner. It goes beyond mere dirt removal, delivering 2X more shine than regular cleaners.",
      "Versatility at its finest, it's suitable for various glass and shiny surfaces – from mirrors and glass windows to tabletops, kitchen cabinets, and even car windows.",
      "Safety is paramount – feel confident using it externally on appliances following usage instructions. Elevate your surfaces to new levels of shine with J.K. Glass Cleaner – where cleanliness meets extraordinary brilliance.",
    ],
    img: {
      "500 ml": colin250ml,
      "1 liter": colin1l,
      "5 liter": colin5l,
    },
    size: ["500 ml", "1 liter", "5 liter"],
    price: { "500 ml": 100, "1 liter": 120, "5 liter": 550 },
  },
  {
    id: 131,
    type: "colin",
    title: "Household Cleaner",
    defaultSize: "500 ml",
    productDescription: [
      "Experience the brilliance of triple shine boosters with J.K. Glass Cleaner. It goes beyond mere dirt removal, delivering 2X more shine than regular cleaners.",
      "Versatility at its finest, it's suitable for various glass and shiny surfaces – from mirrors and glass windows to tabletops, kitchen cabinets, and even car windows.",
      "Safety is paramount – feel confident using it externally on appliances following usage instructions. Elevate your surfaces to new levels of shine with J.K. Glass Cleaner – where cleanliness meets extraordinary brilliance.",
    ],
    img: {
      "500 ml": colin250ml,
      "1 liter": colin1l,
      "5 liter": colin5l,
    },
    size: ["500 ml", "1 liter", "5 liter"],
    price: { "500 ml": 100, "1 liter": 120, "5 liter": 550 },
  },
  {
    id: 140,
    type: "easyWash",
    title: "Easy Wash",
    defaultSize: "500 ml",
    productDescription: [
      "Experience the convenience of Easy Wash – your go-to solution for effortless laundry.",
      "Streamline your laundry tasks with our powerful formula, designed to tackle dirt and stains with ease. Enjoy cleaner, fresher clothes in a breeze.",
      "Elevate your washing experience with Easy Wash – where simplicity meets impeccable results.",
    ],
    img: {
      "500 ml": easywash500ml,
      // "1 liter": easywash1l,
      "5 liter": easywash1l,
    },
    size: ["500 ml", "5 liter"],
    price: { "500 ml": 80, "5 liter": 550 },
  },
  {
    id: 141,
    type: "easyWash",
    title: "Easy Wash",
    defaultSize: "5 liter",
    productDescription: [
      "Experience the convenience of Easy Wash – your go-to solution for effortless laundry.",
      "Streamline your laundry tasks with our powerful formula, designed to tackle dirt and stains with ease. Enjoy cleaner, fresher clothes in a breeze.",
      "Elevate your washing experience with Easy Wash – where simplicity meets impeccable results.",
    ],
    img: {
      "500 ml": easywash500ml,
      // "1 liter": easywash1l,
      "5 liter": easywash1l,
    },
    size: ["500 ml", "5 liter"],
    price: { "500 ml": 80, "5 liter": 550 },
  },
  {
    id: 142,
    type: "toiletCleaner",
    title: "Toilet Cleaner",
    img: {
      "250 ml": toiletCleaner250ml,
      "650 ml": toiletCleaner1l,
      "5 liter": toiletCleaner5l,
    },
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
    id: 143,
    type: "toiletCleaner",
    title: "Toilet Cleaner",
    img: {
      "250 ml": toiletCleaner250ml,
      "650 ml": toiletCleaner1l,
      "5 liter": toiletCleaner5l,
    },
    price: { "250 ml": 45, "650 ml": 85, "5 liter": 500 },
    productDescription: [
      "Say goodbye to foul odors as our potent cleaner keeps your bathroom smelling fresh. The easy-to-use nozzle targets tricky spots in toilet pot rims, leaving no corner untouched. Designed for both Indian and Western toilets, J.K. Toilet Cleaner's unique shape allows easy pouring into deep corners under the toilet rim.",
      "Unleash 50 times more cleaning power with J.K. Toilet Cleaner. Its powerful agents obliterate tough stains like hard water stains, rust, and lime scale, ensuring an immaculate and shiny toilet bowl. The enduring fragrance leaves your bathroom pleasantly scented for hours, catering to even the busiest households.",
      "Elevate your toilet cleaning experience with J.K. Toilet Cleaner. Trust in its effectiveness, trust in its hygiene, and embrace the brilliance of a truly pristine toilet.",
    ],
    defaultSize: "250 ml",
    size: ["250 ml", "650 ml", "5 liter"],
  },
  {
    id: 144,
    type: "toiletCleaner",
    title: "Toilet Cleaner",
    img: {
      "250 ml": toiletCleaner250ml,
      "650 ml": toiletCleaner1l,
      "5 liter": toiletCleaner5l,
    },
    price: { "250 ml": 45, "650 ml": 85, "5 liter": 500 },
    productDescription: [
      "Say goodbye to foul odors as our potent cleaner keeps your bathroom smelling fresh. The easy-to-use nozzle targets tricky spots in toilet pot rims, leaving no corner untouched. Designed for both Indian and Western toilets, J.K. Toilet Cleaner's unique shape allows easy pouring into deep corners under the toilet rim.",
      "Unleash 50 times more cleaning power with J.K. Toilet Cleaner. Its powerful agents obliterate tough stains like hard water stains, rust, and lime scale, ensuring an immaculate and shiny toilet bowl. The enduring fragrance leaves your bathroom pleasantly scented for hours, catering to even the busiest households.",
      "Elevate your toilet cleaning experience with J.K. Toilet Cleaner. Trust in its effectiveness, trust in its hygiene, and embrace the brilliance of a truly pristine toilet.",
    ],
    defaultSize: "5 liter",
    size: ["250 ml", "650 ml", "5 liter"],
  },

  {
    id: 15,
    type: "floorCleaner",
    img: {
      "500 ml": floorCleaner250ml,
      "1 liter": floorCleaner1l,
      "5 liter": floorCleaner5l,
    },
    title: "Surface Cleaner",
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
  {
    id: 16,
    type: "floorCleaner",
    img: {
      "500 ml": floorCleaner250ml,
      "1 liter": floorCleaner1l,
      "5 liter": floorCleaner5l,
    },
    title: "Surface Cleaner",
    detail: "Step into a spotless world - with every sweep, mop and swirl",
    price: { "500 ml": 80, "1 liter": 150, "5 liter": 625 },
    productDescription: [
      "Discover the power of J.K. Surface Cleaner – the versatile cleaner that obliterates tough stains, from coffee to ketchup, soy sauce, mustard sauce, and even olive oil.",
      "Experience the invigorating aroma of lavender as you clean, leaving behind refreshed surfaces and a delightful ambiance. With a user-friendly formula that safeguards your hands, cleaning becomes a breeze.",
      "From ceramic to marble, granite to mosaic, J.K. Surface Cleaner proves its adaptability on a myriad of surfaces. Elevate your cleaning game with J.K. Surface Cleaner – where stains are conquered, and surfaces shine a new.",
    ],
    defaultSize: "1 liter",
    size: ["500 ml", "1 liter", "5 liter"],
  },
  {
    id: 16,
    type: "floorCleaner",
    img: {
      "500 ml": floorCleaner250ml,
      "1 liter": floorCleaner1l,
      "5 liter": floorCleaner5l,
    },
    title: "Surface Cleaner",
    detail: "Step into a spotless world - with every sweep, mop and swirl",
    price: { "500 ml": 80, "1 liter": 150, "5 liter": 625 },
    productDescription: [
      "Discover the power of J.K. Surface Cleaner – the versatile cleaner that obliterates tough stains, from coffee to ketchup, soy sauce, mustard sauce, and even olive oil.",
      "Experience the invigorating aroma of lavender as you clean, leaving behind refreshed surfaces and a delightful ambiance. With a user-friendly formula that safeguards your hands, cleaning becomes a breeze.",
      "From ceramic to marble, granite to mosaic, J.K. Surface Cleaner proves its adaptability on a myriad of surfaces. Elevate your cleaning game with J.K. Surface Cleaner – where stains are conquered, and surfaces shine a new.",
    ],
    defaultSize: "5 liter",
    size: ["500 ml", "1 liter", "5 liter"],
  },
  {
    id: 166,
    type: "floorCleaner",
    title: "White Floor Cleaner",
    img: {
      "1 liter": floorCleaner1lwhite,
      "5 liter": floorCleaner5lwhite,
    },
    price: { "1 liter": 50, "5 liter": 200 },
    productDescription: [
      "Revitalize your living space with JK White Floor Cleaner – the ultimate solution for gleaming floors.",
      "Experience the power of our advanced formula that effortlessly removes dirt and grime, leaving your floors brilliantly white and spotless.",
      "Elevate your cleaning routine with JK White Floor Cleaner – where cleanliness meets floor perfection.",
    ],
    defaultSize: "1 liter",
    size: ["1 liter", "5 liter"],
  },
  {
    id: 167,
    type: "floorCleaner",
    img: {
      "1 liter": floorCleaner1lwhite,
      "5 liter": floorCleaner5lwhite,
    },
    price: { "1 liter": 50, "5 liter": 200 },
    productDescription: [
      "Revitalize your living space with JK White Floor Cleaner – the ultimate solution for gleaming floors.",
      "Experience the power of our advanced formula that effortlessly removes dirt and grime, leaving your floors brilliantly white and spotless.",
      "Elevate your cleaning routine with JK White Floor Cleaner – where cleanliness meets floor perfection.",
    ],
    defaultSize: "5 liter",
    size: ["1 liter", "5 liter"],
  },
  {
    id: 17,
    type: "dishWasher",
    title: "Dish Cup",
    img: {
      "250 ml": dishcup,
    },
    price: { "250 ml": 35 },
    productDescription: [
      "Discover the JK Dish Cup – your versatile partner for kitchen cleanliness. ",
      "Designed for efficiency, our dish cup effortlessly tackles grease and stains, ensuring your dishes emerge spotless and gleaming.",
      "Elevate your dishwashing routine with the JK Dish Cup – where innovation meets pristine results.",
    ],
    defaultSize: "250 ml",
    size: ["250 ml"],
  },
  {
    id: 19,
    type: "dishWasher",
    img: {
      "500 ml": dishgel500l,
      "1.2 liter": dishgel1l,
      "5 liter": dishge5l,
    },
    title: "Dish Gel",
    price: { "500 ml": 85, "1.2 liter": 130, "5 liter": 600 },
    productDescription: [
      "Experience the luxury of cleaning expensive crockery and cookware without the worry of scratches. Its gentle touch preserves your items' integrity while the superior fragrance lingers long after your utensils are rinsed.",
      "Soft on your hands, J.K. Dish Gel's powerful formula cuts through tough grease, ensuring sparkling clean results. Just one spoonful is enough to conquer a sink-full of dirty dishes, making your cleaning routine efficient and effective.",
      "Unlike traditional bars, J.K. Dish Gel deep cleans without leaving any white residue. Feel the difference as it removes foul smells and introduces a refreshing lime fragrance. Choose the ultimate, choose J.K. Dish Gel – where stains vanish, and brilliance emerges.",
    ],
    defaultSize: "500 ml",
    size: ["500 ml", "1.2 liter", "5 liter"],
  },
  {
    id: 20,
    type: "dishWasher",
    title: "Dish Gel",
    defaultSize: "1.2 liter",
    img: {
      "500 ml": dishgel500l,
      "1.2 liter": dishgel1l,
      "5 liter": dishge5l,
    },
    detail:
      "Let your dishwasher do the dirty work - for sparkling clean dishes every time",
    price: { "500 ml": 85, "1.2 liter": 130, "5 liter": 600 },
    productDescription: [
      "Experience the luxury of cleaning expensive crockery and cookware without the worry of scratches. Its gentle touch preserves your items' integrity while the superior fragrance lingers long after your utensils are rinsed.",
      "Soft on your hands, J.K. Dish Gel's powerful formula cuts through tough grease, ensuring sparkling clean results. Just one spoonful is enough to conquer a sink-full of dirty dishes, making your cleaning routine efficient and effective.",
      "Unlike traditional bars, J.K. Dish Gel deep cleans without leaving any white residue. Feel the difference as it removes foul smells and introduces a refreshing lime fragrance. Choose the ultimate, choose J.K. Dish Gel – where stains vanish, and brilliance emerges.",
    ],
    size: ["500 ml", "1.2 liter", "5 liter"],
  },
  {
    id: 200,
    type: "dishWasher",
    title: "Dish Gel",
    defaultSize: "5 liter",
    img: {
      "500 ml": dishgel500l,
      "1.2 liter": dishgel1l,
      "5 liter": dishge5l,
    },
    detail:
      "Let your dishwasher do the dirty work - for sparkling clean dishes every time",
    price: { "500 ml": 85, "1.2 liter": 130, "5 liter": 600 },
    productDescription: [
      "Experience the luxury of cleaning expensive crockery and cookware without the worry of scratches. Its gentle touch preserves your items' integrity while the superior fragrance lingers long after your utensils are rinsed.",
      "Soft on your hands, J.K. Dish Gel's powerful formula cuts through tough grease, ensuring sparkling clean results. Just one spoonful is enough to conquer a sink-full of dirty dishes, making your cleaning routine efficient and effective.",
      "Unlike traditional bars, J.K. Dish Gel deep cleans without leaving any white residue. Feel the difference as it removes foul smells and introduces a refreshing lime fragrance. Choose the ultimate, choose J.K. Dish Gel – where stains vanish, and brilliance emerges.",
    ],
    size: ["500 ml", "1.2 liter", "5 liter"],
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
