const colors = require('colors/safe');

const fs = require('fs');

let listarTabla = (base,limite) => {
    return new Promise((resolve,reject) => {
        if(!Number(base)){
            reject('la base no es numero o es menor que 1');
            return;
        }

        if(!Number(limite) || limite <= 0){
            reject('el limite no es numero o es menor que 1');
            return;
        }

        console.log(colors.green('==================='));
        console.log(colors.green(`tabla del ${ base }`));
        console.log(colors.green('==================='));

        for (let i = 1; i <= limite; i++){
            console.log(`${ base } * ${ i } = ${ base * i }`);
        }

        resolve('ok');
    });
}

let crearArchivo = (base) => {
    return new Promise((resolve,reject) => {
        
        if(!Number(base)){
            reject('la base no es numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++){
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }
        
        let archivo = `tablas/tabla-${ base }.txt`;
        
        fs.writeFile(archivo,data,(err) => {
            if (err) throw err;
            else 
                resolve(archivo)
            
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla 
}