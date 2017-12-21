import os
import json
# import pprint
# pp = pprint.PrettyPrinter(indent=4)

# Globals
cwd = os.getcwd() + '/bot-sources/'
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

def isTitle(line):
  return line in titles

# Helper for getAntsKeys()
def addAntsKey(answers, source, line, start):
  answers.append({
    'key': line[start:],
    'source': source['title'],
    'index': source['index_prefix'] + line[:start-2],
    'answer': [],
  })

# Same as getKeys() but only for "But you kill ants"
def getAntsKeys(lines, source):
  answers = []
  i = 1
  for line in lines:
    if line[0].isdigit():
      if i < 10:
        if str(i) == line[0]:
          addAntsKey(answers, source, line, 3)
          i += 1
      elif i < 100:
        if str(i) == line[:2]:
          addAntsKey(answers, source, line, 4)
          i += 1
      else:
        if str(i) == line[:3]:
          addAntsKey(answers, source, line, 5)
          i += 1
  return answers

# Same as addAnswers() but only for "But you kill ants"
def addAntsAnswers(lines, answers):
  i = 1
  for line in lines:
    if line[0].isdigit():
      if i < 10:
        if str(i) == line[0]:
          i += 1
        else:
          answers[i-2]['answer'].append(line)
      elif i < 100:
        if str(i) == line[:2]:
          i += 1
        else:
          answers[i-2]['answer'].append(line)
      else:
        if str(i) == line[:3]:
          i += 1
        else:
          answers[i-2]['answer'].append(line)
    elif i < len(answers) + 2:
      if not isTitle(line):
        answers[i-2]['answer'].append(line)

# Split file into lines and get rid of empty lines
def split_file(file):
  lines = file.read().splitlines()
  arr = []
  for line in lines:
    if line != '' and line != ' ':
      arr.append(line)
  return arr

# Build the answers array with everything but the actual answers
def getKeys(lines, source):
  if source['filename'] == 'ants':
    return getAntsKeys(lines, source)

  answers = []
  for line in lines:
    if line == '****':
      break
    if line[0].isdigit():
      start = line.index(' ')
      one = 1
      if source['filename'] == 'vegansidekick':
        one = 0
      answers.append({
        'key': line[start+1:],
        'source': source['title'],
        'index': source['index_prefix'] + line[:start-one],
        'answer': []
      })
  return answers

# Add answers to the answers array
def addAnswers(source, lines, answers):
  if source['filename'] == 'ants':
    addAntsAnswers(lines, answers)
    return
  i = -1
  for line in lines:
    if line[0].isdigit():
      i += 1
    else:
      answers[i]['answer'].append(line)

def writeJSON(source, answers):
  path = cwd + source['filename'] + '-answers.json'
  answersfile = open(path, 'w')
  print 'Writing ' + str(len(answers)) + ' answers to file: ' + path.split('/')[-1]
  answersfile.write(json.dumps(answers))

def convert(file, source):
  lines = split_file(file)
  answers = getKeys(lines, source)
  if source['filename'] == 'vegansidekick':
    lines = lines[69:]
  addAnswers(source, lines, answers)
  writeJSON(source, answers)

def jsonify(sources):
  for source in sources:
    file = open(cwd + source['filename'] + '.txt', 'r')
    convert(file, source)
  print str(len(sources)) + ' txt files were successfully jsonified!'

jsonify([{
    'title': 'But you kill ants',
    'filename': 'ants',
    'index_prefix': 'byka-',
  }, {
    'title': 'Vegan.com',
    'filename': 'vegancom',
    'index_prefix': 'vcom-',
  }, {
    'title': 'Vegan Easy',
    'filename': 'veganeasy',
    'index_prefix': 'veas-',
  }, {
    'title': 'Vegan Nutritionista',
    'filename': 'vegannutritionista',
    'index_prefix': 'vnut-',
  }, {
    'title': 'Vegan Sidekick',
    'filename': 'vegansidekick',
    'index_prefix': 'vsid-'
  }, {
    'title': 'Viva',
    'filename': 'viva',
    'index_prefix': 'viva-',
  }
])
