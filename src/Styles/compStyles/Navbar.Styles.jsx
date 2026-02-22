import styled from "styled-components";

export const Container = styled.nav`
  padding: 1.2% 4.2%;
  border-bottom: 1px solid #ffffff26;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1700px) {
    padding: 0.6% 3%;
  }
  @media screen and (max-width: 1280px) {
    padding: 2% 2.2%;
  }
`;

export const Logo = styled.img`
  max-width: 12%;
  cursor: pointer;

  @media screen and (min-width: 1700px) {
    max-width: 6%;
  }
  @media screen and (max-width: 990px) {
    max-width: 20%;
  }
  @media screen and (max-width: 730px) {
    max-width: 24%;
  }
  @media screen and (max-width: 560px) {
    max-width: 32%;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  gap: 2.1rem;

  @media screen and (max-width: 1280px) {
    gap: 1.2rem;
  }
  @media screen and (max-width: 990px) {
    display: none;
  }

  li {
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: brand, sans-serif;
    color: var(--paraColor);
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.4px;
    cursor: pointer;
    transition: all 0.2s ease-out;

    i {
      font-size: 14px;
      font-weight: 800;
      transition: transform 0.3s ease-out;
    }

    &:hover {
      color: var(--accentColor);

      i {
        transform: rotate(180deg);
      }
    }
  }
`;

export const SearchButton = styled.button`
  font-size: 0.9rem;
  color: var(--textColor);
  background: transparent;
  border: none;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: brand, sans-serif;
  font-weight: 600;
  letter-spacing: 0.6px;
  margin-right: 10px;
  cursor: pointer;
  transition: color 0.2s ease-out;

  i {
    font-size: 1.2rem;
  }

  &:hover {
    color: var(--accentColor);
  }
`;

export const Humberger = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 20px;
  cursor: pointer;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    font-family: brand, sans-serif;
    color: var(--textColor);
  }

  i {
    color: var(--textColor);
    font-size: 1.4rem;
  }
`;
