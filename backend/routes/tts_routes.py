from flask import Blueprint, request
from tasks.tts import tts
from celery_app import celery_app

tts_bp = Blueprint("tts", __name__)

# start task
@tts_bp.route("/start-tts", methods=["POST"])
def start_tts():
    data = request.json or {}
    args = data.get("args")
    print(args)
    task = tts.delay(*args)
    return {"tts_task_id": task.id}

# poll status
@tts_bp.route("/status/tts/<task_id>")
def task_status(task_id):
    task = celery_app.AsyncResult(task_id)
    result = task.result
    
    # convert non-serializable objects to string
    if not isinstance(result, (str, int, float, bool, type(None), list, dict)):
        result = str(result)

    return {
        "task_id": task_id,
        "status": task.status,
        "result": result
    }