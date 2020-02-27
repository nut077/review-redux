import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteArticle } from '../actions';

const ShowArticle = ({ article, deleteArticle, match: { params } }) => {
  return (
    <div>
      <div>Value: {article.value}</div>
      <Link to={`/articles/${params.id}/edit`}>Edit</Link>
      <button onClick={deleteArticle}>Delete</button>
    </div>
  );
};

export default connect(
  ({ articles }, { match: { params } }) => ({
    article: articles.find(article => article.id === Number(params.id))
  }),
  (dispatch, { match: { params }, history: { push } }) => ({
    deleteArticle() {
      dispatch(deleteArticle(params.id));
      push('/articles');
    }
  })
)(ShowArticle);
