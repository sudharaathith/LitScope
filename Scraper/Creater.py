import json
import os

from .Manager import Scrapers

script_dir = os.path.dirname(__file__)

def save_domine(data):
    value = json.dumps(data)
    name =  data['domine_name'].replace('.','_')+".json"
    with open(os.path.join(script_dir,name), 'w') as file:
        file.write(value)
    if not Scrapers().isValid(os.path.join(script_dir,name)):
       raise f"invalid json file"
    
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