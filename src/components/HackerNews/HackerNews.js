import React, { Component } from "react";
import Card from "./../shared/Card/Card";
import Loading from "./../shared/Loading/Loading";
import { connect } from "react-redux";
import { requestArticles } from "../../ducks/hackerNewsReducer";

class HackerNews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // requestArticlesfunction from reducer that was mapped to props
    this.props.requestArticles();
  }
  render() {
    const articles = this.props.articles.map(article => (
      <Card key={article.id} article={article} />
    ));
    return (
      <div className="news-container">
        <img style={styles.logo} src="./hackerNews.jpeg" alt="" />
        {this.props.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    );
  }
}
// mapStateToProps the state in the reducer to the props in this componenet
function mapStateToProps(state) {
  return state.hackerNews;
}
// mapDispatchToProps will map functions imported from the reducer onto the props of this components
const mapDispatchToProps = {
  requestArticles: requestArticles
};
// we export the evoked connect component wit the mapStateToProps, mapDispatchToProps
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HackerNews);

const styles = {
  logo: {
    width: "250px",
    margin: "50px 0px"
  }
};
