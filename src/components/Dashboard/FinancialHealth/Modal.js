import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

class FinancialModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      finance: [
        {
          text: 'Do the Math—Net Worth and Personal Budgets',
          subtitle:
            'Money comes in, money goes out. For many people this is about as deep as their understanding gets when it comes to personal finances. Rather than ignoring your finances and leaving them to chance, a bit of number crunching can help you evaluate your current financial health and determine how to reach your short- and long-term financial goals.',
          id: uuidv4(),
        },
        {
          text: ' Recognize and Manage Lifestyle Inflation',
          subtitle:
            'Most individuals will spend more money if they have more money to spend. As people advance in their careers and earn higher salaries',
          id: uuidv4(),
        },
        {
          text: 'Recognize Needs vs. Wants—and Spend Mindfully',
          subtitle:
            'Unless you have an unlimited amount of money, it’s in your best interest to be mindful of the difference between “needs” and “wants',
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
          view financial health
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <h4>Five Rules to Improve Your Financial Health</h4>
            {this.state.finance.map((fin) => (
              <div key={fin.id}>
                <p style={{ color: '#01388a', fontSize: '18px', fontWeight: ' bold' }}>{fin.text}</p>
                <p>{fin.subtitle}</p>
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

export default FinancialModal;
