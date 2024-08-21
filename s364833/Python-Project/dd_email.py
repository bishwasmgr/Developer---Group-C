import dd_content
import datetime

class DailyDigestEmail:
    
    def __int__(self):
        self.content = {'quote': {'include': True, 'content':dd_content.retrieve_quotes()},
                        'weather': {'include': True, 'content':dd_content.retrieve_forecasts()},
                        'wikipedia': {'include': True, 'content':dd_content.retrieve_articles()}}


    def send_email(self):
        pass

    def format_message(self):
        pass



if __name__ == '__main__':
    pass    