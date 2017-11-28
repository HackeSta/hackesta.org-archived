import urllib3.request, urllib.request
import requests as req
import os
import json
def user_repos():
    url = "https://api.github.com/users/haideralipunjabi/repos"
    response = req.get(url, auth=(os.environ.get('GITHUB_USERNAME'), os.environ.get('GH_TOKEN')))
    print(response.text,file=open('data/user_repos.json',"w"))

def closed_projects():
    url = "https://hackesta.org/api/projects/?format=json"
    response = req.get(url)
    print(response.text,file=open('data/closed_projects.json',"w"))

def instagram():
    url = "https://instagram.com/haideralipunjabi/?__a=1"
    response = req.get(url)
    print(response.text,file=open('data/instagram.json',"w"))

def hackesta_projects():
    url = "https://api.github.com/orgs/hackesta/repos"
    response = req.get(url, auth=(os.environ.get('GITHUB_USERNAME'), os.environ.get('GH_TOKEN')))
    print(response.text,file=open('data/hackesta_repos.json',"w"))

def websites():
    url = "https://hackesta.org/api/websites/?format=json"
    response = req.get(url)
    print(response.text,file=open('data/websites.json',"w"))

user_repos()
closed_projects()
instagram()
hackesta_projects()
websites()
