import { format } from "date-fns";
import Heading from "./ui/Heading";
import Img from "./ui/Img";
import styled from "styled-components";
import CityName from "./ui/CityName";

const Container = styled.div`
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid var(--color-grey-200);
`;

function TodaysSummary({ city }) {
  const {
    location: { name },
    current: { temp_c, condition, feelslike_c, last_updated },
  } = city;

  return (
    <div>
      <Img src={condition.icon} alt="" />
      <Heading as="h1" type="primary">
        {temp_c}°
      </Heading>
      <p>{format(new Date(last_updated), "EEEE do")}</p>
      <Container>
        <span>
          Feels like: <b>{feelslike_c}°</b>
        </span>
        <p>
          <b>{condition.text}</b>
        </p>
      </Container>
      <Container>{name && <CityName name={name} />}</Container>
    </div>
  );
}

export default TodaysSummary;
