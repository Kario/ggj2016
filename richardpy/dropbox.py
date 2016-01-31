__author__ = 'rcj1492'
__created__ = '2016.01'

from urllib.request import urlopen
import json

response = urlopen('https://www.dropbox.com/s/ccfwa5k1j27kzxt/ggj-got-milk-data.json?raw=1')
print(json.loads(response.read().decode()))
