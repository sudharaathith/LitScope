# LitScopee

## Scraper

The Scraper has a main file called Manager.py which contains the moduls for basic scraping.

to add a new Scraper you should create a new file json file in Scraper directory.

The json should follow this format:
```json
{
    "domine_name": "domine_name",
    "mode":"mode",
    "search":{
        "url":"https://dominename.com///<<Query>>//",
        "route":["summa1","summa2", "//<<for>>//", "summa3"],
        "method":"method",
    }
}
```
### General Settings
<table>
<tr>
<td> Method </td> <td> explination </td>
</tr>
<tr>
<td> domine_name </td>
<td> It should be the name of the website. </td>
</tr>
<tr>
<td> mode </td>
<td> Mode of scrpaing

* api 
</td>
</tr>
</table>

### Search Settings


<table>
<tr>
<td> Method </td> <td> explination </td>
</tr>
<tr>
<td> url </td>
<td> Url of Search api

```json
"//<<Query>>//" //is placeholder for search query.
"https:/summa.com///<<Query>>//" 
//will be
"https://summa.com/summa"
```
 </td>
</tr>
<tr>
<td> route </td>
<td> Describes the how to parse over the json

```json
//for example consider json
{
    "results":{
        "pages":[
            {
                "title":"summa1",
                "id":1,
            },
            {
                "title":"summa1",
                "id":1,
            },
            {
                "title":"summa1",
                "id":1,
            }
        ]
    },
    "tocken":"jfskjshkfhjkadsfgfhkhlkdsdf"
}

//to get all title the route would be
["results", "pages", "//<<for>>//", "title"]

"//<<for>>//" //is use to initilize a for each loop.

//the title after for loop will apply to all the pages.
```

</td>
</tr>
</tr>
<tr>
<td> method </td>
<td> Http Methods such as 

* GET
* POST
</td>
</tr>
</table>

