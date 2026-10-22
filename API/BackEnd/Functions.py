from bson import ObjectId
from flask import jsonify
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import BackEnd.GlobalInfo.ResponseMessages as mensajitos
import BackEnd.GlobalInfo.Keys as ColabsKey

if ColabsKey.dbconn==None:
    mongoConnect=MongoClient(ColabsKey.strConnection)
    ColabsKey.dbconn=mongoConnect[ColabsKey.strDBConnection]
    dbUsers=ColabsKey.dbconn["clUsuarios"]
    dbColabs=ColabsKey.dbconn["clColabs"]

def fnGetUsers():
    try:
        arrFinalUser=[]
        objQuery=dbUsers.find({})
        listUsers=list(objQuery)
        if len(listUsers)!=0:
            for objUser in listUsers:
                print(objUser)
                objFormateado={
                    "_id":str(objUser['_id']),
                    "strCorreo":objUser["strCorreo"],
                    "strPassword":objUser['strPassword'],
                    "strRol":objUser['strRol'],
                }
                arrFinalUser.append(objFormateado)
        objResponse=mensajitos.succ200.copy()
        objResponse['Respuesta']=arrFinalUser
        return jsonify(objResponse)
    except Exception as e:
        print("Error en fngetusers",e)
        return jsonify(mensajitos.err500)


def fnGetColabs():
    try:
        arrFinalColab=[]
        objQuery=dbColabs.find({})
        listColabs=list(objQuery)
        if len(listColabs)!=0:
            for objColab in listColabs:
                print(objColab)
                objFormateado={
                    "_id":str(objColab['_id']),
                    "strNombre":objColab["strNombre"],
                    "strApellido":objColab['strApellido'],
                    "strPuesto":objColab['strPuesto'],
                    "floatSueldo":float(objColab['floatSueldo']),
                    "strRfc":objColab['strRfc']
                }
                arrFinalColab.append(objFormateado)
        objResponse=mensajitos.succ200.copy()
        objResponse['Respuesta']=arrFinalColab
        return jsonify(objResponse)
    except Exception as e:
        print("Error en fngetColabs",e)
        return jsonify(mensajitos.err500)

def fnMensajeGet():
    try:
        return jsonify({"Mensaje":"Hola mundos"})
    except Exception as e:
        return jsonify({"Error":str(e)})

def fnDeleteColab(data):
    try:
        objQuery=dbColabs.delete_one({"_id":ObjectId(data["_id"])})
        if objQuery.deleted_count > 0:
            return jsonify(mensajitos.succ200)
        else:
            return jsonify(mensajitos.err404)
    except Exception as e:
        print("Error en fnDeleteColab",e)
        return jsonify(mensajitos.err500)