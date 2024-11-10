import "./listcard.scss";

const ListCard = ({ item }) => {
  return (
    <div>
      <ul className="menu">
        <li>{item._id}</li>
        <li>{item.task}</li>
        <li>{item.status}</li>
        <li>{item.action}</li>
      </ul>
    </div>
  );
};

export default ListCard;
