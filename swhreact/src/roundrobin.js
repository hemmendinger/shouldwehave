import React from 'react';

class RoundRobin extends React.Component {
    render () {
        return (
            <div>
            <h1>Round Robin Mode</h1>
            <p>Welcome! This is a mode that allows 2 or more people to use a single device for making their decision.
                This is a great way to get a feel for this app's usefulness. You'll be asked how many people are
                participating. Then you'll be asked for the choices you wish to provide. Then participants can take
                turns in whichever order they prefer. <em>Note that this mode is ephemeral and doesn't save
                    settings across sessions. It is intended as a quick introduction.</em>
            </p>
            </div>
        );
    }
}

export default RoundRobin;