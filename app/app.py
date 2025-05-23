from fastapi import FastAPI, Depends, Header, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.requests import Request
from pydantic import BaseModel
from sqlalchemy.orm import Session
from database import get_db
from models import Tweet
from dotenv import load_dotenv
import os

app = FastAPI()

load_dotenv()
SECRET_API_KEY = os.getenv('SECRET_API_KEY')

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

# Mount folders directly (not under /static)
app.mount("/css", StaticFiles(directory=os.path.join(BASE_DIR, "css")), name="css")
app.mount("/js", StaticFiles(directory=os.path.join(BASE_DIR, "js")), name="js")

# Templates
templates = Jinja2Templates(directory=os.path.join(os.path.dirname(__file__), "templates"))

@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

class TweetCreate(BaseModel):
    tweet_data: str
    tweet_media_ids: list[int] = []


@app.get("/api/users/me")
def get_current_user(api_key: str = Header(None)):
    if api_key != 'test':
        raise HTTPException(status_code=403, detail="Invalid API Key")
    return {"username": "your_username", "email": "you@example.com"}


@app.post("/api/tweets")
def create_tweet(
    tweet: TweetCreate,
    api_key: str = Header(None),
    db: Session = Depends(get_db)
):
    if api_key != SECRET_API_KEY:
        raise HTTPException(status_code=403, detail="Invalid API Key")

    new_tweet = Tweet(
        tweet_data=tweet.tweet_data,
        tweet_media_ids=",".join(map(str, tweet.tweet_media_ids))
    )
    db.add(new_tweet)
    db.commit()
    db.refresh(new_tweet)
    return {"message": "Tweet created", "id": new_tweet.id}


# @app.post("/api/media")
# def load_media(
#     tweet: TweetCreate,
#     api_key: str = Header(None),
#     db: Session = Depends(get_db)
# ):
#
