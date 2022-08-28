import React from 'react';

// function Header({titulo}) {

//     return(
//         <>
//             <h1>{ titulo }</h1>
//         </>
//     )
// };

const Header = ({titulo}) =>  ( 
        <h1>{ titulo }</h1>
);
 
// la diferencia entre ambas funciones es que en la primera podemos agregar codigo JS entre la primera llave y el return, mientras que en la segunda no se puede, y obviamente en la segunda hay mucho menos codigo...

export default Header