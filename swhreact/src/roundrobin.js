import React from 'react';
import Button from '@material-ui/core/Button';

class RoundRobin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            stepMax: 4,
            options: [],
            users: [],
            rankings: {},
        }
    }

    handleChangeStep(event, msg) {
        if (msg == 'next' && this.state.step < this.state.stepMax) {
            console.log(msg);
            this.setState((state) => ({
                step: this.state.step + 1})
            );
        } else if (msg == 'back' && this.state.step > 0) {
            this.setState((state) => ({
                step: this.state.step - 1})
            );
        }
    }

    render() {
        return (
            <div id={'rrmode'}>

            <h2>Round Robin Mode</h2>
            <Dialog step={this.state['step']}/>

            <Input />

            <StepButtons buttonClick={this.handleChangeStep.bind(this)} />
            /* TODO: Clear state button */
            </div>
        );
    }
}

class Dialog extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const steps = {
            0: <p>Welcome! This is a mode that allows 2 or more people to use a single device for making their decision. This is a great way to get a feel for this app's usefulness. You'll be asked how many people are                participating. Then you'll be asked for the choices you wish to provide. Then participants can take turns in whichever order they prefer. <em>Note that this mode is ephemeral and doesn't sasettings across sessions. It is intended as a quick introduction.</em></p>,
            1: 'step 1 text',
            2: 'step 2 text',
            3: 'step 3 text',
            4: 'step 4 text',
        };
        return (<div>{steps[this.props.step]}</div>);
    }
}

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {

        return (
            <div>
                <ul>
                    <li>
                    </li>
                    <li>
                    </li>
                </ul>
                <button>Add item</button>
            </div>
        );
    }
}

class StepButtons extends React.Component {
    render() {
        return (
            <div>
                <Button onClick={(e) => this.props.buttonClick(e, 'back')} >Back</Button>
                <Button onClick={(e) => this.props.buttonClick(e, 'next')}>Next</Button>
            </div>
        );
    }

}

export default RoundRobin;