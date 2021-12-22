/**文档说明
 * @Description:这里是前端加密文档配置可以用于axios请求拦截和响应拦截
 * @author liuJie
 * @Email 1547698569@qq.com
 * @date 2021/12/22 21:20
 */
import CryptoJS from "crypto-js";
import JSEncrypt from "jsencrypt";

interface SecretTool {
  aesEncrypt(plaintext: string, randomKey: string): string;
  aesDecrypt(ciphertext: string, randomKey: string): string;
  rsaEncrypt(plaintext: string, publicKey: string): string | false;
  rsaDecrypt(ciphertext: string, privateKey: string): string | false;
  randomStr(len: number): string;
  genUUID(): string;
}

const aesOpt = {
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7,
};

const _publicKey =
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCcneJM34g4Cw9Qg7va56JMKfSEN8uYyyUkFiGPG8HaynMYXkiaYI+/uVDOrd+4INbEyR7R+gHyXTna1qebPcT8uaoz6+ftXAH26MsI5XBPaHJRrET6ZDOFdXhhpBka6NfstGeoz7mCnT2CEZuk+fBvBTyamjo+lYWuWvAm2MasEQIDAQAB";
const _privateKey =
  "MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAJGBH7NDV2mU5ro88K0CEJ75gXVxxPzHGUHzTdpVt9b8bWPfjAJv9c1MQ9qvOHIkVCylmVfrbEwGCIArUx3osMPkQEWulH9MaxS2PDShaz+mYzqwcV4DGzJAWK4ePmpFXFrxk63jIFLM6Lj5Quq1H7ePTZAEHIU98OQ0VttNX3zhAgMBAAECgYBj04YPNB1tt5XQomyxFeCXYTD7hZGTp3lhsO5x5Ctb2RWn1sA1D+FA95j6GQsN7HS/qOGa208SnXUJki/VLkbPJLaVY8EpBvtbx/MjmH7SWqH1jZeN6pTA4HEw56fRDY/VyjxOrEPE9zNRK4sYoyv8rrstPD1aaf2bTZ4ShnXFjQJBANX2BHLyFliL9sYUIvYmMfG/5LG0A3RUU0itNItrIB/4ck2y5IQxLwkr6YAVfPtFuA9xiLGIhs7mbO2BFS7XnDcCQQCuF9IR24jo6jiDkbc+7huePNyq6xZZFSkgBoTQQrP8xGyVIZR391wjBgWeuCbD9ylNobFF9TJM20gZN03Po5OnAkBp/VoM2vHI4WTYkMcU6qzZFfcjNIp1iQRMv0iFPAcI71koNlNPTNIBGBiuk3Z7PvlD5TkSwRAO1ETnjodA0hwXAkEAggf8uaXVztISwAK4ceJ68mfXEjphCMyLWQZFcSBBO0yjJYhdUnWJdgdrby9wlPIpAXkB5ZTMqycl5N+v2KT/BQJBALpCgJAbtdupZFhXg+lYJJ6ZnwNosCEwRlmczOG+KdoF2x88t6k37aOybiBFq750R0zDKxwoafulvPh6pQuF3wI=";

/**
 * AES 加密
 * @param plaintext 需要加密的明文
 * @param randomKey 加密的Key
 * @returns {string} 加密后的字符串
 * @private
 */
function _aesEncrypt(plaintext: string, randomKey: string): string {
  return CryptoJS.AES.encrypt(
    plaintext,
    CryptoJS.enc.Utf8.parse(randomKey),
    aesOpt
  ).toString();
}

/**
 * AES 解密
 * @param ciphertext 需要解密的密文
 * @param randomKey 解密的Key
 * @returns {string} 解密后的字符串
 * @private
 */
function _aesDecrypt(ciphertext: string, randomKey: string): string {
  return CryptoJS.enc.Utf8.stringify(
    CryptoJS.AES.decrypt(ciphertext, CryptoJS.enc.Utf8.parse(randomKey), aesOpt)
  ).toString();
}

/**
 * 生成随机字符串
 * @param len 字符串长度，默认是 16
 * @returns {string} 随机字符串
 * @private
 */
function _randomStr(len: number): string {
  len = len || 16;
  /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  const $chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  const maxPos = $chars.length;
  let pwd = "";
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

/**
 * 生成UUID
 */
function _genUUID(): string {
  const temp_url = URL.createObjectURL(new Blob());
  const uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.substring(uuid.lastIndexOf("/") + 1);
}

/**
 * RSA加密
 * @param plaintext 需要加密的明文
 * @param publicKey RSA 公钥，一般是服务端公钥
 * @returns {string} 加密后的字符串
 * @private
 */
function _rsaEncrypt(plaintext: string, publicKey: string) {
  publicKey = publicKey || _publicKey;
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  return encrypt.encrypt(plaintext);
}

/**
 * RSA 解密
 * @param ciphertext 需要解密的密文
 * @param privateKey RSA 私钥， 一般是客户端私钥
 * @returns {string} 解密后的字符串
 * @private
 */
function _rsaDecrypt(ciphertext: string, privateKey: string) {
  privateKey = privateKey || _privateKey;
  const decrypt = new JSEncrypt();
  decrypt.setPrivateKey(privateKey);
  return decrypt.decrypt(ciphertext);
}

const secretTool: SecretTool = {
  aesEncrypt: _aesEncrypt,
  aesDecrypt: _aesDecrypt,
  rsaEncrypt: _rsaEncrypt,
  rsaDecrypt: _rsaDecrypt,
  genUUID: _genUUID,
  randomStr: _randomStr,
};

export default secretTool;
