import { Injectable } from "@angular/core";
import { Answer } from "../models/answer.interface";
import * as vegansidekickAnswers from "../../../bot-sources/vegansidekick-answers.json";

@Injectable()
export class VeganSidekickService {
  public answers;
  constructor() {
    this.answers = vegansidekickAnswers;
  }
  /* public answers: Array<Answer> = [
    {
      source: "Vegan Sidekick",
      key: "It doesn't harm animals to kill them",
      answer: [
        'The definition of harm is "Physical injury, especially that which is deliberately inflicted". As such, firing a pneumatic bolt pistol into their forehead and then slitting their throat, shocking them with electricity and then slitting their throat, are done to deliberately inflict a physical injury. Regardless of the manner of execution, it is harm to kill an animal.'
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "It doesn't harm animals to take their eggs",
      answer: [
        "In the egg industry, only females are required because males don't lay eggs. As such, in the breeding process, the males and females are divided when they hatch, and the males are killed immediately as they serve no purpose. Subsequently, their sisters go on to be kept in captivity until their egg production is no longer profitable to the farmer, at which point they have their throats slit. This is generally at around one or two years old. The average lifespan of a chicken is eight years."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "It doesn't harm animals to take their milk",
      answer: [
        "In the dairy industry, only females are required because males don't produce milk. Like all mammals, cattle produce milk to feed their young once they give birth. It is a misconception that cows just produce milk non-stop, they do so only once impregnated. As such, when a male is born, he will be slaughtered. Either he is culled immediately, or he is sold into the veal industry and then killed after a few weeks of living in confinement, or he is sold into the beef industry and killed as soon as he reaches a profitable size, which will be about one year old. If the calf is female, typically she will be removed from her mother so that the milk can be stolen, and then she is used in the same manner. Once a mother's milk production is less proftable, she has her throat slit. That generally happens after two milking cycles, when she would be around six years old. The average lifespan of a cow is about twenty years."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "But cows need to be milked right?",
      answer: [
        'Like all mammals, cows only produce milk to feed their young. In the dairy industry, the calf is taken away from the mother, and if male, killed. As such, the mother will be producing milk, and in the absence of her child, will "need to be milked". This is no justification for the process of course. If you were to kill a woman\'s baby boy while she was trying to breast-feed him, you could hardly claim to be doing her a favour by then stealing her milk because it "needed to be done". The whole process doesn\'t need to be done.'
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "It doesn't harm animals to take their wool",
      answer: [
        "In the lamb / mutton industry, the primary purpose of farming sheep is to kill them. They are killed when they reach a profitable size, which will vary from farm to farm, but like practically all farmed animals, it is done very early into their lives since animals become fully grown at a very early time in their life. The wool is taken and sold, and then the animals are subsequently killed. Buying wool funds this practice. Of course there are many other issues such as breeding animals into captivity for our own uses, and cruel treatment during the removal of the fleece and so forth."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "It doesn't harm animals to take their silk",
      answer: [
        "Silk is made from the cocoon of a silkworm. The silkworms wrap themselves in a single strand of silk, and they live inside the cocoon until they develop into a moth. In the silk industry, the farmers require a single long strand of silk. If the moths are left alone, they chew through the cocoon to escape. So the farmers kill all of them, either by boiling them alive or by stabbing them with needles. Then the cocoons can be unravelled."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "It doesn't harm animals to take their honey",
      answer: [
        "Honey is produced by bees so that it can be stored as a food source. On the most fundamental level, it is their property, taking it is theft. But beyond this there are a number of ethical issues. The standard practices for retrieving honey involve killing bees by incidentally crushing them. Bees are sprayed to subdue them while accessing the hive. When honey is stolen, it is then replaced with a syrup alternative, which is not the same as honey, and is essentially depriving the bee of their natural food. Bee hives are extremely sensitive and opening them up is highly unnatural for the bees, who work to keep a particular atmosphere inside, which gets disrupted. On top of this, selective inbreeding of bees has weakened the species as a whole, and transportation of bees to places and environments they'd not normally travel to means transportation of diseases that would not normally affect the local population of bees, which is hazardous to bees in general. It's a misconception that honey farming is of benefit to the overall bee population. If you'd like more information please check this link:",
        "http://www.vegetus.org/honey/ecology.htm"
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "I just like the taste",
      answer: [
        'Meat is often seen as just being a type of food. But it is a dead body, of a once living creature. To say "I just like the taste" is to say "Killing is justified if I like the flavour of the dead body". If we follow through with this, then somebody would be justified in killing your pets if they liked the taste, which surely nobody would agree with. Or even extend it to humans and say that if someone likes the taste of human flesh, then it\'s fine to murder people.'
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "It's my personal choice",
      answer: [
        "It cannot be called a personal choice when it involves harming a third party for a trivial reason, which is your desire to enjoy eating them / their secretions."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Morality is subjective, you can't prove it's wrong for me",
      answer: [
        "Even if you think that morality is subjective, your ethics should still be backed by logic. They are not random, nor are they plucked from thin air. As such, the question is simple - do you have any consideration for animals or not? Most people would say that they care about animals, or at the very least, would not like to needlessly harm them. Farming animals for our consumption is needless, and so all harm visited upon them including their slaughter, is needless also. So your own subjective view should be to avoid harming them - if you have any consideration for them whatsoever."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "It's just a matter of opinion like religion",
      answer: [
        "Religion is based upon ancient scripture, tradition, dogma and superstition. Veganism is based on having consideration for animals, and a desire to avoid animal abuse. Animal abuse is real, animals are being exploited and killed in their billions. It's a reality, can be proven to you. You might say it's a matter of opinion that we'd like to avoid it happening, but if you claim to have any consideration for animals whatsoever, then you will be in agreement."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "It's just a matter of culture / social norms",
      answer: [
        "Cultures and social norms develop over time. Whether it is slavery, women having the vote, or anything else, the fact that it was ever the norm or part of culture, is not a justification for it. If you think that culture is a justification, then if you look at other cultures, you must advocate every single practice that they do, regardless of how clearly unethical it is. That's not a rational point of view. You should be able to form a view on a practice regardless of where it happens. So if you say that killing dogs is unacceptable because your culture says so, but you think that it's fine if other cultures do it, consider the following: If someone is about to kill a dog in your culture, would you really say \"Excuse me, can you please cross the border to that other culture where that kind of thing is the norm? Then I will stop caring about that dog\". This is about the victim, it doesn't matter where it happens."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Our ancestors did it",
      answer: [
        "If you live in modern society and you're reading this on the internet, clearly you must acknowledge that you do not live like your ancestors. Your ancestors did many things that you avoid, and you do plenty of things that they never did. Times have changed, we can choose to live non-violently and avoid harming those that pose no threat to us."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "We've got canine teeth",
      answer: [
        'Even if we had massive fangs, it wouldn\'t justify killing animals for the enjoyment of eating their dead bodies. It is proven time and time again that we can live on a plant-based diet in great health, so the shape of our teeth puts us under no obligation to kill. But if we look at this argument more closely - firstly there are animals with far bigger canines than us who eat a plant-based diet, like primates and rhinos and so forth. Secondly, our own "canines" are only named that way because of their position and biological classification in our jaw. They have no similarity at all with true canines which actual carnivores have like lions. They are of no use in biting through raw animal hide, especially not that of a living creature.'
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Lions do it",
      answer: [
        "Wild animals kill to survive. They must kill to eat, otherwise they would die. Whether they kill on instinct or are aware of their predicament is irrelevant, we are not in their situation. If you live in modern society and have access to crops, vegetables, fruit, grains etc, then you have no obligation or need for animal products. Also, lions exhibit all kinds of behaviour that you would seek to avoid, for instance, violent territorial disputes, and male lions will kill the cubs of a female he wishes to mate with because she won't mate while she has cubs around. Lions are not good ethical role models."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Circle of life",
      answer: [
        'I am not really sure what this means but I will try to cover it - if the suggestion is that "you live you die, therefore killing is fine" then this would justify killing companion animals and also humans. If the suggestion is "we kill an animal so that we can live" then this is false. Animals are killed for the enjoyment of eating their dead bodies. It is not a matter of survival, as proven by all the hundreds of millions of vegans in the world.'
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "It's natural",
      answer: [
        'It is untrue that you only do things that you consider to be natural - you use the internet, you presumably use a car or a bus or a plane, and so on. You use modern technology, and do various other things that cannot be called natural. Likewise, there are other things that are natural that you avoid. Nature is pretty cruel, and we actually live life in modern society trying to avoid the perils of nature. You might argue that anything is natural which humans are capable of. But if you argue that, then the justification "it\'s natural" would apply to literally any human behaviour, and as such is ridiculous, since you would not say that any human behaviour is justified just because a human did it.'
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "God put animals here for us to kill, bible says so",
      answer: [
        "Regardless of what it says in the bible, you are not obliged to kill animals as part of your religion. Nobody would argue that the christian god would send you to hell if you are vegan surely. There isn't a quota for how many animals you have to kill per day. So religion isn't a factor here."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "It's been happening for hundreds of years",
      answer: [
        "The amount of time that something has been happening is not at all linked with how harmful it is to the victims. Indeed, the fact that it has been going on so long just underlines how harmful it has been, because the death toll is so high it will never be calculated, and has been entirely unnecessary since we were able to harvest crops successfully. With this attitude nothing would ever change in society, and things that used to happen for hundreds of years like slavery and so on would continue today just because that's what has been happening."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "We have to eat animal products to survive",
      answer: [
        "This is false as proven by all the hundreds of millions of vegans in the world."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "They're bred to be killed so it's fine",
      answer: [
        'Following this logic, if somebody has a dog living with them, and she is pregnant, then simply standing there and saying "When those puppies are born I am going to kill them all" would be enough justification for doing so. That of course is absurd. Basically, you are not in a position to determine the fate of an animal. If the argument is that some animals have been selectively bred for consumption, then again, that is not a justification. The entire process of selectively breeding them was done at the hands of humans, and all subsequent loss of life is at their say so and is entirely unnecessary.'
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "They wouldn't have been born without farmers, we did them a favour",
      answer: [
        "Bringing a life into the world does not justify taking it. And think this through - in the egg industry, as soon as males are hatched, they are killed. Immediately. Did you really do that chicken a favour by bringing them into the world, to then immediately be killed? Nobody can seriously say yes to this, but that is precisely what is going on every day, and you fund that if you buy eggs. Animals bred for meat are killed as soon as they reach a profitable size, which will typically be a few months old, or about a year. You didn't do that animal any favours. Finally, let's extend this to animals besides livestock. You have a dog, they're pregnant. Does that mean you can slit the puppies' throats, because you were the one who arranged for your dog to get pregnant? Of course not, it's nothing to do with it."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "What about tribes who have to hunt to survive",
      answer: [
        "If somebody has to kill to survive, then that's their only option. Anybody who isn't in that situation shouldn't bring this up as it has nothing to do with them."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "What if you were on a deserted island",
      answer: [
        "If you are in a situation where you will starve to death unless you consume animal products, then that's your only option. Thankfully you're not in that situation and so it has nothing to do with anything."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "If you get bitten by a snake you'd take antivenom",
      answer: [
        "If your choice is to die horribly, or to take a cure, then it is totally understandable to take the cure. Consuming animal products for no other reason than the enjoyment of it, is not comparable to doing something which will save your life. Some might say that I am advocating the farming of snakes for their antivenom - frankly I have not looked into it, as I don't live in a region where being bitten by a snake is an issue, and I choose to avoid such places."
      ]
    },
    {
      source: "Vegan Sidekick",
      key:
        "Animals aren't as intelligent as us so it's fine to slit their throats",
      answer: [
        "Intelligence is not a valid justification for taking life. To put this as simply as possible, cats, dogs and hamsters are not as intelligent as us. But most people would be appalled to think of that as a reason to kill or harm them."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "You're humanizing animals, they're not the same as us",
      answer: [
        "Choosing not to harm animals is not the same as saying they are human or treating them as human. All animals are different, and require different treatment by us. It doesn't make sense on a practical level to treat any animal as human, or to treat any animal as any other type of animal. But, that's no reason to be harming them, simply because they are not human. Cats and dogs are not human, but it doesn't mean that you have \"humanized\" them just because you didn't slit their throat."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Some animals are to be killed some aren't",
      answer: [
        "What is this based on? Let's use dogs as an example as that's the most commonly respected animal, in my experience.",
        "- Dogs are our companions",
        "Practically any animal could be your companion if you gave them the chance. People keep pigs as companions, and form bonds with them as strong as you can with a dog.",
        "- I just like dogs, I don't have a connection with other animals",
        "That is not a justification for killing other animals. Somebody could equally say to you \"I don't have a connection with your dog, so I am going to slit their throat\". Just because of how you feel about an animal, doesn't mean that animal is disposable, they are sentient beings.",
        "- Dogs are intelligent, other animals are dumb",
        "That is not a justification for killing them. Other animals such as cats, hamsters and so on could be said to be less intelligent than dogs, that doesn't mean you think killing them is fine presumably. But as it happens, pigs are in many ways more intelligent than dogs, able to make connections and solve problems more advanced than anything dogs can do, and can interact on a higher level with video games, they can recognise human faces, understand reflections in a mirror, respond to commands and so on. If you have any serious consideration for animals, feel free to look up articles on chicken intelligence, cattle intelligence, sheep intelligence and so on. It is out of the question that dogs are alone as being intelligent animals.",
        "- Companion animals are my property, like my TV",
        "This is an absurd comparison. The reason why you'd be upset with someone killing your dog is not because they are your property, it's because they are sentient beings, living their own life, and you don't want harm to come to them. Damage to your TV is a financial loss, your companion animals are more than that surely?",
        "- Just our culture, it's actually fine to slit dog's throats as long as it's done in another culture not this one",
        "That makes no sense at all. Following through with this statement, you'd be appalled if a dog was killed in front of you, but apparently if that same dog was transported to another country where it is culturally acceptable to kill them, then you'd say it was fine. Think it through - it's the same dog, precisely the same thing is happening to them. Why does it matter where it happens?",
        "- Dogs have been companions of humans for hundreds of years",
        "That is just because humans have chosen for it to be that way, it isn't the fault of other animals. You could make a companionship with any animal if you chose, there's no reason to be killing them just because you chose not to make a friend of them.",
        "- You can play catch with a dog and they do tricks",
        "You can do the same with many other species. But why do you want to kill animals who don't want to play catch? Most cats don't want to play catch, they might do other things, but most don't retrieve things and play catch like dogs do, but it doesn't logically follow that you must slit a cat's throat.",
        "- Dogs are cute",
        "Why do you discriminate against animals based upon what they look like? If you come across a dog that isn't cute, are you compelled to slit their throat? If someone doesn't find your dog cute, is it okay for them to slit their throat?",
        "- Yeah but it's because I have a connection with my animal, they're like family. Killing animals outside my family is fine.",
        "This is a direction comparison between humans and dogs. Therefore, you are saying that killing your dog would be bad because they're like family. Killing anyone outside your family is therefore fine, would you apply this to strangers then? A human stranger is not part of your family, unlike your dog. The argument of \"you're humanizing animals\" cannot be used, because you are the one humanizing animals in this case, comparing them to your family. Just because an animal or human is outside your family is no grounds to slit their throat. Also, think this through. If you have an animal that currently isn't in your family, you're arguing that it's fine to slit their throat. But if you chose to instead adopt them, then immediately it's abhorrent to slit that animal's throat. It's the same animal. Look at this from the animal's perspective, not your own."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Humane slaughter",
      answer: [
        'The standard legal form of slaughter for animals is for them to be "stunned" and then have their throats slit. For chickens and pigs, the stunning is generally done with an electric shock, and for other animals a pneumatic bolt pistol projects a metal rod into their forehead. It is claimed that this renders the animal 100% unconscious, but if you actually look into the facts, slaughterhouse workers will admit that there is no way to verify that this is the case for every single animal, and indeed the process doesn\'t always work, isn\'t followed routinely, and indeed, the "stun" can wear off while the animal is being killed.',
        "But regardless of the fashion of execution, there isn't a justification for taking the life. It is still taking the life of a sentient being, for your enjoyment ultimately. If somebody killed your companion animal, I doubt you'd say \"that's fine because you did it humanely\" as described above."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Grass-fed, organic, free-range etc",
      answer: [
        "Regardless of the nature of their lives before slaughter, farmed animals get sent to slaughter. There is a misconception that animals get to \"live out their lives\" and then get killed. Animals get killed as soon as their purpose is served, or as soon as they reach a profitable size, which is at a fraction of their potential lifespan. The very definition of grass-fed/organic/free-range animals is actually very loose and can vary wildly. It doesn't mean that the animals have any kind of quality of life necessarily, it just means the farm has to meet some arbitrary requirements to earn that title. That's not to say that every single farmer treats their animals dreadfully while they live - some actually do give their animals a fair standard of life before sending them to have their throats slit. But it's ignorant to think it's the norm in the first place."
      ]
    },
    {
      source: "Vegan Sidekick",
      key:
        "Killing animals for no reason is wrong, but if you have a reason it's fine",
      answer: [
        "The reason for killing animals in modern society is for the enjoyment of eating their dead body. That surely is not a justification for taking life. If somebody killed your companion animal, I doubt that you'd say \"It's fine as long as you eat them\"."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "The whole world will never be 100% vegan",
      answer: [
        "The whole world is unlikely to ever be free from racism, homophobia or sexism, but that's no reason for you personally to practice it. All anybody can do is take responsibility for themselves. The fact that other people are doing something that you consider to be unethical, isn't a reason for you to copy them."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "One person can't make a difference",
      answer: [
        "Everybody is responsible for what they are personally doing. The way for numbers to rise is for individuals to take accountability one by one. If you want for there to be multiple vegans to make a difference, then become one. There are hundreds of millions of vegans in the world, so we are not just one person. In the UK, 12% of people are vegetarian or vegan. If you look at the age range of 16-24, that ratio rises to 20%. It is completely worthwhile to do this and we are having an effect on the industries. Imagine if everyone who is vegetarian/vegan started buying animal products again - that would be a giant increase in demand. As such, we are keeping demand down by continuing to avoid animal products."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "You can't be 100% vegan in modern society so why bother",
      answer: [
        'At this moment, animals and animal products are used in so many ways that it is near impossible to actually live in a way that avoids using any item, device or vehicle which has no connection with animal exploitation. But that difficulty is no reason to continue to be involved with the things which are extremely easy to avoid, and which form the bulk of demand for animal exploitation. Veganism isn\'t about dogmatically and irrationally saying "I am perfect, I harm nothing". It is about recognising the harm that is being done by our society, and trying to make a change, avoid being part of it - as far as we can. In future, as more and more people go vegan, there will be more and more alternatives developed because research will be put into new technology. Right now we are a minority, so why would giant corporations be saying "Hmm, what can we use in car tyres apart from this small amount of animal ingredients?" But as the world changes, those things will follow, and animal use will continue to decline, so it will be easier to avoid animal use in other areas of life.'
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "If everyone went vegan, livestock would overpopulate",
      answer: [
        "Animals are bred by humans for consumption. As more people go vegan, less animals are bred for consumption. As such, if everyone eventually goes vegan (which may not even happen, and if it did, would gradually take place over many years), then animals would no longer be farmed. So their population would not be an issue."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "If everyone went vegan, livestock would go extinct",
      answer: [
        "Livestock animals have been selectively bred by humans to be of profit to us. They suffer all kinds of health problems because they are bred to be much bigger than their natural ancestors. Continuing to breed them serves no purpose, even if everybody was vegan there would be no logical reason to keep breeding these animals, knowing they will suffer health problems due to the manner of their selective breeding. But even if you disagree with that, and if you really think there should be these selectively bred species for whatever reason - that is no reason to also slit their throats. There are endangered species right now like pandas, tigers, rhinos and so on. Slitting their throats is no part of their conservation, and to suggest doing so would be ridiculous."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Those animals would just be killed in the wild anyway",
      answer: [
        "The suggestion is that vegans want all domesticated animals to be released into the wild. But that's not what anybody is suggesting. You can't do that practically because those animals are domesticated, and are not natural breeds, they were selectively bred. So it would be releasing billions of animals into eco systems which would cause so many unknown problems. What vegans want is for animals to stop being bred. It isn't a question of - either they get eaten by wild animals, or by us. We don't need to be breeding them at all."
      ]
    },
    {
      source: "Vegan Sidekick",
      key:
        "You're putting people out of jobs because of the effect on the industry",
      answer: [
        "Just because a product is available for purchase does not make everybody obliged to buy it. This argument becomes clearly absurd when you apply it to anything else - if you stop smoking, you'll be putting people out of jobs in the cigarette industry, so everyone has to smoke. Or, if you stop drinking alcohol, you'll be putting people out of jobs in the alcohol industry, so you have to drink. It makes no sense at all. Industries exist to meet a demand, and to make money from people. If people don't want those products, then that's not their fault, consumers are not obliged to buy everything on offer and fund every single industry out there. If consumers' money is not being spent on one item, it's being spent on another, which means there will be greater demand elsewhere, so the industries change over time to accommodate what consumers want. It doesn't mean job loss in the first place."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Vegans have no effect on anything",
      answer: [
        "The less people who buy something, the less demand there is. Animals are not being bred and killed regardless of demand. If you have a country of 10 million people, do you think that in a country of 5 million people that the size of the animal farming industy is the same? Of course it isn't. Likewise, if you have a country of 10 million non-vegans, do you think if that country instead had 5 million vegans and 5 million non-vegans, that the animal farming industry would be the same size? Again, of course not. Shops sell animal products, and then restock appropriately. If something isn't selling as well, they will order less. As such, the warehouses they stock from will then have appropriately sized orders from those shops, and will stock less ingredients to make those products, which means ordering less animal products from slaughterhouses and farms, which means less demand for animals to be bred in the first place. It's just simple maths."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "It's unsustainable",
      answer: [
        "Over 50 billion animals are raised for slaughter each year. In order to feed them, it takes far more land, water and crops to feed them than it does to just feed us 7 billion humans on plants. The number of animals being farmed is unsustainable in fact, causing all kinds of pollution as a result of their manure and the greenhouse gases released, which is more harmful than all traffic pollution combined. Disagree with me? Please feel free to research it, but it's by definition going to require additional farming, space, resources, water..."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "It's unhealthy",
      answer: [
        "You can meet all your requirements on a plant-based diet, there is nothing to fear. Indeed, many athletes take up a plant-based diet specifically because of the benefits.",
        "Check out Julieanna Hever, a vegan dietitian:",
        "http://plantbaseddietitian.com/",
        "Check out Dr Greger, a vegan physician:",
        "http://www.veganmd.org"
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Protein",
      answer: [
        "This nutrient is extremely easy to come across. If you are eating the correct RDA of total calories each day, then it is virtually impossible to be short of protein. Deficiency of protein is incredibly rare in modern society, and basically only affects people who are starving for whatever reason. It's not a concern for those who are eating a normal amount. The world health organization recommends between 5-10% of your daily calories to come from protein. So many common plant-based foods are in excess of that, many fall within that range, and only a few things like fruit fall slightly beneath. This really is not a concern for anybody.",
        "Watch this short video about protein and veganism:",
        "https://www.youtube.com/watch?v=2m4p8s7xskQ",
        "Read more here:",
        "http://www.veganhealth.org/articles/protein"
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Iron",
      answer: [
        "You can get iron on a plant-based diet, it is in no way exclusive to animal products. Read more here:",
        "http://www.veganhealth.org/articles/iron"
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Calcium",
      answer: [
        "You can get calcium on a plant-based diet, it is in no way exclusive to animal products. Indeed, there are cultures who never had cow's milk, and there isn't a wave of osteoporosis. To take cow's milk requires domestication of animals, and so by definition can only have been achieved relatively recently in human history - prior to that, did we all have osteoporosis? Milk is for infants, it is consumed by mammals during infancy, then there is a weaning process, and in adulthood mammals do not require milk, especially not of another species. If we really needed milk, don't you think we'd keep on drinking it from our mothers? If that sounds weird, then consider that you're just drinking from someone else's mother when you drink cow's milk - and not even of your own species.... Read more here:",
        "http://www.veganhealth.org/articles/bones"
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "B12",
      answer: [
        "B12 is a vitamin which people associate with animal products. The fact is that bacteria produce B12. As such, it becomes a simple question of - are you going to get B12 from the bacteria in isolation, or are you going to exploit and kill billions of animals just to get B12 from the bacteria within their bodies? In addition, a B12 supplement is injected into livestock to keep their levels up due to top soil being too intensively used and lacking in certain nutrients. So the choice becomes even more absurd - either take a B12 supplement, or give an animal a B12 supplement then kill them. Why take the second option? Read more here:",
        "http://www.veganhealth.org/articles/vitaminb12"
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "It's expensive",
      answer: [
        "A plant-based diet can be as affordable as you need it to be. Common staples like bread, rice, pasta, beans, oats, vegetables are all going to be affordable. I have known people personally who have been made homeless who subsequently had to live in accommodation, who continued to be vegan. Indeed, many animal products are expensive. Some might say that vegan substitute meats etc are expensive - and while that can sometimes be true, they are entirely unnecessary for a healthy diet. If you want specific advice, please contact me, or any other vegan group for tips on cheap vegan food, but yes, you can do it!"
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Vegan food is all disgusting",
      answer: [
        "The fact is that a high percentage of foods that everybody eats regularly are vegan. Bread, pasta, rice, cereal, soups, many brands of cookies, chips/crisps, fries, spaghetti, roast vegetables, baked potato, curries, stir fries, many pastries, donuts and so on, can all be vegan without you even realising. To discredit all food that does not contain animal products is ridiculous, come on. But on top of this, with a little research, you can find simple alternatives to anything you want, or just swap out a single ingredient in a recipe and you can continue to eat what you already were pretty much.",
        "You might have tried a brand of non-dairy milk and disliked it - there are hundreds of brands of milks made of different things, almonds, rice, oats etc. Some are sweetened, some are not - but please try them in context. Whether that's in your cereal or in your coffee, once it's in there you will find that any difference is negligible. Similarly with any other substitute you may have tried - cheese, meat, anything. There are so many brands, don't discount them because you had a bad experience.",
        "Some people complain about tofu, saying it is bland. If that is your experience, then honestly it wasn't prepared properly. If you take a handful of plain flour out of the bag and eat it, you shouldn't be surprised that it's disgusting. Does that mean you're not going to eat bread, bagels, pasta, cakes or noodles anymore because you don't like plain flour? Of course not. Read up on tofu recipes - or don't even eat tofu if you really don't want it. You don't need it! Find foods that you do like, and eat those!"
      ]
    },

    {
      source: "Vegan Sidekick",
      key: "Animals are killed in crop harvesting so vegans kill more animals",
      answer: [
        "To feed animals to the age of slaughter, it requires many times more plants to be harvested than if we just ate plants ourselves. You might argue that we could instead just eat exclusively grass-fed animals who do not require grain, but this is entirely impractical. Firstly, most \"grass-fed\" animals are not fed 100% grass anyway, and secondly, it's not sustainable at all to try to feed 7 billion people exclusively on grass-fed beef. There isn't the space available for such a thing, and good luck living exclusively off beef and nothing else.",
        "Whilst there will be casualties in crop harvesting, and whilst vegans would prefer it not the be the case - it is the least harmful thing most people can do. Obviously, it would be even less harmful to grow your own crops on your own property and pick them by hand, without spraying, and without using machinery which can run down animals. But most people don't have the space available to do that to feed themselves at all, let alone all year round every year. So out of all practical options available, it is least harmful - and hopefully in future, as people start to have more respect for animals and more accountability for how we treat them, more advances will be made in crop harvesting in ways that minimize casualties."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "In Australia, grass-fed beef is more ethical than eating wheat",
      answer: [
        "First of all, do you live in Australia? Because if you don't then this argument is entirely irrelevant to your situation.",
        "Secondly, hi Australians who are still reading!",
        "Thirdly, the whole argument being made here is that more animals die specifically in wheat harvesting than if you just ate grass-fed beef. The argument ignores the fact that there are other things to eat besides wheat on a plant-based diet. You could indeed not eat any wheat at all if you wanted, there are many people who already do that for whatever reason, health, allergies or indeed ethics. But on top of this, it's pretty ridiculous to suggest that you'd just be eating grass-fed beef and nothing else. Chickens, turkeys, pigs etc are fed on grains, not on grass, so you'd be just eating beef and no other animal products, and you'd not be eating wheat. Nobody does this in reality, so the claim falls flat. You don't need to eat wheat if you really are concerned with the practices. You can eat anything else, it doesn't have to be beef."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Plants have feelings",
      answer: [
        "First of all, if you're really serious about this and no amount of scientific evidence will sway you - then it purely comes down to numbers. If a blade of grass is of the same importance to you as a dog, then it makes no sense to feed up livestock on millions and millions of plants, and then kill the animal to eat. This would result in far more plant casualties, which you'd surely want to avoid as a dedicated plants-rights activist. Better to minimize those plant casualties by just feeding yourself on them, rather than feeding many times more to animals, right?",
        'But let\'s be sensible - plants lack brains and lack anything else that neuroscientists know to cause sentience. Some studies show plants to have input/output reactions to certain stimulation, but no study suggests sentience or an ability to "feel emotions". You can plainly understand the difference between a blade of grass and a dog. Comparisons between the two are completely absurd.'
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Don't force your opinions on others",
      answer: [
        "First of all, I gave up trying to instigate conversations about animal rights years ago when I was about 10 years old. I realised then that pretty much nobody wanted to be told, and it was more hassle than it was worth and almost always just resulted in indignant arguments and excuses. So if you're reading this, I can pretty much guarantee that I did not talk to *you* about this. Either I have redirected you here because that's what you've accused me of and I didn't do it, or somebody else has redirected you here, in which case, I can't vouch for them and it's not my responsibility.",
        'But, in either case, even if somebody did start talking to you about veganism, is it really "forcing" their opinion on you? To simply say "please consider not stabbing animals" is a very reasonable suggestion, is it not? Nobody is in a position to "force" you to do anything, if you want to keep stabbing animals, I am not in a position to prevent you.',
        "Indeed, from a non-vegans perspective, your opinion is that animals should be stabbed in the neck. To me, that is a far more forceful application of an opinion than simply asking someone to re-evaluate their position on something politely."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Stop judging me",
      answer: [
        "To offer an alternative to animal abuse is not to judge you. Indeed, if somebody is talking to you about the subject, it should suggest to you that they think that you *do* care about animals, and so their judgement of you is positive - they are saying \"Surely you wouldn't want to be involved with this?\". If they had a negative judgement of you, they wouldn't even bother with you, and would assume you have no compassion for animals, which surely isn't true right?"
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "A vegan was rude to me once",
      answer: [
        "Sometimes people are rude. This is nothing to do with veganism - anybody could be rude, vegan or otherwise. If a man is rude to you, do you have a problem with all men? If a person of a particular ethnicity is rude to you, do you have a problem with everybody of that ethnicity? Of course not. The actions or behaviour of a single vegan should not encourage you to dismiss veganism. Veganism is just wanting to avoid hurting animals. Why would you want to hurt animals just because someone was rude to you? I am not saying that anybody should be rude to you, it's not justified. But don't let it cloud the issue."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Vegans are closed-minded",
      answer: [
        "Most people are not born vegan. I wasn't. I was raised in ignorance of what goes on in animal agriculture, especially regarding egg and milk production. When I learned more, I had an open mind, and took accountability. And I continue to do that today. Veganism is actually about being open to new information, rather than ignoring it and trying to feel blameless."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "I read about this couple who were vegan and they killed their baby",
      answer: [
        "The reason that baby died is because of starvation. Veganism isn't about starvation or malnutrition. Just because a family abused their child, doesn't mean that it reflects on everybody else who is vegan. Likewise, there are non-vegans who starved their children to death. That has nothing to do with every other non-vegan either. These stories get hyped because the media has whatever agenda they want. In a story where a non-vegan starves their child, it won't say \"Meat-eaters starve child!\" will it? But if a vegan does it, that gets brought up, even though it's nothing to do with it. They didn't starve their child *because* they are vegan."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Hitler was vegetarian",
      answer: [
        "There is evidence to suggest that he wasn't. But let's just skip all that and pretend that he was a vegetarian for the sake of your argument. Presumably the point is, anything that Hitler did, we should all do the opposite. That obviously makes no sense, because as hideous as Hitler was and what he did to jews and other minorities, it does not mean that every single action he did can be compared to that or is even related.",
        "In addition, why are we singling out Hitler? If you look at all dictators, serial killers, rapists, and tyrants throughout history, you can be sure that the vast majority are actually meat-eaters. So if the behaviour of heinous criminals dictates that you do the opposite, then why are you ignoring all of them and only talking about Hitler?"
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "You get your companion animals euthanized, that's the same",
      answer: [
        "When an animal is suffering horribly, and you can see that their quality of life is reduced to zero, and a medical professional tells you that there is no hope of recovery and that every moment is a misery, then it makes total sense to have that animal put to death under anaesthetic and with a lethal injection.",
        "By comparison, taking a completely healthy animal at a few months old and killing them because you feel like eating their dead body, makes no sense at all if you claim to have any consideration for animals. There is no comparison to be made here.",
        "Put yourself in this position - you are suffering horribly and you know you will never survive. Would you consider taking death? Maybe. But if you're living your life in your youth, would you consider it as even remotely comparable to just being murdered because someone felt like it? No."
      ]
    },

    {
      source: "Vegan Sidekick",
      key: "We have to test on animals to make sure cosmetics are safe",
      answer: [
        "At this stage, we have pretty sound knowledge of so much in chemistry, most research is redundant actually and is only going on in the same way because of outdated laws stating that it must take place. It's essentially ridiculous bureaucracy perpetuating what is clearly unethical at this time. Many products are no longer tested on animals, some countries have outlawed it entirely for cosmetics, and it is no problem. There are alternatives to animal testing."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "We have to test on animals to make medical advances",
      answer: [
        "Many people like to make the argument that X people will die unless we experiment on Y animals, therefore it's justified as human life is more important, and if you outlaw animal testing then you have essentially just killed X people.",
        "It isn't as simple as that, because actually animal testing has alternatives. Companies like http://www.drhadwentrust.orgare working to continue medical research, without having to torture, exploit and kill animals.",
        "There is another question - is animal testing even useful to us, as we are very different to animals? Read more here to learn more:",
        "http://www.huffingtonpost.com/aysha-akhtar/why-animal-experimentatio_b_3997568.html"
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "But would you use medicine to save your life?",
      answer: [
        "I don't know because I've never been in that situation, but it is highly likely that I would, yes. Putting me in a position where I would actually die, means that my decision making is going to be based around survival, probably to the exclusion of others entirely. Put a gun to my head, I might do anything which I'd otherwise say is unethical, to avoid being shot. That does not make the action ethical outside those circumstances.",
        "On another note, if a cure already exists, then not using it on principle because of the way it was discovered, it's questionable in terms of its effect on anything. It might make a good final statement before you die from the condition if you could get news coverage, but ultimately I think it's understandable to take that cure to save your life because of the situation.",
        "But, if we look at it in terms of ongoing research on these animals, if you have a condition and at the time there is no cure - would you volunteer your companion animals to be tortured and then killed as part of the research? Or would you say, they are nothing to do with it, and you'd rather accept your situation than have them experience hell so you can potentially find a cure? I know that I wouldn't want it to happen. But luckily, it is not an either/or situation because there are alternatives to animal testing like",
        "http://www.drhadwentrust.org"
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "I'm a nihilist. I don't care about anything apart from myself",
      answer: [
        "I find that highly unlikely. But even if that is true, a plant-based diet has many health benefits, and animal products are linked with all kinds of health problems. In addition, animal farming is not sustainable and will have to come to an end as the human population expands, it's simply illogical to feed billions of animals as well as ourselves. We don't have the space to do it. The vast overpopulation of these animals is also harming the environment, poisoning water with manure, and releasing tonnes and tonnes of greenhouse gases. So this will affect you directly, as selfish as you claim to be, it makes sense to look after yourself doesn't it?"
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Yeah but what do you feed your pets? I win",
      answer: [
        "Whatever a person chooes to feed their companion animals has absolutely nothing to do with what they choose to eat themselves, and what else they choose to boycott. So whether or not you feel that your companion animals require meat to live healthily should have no impact on whether you buy animal products outside of that.",
        "There are only two ways of looking at it. If you feel that your companion animal does not need meat to survive, and that there are alternatives that would allow them to live absolutely healthily - then it just makes sense to do that. But if you disagree, and you feel that it's 100% necessary to feed them meat, then in order to care for that animal you'd have to do that. The alternative is ridding yourself of that animal, which most people wouldn't want to do.",
        "Fundamentally, these domesticated animals are being bred for our enjoyment, and then once they're born, they can create a burden on the meat industry. The breeding of the animals in the first place is the core of the problem. That should stop, and I encourage people never to buy from a breeder. Adopt from a shelter. That way you are not contributing to the overpopulation of domestic animals in need of a home."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "There are wars going on / people starving in the world",
      answer: [
        "Wars and starvation are terrible - but they are not aided by you funding animal abuse, and so I fail to see the relevance. In fact, as it requires more crops and resources in general to farm animals, it could be argued that it is more wasteful and therefore more harmful to those starving, to be using the earth's resources in this manner when it's entirely unnecessary and could be better used."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Yeah but sweat shops and slave labour",
      answer: [
        "Funding animal abuse does not help those stuck in slave labour, or working in sweat shop conditions. It's a separate issue, and the fact that anybody funds slavery or sweat shops does not mean you must also fund animal abuse.",
        "But, if you are against slavery and slave labour, it makes sense to also avoid funding them when possible. Many people seem to have the attitude of \"well all kinds of bad things are going on in the world, so I give up\". That attitude doesn't help anyone. Take responsibility for what you're doing, and find alternatives where you can, if you feel strongly about these subjects. Buy second hand clothes and second hand technology where you can, so you don't fund these practices. Buy items manufactured in your country where slave labour is illegal. Look into companies which are working in other countries to help those who are being exploited, offering them fair employment."
      ]
    },
    {
      source: "Vegan Sidekick",
      key: "Vegan Sidekick's comics are inaccurate / offensive",
      answer: [
        "The comics are not a representation of every single person who is not vegan. Each comic deals with a particular explanation for animal abuse which vegans frequently hear and deal with, or shows what happens in animal agriculture. Nowhere on any of my images do I call anybody stupid, dumb, a monster etc. I just show what certain people say, and how certain people defend what goes on. If you think that what happens in animal agriculture is stupid and monstrous, then it's your call to stop supporting it.",
        "If you have never said anything that is depicted in a single one of my comics - then they surely aren't about you.",
        "I have non-vegan friends, they follow my page, understand what I am saying, and don't take offense. They've never said this stuff to me. But, there are many people who do say these things, and my images attempt to show the absurdity of defending animal abuse."
      ]
    },
    {
      source: "Vegan Sidekick",
      key:
        "Yeah but there are other ways to promote veganism, this is ineffective",
      answer: [
        "The Vegan Sidekick comics exist to make people laugh and reconsider their position. Some people will not find it funny, some people won't connect at all. There is no form of outreach which is 100% effective - if there was, then that's what everyone would be doing. I know that the comics do have an impact, because I keep getting people writing to me to say they've gone vegan after really thinking about it since seeing the comics. I make them this way so they're accessible and simple.",
        "But more importantly - if you aren't vegan and you're trying to tell me how best to get the message across - then just tell me what to say to you, and I'll say it back, and then you'll go vegan right? :)"
      ]
    }
  ]; */
}
