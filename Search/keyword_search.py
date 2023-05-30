import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import pandas as pd
import os
module_dir = os.path.dirname(__file__)

# nltk.download('averaged_perceptron_tagger')

def extract_keywords(text):
    # Tokenize the text into individual words
    tokens = word_tokenize(text)
    
    # Remove stop words (common words that don't carry much meaning)
    stop_words = set(stopwords.words('english'))
    filtered_tokens = [word for word in tokens if word.lower() not in stop_words]
    
    # Perform part-of-speech tagging to identify nouns and adjectives
    tagged_tokens = nltk.pos_tag(filtered_tokens)
    
    # Extract keywords based on the part-of-speech tags
    keywords = [word for word, tag in tagged_tokens if tag.startswith('NN') or tag.startswith('JJ')]
    tech_key=[]
    a = pd.read_csv(os.path.join(module_dir, "tech.csv"))
    for i in keywords:
        b = a[a["name"].str.lower().str.match(i.lower())]["name"].to_list()
        if b!= []:
            tech_key.append(b[0])  
    print(tech_key)
    return tech_key
