from backend.celery_app import celery_app

# let's pretend tts just echoes back the task
@celery_app.task
def tts(txt: str) -> str:
    result = txt
    print("TTS result: ", result)
    return txt