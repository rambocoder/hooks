import React from "react";

export class ClassBased extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };

        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick(e) {
        const count = this.state.count + 1;
        this.setState({
            count
        })
    }

    render() {
        return <div>Class Based Component<button onClick={this.buttonClick}>{this.state.count}</button></div>;
    }
}

