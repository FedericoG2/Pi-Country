import style from "./Pagination.module.css";

const Pagination = ({ countriesPerPage, countries, paginado }) => {
  const pageNumbers = [];
  // for para saber la cantidad de botones que se van a renderizar
  for (let i = 0; i < Math.ceil(countries / countriesPerPage); i++) {
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

// Toco el boton 2 de mi array de numeros/botones se lleva a cabo la funcion paginado. Esta hace que la pagina actual se modifique lo que hace 
//que los indices se modifiquen lo que hace que el slice se modifique por lo tanto la constante que tiene a los paises actuales se modifica
//y despues mapeo ese nuevo slice y los renderizo en una card jeje!