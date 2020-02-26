var soap=require('soap');
// This example consumes the public WS SOAP https://www.dataaccess.com/webservicesserver/numberconversion.wso?WSDL
var urlWsdl=process.env.URL_WSDL_CONVERT_NUMBERS || 'https://www.dataaccess.com/webservicesserver/numberconversion.wso?WSDL';

module.exports.callSopaConvertNumber=async (number)=>{
    console.log('creating client from '+urlWsdl);
    let client=await soap.createClientAsync(urlWsdl);
    // Call SOAP method with Promises, await for result.
    /**
     * The result have the follow format (array):
     * [
    { NumberToWordsResult: 'one hundred and twenty three' },
    '<?xml version="1.0" encoding="utf-8"?>\r\n' +
        '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\r\n' +
        '    <m:NumberToWordsResponse xmlns:m="http://www.dataaccess.com/webservicesserver/">\r\n' +
        '      <m:NumberToWordsResult>one hundred and twenty three </m:NumberToWordsResult>\r\n' +
        '    </m:NumberToWordsResponse>\r\n' +
        '</soap:Envelope>',
    undefined,
    '<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope
    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:tns="http://www.dataaccess.com/webservicesserver/">
        <soap:Body><NumberToWords]
     * 
     */
    let result=await client.NumberToWordsAsync({ubiNum:number});
    return result[0].NumberToWordsResult;
   // Return just in a line
   //return (await client.NumberToWordsAsync({ubiNum:number}))[0].NumberToWordsResult;
}