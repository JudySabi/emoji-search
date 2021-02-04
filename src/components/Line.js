const Line = ({ elem }) => {
  //   console.log(elem.keywords);
  return (
    <div className="line">
      {elem.symbol} {elem.title}
    </div>
  );
};

export default Line;
