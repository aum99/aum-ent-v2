import { useSearchParams } from "react-router-dom";

import {
  SuccessContainer,
  Card,
  Header,
  Img,
  Svg,
  Content,
  Title,
  Message,
  Actions,
  ExploreMore,
  Cancel,
} from "./payment-success.styles";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");
  return (
    <SuccessContainer>
      <Card>
        <Header>
          <Img>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="1.5"
                  stroke="#000000"
                  d="M20 7L9.00004 18L3.99994 13"
                ></path>{" "}
              </g>
            </Svg>
          </Img>
          <Content>
            <Title>Order validated for reference: {referenceNum}</Title>
            <Message>
              Thank you for your purchase. you package will be delivered within
              2 days of your purchase
            </Message>
          </Content>
          <Actions>
            <ExploreMore type="button" class="history">
              History
            </ExploreMore>
            <Cancel type="button" class="track">
              Track my package
            </Cancel>
          </Actions>
        </Header>
      </Card>
    </SuccessContainer>
  );
};

export default PaymentSuccess;
