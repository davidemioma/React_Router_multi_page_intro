import { Link } from "react-router-dom";

function Products() {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Abby's Booty</Link>
        </li>
        <li>
          <Link to="/products/p2">Jilssa's Booty</Link>
        </li>
        <li>
          <Link to="/products/p3">Daisy's Booty</Link>
        </li>
      </ul>
    </section>
  );
}

export default Products;
