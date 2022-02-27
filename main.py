from requests_html import HTMLSession
from flask import Flask, render_template, url_for, request

app = Flask(__name__)


@app.route("/")
@app.route("/home")
def home():
    return "Home"


if __name__ == "__main__":
    app.run(debug=True)
