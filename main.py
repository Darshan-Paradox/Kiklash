from flask import Flask, render_template, url_for, request, redirect
app = Flask(__name__)

branches = ["BIO", "CS", "CHEM", "CHE", "PHY"]

@app.route("/")
def index():
        return render_template("index.html")


@app.route("/verify", methods=["GET", "POST"])
def verify():
    if request.method == "POST":
        uid = request.get_data(as_text=1).upper()
        #parse_id(uid)
        return redirect(f"/{uid}", code=302)


@app.route("/<uid>")
def uid_html(uid):
    return render_template("uid.html", uid=uid, branches=branches)
