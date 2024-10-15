from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("pages/index.html")

@app.route("/about")
def about():
    return render_template("pages/about.html")

@app.route("/gallery")
def gallery():
    return render_template("pages/gallery.html")

@app.route("/kontak")
def kontak():
    return render_template("pages/kontak.html")

@app.route("/login")
def login():
    return render_template("pages/login.html")

@app.route("/register")
def register():
    return render_template("pages/register.html")

if __name__ == "__main__":
    app.run(debug=True)