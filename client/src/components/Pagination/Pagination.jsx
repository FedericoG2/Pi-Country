import style from "./Pagination.module.css";

const Pagination = ({ countriesPerPage, countries, paginado }) => {
  const pageNumbers = [];
  // for para saber la cantidad de botones que se van a renderizar
  for (let i = 0; i <= Math.ceil(countries / countriesPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav className={style.container}>
      <ul className={style.containerButtons}>
        {pageNumbers &&
          pageNumbers.map((number, i) => (
            <button
              key={i}
              className={style.buttons}
              onClick={() => paginado(number)}
            >
              {number}
            </button>
          ))}
      </ul>
    </nav>
  );
};

export default Pagination;
