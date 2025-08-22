from backend.celery_app import celery_app

# let's pretend parser = addition
@celery_app.task
def parser(x: int, y: int) -> int:
    result = x + y
    print("Add task result: ", result)
    return result