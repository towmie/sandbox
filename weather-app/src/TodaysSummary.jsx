function TodaysSummary({ city }) {
  const { location, current } = city;
  return (
    <div>
      <h4>{current.temp_c}</h4>
      <span>Feels like: {current.feelslike_c}</span>
      <p>{current.last_updated}</p>
      <p>{current.condition.text}</p>
      <h2>{location.name}</h2>
    </div>
  );
}

export default TodaysSummary;
