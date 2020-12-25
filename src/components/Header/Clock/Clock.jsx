import React, {Component} from "react";
import style from './Clock.module.css'

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.toOffsetDate(this.props.offset)
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    toOffsetDate(offset) {
        let d = new Date();
        // let hrs = d.getUTCHours();
        // let mins = d.getUTCMinutes();
        // let secs = d.getUTCSeconds();
        // return `${hrs}:${mins}:${secs}`;
        return `${d}`

    }

    tick() {
        this.setState({
            time: this.toOffsetDate(this.props.offset)
        });
    }


    render() {
        return (
            <p className={`${style.clockStyle}`}>
                The time is {this.state.time}.
            </p>
        );
    }
}

export default Clock;