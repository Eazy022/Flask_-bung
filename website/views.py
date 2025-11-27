from flask import Blueprint, request, render_template 
from flask_login import current_user, login_required

from . import db


views = Blueprint("views", __name__)

@views.route("/", methods=["GET", "POST"])
@login_required
def home():
    if request.method == "POST":
        return render_template("home.html", user=current_user)
    else:
        return render_template("login.html", user=current_user)

@views.route("/logout")
def Logout():
        return  render_template("login.html", user=current_user)

