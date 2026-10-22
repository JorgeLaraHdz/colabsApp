from flask import Flask,jsonify,request
from flask_cors import CORS, cross_origin
import BackEnd.Functions as callmethod
import BackEnd.GlobalInfo.ResponseMessages as mensajitos

#Instancia
app=Flask(__name__)
CORS(app)

@app.route('/',methods=['GET'])
@cross_origin(allow_headers=['Content-Type'])
def Getmessage():
    try:
        objResult=callmethod.fnMensajeGet()
        return objResult
    except Exception as e:
        print("Error en Getmessage",e)
        return jsonify(mensajitos.err500)

@app.route('/getUsers',methods=['GET'])
@cross_origin(allow_headers=['Content-Type'])
def GetUsers():
    try:
        objResult=callmethod.fnGetUsers()
        return objResult
    except Exception as e:
        print("Error en GetUsers",e)
        return jsonify(mensajitos.err500)


@app.route('/getColabs',methods=['GET'])
@cross_origin(allow_headers=['Content-Type'])
def GetColabs():
    try:
        objResult=callmethod.fnGetColabs()
        return objResult
    except Exception as e:
        print("Error en GetColabs",e)
        return jsonify(mensajitos.err500)

@app.route('/deleteColab',methods=['DELETE'])
@cross_origin(allow_headers=['Content-Type'])
def DeleteColab():
    try:
        objResult=callmethod.fnDeleteColab(request.json)
        return objResult
    except Exception as e:
        print("Error en DeleteColab",e)
        return jsonify(mensajitos.err500)
if __name__=='__main__':
    app.run(host="0.0.0.0", port=5000, debug=True, threaded=True)