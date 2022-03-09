import "./messenger.css";
import { useDispatch, useSelector } from "react-redux";
import { setNowChat } from "./../../store/actions/myAction";
import convertChat from "./../../chatList";
const chatName = [
  "❤️❤️ Crush ❤️❤️",
  "Long Homie 🌿",
  "Jenny",
  "d2VhcG9uIHNob3A=",
  "James Trái Phiếu",
];
const chatAvatar = [
  "https://kenh14cdn.com/203336854389633024/2021/4/18/photo-1-1618719576753217143827.jpg",
  "https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.15752-9/272727806_635864497487032_161100601795207078_n.jpg?stp=dst-jpg_p100x100&_nc_cat=108&ccb=1-5&_nc_sid=4de414&_nc_ohc=ZwcbC0V2aioAX_rybgI&_nc_ht=scontent.fsgn5-6.fna&oh=03_AVKNLk7RhQEsG5tYGVzmJiWXHLg5CwWZmYOQPkYsrAknrw&oe=624DFE95",
  "https://genk.mediacdn.vn/139269124445442048/2021/7/25/photo-1-1627191657254792065360.jpg",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEUAAAABAQF9fX2ZmZmsrKyLi4u2trYHBwd5eXm0tLSdnZ2Dg4OJiYmoqKiRkZGNjY36+vr09PTk5OTW1tbMzMzExMS9vb1qampjY2NpaWk2P5IbAAACsklEQVR4nO3djXKaQBSG4bMYWFTU1sakvf8b7fIjYjqthOqY7+z7jjNBg2EfEIwjMfbt+/HH6+upqtbrl91uM7TaH8oyXboOZbMtirpY1LYp/1W7mP1qs7rZ5mVO62rS27o67Y62Md+9W2UxWrAwKd0+TpwLi7q5/PN8w5zXX66ufmKhw9fYXqyxXRLGePmmTeaZDGPJ6ptzv2VrbrYwWp2EwUbhZCYL/z+K/r63jDZr9c1b3tW12N5S2Kr12QfifR6lZ8Htcd+J+GG22N5QpCNNq41/LvRTI/3bmGaMbM52nr28MPlhvatO23DJ4CUK50fp3dbhVwuhfgj1y0bYPR/6fL4YtyFC2QbhPguh00PNICzdCxv3wnLxS/gvH0L9EOqHUD+E+iHUD6F+CPVDqB9C/RDqh1A/hPoh1C8bYdNNPnswD2kQbs27sDhP+usi9LojDsLa/TukdX/a87NH84guQvN9Lob//bBweyhF6CCE+iHUD6F+CPVDqB9C/RDqh1A/hPoh1A+hfgj1m75D6v2dGYSqIdQPoX7jOVFe3+TO57w2hMIh1A+hfgj1Q6gfQv0Q6odQP4T6IdQPoX4I9UOoH0L9EOqHUL9shIcshL7/Hr80p1tw+vk0XonjNvR+9uXe3G7EQdj9Z7kMhC6JF6FTIEIHIdQPoX4I9UOoH0L9EOqHUD+E+iHUD6F+CPVDqB9C/RDqh1C/bIQb98IXt0CEDkKoH0L9EOqHUD+E+iHUD6F+CPVDqB9C/RDqh1A/hPoh1A+hfpkJXRonQt+f/OFfuDavu2E+wioLoVPjldAlcSp0fSxFKBxC/RDqN/7WFmOw+OzRPKB+w9VpG/bT7rLYqjph8CkM0UJC9q8tfD5KbRCeLO2ISfjsNf6AYnuk2abX+L57t+PPpq63hcM61a+339l2GAd91T5eAAAAAElFTkSuQmCC",
  "https://i.mmo.cm/is/image/mmoimg/mw-product-max/police-officer-accessory-set--mw-135348-1.jpg",
];

const chatOnline = ["true", "3h ago", "8h ago", "4d ago", "1d ago"];

const Messenger = () => {
  const nowChat = useSelector((state) => state.listTatCa.nowChat);
  const chats = useSelector((state) => state.listTatCa.chats);
  const dispatch = useDispatch();

  const renderChat = (e, i) => {
    return e.from === 0 ? (
      <li className="text-start bg-secondary--fade d-inline-block p-1 rounded rounded-3">
        {convertChat[e.chat]}
      </li>
    ) : (
      <li className=" text-end bg-primary d-inline-block p-1 rounded rounded-3">
        {convertChat[e.chat]}
      </li>
    );
  };

  return (
    <div className="messenger row text-start h-100 m-0">
      <div className="messenger-left col-sm-4 col-3 h-100 p-sm-3 p-0 pe-sm-0  ">
        <div className="w-100 text-sm-start text-center border border-1 border-start-0  ">
          <img
            src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png"
            alt="something"
            className="d-none d-sm-inline-block"
          />{" "}
          <strong>CHATS</strong>
        </div>
        <hr />
        {chatName.map((e, i) => (
          <div
            className="w-100 mb-3 messenger-user text-sm-start text-center hover-point bg-light"
            onClick={() => {
              dispatch(setNowChat(i));
            }}
          >
            <img
              src={chatAvatar[i]}
              className="rounded-circle"
              alt="something"
              height={55}
              width={55}
            />
            <div className="d-sm-inline-block ps-3 align-middle d-none">
              <div className="w-100 fs-5 fw-bolder">{e}</div>
              <div className="w-100">
                {i === 0 ? (
                  <>
                    <img
                      src="https://img.icons8.com/doodle/15/000000/online--v1.png"
                      alt="something"
                    />{" "}
                    online
                  </>
                ) : (
                  chatOnline[i]
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="messenger-right col-sm-8 col-9 p-sm-3 p-0">
        <div className=" border border-1 border-end-0">
          <div className="w-100 border border-1 border-bottom-3">
            <div className="text-start p-sm-3 p-1">
              <img
                src={chatAvatar[nowChat]}
                alt="something"
                className=" d-inline-block align-middle rounded-circle"
                height={55}
                width={55}
              />{" "}
              <div className="d-inline-block align-middle">
                <strong className="messChatName">{chatName[nowChat]}</strong>
                <span>
                  {chatOnline[nowChat] == "true" ? (
                    <>
                      <img
                        src="https://img.icons8.com/doodle/15/000000/online--v1.png"
                        alt="something"
                      />{" "}
                      online
                    </>
                  ) : (
                    chatOnline[nowChat]
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="w-100 chat-content-user ">
            <ul className="p-1">
              {chats[nowChat].map((e, i) => (
                <div
                  className={
                    "mt-1 " +
                    (e.from < 0
                      ? "text-start"
                      : e.from > 0
                      ? "text-end"
                      : "text-center")
                  }
                >
                  {e.from === -1 ? (
                    <li className="bg-secondary--fade d-inline-block p-2 rounded rounded-3 text-dark">
                      {convertChat[e.chat]}
                    </li>
                  ) : e.from === 1 ? (
                    <li className="bg-primary d-inline-block p-2 rounded rounded-3 text-light">
                      {convertChat[e.chat]}
                    </li>
                  ) : (
                    e.from === 0 && e.chat
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div className="your-choose border border-1 border-bottom-3">
            <p className="text-center m-0">Trả lời</p>
            <div className="row text-center m-0 text-light">
              <div className="col-12 col-sm-6 p-1">
                <div className="m-0 w-100 bg-danger choose-item fw-bold hover-point">
                  Ai biểu ngu
                </div>
              </div>
              <div className="col-12 col-sm-6 p-1">
                <div className="m-0 w-100 bg-danger choose-item  fw-bold hover-point">
                  Cậu không sao chứ?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
