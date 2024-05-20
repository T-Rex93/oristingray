from flask import Flask, jsonify, request, render_template
import os

from sympy import public
app = Flask(__name__, template_folder='../public')
@app.route("/")
def homepage():
    return render_template('index.html')

# stingray API Route
@app.route("/stingray")
def stingray():
    return jsonify({
        "ID": int(123),
        "species name": ["Mobula alfredi", "Mobula birostris", "Rhynchobatus djiddensis", "Glaucostegus typus", "Rhina anclyostoma"],
        "country of origin": ["Japan", "USA", "Indonesia", "Philipines", "China"],
        "status": ["protected", "commercial"]
    })
# product API Route
@app.route("/product")
def product():
    return jsonify({
        "ID": int(123),
        "name": ["Leather Bag", "Leather Wallet", "Leather Phonecase"],
        "type": ["Bag", "Shoes", "Other"],
        "raw material ID": int(123)
    })
# tracking API Route
@app.route("/tracking")
def tracking():
    return jsonify({
        "QR Code": str()
        })

if __name__ == "__main__":
    app.run(debug=True)