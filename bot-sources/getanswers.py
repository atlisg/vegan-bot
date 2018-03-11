import requests
import pprint
pp = pprint.PrettyPrinter(indent=4)

r = requests.get('http://localhost:3000/api/answers')
pp.pprint(r.status_code)
for answer in r.json():
  pp.pprint(answer['id'])