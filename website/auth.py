from flask import Blueprint,current_app, render_template, request, flash, redirect, url_for
from flask_login import current_user, login_required, login_user, logout_user
from .models import User
from werkzeug.security import generate_password_hash, check_password_hash
from website import db
from website import views
import os
from flask_login import LoginManager

auth = Blueprint("auth", __name__)


@auth.route("/login", methods=['get', 'post'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        user = User.query.filter_by(email=email).first()
        if user:
            if check_password_hash(user.password, password):
                 login_user(user, remember=True)
                 flash("Logged in succesfully", category='success')
                 return redirect(url_for('views.home'))
            else:
                flash('Incorrect Password try again!!', category='error')
        else:
            flash('Email does not exist', category='error')

    return render_template ("login.html",user=current_user)


@auth.route("/logout")
@login_required
def logout():  
     logout_user()
     flash("Logout successful.", category="success")
     return redirect(url_for('auth.login'))

@auth.route("/sign-up", methods=['get', 'post'])
def sign_up():
    if request.method == 'POST':
        email = request.form.get('email')
        firstName = request.form.get('firstName')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2') 
        
        user = User.query.filter_by(email=email).first()

        if user:
            flash('Email already exists', category='error') 
            return redirect(url_for('auth.sign_up'))
        
        if   len(email) < 4:
            flash("Email must be greater than 4 characters.", category='error')
        elif len(firstName) < 2:
            flash("First Name must be greater than 2 character.", category='error')
        elif password1 != password2:
            flash("Passwords don't match.", category='error')
        elif len(password1) < 7:
            flash("Password must be at least 7 characters.", category='error')
       
           
       
        else:
            new_user = User(email=email, 
                            firstName=firstName, 
                            password=generate_password_hash(password1))
           

            db.session.add(new_user)
            db.session.commit()
            # add user to database

    
            # Create a session right after signing up
            login_user(new_user, remember=True)
            

            flash("Account created!", category='success')
            print ("Account erstellt")
    
            return redirect(url_for("views.home"))   
            

    return render_template ("sign_up.html", user=current_user)
