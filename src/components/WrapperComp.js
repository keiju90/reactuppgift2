import React, { Component } from 'react'
import PropTypes from 'prop-types';
import'../App.css'
import styles from "../modules/WrapperComp.module.css"

/**
  * @desc class WrapperComp - 
  * works as a card for several components.
  * manages if content should show or hide with state.
*/
export default class WrapperComp extends Component {
  
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array
    ])
  }

  /* if showcontent is true, children shows, otherwise not showing */
    constructor(props) {
        super(props);
        this.state = {
        showContent: true
        };
    }

  /**
  * @desc showhide - fires when show/hide button is clicked.
  * creates a variable which checks if showcontent is true or false. 
  * if true, change state to false. if false, change state to true. 
  */
    showHide = () => {
        const newShowContent = this.state.showContent === true ? false : true;
        this.setState({showContent: newShowContent })
    }

    render() {
        return (
                    <div className={styles.card}>
                    {this.state.showContent === true && <div> {this.props.children}</div>}
                    <button onClick={this.showHide}>Show/Hide content</button>
        </div>
        )
    }
}


