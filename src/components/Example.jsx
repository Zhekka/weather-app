import React, { useState } from 'react';

 function Example() {
        const [count, setCount] = useState(0);

      return (
             <div>
               <p>Вы кликнули {count} раз(а)</p>
        <button onClick={() => setCount(count + 1)}>
                Нажми на меня
               </button>
        </div>
       );
      }

      export default Example