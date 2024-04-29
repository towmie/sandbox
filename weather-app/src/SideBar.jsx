import styled from "styled-components";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import TodaysSummary from "./TodaysSummary";
import Spinner from "./ui/Spinner";
import { useWeather } from "./context/watherContext";
import Input from "./ui/Input";
import Form from "./ui/Form";

const StyledSidebar = styled.aside`
  border-top-left-radius: calc(var(--border-radius-lg) * 2);
  border-bottom-left-radius: calc(var(--border-radius-lg) * 2);
  background-color: var(--color-grey-50);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
    <StyledSidebar>
      <Form onSubmit={handleSubmit(onHandleSubmit)}>
        <Input
          {...register("city")}
          type="text"
          placeholder="Search for places ..."
        />
      </Form>

      {isLoading && <Spinner />}

      {Object.keys(city).length !== 0 && <TodaysSummary city={city} />}
    </StyledSidebar>
  );
}

export default SideBar;
