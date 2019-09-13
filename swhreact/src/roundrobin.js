import React from 'react';
import Button from '@material-ui/core/Button';

class RoundRobin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            stepLabels: {
                0: 'Intro',
                1: 'Add Names',
                2: 'Add Menu Options',
                3: 'Voting',
                4: 'Results',
            },
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
        let dataEntry;

        if (this.state['step'] == 1) {
            dataEntry = <InputList />;
        } else if (this.state['step'] == 2) {
            dataEntry = <InputList />;
        }

        return (
            <div id={'rrmode'}>
                <h2>Round Robin Mode</h2>
                <Dialog step={this.state['step']}/>
                {dataEntry}
                <StepButtons buttonClick={this.handleChangeStep.bind(this)} />
                {/* TODO: Clear state button */}
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
            1: 'Add participants',
            2: 'Add choices',
            3: 'step 3 text',
            4: 'step 4 text',
        };
        return (<div>{steps[this.props.step]}</div>);
    }
}

class InputList extends React.Component {
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
                <Button color="secondary" size="large" variant="contained">Add another</Button>
            </div>
        );
    }
}

class StepButtons extends React.Component {
    render() {
        return (
            <div>
                <Button color="primary" size="large" variant="contained" onClick={(e) => this.props.buttonClick(e, 'back')}>Back</Button>
                <Button color="primary" size="large" variant="contained" onClick={(e) => this.props.buttonClick(e, 'next')}>Next</Button>
            </div>
        );
    }

}

export default RoundRobin;