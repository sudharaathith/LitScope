import json
import os

from .Manager import Scrapers

script_dir = os.path.dirname(__file__)

def save_domine(data):
    value = json.dumps(data)
    name =  data['domine_name'].replace('.','_')+".json"
    with open(os.path.join(script_dir,name), 'w') as file:
        file.write(value)
    return Scrapers().isValid(os.path.join(script_dir,name))

def get_domine_info():
    s = Scrapers()
    res = []
    for i in s.websides:
        temp_ditc = {}
        temp = s.get(i)
        temp_ditc['id'] = i
        temp_ditc['name'] =  temp.config['domine_name']
        print(temp.config['domine_name'])
        temp_ditc['icon'] = temp.config['icon']
        res.append(temp_ditc)
    return res   

def get_domine_config(name):
    s = Scrapers()
    return s.get(name+'.json').config
    

if __name__ == '__main__':
    save_domine("""
{
    "domine_name": "summa.io",
    "mode":"api",
    "search":{
        "url":"https://typeset.io/_next/data/l-9Zik5eBkX7q9AMbAEvH/search.json?q=//<<Query>>//",
        "route":["pageProps","data", "//<<for>>//", "title"],
        "method":"GET"
    }
}
                """)