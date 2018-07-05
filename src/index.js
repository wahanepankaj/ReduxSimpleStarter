import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                Hello from steemit!
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));