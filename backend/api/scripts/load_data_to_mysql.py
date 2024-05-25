

import os
import pandas as pd
import mysql.connector
from mysql.connector import Error

# Get the full path to the CSV file
csv_file_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'areas.csv')

# Load data from CSV file into a pandas DataFrame
data = pd.read_csv(csv_file_path)

try:
    # Connect to MySQL database
    conn = mysql.connector.connect(
        host="localhost",
        user="chathuranga-comp",
        password="e1840006",
        database="compdb"
    )

    if conn.is_connected():
        print("Successfully connected to the database")

    # Create a cursor object to execute SQL queries
    cursor = conn.cursor()

    # Iterate over each row in the DataFrame and insert it into the database
    for index, row in data.iterrows():
        query = """
        INSERT INTO api_area (district, district_short_code, div_sec_area, div_sec_area_short_code)
        VALUES (%s, %s, %s, %s)
        """
        values = (row['District'], row['District_Short_Code'], row['Div_Sec_Area'], row['Div_Sec_Area_Short_Code'])
        cursor.execute(query, values)

    # Commit the transaction
    conn.commit()

    print(f"Data from {csv_file_path} has been successfully inserted into the api_area table.")

except Error as e:
    print(f"Error: {e}")

finally:
    if conn.is_connected():
        # Close the cursor and database connection
        cursor.close()
        conn.close()
        print("MySQL connection is closed")
