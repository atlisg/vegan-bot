import { Injectable } from "@angular/core";
import { Answer } from "../models/answer.interface";
import * as vegancomAnswers from "../../../bot-sources/vegancom-answers.json";

@Injectable()
export class VeganComService {
  public answers;
  constructor() {
    this.answers = vegancomAnswers;
  }
  /* public answers: Array<Answer> = [
    {
      source: "Vegan.com",
      key: "What is a vegan?",
      answer: [
        "A vegan is someone who doesn’t eat animal products: meat, fish, milk products, eggs. Vegans also avoid fur, leather, and wool as these products generally result in the confinement, abuse, and slaughter of animals.",
        "Vegan may well be the most mispronounced word in the English language. The correct pronunciation is Vee-Guhn. Vegan Society co-founder Donald Watson coined the word in 1944, forming it by removing half the letters from vegetarian."
      ]
    },
    {
      source: "Vegan.com",
      key: "Why do people become vegan?",
      answer: [
        "The big three reasons people become vegan have to do with concerns about animal suffering, personal health, and the environment. Some people make the switch exclusively for one reason, while for others it’s a mix of reasons. Let’s consider each of these topics in turn.",
        "Prevention of Animal Suffering",
        "The overwhelming majority of today’s cows, pigs, and chickens are subjected to appalling cruelties, and the conditions present at factory f merit the attention of every compassionate person. This twelve minute video offers perhaps the most accurate summary of how animals are raised.",
        "http://www.mercyforanimals.org/farm-to-fridge.aspx",
        "Most meat, milk, and eggs are produced at “factory farms” — places where close confinement and unconscionable cruelties  are the norm. For instance, most egg-laying hens worldwide are raised in battery cages, with each bird receiving less floor space than a single sheet of notebook paper.",
        "http://www.mcdonaldscruelty.com/",
        "One of the main problems with animal agriculture is that meat, milk, and eggs taste about the same regardless of whether they come from animals who were well-treated or brutally abused. And it turns out that many of the most widespread practices in animal agriculture entail profound cruelty. These practices are detailed in free online publications like “Why Vegan?” and books such as Meat Market: Animals, Ethics, & Money.",
        "http://www.veganoutreach.org/whyvegan/",
        "https://aax-us-east.amazon-adsystem.com/x/c/QoNPerJN0PjANI7TrWbWAIEAAAFfyWFk4AEAAAFKAaVyGrQ/https://assoc-redirect.amazon.com/g/r/http://www.amazon.com/exec/obidos/ASIN/0975867911/ref=as_at/vegancom/?creativeASIN=0975867911&linkCode=w61&imprToken=PkREVficP-9DXU8mo26NrA&slotNum=0",
        "Naturally, you can pay more in order to get free-range eggs, organic dairy products, grass-fed beef, and so forth. Although this added expense often does away with some of the worst cruelties, a surprising amount of suffering may be left unaddressed. Unfortunately, the only way to reliably discover how a given producer’s animals are treated is to pay the farm (and slaughterhouse) a visit.",
        "http://dir.salon.com/story/news/feature/2005/04/13/milk/index.html",
        "For people uncomfortable with needless killing, it’s important to know that all farmed animals are sent to slaughter – even dairy cows and layer hens. In fact, virtually all commercially-raised animals are slaughtered before they reach middle-age.",
        "In short, nearly all meat, milk, and eggs come from factory farms—where horrendous conditions and constant misery is the norm. Even the best alternative farms may rely on practices [PDF link] that most caring people would find outrageously cruel. As just one example, many cage-free egg farms source their hens from conventional hatcheries – where the unwanted male chicks are often discarded to smother in dumpsters or are ground up alive (these male “layer-strain” chicks obviously can’t lay eggs, and they don’t grow quickly enough to be profitably raised for meat.)",
        "http://www.humanesociety.org/assets/pdfs/farm/hsus-a-comparison-of-the-welfare-of-hens-in-battery-cages-and-alternative-systems.pdf",
        "With all this in mind, it’s clear that being a “conscientious omnivore” is fraught with uncertainty over the quality of care that farmed animals actually receive. It can be far easier, therefore, to simply transition to a vegan diet. There’s a great deal of satisfaction that comes with sitting down to a delicious meal and knowing that not a single animal has suffered to produce it.",
        "Health Benefits",
        "A strong case can be made that an appropriately planned vegan diet is at least as healthy as any other diet. Vegan foods contain no cholesterol and tend to be lower in both total fat and saturated fat than animal products. And while animal products contain no fiber whatsoever, most whole vegan foods are loaded with fiber. These and other differences between plant and animal-based foods can add up to some substantial health advantages for vegans.",
        "Given that vegan foods are often much lower in calories than their animal-derived counterparts, it’s hardly surprising that vegans often have lower body weight, less hypertension, and lower blood cholesterol levels than omnivores and lacto-ovo vegetarians. Additionally,vegan or near-vegan diets have been used as part of successful programs for management of heart disease and diabetes.",
        "A number of vegan athletes have attained remarkably high levels of fitness. Carl Lewis, winner of nine Olympic gold medals, said, “I’ve found that a person does not need protein from meat to be a successful athlete. In fact, my best year of track competition was the first year I ate a vegan diet.”",
        "Environmental Advantages",
        "From an environmental perspective, a switch to a vegan diet makes a lot of sense. This is especially true where beef and fish are concerned, the production of which are clear-cut environmental menaces.",
        "In the United States, federal grazing deals extended to ranchers result in the extermination of wildlife on huge swaths of land. On top of that, nearly all beef cattle spend the final months of their lives at feedlots, where they are fed a notoriously inefficient and resource-intensive corn-based diet. Because they have digestive systems that rely upon fermentation, cattle emit huge amounts of methane – a gas tied to global warming. The methane produced by pigs and poultry likewise accounts for a lesser but still significant amount of greenhouse gasses. The United Nations estimates that animal agriculture is responsible for 18 percent of the total global warming effect stemming from greenhouse gasses. Beef and dairy cattle probably account for about 70 percent of animal agriculture’s contribution to global warming.",
        "http://www.fao.org/ag/magazine/0612sp1.htm",
        "The environmental case against eating fish is similarly compelling. Worldwide, large numbers of formerly abundant fisheries are in collapse as a result of overfishing. A 2011 article published by the Washington Post begins:",
        "Over the past 100 years, some two-thirds of the large predator fish in the ocean have been caught and consumed by humans, and in the decades ahead the rest are likely to perish, too.",
        "http://www.washingtonpost.com/wp-dyn/content/article/2011/02/20/AR2011022002967.html?hpid=topnews",
        "Mislabeling and misrepresentation are rampant in the fishing industry, so it’s exceedingly difficult for consumers to dependably purchase fish caught from sustainable stocks.",
        "http://www.consumerreports.org/cro/magazine-archive/2011/december/food/fake-fish/overview/index.htm?INTKEY=I95BEE0"
      ]
    },
    {
      source: "Vegan.com",
      key: "How do I go about becoming vegan?",
      answer: [
        "If you’ve eaten meat your entire life, the idea of becoming vegan may appear fraught with difficulty. While the transition admittedly takes some work, the truth is that it’s far easier than you’ll expect. What’s more, you’re likely to have a great time as you incorporate more vegan foods into your diet. During your transition to a vegan diet, you’ll undoubtedly discover all sorts of wonderful foods you’ve never tried before.",
        "A short book like The Ultimate Vegan Guide brings together a lot of key information that will make your transition to a vegan diet vastly easier. You can read it for free online, or purchase the latest edition on Kindle for just $2.99.",
        "http://vegan.com/ultimate-vegan-guide/",
        "https://aax-us-east.amazon-adsystem.com/x/c/QoNPerJN0PjANI7TrWbWAIEAAAFfyWFk4AEAAAFKAaVyGrQ/https://assoc-redirect.amazon.com/g/r/http://www.amazon.com/gp/product/B00520DB7M/ref=as_at/?imprToken=PkREVficP-9DXU8mo26NrA&slotNum=1&ie=UTF8&tag=vegandotcom-20&linkCode=w61&camp=217145&creative=399373&creativeASIN=B00520DB7M",
        "If there’s one piece of advice that guides your transition, make it this: becoming vegan is not about cutting animal-based foods out of your diet, it’s about crowding them out.",
        "The key here is to make an ongoing effort to sample unfamiliar vegan foods. You of course won’t like every last thing you try, but you’re certain to like some of it, and you’ll most definitely stumble upon foods you adore. Every time you find a healthful food that you really like, you can incorporate it into your diet. Over time, whenever you get hungry, you’ll find that the first foods that come to mind just happen to be vegan.",
        "So you see, a transition to a vegan diet has nothing to do with willpower, and everything with making a conscientious and ongoing effort to discover new foods. The more new foods you sample on a regular basis, the quicker and more gracefully your transition to a vegan diet will go. It’s not about being perfect starting today. Take as much time as you need, and know that week-by-week your diet is moving in the right direction. If you’re not enjoying the process, it’s a clear sign that you’re not trying enough new foods.",
        "You may find it helpful to set aside thirty minutes a day to cultivating your vegan habit, with a different activity each day. One day you might browse through vegan cookbooks looking for appealing recipes. The next day you might eat out at a vegan-friendly restaurant and try an unfamiliar dish. The day after that you might read through a book on vegan nutrition before bed. On other days you might try cooking new vegan recipes, or browsing your natural foods store for vegan items you’ve not yet sampled. As you can see, there are all sorts of fun things you can do to push yourself closer to a vegan diet.",
        "http://vegan.com/cookbooks/",
        "https://aax-us-east.amazon-adsystem.com/x/c/QoNPerJN0PjANI7TrWbWAIEAAAFfyWFk4AEAAAFKAaVyGrQ/https://assoc-redirect.amazon.com/g/r/http://www.amazon.com/gp/product/0738214930/ref=as_at/?imprToken=PkREVficP-9DXU8mo26NrA&slotNum=2&ie=UTF8&tag=vegandotcom-20&linkCode=w61&camp=217145&creative=399373&creativeASIN=0738214930"
      ]
    },
    {
      source: "Vegan.com",
      key: "Which books and cookbooks should I read?",
      answer: [
        "Vegan for Life offers the best available introduction to vegan nutrition. The Ultimate Vegan Guideoffers solid information about every aspect of being vegan, as well as how to gracefully make the transition. For cookbooks, start with something emphasizing healthful quick meals for everyday eating; Quick-Fix Vegan is a great choice.",
        "https://aax-us-east.amazon-adsystem.com/x/c/QoNPerJN0PjANI7TrWbWAIEAAAFfyWFk4AEAAAFKAaVyGrQ/https://assoc-redirect.amazon.com/g/r/http://www.amazon.com/gp/product/0738214930/ref=as_at/?imprToken=PkREVficP-9DXU8mo26NrA&slotNum=3&ie=UTF8&tag=vegancom&linkCode=w61&camp=1789&creative=390957&creativeASIN=0738214930",
        "https://aax-us-east.amazon-adsystem.com/x/c/QoNPerJN0PjANI7TrWbWAIEAAAFfyWFk4AEAAAFKAaVyGrQ/https://assoc-redirect.amazon.com/g/r/http://www.amazon.com/gp/product/B00520DB7M/ref=as_at/?imprToken=PkREVficP-9DXU8mo26NrA&slotNum=4&ie=UTF8&tag=vegancom&linkCode=w61&camp=1789&creative=390957&creativeASIN=B00520DB7M",
        "https://aax-us-east.amazon-adsystem.com/x/c/QoNPerJN0PjANI7TrWbWAIEAAAFfyWFk4AEAAAFKAaVyGrQ/https://assoc-redirect.amazon.com/g/r/http://www.amazon.com/gp/product/1449407854/ref=as_at/?imprToken=PkREVficP-9DXU8mo26NrA&slotNum=5&ie=UTF8&tag=vegancom&linkCode=w61&camp=1789&creative=390957&creativeASIN=1449407854",
        "For more, check out our lists of recommended books and recommended cookbooks."
      ]
    },
    {
      source: "Vegan.com",
      key: "What nutrition issues must vegans know about?",
      answer: [
        "First, the good news. According to the American Dietetic Association, a well-planned vegan diet is appropriate for every stage of life: infancy, adolescence, pregnancy, old age, you name it. Plus, as we’ve already seen, a vegan diet can deliver some compelling health advantages, and is also quite compatible with exceptional athletic performance.",
        "http://www.eatright.org/cps/rde/xchg/ada/hs.xsl/advocacy_933_ENU_HTML.htm",
        "Unfortunately, some vegans take this to mean that they can eat anything they want, so long as it’s vegan, and never give a thought to nutrition. This is an incredibly dangerous belief to have, as it can lead to nutrient deficiencies that can permanently damage your health. Luckily, it takes just a short amount of time to familiarize yourself with the main nutritional pitfalls on a vegan diet, and it’s easy to include foods and supplements in your diet that will keep deficiencies from arising.",
        "This FAQ is not a place to offer comprehensive nutrition advice. Instead I’ll just tell you the main deficiencies to watch out for on a vegan diet, and then direct you to resources where you can learn more. The nutrients most often lacking on a vegan diet are: vitamins D and B-12, iodine, calcium, and Omega 3 fatty acids.",
        "The VeganHealth.org website offers a background on each of these nutrients, along with recommendations to guard against deficiencies. Additionally, you may wish to read a book like Norris and Messina’s Vegan for Life, which will familiarize you with the essentials of constructing a healthy vegan diet.",
        "http://www.veganhealth.org/",
        "https://aax-us-east.amazon-adsystem.com/x/c/QoNPerJN0PjANI7TrWbWAIEAAAFfyWFk4AEAAAFKAaVyGrQ/https://assoc-redirect.amazon.com/g/r/http://www.amazon.com/gp/product/0738214930/ref=as_at/?imprToken=PkREVficP-9DXU8mo26NrA&slotNum=6&ie=UTF8&tag=vegandotcom-20&linkCode=w61&camp=217145&creative=399373&creativeASIN=0738214930"
      ]
    },
    {
      source: "Vegan.com",
      key: "What about eating out?",
      answer: [
        "Thanks to the Internet, it’s easy to find local restaurants that are veggie-friendly. There are three different directories to veggie restaurants: VegGuide.org, HappyCow.net, and VegDining.com. Each of these online guides is wonderfully comprehensive. Best of all, these sites all feature user-created ratings and reviews, so you can know in advance which restaurants are worth a special trip, and which are worth going out of your way to avoid.",
        "http://vegguide.org/",
        "http://happycow.net/",
        "http://vegdining.com/Home.cfm",
        "What if you’re on the road and don’t have time to search for a new restaurant? In the United States, I think your best bet is either PF Chang’s Asian Bistro or Chipotle Mexican Grill. At PF Chang’s, any item in the “Vegetarian Plates and Sides” section is either vegan, or can be made so upon request.",
        "http://www.pfchangs.com/",
        "http://www.chipotle.com/",
        "Chipotle Mexican Grill offers outstanding options for vegans. Just order a “vegetarian burrito” with any of the following: black beans, rice, grilled peppers and onions, guacamole, lettuce, and a choice of four different salsas. Chipotle’s freshly-made chips are vegan as well. The only word of caution is to avoid the pinto beans, as they contain pork."
      ]
    },
    {
      source: "Vegan.com",
      key: "How do I know if something’s really vegan?",
      answer: [
        "One hazard of the vegan concept is that it can encourage all-or-nothing thinking. As long as you’re avoiding meat, milk, and eggs, you are doing more than your part when it comes to helping to undermine animal agribusiness. It is much more effective to become a persuasive animal advocate than it is to worry about personally avoiding every last trace of animal products. If, for instance, you participate in occasional leafletting, you are certain to help persuade dozens of young people to move towards a vegan diet. Such an action would keep tens of thousands of animals from harm.",
        "http://www.adoptacollege.org/",
        "It’s this sort of massive impact that deserves the bulk of our attention; not whether the Vitamin D in your soymilk might be derived from an animal byproduct. That said, if you’d like to be informed about hidden animal ingredients, chapter 24 of The Ultimate Vegan Guide covers this topic in great detail.",
        "http://vegan.com/ultimate-vegan-guide/chap24/",
        "https://aax-us-east.amazon-adsystem.com/x/c/QoNPerJN0PjANI7TrWbWAIEAAAFfyWFk4AEAAAFKAaVyGrQ/https://assoc-redirect.amazon.com/g/r/http://www.amazon.com/gp/product/B00520DB7M/ref=as_at/?imprToken=PkREVficP-9DXU8mo26NrA&slotNum=7&ie=UTF8&tag=vegandotcom-20&linkCode=w61&camp=217145&creative=399373&creativeASIN=B00520DB7M"
      ]
    },
    {
      source: "Vegan.com",
      key: "If everyone became vegan, what would happen to all the animals?",
      answer: [
        "There’s no doubt that if the entire world switched overnight to a vegan diet, there would be hundreds of millions of farmed animals needing life-long housing and care.",
        "But realistically speaking, this scenario could never occur, as there’s simply no possibility that the entire worldwide population would become vegan in an instant. It would be delusional to think that the world would require anything less than several decades to become entirely vegan. And if there’s one thing that animal agriculture is great at, it is calibrating supply to meet demand.",
        "So if the consumption of animal products fell into steady decline, we would see fewer and fewer farmed animals being bred, and substantial tracts of land becoming available to wildlife. Over time, the world’s farm animals would be displaced by countless species of wild animals.",
        "Ultimately, cows, pigs, and chickens are domesticated animals and are no more important to biodiversity than, say, toy poodles. Decades from now there may be hobbyists who breed a handful of these animals, for the sake of preserving certain breeds. But the fact is that biodiversity is harmed rather than helped by the existence of animal agriculture."
      ]
    }
  ]; */
}
