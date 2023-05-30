import PyPDF2
from bs4 import BeautifulSoup
import requests
from io import BytesIO
import re

def main_summarize(url):
    response = requests.get(url)
    req = BeautifulSoup(response.text, "html.parser")
    elements = req.find_all("a", {"class": "badge badge-light badge-cs"})
    return extract_abstract_from_pdf(elements[0]['href'])
    

def extract_abstract_from_pdf(pdf_url):
    # Download the PDF from the web
    response = requests.get(pdf_url)
    pdf_content = BytesIO(response.content)

    # Extract text from the PDF
    pdf_reader = PyPDF2.PdfReader(pdf_content)
    abstract = ""

    # Define regex pattern for case-insensitive matching of "Abstract" and "Introduction"
    abstract_pattern = re.compile(r'abstract', re.IGNORECASE)
    intro_pattern = re.compile(r'ntroduction', re.IGNORECASE)

    intro_found = False
    for page in pdf_reader.pages:
        text = page.extract_text()
        # Find the abstract section using regex pattern
        abstract_match = abstract_pattern.search(text)
        intro_match = intro_pattern.search(text)
        
        if abstract_match:
            # Extract the paragraph after the abstract heading
            abstract_start = abstract_match.end()
            abstract = text[abstract_start:]
            
            # Check if "Introduction" appears in the extracted text
            if intro_match:
                # Trim the abstract to end before the "Introduction" section
                intro_start = intro_match.start()
                abstract = abstract[:intro_start]
                intro_found = True
                break

    # Remove any trailing newlines or whitespace
    abstract = abstract.strip().lower()
    abstract = abstract.split('ntroduction')[0][:-4]
    return abstract

# # Provide the URL of the PDF file
# pdf_url = 'https://arxiv.org/pdf/2009.06756v2.pdf'

# # Call the function to extract the abstract from the PDF
# abstract = extract_abstract_from_pdf(pdf_url)

# # Print the abstract
# print(abstract)
