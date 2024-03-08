from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import mysql.connector

app = FastAPI()

# CORS (Cross-Origin Resource Sharing) middleware to allow requests from any origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MySQL database connection configuration
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "workdb",
    "auth_plugin": "",
}

# Function to create a MySQL connection
def create_connection():
    return mysql.connector.connect(**db_config)

# API endpoint to get all users
@app.get("/about/")
def get_about():
    connection = create_connection()
    cursor = connection.cursor(dictionary=True)

    cursor.execute("SELECT * FROM about")
    users = cursor.fetchall()

    connection.close()

    return users

# API endpoint to get all users
@app.get("/projects/")
def get_about():
    connection = create_connection()
    cursor = connection.cursor(dictionary=True)

    cursor.execute("SELECT * FROM projects")
    users = cursor.fetchall()

    connection.close()

    return users