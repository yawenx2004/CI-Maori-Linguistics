# Cook Islands Māori Linguistics Interface: Backend

## Running Instructions
### Dev notes to self
To start up the celery+redis task queue, run the following commands:
```
redis-server
celery -A celery_app.celery_app worker --loglevel=info -I tasks.parser -I tasks.tts
flask run --host=0.0.0.0 --port=5001
```

## Architecture
```
backend/
├── app.py          # entry point
├── celery_app.py   # defines Celery instance
├── routes/         # API route handlers for NLP models
├── tasks/          # defines tasks for each NLP model
├── workers/        # runs tasks for each NLP model
├── uploads/        # temp storage for input files
├── static/         # temp storage for output files
├── utils/          # utility modules for processing & cleanup
```