import React from 'react';
import { connect } from 'react-redux';
import { Form } from '../components';
import { createArticle } from '../actions';

const CreateArticle = ({ createArticle }) => {
  return <Form onSubmit={createArticle} />;
};

export default connect(null, (dispatch, { history: { push } }) => ({
  createArticle(value) {
    dispatch(createArticle(value));
    push('/articles');
  }
}))(CreateArticle);
