import styled from "styled-components";
import { colors, gradient } from "../../styles/theme";

const Container = styled.div`
  display: flex;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  @media (max-width: 375px) {
    display: none;
  }

  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 84px;
  height: 95vh;
  border-right: 1px solid ${colors.sideBarGrey};
  padding: 1.75rem 0;
  background: ${colors.white};

  .iconWrapper {
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 4px;
    transition: background 400ms ease-in-out;

    &:nth-child(2) {
      background: ${gradient.bgGradient};
    }

    &:hover {
      background: ${gradient.bgGradient};
    }
  }
`;

const MenuOverView = styled.div`
  @media (max-width: 375px) {
    display: none;
  }

  background: ${colors.white};
  padding-top: 5.25rem;
  padding-left: 1.75rem;
  margin-left: 84px;
`;

const Updates = styled.div`
  width: 390px;
  margin-bottom: 33px;

  .titleWrapper {
    .logo {
      width: 100px;
      height: 100px;
      margin-bottom: 0.75rem;
    }

    .welcomeText {
      font-size: 22px;
      font-weight: 300;
      margin: 0;
    }

    .brandName {
      margin: 0;
      font-weight: 700;
      font-size: 26px;
    }
  }

  .latestUpdates {
    margin-top: 33px;

    .updateText {
      font-size: 16px;
      font-weight: 700;
      color: ${colors.dark};
    }

    .itemsWrapper {
      margin-top: 18px;

      .item {
        width: 328px;
        height: 72px;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        align-items: center;
        background: rgba(245, 245, 250, 0.5);
        border-radius: 10px;
        padding: 0 17px;
        margin-bottom: 9px;

        .icon {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          background: ${gradient.bgGradient};
          border-radius: 8px;
        }

        .name {
          font-size: 14px;
          font-weight: 700;
          color: ${colors.dark};
          justify-self: start;
        }

        .priceOrTime {
          color: ${colors.primaryLight};
          font-weight: 700;
          justify-self: end;
        }
      }
    }
  }
`;

const UpcomingEvents = styled.div`
  margin-top: 2rem;
  margin-bottom: 27px;

  .title {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.dark};
  }
`;

const EventCard = styled.div`
  width: 330px;
  padding: 0.9rem 1rem;
  background: rgba(245, 245, 250, 0.4);
  border-radius: 12px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  .timeWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;

      .time {
        margin: 0;
        margin-left: 10px;
        color: ${colors.primary};
        font-size: 0.75rem;
        font-weight: 700;
      }
    }
  }

  .name {
    & > * {
      font-size: 0.87rem;
      font-weight: 700;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-top: 10px;
    }
  }

  .desc {
    & > * {
      color: ${colors.primaryLight};
      margin-block-start: 0;
      margin-block-end: 0;
      margin-top: 4px;
      font-weight: 400;
      font-size: 0.75rem;
    }
  }
`;

const MainView = styled.main`
  @media (max-width: 375px) {
    padding: 0 14px;
  }

  background: ${gradient.bgGradient};
  width: 1200px;
  padding: 0 27px;
`;

const Navigation = styled.nav`
  position: relative;

  @media (max-width: 375px) {
    display: grid;

    .hide-on-mobile {
      display: none;
    }
  }

  padding: 1.5rem 0 1.5rem 0;
  display: flex;
  align-items: space-between;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${colors.dark};
    margin-left: 20px;

    @media (max-width: 375px) {
      margin: 0;
      position: absolute;
      top: 30px;
    }
  }

  .right-section {
    & :not(:last-child) {
      margin-right: 10px;
    }

    @media (max-width: 375px) {
      width: 350px;
      display: flex;
      justify-content: space-between;
    }
  }
`;

const IconWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  background: ${colors.faintGrey};
  border-radius: 6px;
`;

const Counters = styled.div`
  @media (max-width: 375px) {
    .hide-on-mobile {
      display: none;
    }
  }

  display: flex;
  justify-content: space-between;
`;

const CounterGraph = styled.div`
  @media (max-width: 375px) {
    width: 348px;
  }

  width: 355px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${colors.white};
  padding-top: 10px;
  padding-bottom: 15px;
  border-radius: 15px;

  p {
    margin-block-start: 0.5rem;
    margin-block-end: 0.5rem;
  }

  .numbers {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${colors.dark};
  }

  .title {
    font-size: 0.87rem;
    color: ${colors.primaryLight};
  }
