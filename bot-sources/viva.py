import os
import json
import pprint
pp = pprint.PrettyPrinter(indent=4)

filename = os.getcwd() + '/bot-sources/viva.txt'
file = open(filename, 'r')

lines = file.read().splitlines()
arr = []
for x in lines:
  if x != '' and x != ' ':
    arr.append(x)

answers = []
for x in arr:
  if x[0].isdigit():
    start = x.index(' ')
    answers.append({ 'key': x[start+1:], 'source': 'Viva', 'index': 'viva-' + x[:start-1], 'answer': [] })

i = -1
for x in arr:
  if x[0].isdigit():
    i += 1
  else:
    answers[i]['answer'].append(x)
'''
pp.pprint(answers)
pp.pprint(len(answers))
'''
answersfile = open(os.getcwd() + '/bot-sources/viva-answers-old.json', 'w')
answersfile.write(json.dumps(answers))
