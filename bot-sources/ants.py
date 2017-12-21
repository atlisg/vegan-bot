import os
import json
import pprint
pp = pprint.PrettyPrinter(indent=4)

filename = os.getcwd() + '/bot-sources/ants.txt'
file = open(filename, 'r')

titles = [
  'Making the change',
  'LIVING WITHOUT',
  'The last word',
  'Health',
  'PROTEIN',
  'MEAT',
  'MILK',
  'FISH',
  'VEGAN MALNUTRITION',
  'Ethics',
  'CRUELTY',
  'SLAUGHTER',
  'DAIRY',
  'EGGS',
  'WOOL',
  'PESTS',
  'FOOD FOR ANIMALS',
  'EXPERIMENTS',
  'ENTERTAINMENT',
  'INFLUENCE',
  'MINORITIES',
  'VIOLENCE',
  'Religion',
  'THEOLOGY',
  'VEGETARIAN RELIGIONS',
  'Environment',
  'LAND USE',
  'TRAVEL',
  'SURVIVAL',
  'Economy',
  'EMPLOYMENT',
  'COST',
  'Making a difference',
  'POWER OF ONE',
  'CHARITY',
  'Making the change',
  'LIVING WITHOUT',
  'EMBARRASSMENT',
  'CHANGING BACK',
  'Nonsense',
  'The last word',
]

def isTitle(x):
  return x in titles

lines = file.read().splitlines()
arr = []
for x in lines:
  if x != '':
    arr.append(x)

answers = []
i = 1
for x in arr:
  if x[0].isdigit():
    if i < 10:
      if str(i) == x[0]:
        answers.append({ 'key': x[3:], 'source': 'But you kill ants', 'index': 'byka-' + x[:1], 'answer': [] })
        i += 1
    elif i < 100:
      if str(i) == x[:2]:
        answers.append({ 'key': x[4:], 'source': 'But you kill ants', 'index': 'byka-' + x[:2], 'answer': [] })
        i += 1
    else:
      if str(i) == x[:3]:
        answers.append({ 'key': x[5:], 'source': 'But you kill ants', 'index': 'byka-' + x[:3], 'answer': [] })
        i += 1
i = 1
for x in arr:
  if x[0].isdigit():
    if i < 10:
      if str(i) == x[0]:
        i += 1
      else:
        answers[i-2]['answer'].append(x)
    elif i < 100:
      if str(i) == x[:2]:
        i += 1
      else:
        answers[i-2]['answer'].append(x)
    else:
      if str(i) == x[:3]:
        i += 1
      else:
        answers[i-2]['answer'].append(x)
  elif i < len(answers) + 2:
    if not isTitle(x):
      answers[i-2]['answer'].append(x)

answersfile = open(os.getcwd() + '/bot-sources/ants-answers-old.json', 'w')
answersfile.write(json.dumps(answers))