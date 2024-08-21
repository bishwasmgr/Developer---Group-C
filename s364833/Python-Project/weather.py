import json 

library_json = '''{
  "library": {
    "books": [
      {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "published_year": 1951,
        "genres": ["Fiction", "Classic", "Literature"]
      },
      {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "published_year": 1960,
        "genres": ["Fiction", "Classic", "Historical"]
      },
      {
        "title": "1984",
        "author": "George Orwell",
        "published_year": 1949,
        "genres": ["Fiction", "Dystopian", "Political"]
      },
      {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "published_year": 1925,
        "genres": ["Fiction", "Classic", "Tragedy"]
      }
    ]
  }
}'''


library_dict = json.loads(library_json)
#Write a Python function that takes this dictionary as input and returns a list of book titles published after the year 1950.

def book_after(dict):
    for book in dict['library']['books']:
        if book['published_year'] >= 1950:
            print(f' Books After 1950 are : {book["title"]}')


def classic_books(dict):
    print("These are the list of book whoes genera is classic: ")
    for book in dict['library']['books']:
        for item in book['genres']:
            if item == 'Classic':
                print(f' {book["title"]}')
        
classic_books(library_dict)