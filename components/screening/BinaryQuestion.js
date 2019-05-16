import { Row, Col, Typography, Checkbox } from 'antd';

const { Title, Paragraph } = Typography;

export default function BinaryQuestion(props) {
  const { title, subtitle } = props;

  return (
    <Row style={{ margin: '5px' }}>
      <Col span={1} style={{ margin: 'auto', textAlign: 'center', verticalAlign: 'center' }}>
        <Checkbox defaultChecked={false} />
      </Col>
      <Col span={23}>
        <Title level={4}>{title}</Title>
        <Paragraph>{subtitle}</Paragraph>
      </Col>
    </Row>
  );
}
