import React from 'react';

const HomePage = () => {
    return (
        <div> 
            <div> I'm the very amazing best home component </div>
            <button onClick={() => console.log('click')}>
                Click me 
            </button>
        </div>
    );
};

export default { 
    component: HomePage
};