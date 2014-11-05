from flask import Flask, render_template, request, json
import requests
import simplejson

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("map.html")

if __name__ == "__main__":
    app.run(debug=True)
