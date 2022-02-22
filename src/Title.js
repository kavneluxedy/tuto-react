import React from 'react';

class Title extends React.Component {
    render() { 
        return (
            <h1>
                Title : { this.props.a + this.props.b }
                <br/>
            </h1>
        );
    }
}

export default Title;