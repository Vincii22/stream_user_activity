import os 
from dotenv import load_dotenv 

load_dotenv(os.path.dirname(__file__), '../../.env')

class Settings:
    # PostgreSQL
    POSTGRES_USER: str = os.getenv("POSTGRES_USER", "user")
    POSTGRES_PASSWORD: str = os.getenv("POSTGRES_PASSWORD", "password")
    POSTGRES_DB: str = os.getenv("POSTGRES_DB", "user_activity")
    POSTGRES_HOST: str = os.getenv("POSTGRES_HOST", "localhost")
    POSTGRES_PORT: int = int(os.getenv("POSTGRES_PORT", 5432))
    
    # Kafka
    KAFKA_BROKER: str = os.getenv("KAFKA_BROKER", "localhost:9062")
    KAFKA_TOPIC: str = os.getenv("KAFKA_TOPIC", "user_events")

settings = Settings()
