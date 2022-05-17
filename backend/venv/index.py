from typing import final
from flask import Flask
import json
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

data1 = {}
finalData = []
def getAllData():
    for ele in data1["data"]:
        values = []
        tids = {}
        tids["tid"] = ele["tid"]
        for tim, val in zip(ele["timestamps"], ele["values"]):
            if(val != 'N/A'):
                values.append({"time": tim, "timeData": val})
        tids["values"] = values
        finalData.append(tids)

with open('measurements.json', 'r') as js:
    data1 = json.load(js)
    if(data1["status"] == "success"):
        getAllData()

@app.route("/")
def home():
    return "<p>Hello, Germany</p>"

@app.route("/initialData")
def getLength():
    return {"length": len(finalData)}

@app.route("/data/<cellNo>")
def initialData(cellNo):
    if cellNo == "all":
        return {"allResponse": finalData}
    if int(cellNo) < 0 or int(cellNo) > len(finalData) + 1:
        return {"response": finalData[0]}

    return {"response": finalData[int(cellNo) - 1]}