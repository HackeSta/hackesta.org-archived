import urllib3.request, urllib.request
import requests as req
import os

def user_repos():
    url = "https://api.github.com/users/haideralipunjabi/repos"
    response = req.get(url, auth=(os.environ.get('GITHUB_USERNAME'), os.environ.get('GH_TOKEN')))
    print(response.json(),file=open('user_repos.json',"a"))

def closed_projects():
    url = "https://hackesta.org/api/projects/?format=json"
    response = req.get(url)
    print(response.json(),file=open('closed_projects.json',"a"))

def instagram():
    url = "https://instagram.com/haideralipunjabi/?__a=1"
    response = req.get(url)
    print(response.json(),file=open('instagram.json',"a"))

def hackesta_projects():
    url = "https://api.github.com/orgs/hackesta/repos"
    response = req.get(url, auth=(os.environ.get('GITHUB_USERNAME'), os.environ.get('GH_TOKEN')))
    print(response.json(),file=open('hackesta_repos.json',"a"))

def websites():
    url = "https://hackesta.org/api/websites/?format=json"
    response = req.get(url)
    print(response.json(),file=open('websites.json',"a"))

user_repos()
closed_projects()
instagram()
hackesta_projects()
websites()
