from flask import Flask, request
from flask_cors import CORS
import time
from backend.celery_app import celery_app

# import tasks
from backend.tasks.parser import parser
from backend.tasks.tts import tts

app = Flask(__name__)
CORS(app)

# register routes
## actual

## test routes
@app.route('/time')
def get_time():
    return {'time': time.time()}

# ------------------------
# QUEUE SOME JOBS ON START
# ------------------------
@app.route("/start-tts", methods=["POST"])
def start_tasks():
    data = request.json or {}
    args = data.get("args", [2, 3])
    task = tts.delay(*args)

    return {
        "tts_task_id": task.id
    }

@app.route("/tasks-status/<task_id>")
def task_status(task_id):
    task = celery_app.AsyncResult(task_id)
    return {
        "task_id": task_id,
        "status": task.status,
        "result": task.result
    }

# run app
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5001)
