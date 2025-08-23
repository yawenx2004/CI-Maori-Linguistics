from celery_app import celery_app

# let's pretend tts just reverses the utterance
@celery_app.task
def tts(txt: str) -> str:
    result = ''
    for s in txt:
        result = s + result
    print("TTS result: ", result)
    return result