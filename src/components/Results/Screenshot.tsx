
import styled from 'styled-components';
import colors from 'styles/colors';
import Card from 'components/Form/Card';
import Heading from 'components/Form/Heading';

const Outer = styled(Card)`
overflow: auto;
max-height: 20rem;
`;

const ScreenshotCard = (props: { screenshot: string }): JSX.Element => {
  console.log('Props:', props.screenshot);
  return (
    <Outer>
      <Heading as="h3" size="small" align="left" color={colors.primary}>Screenshot</Heading>
      <img src={props.screenshot} alt="Full page screenshot" />
    </Outer>
  );
}

export default ScreenshotCard;
