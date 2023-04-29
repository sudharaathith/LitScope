from bs4 import BeautifulSoup
import json
import os
import requests


script_dir = os.path.dirname(__file__)

# Scapers class help with getting scaper and finding the valid scaper in the directory.
class Scrapers:
    def __init__(self):
        self.websides = []
        self.update()

    def update(self):
        ls = [i for i in os.listdir(script_dir) if i.endswith('.json')]
        ls = [i for i in ls if self.isValid(i)]
        self.websides = ls

    def Scraper(self, scraper: str):
        with open(os.path.join(script_dir, scraper), "r") as file:
            config = json.loads(str(file.read()))
            if config['mode'] == 'api':
                return Scraper_api(config)
            else:
                raise f"the mode '{config['mode']}' not found."

    def isValid(self, scraper: str) -> bool:
        try:
            self.Scraper(scraper)
            return True
        except:
            return False

    def get(self, scraper: str):
        if scraper in self.websides:
            return self.Scraper(scraper)
        else:
            raise f"scraper '{scraper}'  not found"

    def __getitem__(self, scraper):
        return self.get(scraper)

    def __repr__(self):
        return str(self.websides)

# This is a api scrper the Scrapes using api.
class Scraper_api:
    def __init__(self, config):
        self.config = config

    def search(self, query):
        if(self.config['search'])['method'] == 'GET':
            req = requests.request(method=self.config['search']['method'], url=(
                self.config['search']['url'].replace('//<<Query>>//', query)))
        elif(self.config['search'])['method'] == 'POST':
            req = requests.post(url=(
                self.config['search']['url'].replace('//<<Query>>//', query)), data=json.loads(
                json.dumps(self.config['search']['data']).replace('//<<Query>>//', query)))
            print(json.dumps(self.config['search']['data']).replace('//<<Query>>//', query))
        # req = open('Scrapers\\typeset_io_data.json','r').read()
        print(req.text)
        req = json.loads(req.text)
        infor = False
        index = -1
        for n, i in enumerate(self.config['search']['route']):
            if i == '//<<for>>//':
                infor = True
                index = n
                break
            else:
                req = req[i]
        if infor:
            res = []
            for i in req:
                for j in self.config['search']['route'][index+1:]:
                    i = i[j]
                res.append(i)
            return res
        

class Scraper_web:
    def __init__(self, config):
        self.config = config
        
    def search(self, query):
        if(self.config['search'])['method'] == 'GET':
            req = requests.request(method=self.config['search']['method'], url=(
                self.config['search']['url'].replace('//<<Query>>//', query)))
        elif(self.config['search'])['method'] == 'POST':
            req = requests.post(url=(
                self.config['search']['url'].replace('//<<Query>>//', query)), data=json.loads(
                json.dumps(self.config['search']['data']).replace('//<<Query>>//', query)))
            print(json.dumps(self.config['search']['data']).replace('//<<Query>>//', query))
        # req = open('Scrapers\\typeset_io_data.json','r').read()
        print(req.text)
        req = BeautifulSoup(req.text)
        infor = False
        index = -1
        for n, i in enumerate(self.config['search']['route']):
            if i == '//<<for>>//':
                infor = True
                index = n
                break
            else:
                if(n+1<len(self.config['search']['route'])):
                    if(self.config['search']['route'][n+1]=='//<<for>>//'):
                        req = req.find_


if __name__ == "__main__":
    t = Scrapers()
    print(t['sematicscholar_org.json'].search("summa"))
