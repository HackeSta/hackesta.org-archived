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

def fpx_photographs():
    userid = '8734325'
    url = "https://api.500px.com/v1/photos?feature=user&user_id=%s&page=1&image_size[]=3&image_size[]=4&rpp=100&consumer_key=" + os.environ.get('FHPX_CON_KEY')
    response = req.get(url % userid)
    print(response.text,file=open('data/fpx_photographs.json'))

def fpx_user():
    userid = '8734325'
    url ="https://api.500px.com/v1/users/%s/?consumer_key=" + os.environ.get('FHPX_CON_KEY')
    response = req.get(url % userid)
    print(response.text, file=open('data/fpx_user.json'))

user_repos()
closed_projects()
instagram()
hackesta_projects()
websites()
fpx_photographs()
fpx_user()
