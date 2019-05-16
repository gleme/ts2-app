import { Component } from 'react';
import { Typography, Divider, message } from 'antd';
import Layout from '../components/layout/Layout';
import LoadingSpinner from '../components/feedback/LoadingSpinner';
import BinaryQuestion from '../components/screening/BinaryQuestion';
import { findQuestions } from '../services/screening';

const { Title } = Typography;

export default class About extends Component {
  state = {
    questions: [],
    loading: false
  };

  componentDidMount() {
    findQuestions()
      .then(questions => this.setState({ questions }))
      .catch(ex => {
        const { statusCode, error } = ex.response.data;
        const errorMessage = `${statusCode} - ${error}`;
        message.error(errorMessage);
        this.setState({ loading: false });
      });
  }

  render() {
    const { questions, loading } = this.state;
    return (
      <Layout>
        <Title level={2} style={{ textAlign: 'center' }}>
          Measles Screening
        </Title>
        <div style={{ margin: 'auto', width: '80%' }}>
          {questions.map(({ title, subtitle }, index) => (
            <BinaryQuestion key={index} title={title} subtitle={subtitle} />
          ))}
        </div>
        <Divider />
        {loading && <LoadingSpinner />}
      </Layout>
    );
  }
}
