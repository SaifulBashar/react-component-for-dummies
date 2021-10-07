import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  background: white;
`;

const Title = styled.h3`
  font-weight: 600;
`;
const Subtitle = styled.p`
  color: #4b5563;
`;

export default function EmptyView({
  message,
}: {
  message?: string;
}): JSX.Element {
  return (
    <Container>
      <svg
        width="97"
        height="97"
        viewBox="0 0 97 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="48.1406" cy="48.6855" r="48" fill="#F0F2F5" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53.2602 28.1479L62.8397 38.4442H55.0881C54.0794 38.4442 53.2602 37.4688 53.2602 36.2682V28.1479ZM67.9571 36.7251L56.5779 23.9251C56.0941 23.3901 55.4054 23.0854 54.6835 23.0854H34.2035C30.5939 23.0854 27.6602 25.9578 27.6602 29.4854V67.8855C27.6602 71.4131 30.5939 74.2855 34.2035 74.2855H62.0768C65.6864 74.2855 68.6202 71.4131 68.6202 67.8855V38.4454C68.6202 37.808 68.3846 37.1962 67.9571 36.7251Z"
          fill="#C8D0DD"
        />
        <path
          d="M42.516 62.8181L42.516 62.8181C42.0407 63.6114 41.0123 63.8697 40.2186 63.394L42.516 62.8181ZM42.516 62.8181C43.6919 60.8555 45.8461 59.6349 48.134 59.6349C50.4285 59.6349 52.5857 60.8606 53.7601 62.8318L53.7602 62.8318M42.516 62.8181L53.7602 62.8318M53.7602 62.8318C54.0738 63.3581 54.6307 63.6496 55.2 63.6496C55.4922 63.6496 55.7882 63.573 56.0561 63.4134L56.0562 63.4134M53.7602 62.8318L56.0562 63.4134M56.0562 63.4134C56.8508 62.9398 57.1111 61.9119 56.6377 61.1173C54.8614 58.1358 51.6044 56.2852 48.134 56.2852C44.6734 56.2852 41.4211 58.1279 39.6426 61.0965L56.0562 63.4134ZM39.6426 61.0966C39.1672 61.89 39.4251 62.9186 40.2185 63.394L39.6426 61.0966Z"
          fill="white"
          stroke="white"
        />
      </svg>
      <br />
      <Title>Sorry! No Data Found.</Title>
      <Subtitle>
        {message ? message : "May be go to back or try something else."}
      </Subtitle>
    </Container>
  );
}
