import React from 'react';

class Cats extends React.Component {


    render(){
        return (
            <div>
                <h1> Cats </h1>
                <ul>
                    {this.props.cats.map((cat) =>
                        <li key={cat.id}>
                            {cat.name}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Cats
