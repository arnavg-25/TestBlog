from datetime import datetime
from datetime import date

from flask import Flask, render_template
app = Flask(__name__)


@app.route( "/" )
def home():
    return render_template( "index.html" )
@app.route( "/date" )
def test():
    date = datetime.now()
    date_String = date.strftime("%m/%d/%Y, %H:%M:%S:")
    return date_String




if __name__ == "__main__":
    app.run(debug=True)

    


