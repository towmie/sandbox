import styled from "styled-components";
import { useWeather } from "./context/watherContext";
import StyledCardItem from "./ui/CardItem";
import Heading from "./ui/Heading";
import Spinner from "./ui/Spinner";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { FiSunrise, FiSunset } from "react-icons/fi";

const StyledHighlights = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const StyledHighlightsItem = styled.div`
  width: 33%;
  padding: 8px;

  @media (max-width: 991px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledSunRiseSet = styled.p`
  font-size: var(--text-2xl);
  display: flex;
  gap: 16px;
  margin-bottom: 24px;

  & svg {
    width: 32px;
    height: 32px;
  }
`;

function Highlights() {
  const {
    isLoading,
    forecast: { uv, visibility, humidity, windSpeed, weekForecast, pressure },
  } = useWeather();

  console.log(weekForecast);

  const { sunrise, sunset } = weekForecast[0].astro;

  function prepareArray(name, value) {
    if (name === "uv")
      return [
        {
          value: (value * 100) / 12,
          name: "Current UV",
          color: "#000",
        },
        {
          value: 100 - (value * 100) / 12,
          name: "Max UV",
          color: "#ccc",
        },
      ];
    if (name === "humidity")
      return [
        {
          value: value,
          name: "Current Humidity",
          color: "#000",
        },
        {
          value: 100 - value,
          name: "Max Humidity",
          color: "#ccc",
        },
      ];
  }

  if (isLoading) return <Spinner />;

  return (
    <StyledHighlights>
      <StyledHighlightsItem>
        <StyledCardItem>
          <Heading as="h4">UV index</Heading>
          <PieChart width={250} height={130}>
            <Pie
              data={prepareArray("uv", uv)}
              nameKey="uv"
              dataKey="value"
              innerRadius={85}
              outerRadius={110}
              startAngle={180}
              endAngle={0}
              cx="50%"
              cy="100%"
            >
              {prepareArray("uv", uv)?.map((el) => (
                <Cell key={el.name} stroke={el.color} fill={el.color} />
              ))}
              <Cell />
            </Pie>
          </PieChart>
          <Heading as="h4">{uv}</Heading>
        </StyledCardItem>
      </StyledHighlightsItem>
      <StyledHighlightsItem>
        <StyledCardItem>
          <Heading as="h4">Wind Status</Heading>
          <Heading as="h2" type="primary">
            {windSpeed}
          </Heading>
          <span>km/h</span>
        </StyledCardItem>
      </StyledHighlightsItem>

      <StyledHighlightsItem>
        <StyledCardItem>
          <Heading as="h4">Visibility</Heading>
          <Heading as="h2" type="primary">
            {visibility}
          </Heading>
          <span>km</span>
        </StyledCardItem>
      </StyledHighlightsItem>

      <StyledHighlightsItem>
        <StyledCardItem>
          <Heading as="h4">Sunrise & Sunset</Heading>
          <div>
            <StyledSunRiseSet>
              <FiSunrise />
              <b>{sunrise}</b>
            </StyledSunRiseSet>
            <StyledSunRiseSet>
              <FiSunset />
              <b>{sunset}</b>
            </StyledSunRiseSet>
          </div>
        </StyledCardItem>
      </StyledHighlightsItem>

      <StyledHighlightsItem>
        <StyledCardItem>
          <Heading as="h4">Humidity</Heading>
          <PieChart width={250} height={130}>
            <Pie
              data={prepareArray("humidity", humidity)}
              nameKey="humidity"
              dataKey="value"
              innerRadius={85}
              outerRadius={110}
              startAngle={180}
              endAngle={0}
              cx="50%"
              cy="100%"
            >
              {prepareArray("humidity", humidity)?.map((el) => (
                <Cell key={el.name} stroke={el.color} fill={el.color} />
              ))}
              <Cell />
            </Pie>
          </PieChart>
          <Heading as="h4">
            {humidity > 70 ? `Bad (${humidity}%)` : `Normal (${humidity}%)`}
          </Heading>
        </StyledCardItem>
      </StyledHighlightsItem>

      <StyledHighlightsItem>
        <StyledCardItem>
          <Heading as="h4">Pressure</Heading>
          <Heading as="h2" type="primary">
            {pressure}
          </Heading>
          <span>in</span>
        </StyledCardItem>
      </StyledHighlightsItem>
    </StyledHighlights>
  );
}

export default Highlights;
