from bs4 import BeautifulSoup
import json
import os
import requests


script_dir = os.path.dirname(__file__) 

def Scraper(scraper):
    with open(os.path.join(script_dir,scraper),"r") as file:
        config = json.loads(str(file.read()))
        if config['mode'] == 'api':
            return Scraper_api(config)
        else:
            raise f"the mode '{config['mode']}' not found."

class Scraper_api:
    def __init__(self, config):
        self.config = config
            
    def search(self, query):
        req = requests.request(method=self.config['search']['method'], url=(self.config['search']['url'].replace('//<<Query>>//',query)))
        # req = open('Scrapers\\typeset_io_data.json','r').read()
        req = json.loads(req.text)
        infor = False
        index = -1
        for n,i in enumerate(self.config['search']['route']):
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
                
                    

if __name__ == "__main__":
    te = Scraper('typeset_io.json')
    print(te.search('summa'))