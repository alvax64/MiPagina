// generate uuid
const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
        console.log({
            r,
            v,
            ascii: v.toString(16)
        });
        return v.toString(16);
    });
}

// vertion 2
const uuid2 = () => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

// vertion 3
const uuid3 = () => {
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
}

console.log({
    id: uuid(),
    name: 'cosita'
})

// Identificador Universalmente Únicos (UUID)
// regex /[xy]/g | Regular expressions
// https://regexr.com/

// | or
// & and
// !== not equal
// == equal | 1 == '1' true
// === equal and same type | 1 === '1' false
// codicion ternario ? :

// #include <random>
// #include <sstream>

// namespace uuid {
//     static std::random_device              rd;
//     static std::mt19937                    gen(rd());
//     static std::uniform_int_distribution<> dis(0, 15);
//     static std::uniform_int_distribution<> dis2(8, 11);

//     std::string generate_uuid_v4() {
//         std::stringstream ss;
//         int i;
//         ss << std::hex;
//         for (i = 0; i < 8; i++) {
//             ss << dis(gen);
//         }
//         ss << "-";
//         for (i = 0; i < 4; i++) {
//             ss << dis(gen);
//         }
//         ss << "-4";
//         for (i = 0; i < 3; i++) {
//             ss << dis(gen);
//         }
//         ss << "-";
//         ss << dis2(gen);
//         for (i = 0; i < 3; i++) {
//             ss << dis(gen);
//         }
//         ss << "-";
//         for (i = 0; i < 12; i++) {
//             ss << dis(gen);
//         };
//         return ss.str();
//     }
// }