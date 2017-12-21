import { Injectable } from "@angular/core";
import { Answer } from "../models/answer.interface";
import * as veganeasyAnswers from "../../../bot-sources/veganeasy-answers.json";

@Injectable()
export class VeganEasyService {
  public answers;
  constructor() {
    this.answers = veganeasyAnswers;
  }
  /* public answers: Array<Answer> = [
    {
      source: "Vegan Easy",
      key: "Is a vegan diet healthy?",
      answer: [
        "Yes! In fact, both the Australian Dietary Guidelines (pg.35) and The Academy of Nutrition and Dietetics have stated that a vegan diet is appropriate for us at any stage of our life including pregnancy, infancy, childhood and for athletes!",
        "A balanced vegan diet consisting of a wide variety of fresh fruits, vegetables, grains, legumes, nuts and seeds is the healthiest of all, with the bonus of higher antioxidants and lower saturated fat and cholesterol. A well planned vegan diet can also help with the prevention and treatment of many illnesses and diseases such as; heart disease, obesity, diabetes, osteoporosis, kidney stones and some cancers.",
        "But it is important to note that any diet can be unhealthy. A diet of burgers, fries, soft drinks and ice cream isn’t going to be healthy regardless of whether it’s vegan or not."
      ]
    },
    {
      source: "Vegan Easy",
      key: "But where do you get your protein?",
      answer: [
        "Getting enough protein is not actually as hard as people will make you think. What people don’t realise is that protein is in virtually everything we eat! Plus most adults need only about 50g a day but consume considerably more than this.",
        "Great vegan sources of protein include, tofu, tempeh, seitan, lentils, chickpeas, beans, nuts and seeds.",
        "Translated into everyday food this could include:",
        "Muesli with banana and soymilk",
        "Peanut butter on wholegrain toast",
        "Soy shake",
        "Handful of nuts and seeds",
        "Wrap with hummus, salad and falafel",
        "Soy yoghurt or muesli bar",
        "Veggie stir fry with tofu",
        "And remember all the biggest and toughest creatures in the animal kingdom are herbivores!"
      ]
    },
    {
      source: "Vegan Easy",
      key: "Where do I get iron from?",
      answer: [
        "From plants! Try to ensure that you eat a variety of foods, such as dark green leafy vegetables, beans and lentils, seeds, wholegrains, nuts and dried fruit. Foods such as breakfast cereals and orange juice are often fortified with iron.",
        "Vitamin C aids the absorption of iron in the body so a vegan diet is at an advantage as it generally contains a variety of fruit and vegetables. If you are concerned about your iron intake then try to avoid drinking tea or red wine with your food. The tannins contained in them can inhibit the absorption of iron."
      ]
    },
    {
      source: "Vegan Easy",
      key: "Will I need to supplement calcium if I don’t eat dairy?",
      answer: [
        "Not necessarily, you can get an adequate amount of calcium from a vegan diet. Good sources of calcium include green leafy vegetables, baked beans, black beans, dried figs, tahini and almonds. As well as this most plant milks are fortified with calcium too. In Australia the recommended calcium intake for adults ranges from 1000 to 1300 mg of calcium per day.",
        "Vitamin D assists the absorption of calcium in the body. A reliable source of Vitamin D is approximately 15 minutes of unprotected exposure to the sun each day. Though vitamin D supplements are recommended for many non-vegans and vegans alike, especially during the winter months."
      ]
    },
    {
      source: "Vegan Easy",
      key: "I’ve heard that vegans have trouble getting enough B12?",
      answer: [
        "Vegans can get B12 through fortified soy milk, marmite and savoury yeast flakes. B12 has also been added to some other vegan products (eg. some Sanitarium burgers, sausages and ice ‘creams’ – check labels though as some Sanitarium products contain eggs and dairy).",
        "We recommend that vegans take a B12 supplement as any B12 present in plant foods is not easily absorbed into the body.",
        "It is important to also realise B12 is usually supplemented into ‘livestock’ animals diets too, so there is no ‘natural’ way for getting B12 in today’s society."
      ]
    },
    {
      source: "Vegan Easy",
      key: "What is wrong with eating dairy products?",
      answer: [
        "Many people do not realise the cruelty involved in the dairy industry. A cow, like a human, only produces milk when she has a baby to feed. Dairy cows are therefore forced to produce calf after calf, each of whom are taken from her shortly after birth, in order to keep her producing milk. The stress placed on the cow often results in her being killed as young as 7 years old (in Australia), when her natural lifespan is between 20-25 years.",
        "The female calves of these cows often replace other members of the dairy herd, whereas the male calves are an unwanted product of the industry. They are either raised for veal or killed shortly after birth.",
        "Not only is dairy unethical, it is also unhealthy as it is high in saturated fat and cholesterol and is linked to obesity, heart disease, cancer, diabetes and osteoporosis. Dairy can also cause Iron deficiency anaemia in infants and toddlers. For further information on the dairy industry go to cowtruth.com",
        "http://www.cowtruth.com/"
      ]
    },
    {
      source: "Vegan Easy",
      key: "Aren’t free-range eggs ok?",
      answer: [
        "Most free range laying hens live in crowded sheds. Their outside area is generally restricted to a small enclosure with access via small exit holes which many hens are unable to reach and therefore have no outside access. The ones who do go outside are sometime trapped outside to be picked off by foxes.",
        "Hens can have a lifespan of 10 years, however they are often killed after 18 months when their productivity drops.",
        "Free range laying hens are the offspring of parent birds who are kept for their entire lives inside crowded, filthy sheds with no access to the outside. The hens and roosters are housed together for constant mating. The hens have no escape or respite from the roosters, their backs become featherless, red and sore from when roosters mount them.",
        "The female chicks of these parent birds are sent to free range, barn laid or caged sheds. The males are unwanted by-products and are killed soon after hatching, generally by being ground up alive in a macerator.",
        "Go to eggsexposed.com for more info.",
        "http://www.eggsexposed.com/"
      ]
    },
    {
      source: "Vegan Easy",
      key: "Does vegan food taste good?",
      answer: [
        "Yes it does! Our culture is all that limits us in eating an amazing selection of delicious vegan foods. We are increasingly programmed to eat highly processed and animal based diets. It is so much easier these days with plenty of vegan products and recipes available, and more coming into the market all the time.",
        "Check out some of our amazing vegan recipes >> here",
        "http://www.veganeasy.org/food/recipes/"
      ]
    },
    {
      source: "Vegan Easy",
      key: "Is honey vegan?",
      answer: [
        "Honey is an animal product and is therefore avoided by vegans. Surprisingly, a lot of bees are factory farmed and live in unnatural conditions. The queen is often artificially inseminated, has her wings clipped and is replaced (killed) after 1 or 2 years (normal life span is around 5 years).",
        "Try using agave nectar, maple syrup or golden syrup instead."
      ]
    },
    {
      source: "Vegan Easy",
      key: "What can I eat?",
      answer: [
        "To put it simply – anything from a plant you eat and anything from an animal you don’t eat!",
        "Many of your standard pantry items such as pasta, rice and bread are almost always vegan – just check the label until you’re familiar with which brands are vegan as well as many cereals.",
        "Some common ‘hidden’ animal products you may not be aware of include:",
        "http://www.veganeasy.org/food/food-additives/",
        "Gelatine (boiled animal tissue such as bones, skin, cartilage and ligaments)",
        "Casein (milk protein)",
        "Cochineal (food colouring made from powdered insects)",
        "Vitamin D3 (from wool fat)",
        "Beeswax",
        "Rennet (enzyme from a calves stomach, used in cheese making)",
        "Lactose/Lactic acid (can be from animal or plant origin)",
        "Check out the Vegan Cheat Sheet for yummy foods that are accidentally vegan.",
        "http://www.veganeasy.org/resources/vegan-cheat-sheet/"
      ]
    },
    {
      source: "Vegan Easy",
      key:
        "What about products that have items such as eggs and dairy listed as ‘May contain traces of…’?",
      answer: [
        "This is something that you will have to make your own decision on. ‘May contain traces of…’ generally means that the product in question is made on the same production line, or in the same factory as others which do contain those ingredients. The wording is generally there as a disclaimer in case someone has an allergy to that particular ingredient (you’ll usually find that it is only allergens that are listed, eg. eggs, dairy, seafood and peanuts).",
        "The chance of the product containing that item is generally very small, and if it did, the amount would most likely be a minute quantity."
      ]
    },
    {
      source: "Vegan Easy",
      key: "Can I still eat out at restaurants?",
      answer: [
        "Yes of course, choosing a vegetarian or vegan restaurant will provide you with the most options when eating out. However, there are options available at most restaurants. Check out the vegetarian dishes on the menu, some may already be vegan, or may easily be adapted simply by omitting one or two ingredients, such as cheese.",
        "Don’t be scared to ask the chef to make something vegan for you – usually they will!"
      ]
    },
    {
      source: "Vegan Easy",
      key: "What can I use instead of cow’s milk?",
      answer: [
        "There is a wide variety of non-dairy milks available. Your local supermarket is likely to stock the more common items such as soy, almond and rice milks, and many health food shops, organic stores and Asian supermarkets offer less common ones such as nut, oat, quinoa and hemp milks. These products can be found both on the shelf and in the refrigerated sections."
      ]
    },
    {
      source: "Vegan Easy",
      key:
        "I don’t want to give up butter and cheese and other dairy products…",
      answer: [
        "There are a wide variety of products such as vegan margarine, butter, creams, cream cheese and other cheeses, ice creams and yoghurts available. Go to our Eating Out Guide to find places to shop for specialty items, and if you are living outside Australia, select ‘Online’ in the ‘Location’ drop-down menu."
      ]
    },
    {
      source: "Vegan Easy",
      key: "Lions do it",
      answer: [
        "Wild animals kill to survive. They must kill to eat, otherwise they would die. Whether they kill on instinct or are aware of their predicament is irrelevant, we are not in their situation. If you live in modern society and have access to crops, vegetables, fruit, grains etc, then you have no obligation or need for animal products. Also, lions exhibit all kinds of behaviour that you would seek to avoid, for instance, violent territorial disputes, and male lions will kill the cubs of a female he wishes to mate with because she won't mate while she has cubs around. Lions are not good ethical role models."
      ]
    },
    {
      source: "Vegan Easy",
      key:
        "What can I eat instead of meat, for example when I’m at a barbecue?",
      answer: [
        "There are plenty of products you can use instead!",
        "Some of the more readily available items are mock meat burgers, sausages, veggie mince, schnitzels and roasts. Be sure to read the ingredients as some may contain eggs and dairy.",
        "If you have an Asian grocery close to you they are worth investigating. They often offer a range of ‘mock meats’ (usually frozen), including mock ‘pork’, ‘duck’, beef’, ‘chicken’ and ’prawns’ . There are also vegan varieties of other items such as bacon, pepperoni, chicken and ham slices.",
        "You may also want to try tofu, seitan and tempeh, which are all high in protein and can make a delicious hearty meat substitute.",
        "If a recipe calls for chicken or beef stock – you can simply replace this with Massels Chicken or Beef Style Stock which is vegan, or try miso which is a great way to add flavour."
      ]
    },
    {
      source: "Vegan Easy",
      key: "Is alcohol vegan?",
      answer: [
        "Most spirits are vegan, although there are the more obvious ones that contain cream or honey that are not. Most wines and beers go through a filtering process, often using animal products. Such filtering agents include milk, albumen (from eggs), isinglass (from the swim bladders of fish) and gelatine.",
        "Labelling regulations require allergens such as milk and egg to be listed on labels, but it is not a requirement for isinglass or gelatine.",
        "Coopers, Boags and Heineken beers are all vegan. While almost all German (and Belgian) beers are vegan because of their laws for purity!",
        "To find more vegan alcohol visit www.barnivore.com",
        "http://www.barnivore.com/"
      ]
    },
    {
      source: "Vegan Easy",
      key: "I don’t like tofu. Do I have to have it?",
      answer: [
        "There are plenty of things to eat without ever touching tofu, and even if you don’t like tofu as is, you may find it useful for mixing into things to provide extra protein or a creamy texture. Tofu can be used to make sauces, as a replacement for ricotta in pastas and pastries, or crumbled up as a ‘mince’ substitute! Check out our recipes page to find out how to make scrambled tofu and frittata.",
        "http://www.veganeasy.org/food/recipes/",
        "http://www.veganeasy.org/food/recipes/scrambled-eggs-and-sausage-the-vegan-way/",
        "http://www.veganeasy.org/recipes/tofu-frittata/",
        "If you want to try adding a few pieces of tofu to your stirfry or curry, but don’t have a clue about marinating there are plenty of pre-marinated tofu varieties available in a range of flavours. Easy!"
      ]
    },
    {
      source: "Vegan Easy",
      key:
        "What about things like toiletries? How can you tell if they contain animal products or are tested on animals?",
      answer: [
        "There are no regulations governing the labelling of products as ‘not tested on animals’, so if you are unsure about a product then do some research. Contact the manufacturer to ask them about their testing policy. Remember that just because a product has not been tested on animals it doesn’t mean it is vegan. Some products, for example skin care and make up, often contain animal products.",
        "Choose Cruelty Free is a great place to research your products: www.choosecrueltyfree.org.au",
        "http://www.choosecrueltyfree.org.au/"
      ]
    },
    {
      source: "Vegan Easy",
      key: "Where do you get your protein from?",
      answer: [
        "You really dont need as much protein as you think you do, plus protein deficiency is really very rare in developed countries, regardless of one’s diet. We can easily get enough protein from eating foods like beans, tofu, non-dairy milks, legumes, nuts and seeds."
      ]
    },
    {
      source: "Vegan Easy",
      key: "If everyone went vegan, wouldn’t animals take over the world?",
      answer: [
        "No. It is a simple supply and demand issue- the more vegans there are, the less animals will be farmed."
      ]
    },
    {
      source: "Vegan Easy",
      key: "Can you still eat fish?",
      answer: [
        "We don’t want to state the obvious but… fish aren’t vegetables! Even though they are very different from us, they are still living and breathing sentient beings who experience suffering and pain, and they are not food."
      ]
    },
    {
      source: "Vegan Easy",
      key: "But plants feel pain too!",
      answer: [
        "No doubt the person saying this will happily walk on grass! While plants can respond to stimuli, they don’t contain a central nervous system, therefore don’t experience pain. Unlike cows, pigs, chickens and sheep, plants are not sentient beings."
      ]
    },
    {
      source: "Vegan Easy",
      key: "Wouldn’t cows explode if we didn’t milk them?",
      answer: [
        "Just like human mums, female cows only produce milk when they have a baby to feed. To make sure she is always producing milk, the dairy industry routinely impregnates cows and then kills their babies so humans can consume the milk instead. Cows don’t explode, but do experience a wide range of physical and psychological trauma and pain."
      ]
    },
    {
      source: "Vegan Easy",
      key: "Humans are the top of the food chain, we are meant to eat meat…",
      answer: [
        "Just because we can kill animals to eat them doesn’t mean we should. We dont need animal products in our diet. Vegans live healthier lives without slaughtering others and wreaking havoc on the enrivonment."
      ]
    },
    {
      source: "Vegan Easy",
      key:
        "Why don’t you care about people? They are more important than animals.",
      answer: [
        "Being vegan IS caring about people. A vegan diet benifits human health and reduces community medical costs. Animals farmed for ‘food’ eat huge amounts of plants and prains that could be fed to starving humans instead.",
        "And why cant you care about both simultaneously?"
      ]
    },
    {
      source: "Vegan Easy",
      key: "But what do you eat?",
      answer: [
        "What DON’t we eat! There is a huge variety of food that is naturally vegan (fruits, vegetables, grain, legumes, nuts and seeds) as well as lots of specialist vegan products."
      ]
    },
    {
      source: "Vegan Easy",
      key: "Being vegan is so extreme",
      answer: [
        "If kindness is extreme, then what do you call the slaughter of terrified animals? There is nothing extreme about kindess and non-violence."
      ]
    },
    {
      source: "Vegan Easy",
      key: "I could never give up bacon/cheese/wings/….",
      answer: [
        "Have you tried? Once you set your mind to something you can achieve it. You can change band habits, give it a go! Simply consider the damage and suffering and animal based diet is causing."
      ]
    }
  ]; */
}
