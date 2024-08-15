import csv
import random



def retrieve_quotes(quotes_file = 'ran_quotes.csv' ):
    try:
        with open(quotes_file) as csvfile:
            quotes = [{'quote': line[0],
                       'author': line[1]} for line in csv.reader(csvfile, delimiter='|')]
    except Exception as e:
        quotes =[{'quote': 'Don\'t waste too much time looking a Dark Side. You can always overwrite it with good side',
                  'author': 'Bishwas Thapa Magar' }]
                 
    return random.choice(quotes)

def retrieve_forecasts():
    pass

def retrieve_trends():
    pass

def retrieve_articles():
    pass

if __name__ == '__main__':
    #Testing the quotes generation funcationality

    quotes = retrieve_quotes()
    print(f"Your Quote is {quotes['quote']} - {quotes['author']}")

    failed_quote = retrieve_quotes(quotes_file = None)
    print(f"Your Quote is {failed_quote['quote']} - {failed_quote['author']}")
        
