import csv
import random
import urllib.request
import json
import datetime
import tweepy



def retrieve_quotes(quotes_file = 'ran_quotes.csv' ):
    try:
        with open(quotes_file) as csvfile:
            quotes = [{'quote': line[0],
                       'author': line[1]} for line in csv.reader(csvfile, delimiter='|')]
    except Exception as e:
        quotes =[{'quote': 'Don\'t waste too much time looking a Dark Side. You can always overwrite it with good side',
                  'author': 'Bishwas Thapa Magar' }]
                 
    return random.choice(quotes)

def retrieve_forecasts(coords={'lat': -12.4637, 'lon': 130.8444}):
    try:
        api_key = '59cd134f29b08b4d123d20ab82793250'
        part = 'daily'
        url = f'https://api.openweathermap.org/data/2.5/forecast?lat={coords["lat"]}&lon={coords["lon"]}&appid={api_key}&units=metric'
        with urllib.request.urlopen(url) as response:
            body_json = response.read()
            body_dict = json.loads(body_json)
        
        forcast = {'city': body_dict['city']['name'],
                'country': body_dict['city']['country'],
                'periods': list()
                }
        
        for period in body_dict['list'][0:9]:
            forcast['periods'].append({'timestamp': datetime.datetime.fromtimestamp(period['dt']),
                                            'temp': round(period['main']['temp']),
                                            'description': period['weather'][0]['description'].title(),
                                            'icon': f'http://openweathermap.org/img/wn/{period["weather"][0]["icon"]}.png'})
            
        
        return forcast
    except Exception as e:
        print(e)    
        
   

def retrieve_trends(woeid = 2502265):
    try:
        api_key = '319631952-olOId2oE8nTWEOH78MbMHjtiPcaLwdxDudZmimgK'
        api_secret_key = 'GnkHzHi76vUqU3XMVquGzXbLNYqnme1W6r1KW7tRKurrk'
        auth = tweepy.AppAuthHandler(api_key, api_secret_key)
        return tweepy.API(auth).trends_place(woeid)[0]['trends']
    except Exception as e:
        print(e)



def retrieve_articles():
    try:
        url = 'https://en.wikipedia.org/api/rest_v1/page/random/title'
        response = urllib.request.urlopen(url)

        article_json = response.read().decode('utf-8')

        article_dict = json.loads(article_json)
        for item in article_dict['items']:
           return {'title': item['title']
                   } 
    except Exception as e:
        print(e)

if __name__ == '__main__':
    retrieve_articles()
    #Testing the quotes generation funcationality

    # forecast = retrieve_forecasts() # get forecast for default location
    # if forecast:
    #     print(f'\nWeather forecast for {forecast["city"]}, {forecast["country"]} is...')
    #     for period in forecast['periods']:
    #         print(f' - {period["timestamp"]} | {period["temp"]}°C | {period["description"]}')

    # austin = {'lat': 30.2748,'lon': -97.7404} # coordinates for Texas State Capitol
    # forecast = retrieve_forecasts(coords = austin) # get Austin, TX forecast
    # if forecast:
    #     print(f'\nWeather forecast for {forecast["city"]}, {forecast["country"]} is...')
    #     for period in forecast['periods']:
    #         print(f' - {period["timestamp"]} | {period["temp"]}°C | {period["description"]}')

    # invalid = {'lat': 1234.5678 ,'lon': 1234.5678} # invalid coordinates
    # forecast = retrieve_forecasts(coords = invalid) # get forecast for invalid location
    # if forecast is None:
    #     print('Weather forecast for invalid coordinates returned None')

    retrieve_trends()
