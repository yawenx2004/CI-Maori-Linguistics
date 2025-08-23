from flask import Blueprint, request
from tasks.parser import parser
from celery_app import celery_app

parser_bp = Blueprint("parser", __name__)

# start task
@parser_bp.route("/start-parser", methods=["POST"])
def start_parser():
    data = request.json or {}
    args = data.get("args")
    print(args)
    task = parser.delay(*args)
    return {"parser_task_id": task.id}

# poll status
@parser_bp.route("/status/parser/<task_id>")
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