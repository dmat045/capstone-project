import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import Link from 'next/link';

// Functional component that represents a category section
function Category() {
  return (
    <List>
      {/* Link to the Italian cuisine page */}
      <Slink href="/cuisine/Italian">
        <FaPizzaSlice size={30} /> {/* Italian cuisine icon */}
        <h4>Italian</h4> {/* Category name */}
      </Slink>
      {/* Link to the American cuisine page */}
      <Slink href="/cuisine/American">
        <FaHamburger size={30} /> {/* American cuisine icon */}
        <h4>American</h4> {/* Category name */}
      </Slink>
      {/* Link to the Thai cuisine page */}
      <Slink href="/cuisine/Thai">
        <GiNoodles size={30} /> {/* Thai cuisine icon */}
        <h4>Thai</h4> {/* Category name */}
      </Slink>
      {/* Link to the Japanese cuisine page */}
      <Slink href="/cuisine/Japanese">
        <GiChopsticks size={30} /> {/* Japanese cuisine icon */}
        <h4>Japanese</h4> {/* Category name */}
      </Slink>
    </List>
  );
}

const List = styled.ul`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  list-style: none;
`;

// Styled component for the category links
const Slink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #353535);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: black;
    font-size: 0.8rem;
    margin: 0.5rem 0;
  }

  svg {
    color: black;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: black;
    }

    h4 {
      color: black;
    }
  }
`;

export default Category;
