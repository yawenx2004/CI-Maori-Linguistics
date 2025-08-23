from flask import Flask, request
from flask_cors import CORS
import time
from celery_app import celery_app

# import routes
from routes import tts_bp, parser_bp

app = Flask(__name__)
CORS(app)

# register blueprints
## actual routes
app.register_blueprint(tts_bp)
app.register_blueprint(parser_bp)

## test routes
@app.route('/time')
def get_time():
    return {'time': time.time()}

# run app
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5001)
