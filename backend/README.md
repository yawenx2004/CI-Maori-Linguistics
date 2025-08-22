# Cook Islands Māori Linguistics Interface: Backend

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