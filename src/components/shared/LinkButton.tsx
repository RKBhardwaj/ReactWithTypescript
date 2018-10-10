import * as React from 'react';
import { Button } from 'react-bootstrap';

interface LinkButtonProps {
    buttonText: string;
    buttonHandler: any
}

const LinkButton = (props: LinkButtonProps) => {
    const {
        buttonText,
        buttonHandler
    } = props;
    return (
        <Button
            className="btn-link"
            onClick={() => buttonHandler()}
        >
            {buttonText}
        </Button>
    );
}

export default LinkButton;