import "./listcard.scss";
import { BiChevronLeft, BiChevronRight, BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { arrowClick, deleteItem } from "../../redux/taskSlice";

const ListCard = (items) => {
  const { item } = items;

  const dispatch = useDispatch();

  const arrrowClick = (string) => {
    dispatch(arrowClick(item, string));
  };
  const handleDelete = () => {
    dispatch(deleteItem(item._id));
  };
  return (
    <div>
      <ul className={` ${item.status === "done" ? "completed menu" : "menu"}`}>
        <li>
          <p>{item._id}</p>
        </li>
        <li>
          <p>{item.task}</p>
        </li>
        <li>
          <p>{item.status}</p>
        </li>
        <li>
          <button
            disabled={item.status === "backlog"}
            onClick={() => arrrowClick("left")}
          >
            <BiChevronLeft />
          </button>

          <button
            disabled={item.status === "done"}
            onClick={() => arrrowClick("right")}
          >
            <BiChevronRight />
          </button>
          <button onClick={handleDelete}>
            <BiTrash />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ListCard;
