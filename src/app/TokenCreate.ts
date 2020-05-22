// import * as CryptoJS from 'crypto-js';
// import {base64url} from './Base64Converter';
// export function JWtToken(){
//   //Base64Converter base = new Base64Converter();
     
//         var header = {
//             "alg": "HS256",
//             "typ": "JWT"
//           };
          
//           var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
//           var encodedHeader = base64url(stringifiedHeader);
          
//           var data = {
//             "id": 1337,
//             "username": "john.doe",
//             "ExpireTime": new Date().getTime()+600000
//           };
          
//           var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
//           var encodedData = base64url(stringifiedData);
          
//           var token = encodedHeader + "." + encodedData;
//           var secret = "My very confidential secret!";

//           var signature = CryptoJS.HmacSHA256(token, secret);
//           var cryptoSignature = base64url(signature);

//           var signedToken = token + "." + cryptoSignature;
//           return signedToken;

//     }
