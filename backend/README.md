# Cook Islands Māori Linguistics Interface: Backend

## How It Works
**Tech stack:**
- Flask backend server
- Celery + Redis task queue

The main issue with the original code was that upon receiving a request, the Flask backend would directly execute tasks and then launch multiple heavy tasks in parallel, effectively overwhelming the server.

With the Celery + Redis task queue, there is a fixed number of Celery workers, one per type of task. Every time a /POST request is received, it goes into the Redis queue. The appropriate Celery worker then processes tasks in the Redis queue one by one, thus avoiding blocking the entire backend server. 

## Running Instructions
### Dev notes to self
To start up the celery+redis task queue, run the following commands from the root directory:
```
redis-server
celery -A backend.celery_app.celery_app worker -l info

export FLASK_APP=backend.app
export FLASK_ENV=development
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