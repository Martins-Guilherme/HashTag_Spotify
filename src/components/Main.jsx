import ItemList from "./ItemList.jsx";

const Main = () => {
  return (
    <div className="main">
      {/* Item Lista de Artistas */}
      <ItemList title="Artistas" items={5}/>

      {/* Item Lista de Músicas */}
      <ItemList title="Músicas" items={10}/>
    </div>
  );
};

export default Main;
