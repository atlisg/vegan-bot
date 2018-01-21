import { Injectable } from '@angular/core';
import { Answer } from '../models/answer.interface';
import * as vivaAnswers from '../../../bot-sources/viva-answers.json';

@Injectable()
export class VivaService {
  public answers;
  constructor() {
    this.answers = vivaAnswers;
  }

  /* public answers: Array<Answer> = [
    {
      answer: [
        "Farmed animals are not allowed to reproduce naturally and farmers only breed animals when they can make a profit out of doing so. As demand for meat goes down over time, so fewer and fewer animals will be bred. That means that we will not be overrun by millions of farmed animals, as some people seem to imagine. Eventually, the few that are left can be allowed to go free: pigs can root around in woodlands as it is natural for them to do, sheep will graze the hillsides like deer and so on. Their populations will find their own natural levels, just like every other animal."
      ],
      source: "Viva",
      key: "If we all went vegan, we\u2019d be overrun with animals?"
    },
    {
      answer: [
        "The converse of the above question \u2013 we vegans hear \u2018em all! It's true that the number of animals will fall as farmers breed fewer and fewer animals as the years go by. Farmed animals live a controlled, distorted life, often filled with pain and fear. The vast majority of farmed animals are kept in indoor units where they never see the light of day. Those that are kept outside are only kept alive for a fraction of their natural lifespans before being slaughtered for meat - often in the most barbaric manner imaginable. All farmed animals are born to die at our command - a disgusting idea. Also some breeds have been so changed from their natural ancestor that it would be kinder to let them die out. For example, broiler chickens and turkeys bred for meat are often so obese that they can barely walk and suffer from crippling leg disorders. However we could set up large nature reserves for the more traditional (now rare) breeds that haven't been so changed.",
        "There would be much more land available for reserves because most of it is used to grow crops for fattening animals at present. Also, there would be more space for forests and woods and other wildlife reservations where genuinely wild British species of animal and plants could flourish. In other countries we could encourage the breeding of our farm animal's wild ancestors - the wild pig, turkeys and jungle fowl (the forerunner of the battery hen) by stopping the destruction of their homes.",
        "Many people forget that all farmed animals have been bred from wild animals \u2013 and that their natural ancestors need preserving.",
        "In a vegan world animals would not be kept for profit and greed but would be allowed to exist in their natural state and live their life in freedom."
      ],
      source: "Viva",
      key: "If we all went vegan \u2013 all the animals would die out."
    },
    {
      answer: [
        "No, they aren\u2019t. We can digest meat, but our digestive systems are different to carnivorous animals: our guts are longer (so we can digest lots of plant materials) and our teeth are not designed to slice and tear flesh. Our teeth and mouths are the wrong shape to be able to kill and hold captive struggling prey (compare our jaw shape and teeth to a lion \u2013 or your pet cat or dog!). That\u2019s why humans cook meat before eating it and why we\u2019re no good at crunching and munching uncooked bones. As for our sharp teeth, gorillas are entirely vegan \u2013 as are almost all primates \u2013 and yet have far longer and sharper canine teeth than human beings. The diet of the ancestors of human beings was vegan until they began hunting about one-and-a-half million years ago but even then meat formed just a tiny part of their diet. That\u2019s why people live long, healthy lives on vegan diets but would quickly die if they ate nothing but meat.",
        "To find out more, see our Nutrition Myths page or read our guides, Wheat Eaters or Meat Eaters and Your Health in Your Hands.",
        "http://www.viva.org.uk/going-vegetarian-vegan/going-veggie/how/myths",
        "http://www.viva.org.uk/resources/campaign-materials/guides/wheat-eaters-or-meat-eaters",
        "http://www.viva.org.uk/resources/campaign-materials/guides/your-health-your-hands"
      ],
      source: "Viva",
      key: "Our teeth/digestive systems are designed for eating meat."
    },
    {
      answer: [
        "As we\u2019ve just seen, it isn\u2019t. Humans have only eaten meat in relatively recent evolutionary history and then only through the use of tools like spears and fire. Only when we started farming (hardly natural!) did meat become even a regular part of most human beings\u2019 diets and eating meat on a daily basis is very recent - since the advent of factory farming after the Second World War. This brought the cost of rearing animals down and the meat eating explosion was the result. In 1946, for example, the number of poultry eaten in Britain was 31.9 million and in 2001 it was over 800 million. And what\u2019s natural about factory farming, live exports and slaughterhouses?",
        "To find out more, read our Guides, Wheat Eaters or Meat Eaters , Justice Denied and A Matter of Life and Death.",
        "http://www.viva.org.uk/resources/campaign-materials/guides/wheat-eaters-or-meat-eaters",
        "http://www.viva.org.uk/resources/campaign-materials/guides/justice-denied",
        "http://www.viva.org.uk/resources/campaign-materials/guides/matter-life-and-death"
      ],
      source: "Viva",
      key: "Eating meat is natural."
    },
    {
      answer: [
        "Animals do lots of things we don\u2019t do and wouldn\u2019t do! Anyway, we shouldn\u2019t kill because we have a choice. Lions and tigers etc have to kill to survive (they are known as obligate carnivores): we don\u2019t. Animals can only follow their instincts but we human beings can think about the consequences of our actions. We can recognise the suffering of other animals and we can choose not to inflict it on them. If we choose to make them suffer, what does that say about the human race?",
        "Eating meat, fish, eggs and dairy is causing mass pain and suffering; it is destroying the earth and is costing the health services millions.",
        "To find out more, read our Guides A Matter of Life and Death, Planet on a Plate and Your Health in Your Hands.",
        "http://www.viva.org.uk/resources/campaign-materials/guides/matter-life-and-death",
        "http://www.viva.org.uk/resources/campaign-materials/guides/planet-plate",
        "http://www.viva.org.uk/resources/campaign-materials/guides/your-health-your-hands"
      ],
      source: "Viva",
      key: "Lots of animals kill for food: why shouldn\u2019t we?"
    },
    {
      answer: [
        "Would it be alright to kill and eat people if they\u2019d had a good life? And what do we mean by a \u2018good\u2019 life, anyway? In the case of animals, we certainly don\u2019t mean a long one. \u2018Meat\u2019 animals are killed as babies in the case of lambs and veal calves or as soon as they become physically mature \u2013 the equivalent of human teenagers - and never get to lead any kind of adult life. Animals, of course, want to live just as much as we do. The first instinct every animal has is to survive. By killing them at all, we are taking away from them the most important thing they have; we are denying their intrinsic right to life.",
        "It is also na\u00efve to imagine that any farmed animals lead good lives: the overwhelming majority of them are exploited, neglected and frustrated on factory farms \u2013 forced to lead lives of misery by a farming system which sees them only as ways of producing a profit. They then face a violent, frightening death in the slaughterhouse: despite supposedly humane stunning, millions of animals are still conscious when their throats are cut. Even free range and organic animals suffer on farms (see Question 6) and they face the same shocking death at a young age as factory-farmed animals.",
        "To find out more about the lives of farmed animals, click here. To find out more about the moral argument against killing animals, read our guide Justice Denied.",
        "http://www.viva.org.uk/resources/campaign-materials/guides/matter-life-and-death",
        "http://www.viva.org.uk/resources/campaign-materials/guides/justice-denied"
      ],
      source: "Viva",
      key: "It\u2019s alright to eat animals if they\u2019ve had a good life."
    },
    {
      answer: [
        "Good. Any choice that people make which reduces animal suffering is a welcome choice \u2013 but why stop at some kinds of animal or some kinds of suffering? Fish and chicken feel pain and have an instinct to preserve their own lives in just the same way as cows and pigs. They may be less attractive animals to you but that doesn\u2019t mean that their lives and suffering are less important to them.",
        "Similarly, although free range and organic animals usually (although not always) lead better lives than factory farmed animals, they still suffer in many ways. For example, so-called free range egg farms may involve thousands of hens being kept in a shed with limited access to outside and to limited land. Even in the better free range/organic egg farms, all male chicks are killed within hours \u2013 useless by-products as they do not lay eggs and are too scrawny for meat. All animals kept for farming are prevented from mixing in normal social groups, and ducks never see their ducklings; hens their chicks; pigs have their piglets taken away much too young; dairy cows have their calves ripped from them at one day old. Even on free range farms the male calves are shot as they don\u2019t give milk and are the wrong breed for beef. All farms prevent animals from living natural lives. And all are sent for slaughter as soon as there is more profit in killing them than in keeping them alive.",
        "There is no need to farm or to slaughter any animal. Eating any kind of meat contributes to animal suffering \u2013 and to the environmental and world hunger problems caused by the meat industry. The less meat people eat the better and many people find that cutting out meat gradually works best for them \u2013 but ultimately, the only truly consistent and ethical choice is to eat no meat, dairy or eggs at all."
      ],
      source: "Viva",
      key: "I only eat organic/free range/fish/chicken/dairy anyway"
    },
    {
      answer: [
        "Yawn, yawn! This question is usually seen as a bit of a joke, but if you want a serious answer here goes!",
        "Plants do not feel pain. They do not have pain receptors, nerves or a central nervous system. The \u2018screaming\u2019 that sensitive equipment has detected when plants are damaged is thought to be caused by movement of gasses. The cut releases the pressure allowing gases inside the plant to move towards the cut, making a noise as they do so. And even if plants did feel pain, the average meat eater is responsible for ten times more plants being killed than the average vegetarian (see Question 10) \u2013 because all the animals that meat-eaters consume, eat huge amounts of plants themselves."
      ],
      source: "Viva",
      key:
        "Plants scream when they\u2019re pulled out of the ground or are cut up for food."
    },
    {
      answer: [
        "Maybe \u2013 but if you were stuck on a desert island you might have to run around naked, never take a shower and wipe your bottom with leaves: that doesn\u2019t mean that you should do those things the rest of the time."
      ],
      source: "Viva",
      key: "If you were stuck on a desert island, you\u2019d have to eat meat."
    },
    {
      answer: [
        "Most of us in the UK do not follow religious rules in our lives - but even amongst people with strong religious faith, there is considerable disagreement about whether God wants us to eat animals. No major religions command their followers to eat meat and many devout Christians, Moslems, Buddhists and Jews are vegetarian as are all Hare Krishnas and Jains. Most Hindus, of course, eat no red meat. For most religious people the question remains one of individual judgement. Most religions, however, celebrate compassion, kindness and mercy. The abattoir and the factory farm do not seem consistent with that."
      ],
      source: "Viva",
      key: "God put animals on earth for us to eat"
    },
    {
      answer: [
        "No. Setting aside the question of whether pesticides are needed at all, if everyone were vegan we would use less pesticides because we would actually grow less crops. Meat animals all eat plants and they convert them into food very inefficiently. On average, a farmed animal has to eat 10kg of plant protein in order to make 1kg of meat \u2013 in other words, if the same land was used to grow crops for people to eat, it would be ten times more productive. To put it yet another way, 90% of the crops we feed to animals are wasted. If we didn\u2019t eat animals, we wouldn\u2019t need to grow those crops or use chemicals on them.",
        "To find out more, click here.",
        "http://www.viva.org.uk/resources/campaign-materials/guides/planet-plate"
      ],
      source: "Viva",
      key:
        "If we all ate vegetables and crops, wouldn\u2019t we need more pesticides?"
    },
    {
      answer: [
        "Yes it does. Numerous scientific studies have confirmed that fish do feel pain. Industrial fishing causes them immense suffering because they are killed either by being crushed in the net, having their swim bladders explode when they are brought to the surface or by asphyxiating (being starved of oxygen) on the decks of trawlers. Many fish, especially salmon, are also now intensively farmed and suffer from infectious illnesses, parasites and overcrowding."
      ],
      source: "Viva",
      key: "Eating fish doesn\u2019t cause suffering."
    },
    {
      answer: [
        "As we\u2019ve already seen, we would need to use less of our countryside for agriculture if we were all vegan: that means that more of it could return to a natural state. Britain has less woodland than any other northern European country \u2013 we could change that if we didn\u2019t need to use land to grow crops like soya and rape for animal feed.",
        "Far from being a loss to the countryside as some people imagine, ending livestock farming would mean a huge toll of suffering would be eliminated and wildlife allowed to recover (see 1b)."
      ],
      source: "Viva",
      key:
        "What would happen to the countryside if we stopped having animals grazing on it?"
    },
    {
      answer: [
        "Veganism does help people. The meat industry causes environmental degradation through things like deforestation, soil erosion, water pollution and the production of greenhouse gases \u2013 we would live in a cleaner, better world if we were all vegan. Secondly, because meat production is such an inefficient way of producing food it consumes resources which should go to human beings. In the developing world, land is increasingly being devoted to the production of animal fodder for export to the rich world instead of being used to grow food for the local population. Finally, veganism improves human health, which brings rewards for individuals and also to society as a whole which needs to spend less on health care and lost working days through ill health.",
        "Compassion towards animals is not in competition with compassion towards people. Veganism is a choice each individual can make which improves the lives of animals and human beings. It is also a choice about what people eat \u2013 not where they work, what they do in their spare time or how they vote. Many vegans dedicate their lives to human welfare \u2013 Gandhi is the classic example of that.",
        "To find out more about how vegans benefits human beings, click here.",
        "http://www.viva.org.uk/resources/campaign-materials/guides/feed-world"
      ],
      source: "Viva",
      key: "Why not do something for people instead of animals?"
    },
    {
      answer: [
        "No he wasn\u2019t. He ate meat \u2013 just like Himmler, Goering, Adolf Eichmann, Joseph Stalin, Pol Pot, Attila the Hun, Idi Amin, Saddam Hussein, Harold Shipman, Timothy McVeigh, Myra Hindley and almost every other killer in history. So even if he had been vegetarian, it would prove nothing. But he wasn\u2019t."
      ],
      source: "Viva",
      key: "Hitler was vegetarian."
    },
    {
      answer: [
        "People will still need to eat when we are all vegan so there will still be plenty of jobs for farmers! (In fact the intensive farming of animals has caused severe unemployment in agriculture as so few people are employed to look after so many animals. A vegan world would mean more employed in sustainable methods of farming.)",
        "However, even if farmers did become unemployed that is no reason to keep farming animals for food. Eating meat is harmful to animals, to the planet and to ourselves \u2013 if it is right to stop it, the employment prospects of those who work in the meat industry are no reason to keep it going. As has been pointed out, if we got rid of all crime, the police would be out of work and if we got rid of all illness, doctors and nurses would be out of work: that doesn\u2019t mean we shouldn\u2019t try to get rid of crime and illness."
      ],
      source: "Viva",
      key: "All the farmers would be unemployed if we stopped eating meat."
    },
    {
      answer: [
        "Trying to persuade people to change their minds is not \u201cimposing your views\u201d upon them. It is the kind of healthy disagreement which democracy depends on and which is essential for change to take place.",
        "What we eat is also not simply a matter for individuals. Meat-eating and veganism are not two sides of the same coin: one brings death and suffering to animals, damages the planet and harms human health and the other doesn\u2019t. The reason that vegans try to change the minds of non-vegans is because their \u201cindividual choice\u201d affects countless other beings, human and non-human."
      ],
      source: "Viva",
      key:
        "I don\u2019t mind you being vegan \u2013 but you shouldn\u2019t try to impose your views on other people. It\u2019s a matter of individual choice."
    },
    {
      answer: [
        "A huge difference. The average British meat eater consumes, in the course of their lifetime, 5 cattle, 20 pigs, 29 sheep and lambs, 780 chickens, 46 turkeys, 18 ducks, 7 rabbits, 1, geese and half-a-tonne of fish. That is a lot of lives saved. Just as importantly, the best advertisement for veganism is a healthy and happy vegan: if you turn vegan you will be able to influence others to become part of the movement towards a more compassionate and rational world."
      ],
      source: "Viva",
      key: "What difference will one person giving up meat make?"
    },
    {
      answer: [
        "We\u2019ve lied, stolen, killed one another and made war since we were cavemen too. That doesn\u2019t make those things right. (See questions 2 and 3.)"
      ],
      source: "Viva",
      key: "We\u2019ve eaten meat since we were cavemen."
    },
    {
      answer: [
        "They don\u2019t. That\u2019s like asking why toupees always look bad \u2013 it\u2019s just that you only notice the bad ones. If you know someone (who knows someone\u2026.) who was ill they do not represent vegans! People like Martin Shaw, Venus Williams, Natalie Portman, Liam Hemsworth, Pamela Anderson, Joanna Lumley and Carl Lewis, winner of 6 Olympic Gold medals look pretty good on their vegan diets. And you should see the Viva! staff: we\u2019re like gods and goddesses here . . ."
      ],
      source: "Viva",
      key: "Why do vegans always look ill?"
    },
    {
      answer: [
        "Just not true. People don\u2019t grow big because they\u2019re happy and neither do animals. Meat chickens today grow almost twice as fast as they did 50 years ago \u2013 yet they live in far worse conditions, crammed into stinking, windowless broiler sheds by the tens of thousands and suffering from lameness and other problems. They don\u2019t grow big because they\u2019re happy but because they have been selectively bred to gain weight quickly, are given growth-promoting drugs and are fed on special diets.",
        "Similarly, dairy cows have been bred to produce far more milk than is natural to them. In fact, the dairy industry relies upon making animals unhappy \u2013 by taking their calves away so that humans can drink their mothers\u2019 milk \u2013 in order to function. Laying hens have been bred to produce so many eggs that they lose calcium into the shells and suffer from brittle bones and fractures as a result. They don\u2019t lay eggs because they\u2019re happy: they have no choice."
      ],
      source: "Viva",
      key:
        "If the animals weren\u2019t happy and healthy, they wouldn\u2019t grow/lay eggs etc"
    }
  ]; */
}
