from flask import Blueprint
import logging

api = Blueprint('api', __name__)

@api.route('/version')
def version():
    data = {
        'data': "Ethan's API v1.0"
    }
    return data

@api.route('/people')
def people():
    data = {
        'data': [
            'Ethan',
            'James',
            'Chris',
            'John',
            'Mario',
        ]
    }
    return data
