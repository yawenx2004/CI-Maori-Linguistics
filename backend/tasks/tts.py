from backend.celery_app import celery_app

# let's pretend tts is multiplication
@celery_app.task
def tts(x: int, y: int) -> int:
    result = x * y
    print("Multiply task result: ", result)
    return result