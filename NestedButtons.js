import React from 'react';

function NestedButtons() {
    const handleOuterClick = () => {
        console.log("Outer button clicked");
        alert("Outer button clicked");
    };

    const handleInnerClick = (event) => {
        event.stopPropagation(); // This stops the click event from propagating to the outer button
        console.log("Inner button clicked");
        alert("Inner button clicked");
    };

    return (
        <div className="NestedButtons">
            <button onClick={handleOuterClick}>
                Outer Button
                <button onClick={handleInnerClick} style={{ marginLeft: '10px' }}>
                    Inner Button
                </button>
            </button>
        </div>
    );
}

export default NestedButtons;

