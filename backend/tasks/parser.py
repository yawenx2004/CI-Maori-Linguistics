from celery_app import celery_app

# let's pretend parser = vowel removal
@celery_app.task
def parser(txt: str) -> str:
    result = ''
    vowels = ['a', 'e', 'i', 'o', 'u']
    for s in txt:
        if s.lower() not in vowels:
            result += s
    print("Add task result: ", result)
    return result