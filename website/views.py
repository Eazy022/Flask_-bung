from flask import Blueprint, request, render_template 
from flask_login import current_user, login_required, logout_user

from . import db


views = Blueprint("views", __name__)

@views.route("/", methods=["GET", "POST"])
@login_required
def home():
        return render_template("home.html", user=current_user)
    

