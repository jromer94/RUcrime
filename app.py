from flask import Flask, render_template, request, json
import requests
import simplejson
import pymongo

MONGODB_URI = 'mongodb://jromer:rucrime11@ds051160.mongolab.com:51160/rucrime'

app = Flask(__name__)

@app.route("/")
def home():
    client = pymongo.MongoClient(MONGODB_URI)
    db = client.rucrime
    collection = db.Crimes
    docs = collection.find()
    crimes = docs[0]['crimes']
    print crimes
    return render_template("map.html")

if __name__ == "__main__":
    app.run(debug=True)
