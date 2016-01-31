__author__ = 'rcj1492'
__created__ = '2016.01'

'''
REQUIRES LOCAL PYTHON DEPENDENCIES

A class of methods for automating content update importation
'''

import json
from re import compile
from os import path

class updateJson(object):

    def __init__(self, file_path, new_file=False):
        self.path = file_path
        if not new_file:
            if not path.isfile(file_path):
                raise ValueError('Oops... %s does not exist.' % file_path)
        self.slash = compile('/')
        if path.isdir(path.dirname(file_path)):
            self.folder = path.dirname(file_path)
        elif not self.slash.findall(file_path):
            self.folder = './'
        else:
            raise ValueError('Oops... %s does not exist.' % file_path)
        self.name = self.path.replace(self.folder,'')
        self.type = compile('\.json$')
        if not self.type.findall(self.name):
            raise ValueError('Oops... %s is not a .json file.' % self.name)
        try:
            self.dict = json.loads(open(file_path).read())
        except:
            raise ValueError('Oops... %s is not a valid .json file.' % self.path)
        self.json = json.dumps(self.dict)

    def save(self, file_path=''):
        json_file = self.path
        if file_path:
            if not self.type.findall(json_file):
                raise Exception('%s must have a .json file type' % file_path)
            elif not path.isdir(path.dirname(file_path)):
                if self.slash.findall(file_path):
                    raise Exception('%s must be a valid file path.' % file_path)
            json_file = file_path
        with open(json_file, 'wb') as f:
            f.write(self.json.encode('utf-8'))
            f.close()

file = updateJson('../public/got_milk.json')