# NodeJSConsumeSOAP
 Web Service SOAP consumption from Node JS

This project consumes the public web service SOAP available in https://www.dataaccess.com/webservicesserver/numberconversion.wso?WSDL that exposes methods for convert numbers to words
To send a request for this project you can access with 
http://127.0.0.1:9090/convert_number?number=12
when 12 is the number to convert to words, the response will be a json with the following format:
{"message":"twelve"}