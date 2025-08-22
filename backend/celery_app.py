# define celery instance
from celery import Celery

# create celery app instance
celery_app = Celery(
    'celery_app', 
    broker='redis://localhost:6379/0',
    backend='redis://localhost:6379/0'
)