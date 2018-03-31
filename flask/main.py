from flask import Flask, render_template

app = Flask(
        __name__,
        static_folder=".",
        template_folder=".")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template("index.html")

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8080, debug=True)
