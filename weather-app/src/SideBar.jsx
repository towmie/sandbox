import styled from "styled-components";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import TodaysSummary from "./TodaysSummary";
import Spinner from "./Spinner";
import { useWeather } from "./context/watherContext";

const StyledSudebar = styled.aside`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

function SideBar() {
  const { getSearchData, city, setCityName, isLoading } = useWeather();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    getSearchData();
  }, [city, getSearchData]);

  function onHandleSubmit({ city }) {
    setCityName(city);
    reset();
  }

  return (
    <StyledSudebar>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <input {...register("city")} type="text" placeholder="search" />
      </form>

      {isLoading && <Spinner />}

      {Object.keys(city).length !== 0 && <TodaysSummary city={city} />}
    </StyledSudebar>
  );
}

export default SideBar;
