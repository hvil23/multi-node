const  argv  = require('./config/yargs').argv;

const { crearArchivo,listarTabla } = require('./multiplicar/multiplicar');

//console.log(argv);
//let base = argv.base;
//let limite = argv.limite;

let comando = argv._[0];

switch (comando){
    case 'listar':
        console.log('LISTADO POR CONSOLA\n');

        listarTabla(argv.base,argv.limite)
            .then(ok => console.log(`\n${ok}`))
            .catch(err => console.log(err));
        break;
    case 'crear':
        console.log('CREANDO ARCHIVO\n');

        crearArchivo(argv.base)
            .then(archivo => console.log(`${ archivo }\n\nok`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('COMANDO NO VALIDO\n');
}



