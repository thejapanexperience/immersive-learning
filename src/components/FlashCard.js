import React, { Component } from 'react';
import { connect } from 'react-redux';

import { correct, wrong } from '../actions/ScoreActions'

@connect(state => ({
  score:state.score,
  card:state.card
  }),
  dispatch => ({
    correct() {
      dispatch(correct());
    },
    wrong() {
      dispatch(wrong());
    }
  })
)
export default class FlashCard extends Component {

  render() {
    const { score, dispatch, card } = this.props;
    console.log("card",card);
    const { question,answers,correct } = card;
    let MultipleChoices = answers.map( (answer,i) => {
      if(i === correct){
        return (<button onClick={this.props.correct} className="btn btn-default" >{answer}</button>)
      }else{
        return (<button onClick={this.props.wrong} className="btn btn-default" >{answer}</button>)
      }
    })
    return (
      <div className='container'>
        <h1 className='text-center'>{score}</h1>
        <h1 className='text-center'>{question}</h1>
        {MultipleChoices}
      </div>
    )
  }
}
