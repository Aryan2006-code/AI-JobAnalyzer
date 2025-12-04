import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from pathlib import Path

# Load environment variables
env_path = Path(__file__).parent / '.env'
load_dotenv(dotenv_path=env_path, override=True)

MONGODB_URL = os.getenv("MONGODB_URL")

class Database:
    client: AsyncIOMotorClient = None

    def connect(self):
        if not MONGODB_URL:
            print("Warning: MONGODB_URL not found in environment variables.")
            return
        
        try:
            self.client = AsyncIOMotorClient(MONGODB_URL)
            print("Connected to MongoDB")
        except Exception as e:
            print(f"Error connecting to MongoDB: {e}")

    def close(self):
        if self.client:
            self.client.close()
            print("Closed MongoDB connection")

    def get_db(self):
        if self.client:
            # Assuming the database name is 'job_analyzer' or similar, 
            # or we can parse it from the URL if provided, but Atlas URLs often don't have the DB name in the path by default unless specified.
            # The user's URL ends with /, so no DB name.
            # We'll use a default name 'job_analyzer_db'.
            return self.client.job_analyzer_db
        return None

db = Database()
