import { useState } from 'react';
import './Bobble.css';

const Bobble =()=> {
    const[clicks, addClicks] = useState(0);

    const handleClick =()=> {
        addClicks(clicks + 1);
    }

    return (
        <div id='test' onClick={handleClick}>{clicks}</div>
    )
}

export default Bobble;