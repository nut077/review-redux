import React from 'react';
import { connect } from 'react-redux';
import { Form } from '../components';
import { editArticle } from '../actions';

const EditArticle = ({ editArticle, article }) => (
  <Form value={article.value} onSubmit={editArticle} />
);

export default connect(
  ({ articles }, { match: { params } }) => ({
    article: articles.find(article => article.id === Number(params.id))
  }),
  (dispatch, { match: { params }, history: { push } }) => ({
    editArticle(value) {
      dispatch(editArticle(params.id, value));
      push('/articles');
    }
  })
)(EditArticle);
