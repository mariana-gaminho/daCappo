import React, { Component } from 'react';

import WalkthroughStep from '../../components/WalkthroughStep';
import WalkthroughImage1 from '../../assets/icons/walkthrough-1.png';
import WalkthroughImage2 from '../../assets/icons/walkthrough-2.png';
import WalkthroughImage3 from '../../assets/icons/walkthrough-3.png';

import './Walkthrough.scss';

type State = {
  step: number;
  intervalId: any;
}

class Walkthrough extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      step: 1,
      intervalId: undefined
    }
    this.switchStep = this.switchStep.bind(this);
  }

  componentDidMount() {
    let intervalId = setInterval(() => {
      if(this.state.step < 3) {
        this.setState({ step: this.state.step + 1 })
      } else this.setState({ step: 1 });
    }, 4000);
    this.setState({ intervalId: intervalId })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  switchStep() {
    switch (this.state.step) {
      case 1:
        return (
          <WalkthroughStep
            step={1}
            title="All your composers in one place"
            subtitle="Upload your files and keep your own digital music sheet library."
            image={WalkthroughImage1}
          />
        );
      case 2:
        return (
          <WalkthroughStep
            step={2}
            title="Customize your music sheets"
            subtitle="Change the background color and the contrast of your music sheets."
            image={WalkthroughImage2}
          />
        );
      case 3:
        return (
          <WalkthroughStep
            step={3}
            title="Use our built-in metronome"
            subtitle="Chose whether to play along with our built-in metronome or practice by yourself"
            image={WalkthroughImage3}
          />
        );
    }
  }

  render() {
    return (
      <div className="walkthrough">
        {this.switchStep()}
      </div>
    );
  }
};

export default Walkthrough;