`;

const OrdersAndIncome = styled.div`
  @media (max-width: 375px) {
    position: relative;
    margin-top: 60px;
    grid-template-columns: 1fr;
  }

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;
  margin-top: 28px;
`;

const GraphOrders = styled.div`
  @media (max-width: 375px) {
    /* grid-template-columns: 1fr; */
    max-width: 350px;
  }

  position: relative;
  background: ${colors.white};
  border-radius: 10px;
  padding-top: 5px;
`;

const Title = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .name {
    font-size: 18px;
    font-weight: 700;
    color: ${colors.dark};

    @media (max-width: 375px) {
      position: absolute;
      top: -40px;
      left: 0;
      margin: 0;
    }
  }

  .tabs {
    @media (max-width: 375px) {
      width: 300px;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.primaryLight};
    font-weight: bold;
    font-size: 14px;

    .day {
      padding: 11px;
      color: ${colors.dark};
      font-weight: 700;
      border: 1px solid ${colors.iconBorderColor};
      border-radius: 8px;
      margin-right: 10px;
    }

    .week {
      padding: 11px;
      margin-right: 10px;
    }
    .month {
      padding: 11px;
    }
  }
`;

const OrderGraph = styled.div`
  /* display: grid; */
`;

const GraphWrapper = styled.div`
  @media (max-width: 375px) {
    width: 350px;

    .hide-on-mobile {
      display: none;
    }
  }

  .graphWrapper {
    height: 240px;

    img {
      max-width: 100%;
      height: 240px;
    }
  }

  .mobile-graphWrapper {
    @media (max-width: 375px) {
      display: block;
    }

    display: none;
    height: 240px;

    img {
      max-width: 100%;
      height: 240px;
    }
  }

  .months {
    margin: 10px 24px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 375px) {
      display: none;
    }
  }

  .mobile-months {
    @media (max-width: 375px) {
      display: flex;
    }

    display: none;
    margin: 10px 24px;
    justify-content: space-between;
  }
`;

const Income = styled.div`
  background: ${colors.white};
  border-radius: 10px;
  padding-top: 12px;

  @media (max-width: 375px) {
    max-width: 350px;
    margin-top: 30px;
  }

  .name {
    top: 400px;
  }
`;

const LatestSales = styled.div`
  @media (max-width: 375px) {
    margin-top: 60px;
    display: none;
  }

  position: relative;
  margin: 28px 0;
  border-radius: 10px;
  background: ${colors.white};
  border: 1px solid ${colors.lineColor};
`;

const TableTitle = styled.div`
  background: rgba(245, 245, 250, 0.4);
  font-size: 12px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  color: ${colors.primaryLight};
  padding: 0.4rem 26px;

  .name {
    flex-basis: 6rem;
  }

  .customer {
    flex-basis: 6rem;
  }

  .delivery {
    flex-basis: 10rem;
  }

  .total {
    flex-basis: auto;
  }
`;

const SalesItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 18px 0 23px 0;
  padding: 0 25px;
  color: ${colors.dark};

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .product {
    display: flex;
    align-items: center;

    .productImage {
      width: 52px;
      height: 52px;
      border-radius: 8px;

      img {
        max-width: 100%;
      }
    }

    .productName {
      display: grid;
      margin-left: 10px;

      .name {
        font-weight: 700;
      }

      .id {
        font-size: 14px;
      }
    }
  }

  .delivery {
    flex-basis: 14rem;
    justify-self: flex-start;

    .country {
      font-weight: 700;
    }
    .address {
    }
  }

  .customer {
    flex-basis: 10rem;

    .name {
      font-weight: 700;
    }
    .email {
    }
  }

  .shippingPrice {
    font-weight: 700;
  }
  .total {
    font-weight: 700;
  }
`;

const Status = styled.div`
  width: 100px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  /* padding: 5px  24px; */
  background: ${({ type }) =>
    type === "shipped"
      ? gradient.shippedGradient
      : gradient.processingGradient};

  p {
    color: ${({ type }) => (type === "shipped" ? "#8AF1B9" : "#F4BE5E")};
    font-weight: 700;
  }
`;

export {
  Container,
  Sidebar,
  Updates,
  MenuOverView,
  UpcomingEvents,
  EventCard,
  MainView,
  Navigation,
  IconWrapper,
  Counters,
  CounterGraph,
  OrdersAndIncome,
  GraphOrders,
  Title,
  Income,
  OrderGraph,
  GraphWrapper,
  LatestSales,
  TableTitle,
  SalesItem,
  Status,
};
