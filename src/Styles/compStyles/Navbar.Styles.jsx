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
`;

export const Logo = styled.img`
  max-width: 12%;
  cursor: pointer;

  @media screen and (min-width: 1700px) {
    max-width: 6%;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  gap: 2.1rem;

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
