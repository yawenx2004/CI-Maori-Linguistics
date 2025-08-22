from flask import Flask, request
from flask_cors import CORS
import time
from backend.celery_app import celery_app

# import routes
from backend.routes import tts_bp

app = Flask(__name__)
CORS(app)

# register blueprints
## actual routes
app.register_blueprint(tts_bp)

## test routes
@app.route('/time')
def get_time():
    return {'time': time.time()}

# run app
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5001)
