import React from 'react';

import Button from 'react-bootstrap/Button';

const OptionButton = ({ text, handler, block = true }) => {
    return (
        <Button size="lg" onMouseOver={handler} block={block} className="option-button">
            {text}
        </Button>
    );
}

export default OptionButton;