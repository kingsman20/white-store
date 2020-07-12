import styled from "styled-components";
import { colors, gradient } from "../../styles/theme";

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

const Sidebar = styled.div`
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
    transition: background 300ms ease-in-out;

    &:nth-child(2) {
      background: ${gradient.bgGradient};
    }

    &:hover {
      background: ${gradient.bgGradient};
    }
  }
`;

const MenuOverView = styled.div`
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
  background: ${gradient.bgGradient};
  /* height: 100 */
`;
export { Container, Sidebar, Updates, MenuOverView, UpcomingEvents, EventCard, MainView };
