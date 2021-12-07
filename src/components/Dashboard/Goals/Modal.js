import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

class GoalModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      goals: [
        {
          text: 'Have a Well-Stocked Emergency Fund',
          subtitle:
            'We normally think of having an emergency fund as being a short-term financial goal. And from a mechanical standpoint, that’s true. However, an emergency fund has important long-term benefits, which is why it’s one of the good financial goals that you should plan to achieve.',
          id: uuidv4(),
        },
        {
          text: 'Get Out of Debt – Completely',
          subtitle:
            'The great thing about this goal is that anyone can do it, regardless of income or wealth level. And if you want to get the most out of your finances, it’s virtually a requirement that you get out of debt.',
          id: uuidv4(),
        },
        {
          text: 'Plan For Early Retirement',
          subtitle:
            'f you have high interest credit card debt or several different credit card bills to pay every month',
          id: uuidv4(),
        },
      ],
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div>
        <button className='finBtn' onClick={this.toggle}>
          view all goals
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <h4>The Top 10 Good Financial Goals That Everyone Should Have For 2021</h4>
            {this.state.goals.map((goal) => (
              <div key={goal.id}>
                <p style={{ color: '#01388a', fontSize: '18px', fontWeight: ' bold' }}>{goal.text}</p>
                <p>{goal.subtitle}</p>
              </div>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button color='secondary' onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default GoalModal;
