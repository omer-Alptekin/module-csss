import CardStyle from "../scss/card.module.scss";
const Card = ({ data }) => {
  console.log(data);
  return (
    <div className={CardStyle.container}>
      {data.map((item) => {
        const { id, name, job, img, comment } = item;
        return (
          <div className={CardStyle.card}>
            <h1>{name}</h1>
            <h3>{job}</h3>
            <p>{comment}</p>
            <img src={img} alt="" />
            <div className={CardStyle.buttons}>
              <button className={CardStyle.small}>Small</button>
              <button className={CardStyle.large}>Large</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
