# Cook Islands Māori Linguistics Interface: Backend

## Running Instructions
### Dev notes to self
To start up the celery+redis task queue, run the following commands:
```
redis-server
celery -A celery_app.celery_app worker --loglevel=info -I tasks.parser -I tasks.tts
python app.py
```

## Architecture
```
```