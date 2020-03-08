class VigenereCipheringMachine {
    constructor(mod) {
        this.mod = mod
    }

    encrypt(message, key) {
        if (!message || !key ) throw 'Not input';
        let out = ""
        for (let i = 0, k = 0; i < message.length; i++, k++) {
                  
          let mC = message.toUpperCase().charCodeAt(i);
          let kC = key.toUpperCase().charCodeAt(k % key.length);
          if (mC >= 65 && mC <= 90) {
            out += String.fromCharCode((mC + kC - 65*2 ) % 26 + 65);
          } else {
            out += String.fromCharCode(mC);
            k--
          }
        }
        
        return this.mod === false ? out.split('').reverse().join('') : out ;   
    }

    

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key ) throw 'Not input';
        let out = ""
        for (let i = 0, k = 0; i < encryptedMessage.length; i++, k++) {
              
          let dC = encryptedMessage.toUpperCase().charCodeAt(i);
          let kC = key.toUpperCase().charCodeAt(k % key.length);
          
          if (dC >= 65 && dC <= 90) {
            out += String.fromCharCode((dC + 26 - kC) % 26 + 65);
          } else {
            out += String.fromCharCode(dC);
            k--
          }
        }
        return this.mod === false ? out.split('').reverse().join('') : out ;
    }
}

module.exports = VigenereCipheringMachine;
