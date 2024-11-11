import "./listcard.scss";
import { BiChevronLeft, BiChevronRight, BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { arrowClick } from "../../redux/taskSlice";

const ListCard = ({ item }) => {
  const dispatch = useDispatch();

  const ArrowClick = (item) => {
    dispatch(arrowClick(item));
  };

  return (
    <div>
      <ul className="menu">
        <li>{item._id}</li>
        <li>{item.task}</li>
        <li>{item.status}</li>
        <li>
          <button disabled={item.status === "backlog"} onClick={ArrowClick}>
            <BiChevronLeft />
          </button>
          <button disabled={item.status === "done"} onClick={ArrowClick}>
            <BiChevronRight />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ListCard;
