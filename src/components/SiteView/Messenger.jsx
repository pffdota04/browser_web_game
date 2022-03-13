import "./messenger.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setNowChat,
  setChatContent,
  setMessRedux,
  setMessRedux0,
  setMessRedux1,
  setMessRedux2,
  setMessRedux3,
  setMessRedux4,
} from "./../../store/actions/myAction";
import convertChat from "./../../chatList";
import ChatMove from "./../../chatMove";
import { useEffect, useState } from "react";
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
  const messMove = useSelector((state) => state.listTatCa.messMove);
  const messMove0 = useSelector((state) => state.listTatCa.messMove0);
  const messMove1 = useSelector((state) => state.listTatCa.messMove1);
  const messMove2 = useSelector((state) => state.listTatCa.messMove2);
  const messMove3 = useSelector((state) => state.listTatCa.messMove3);
  const messMove4 = useSelector((state) => state.listTatCa.messMove4);

  const [typing, setTyping] = useState(false);
  const [init, setInit] = useState(true);
  const [reason, setReason] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setInit(false);
    let a = document.querySelector(".chat-content-user");
    // a.scrollTo(0, a.scrollHeight);
    a.scrollTop = a.scrollHeight;
  }, []);

  useEffect(() => {
    let a = document.querySelector(".chat-content-user");
    a.scrollTop = a.scrollHeight;
    // console.log(".");
  });

  useEffect(() => {
    setTyping(false);
  }, [chats]);

  useEffect(() => {
    if (init === false) {
      setTimeout(() => {
        let moveRefulf = ChatMove(messMove0);
        if (moveRefulf[0].length !== 0) {
          let copychat = [...chats];
          moveRefulf[0].map((e) => {
            copychat[0].push({ from: -1, chat: e });
          });
          // -2 bị chặn, -3 gái chết, -4 bạn chết, -5 cảnh sát bắn, -9 win1, 176 true,
          let To = moveRefulf[1][0];
          if (To == -2) setReason("Cô ấy không cần bạn nữa, đồ tồi.");
          else if (To == 176) setReason("TRUE ENDING!!! Now, wake up");
          else if (To == -3) setReason("Cô ấy đã bị giết");
          else if (To == -5) setReason("Bạn đã chết vì bị cảnh sát bắn");
          else if (To == -4) setReason("Bạn đã chết");
          else if (To == -9) setReason("Bạn đã cứu được cô ấy, chúc mừng!");
          else if (To == -1) setReason("GAME IS OVER?");

          dispatch(setChatContent(copychat));
        }
      }, 2000);
    }
  }, [messMove0]);

  useEffect(() => {
    if (init === false) {
      setTimeout(() => {
        let moveRefulf = ChatMove(messMove1);
        if (moveRefulf[0].length !== 0) {
          let copychat = [...chats];
          moveRefulf[0].map((e) => copychat[1].push({ from: -1, chat: e }));
          dispatch(setChatContent(copychat));
        }
        setTyping(false);
      }, 1000);
    }
  }, [messMove1]);

  useEffect(() => {
    if (init === false) {
      setTimeout(() => {
        let moveRefulf = ChatMove(messMove4);
        if (moveRefulf[0].length !== 0) {
          let copychat = [...chats];

          moveRefulf[0].map((e) => copychat[4].push({ from: -1, chat: e }));
          dispatch(setChatContent(copychat));
        }
        setTyping(false);
        return;
      }, 2000);
    }
  }, [messMove4]);

  useEffect(() => {
    if (init === false) {
      setTimeout(() => {
        let moveRefulf = ChatMove(messMove3);
        if (moveRefulf[0].length !== 0) {
          let copychat = [...chats];
          moveRefulf[0].map((e) => copychat[3].push({ from: -1, chat: e }));
          dispatch(setChatContent(copychat));
        }
        setTyping(false);
      }, 2000);
    }
  }, [messMove3]);

  useEffect(() => {
    if (init === false) {
      setTimeout(() => {
        let moveRefulf = ChatMove(messMove2);
        if (moveRefulf[0].length !== 0) {
          let copychat = [...chats];
          moveRefulf[0].map((e) => copychat[2].push({ from: -1, chat: e }));
          dispatch(setChatContent(copychat));
        }
        setTyping(false);
      }, 500);
    }
  }, [messMove2]);

  const chooseMove = (To) => {
    document.querySelector(".end-chat").scrollIntoView();
    setTyping(true);
    switch (nowChat) {
      case 0: {
        dispatch(setMessRedux0(To));
        let copychat = [...chats];
        console.log(To);
        if (To == 39) {
          copychat[3].push({ from: -1, chat: 103 });
        }
        copychat[0].push({ from: 1, chat: To });
        return;
      }
      case 1: {
        dispatch(setMessRedux1(To));
        let copychat = [...chats];
        copychat[1].push({ from: 1, chat: To });
        return;
      }
      case 2: {
        dispatch(setMessRedux2(To));
        let copychat = [...chats];
        copychat[2].push({ from: 1, chat: To });
        return;
      }
      case 3: {
        dispatch(setMessRedux3(To));
        let copychat = [...chats];
        copychat[3].push({ from: 1, chat: To });
        return;
      }
      case 4: {
        dispatch(setMessRedux4(To));
        let copychat = [...chats];
        copychat[4].push({ from: 1, chat: To });
        return;
      }
      default:
        break;
    }
  };

  const selectMove = () => {
    // -2 bị chặn, -3 gái chết, -4 bạn chết, -5 cảnh sát bắn, -9 win1, 176 true,
    let cm = ChatMove(messMove0)[1][0];
    if (nowChat == 0) {
      if (cm == -3) {
        return (
          <div className="row text-center m-0 text-light">
            <div className="col-12 col-sm-6 p-1 text-dark mx-auto">
              Cô ấy đã bị giết
            </div>{" "}
          </div>
        );
      } else if (cm == -4) {
        return (
          <div className="row text-center m-0 text-light">
            <div className="col-12 col-sm-6 p-1 text-dark mx-auto">
              Bạn đã chết
            </div>{" "}
          </div>
        );
      } else if (cm == -5) {
        return (
          <div className="row text-center m-0 text-light">
            <div className="col-12 col-sm-6 p-1 text-dark mx-auto">
              Bạn đã chết vì bị cảnh sát bắn
            </div>{" "}
          </div>
        );
      } else if (cm == -9) {
        return (
          <div className="row text-center m-0 text-light">
            <div className="col-12 col-sm-6 p-1 text-dark mx-auto">
              Bạn đã cứu được cô ấy, chúc mừng!
            </div>{" "}
          </div>
        );
      } else if (cm == 176) {
        return (
          <div className="row text-center m-0 text-light">
            <div className="col-12 col-sm-6 p-1 text-dark mx-auto">
              TRUE ENDING!!! Now, wake up
            </div>{" "}
          </div>
        );
      }
    } else if (nowChat === 3) {
      return (
        <div className="row text-center m-0 text-light">
          <div className="col-12 col-sm-6 p-1 text-dark mx-auto">
            Bạn không thể gửi tin nhắn
          </div>{" "}
        </div>
      );
    }
    if (cm == -2 && nowChat == 0) {
      return (
        <div className="row text-center m-0 text-light">
          <div className="col-12 col-sm-6 p-1 text-dark mx-auto">
            Bạn đã bị chặn (YOU LOSE)
          </div>{" "}
        </div>
      );
    }
    return (
      <div className="row text-center m-0 text-light">
        <div className={"col-12 col-sm-6 p-1  mx-auto"}>
          <div
            className="m-0 w-100 bg-danger choose-item fw-bold hover-point"
            onClick={() => {
              switch (nowChat) {
                case 0:
                  chooseMove(ChatMove(messMove0)[1][0]);
                  break;
                case 1:
                  chooseMove(ChatMove(messMove1)[1][0]);
                  break;
                case 2:
                  chooseMove(ChatMove(messMove2)[1][0]);
                  break;
                case 3:
                  chooseMove(ChatMove(messMove3)[1][0]);
                  break;
                case 4:
                  chooseMove(ChatMove(messMove4)[1][0]);
                  break;
                default:
                  break;
              }
            }}
          >
            {/* {convertChat[ChatMove(messMove0)[1][0]]} */}
            {nowChat === 0
              ? convertChat[ChatMove(messMove0)[1][0]]
              : nowChat === 1
              ? convertChat[ChatMove(messMove1)[1][0]]
              : nowChat === 2
              ? convertChat[ChatMove(messMove2)[1][0]]
              : nowChat === 3
              ? convertChat[ChatMove(messMove3)[1][0]]
              : convertChat[ChatMove(messMove4)[1][0]]}

            {/* _{" "} */}
            {/* {ChatMove(messMove0)[1][0]} */}
          </div>
        </div>
        {((nowChat === 0 && ChatMove(messMove0)[1].length > 1) ||
          (nowChat === 1 && ChatMove(messMove1)[1].length > 1) ||
          (nowChat === 2 && ChatMove(messMove2)[1].length > 1) ||
          (nowChat === 3 && ChatMove(messMove3)[1].length > 1) ||
          (nowChat === 4 && ChatMove(messMove4)[1].length > 1)) && (
          <div className="col-12 col-sm-6 p-1">
            <div
              className="m-0 w-100 bg-danger choose-item  fw-bold hover-point"
              onClick={() => {
                // chooseMove(ChatMove(messMove0)[1][1]);
                switch (nowChat) {
                  case 0:
                    chooseMove(ChatMove(messMove0)[1][1]);
                    break;
                  case 1:
                    chooseMove(ChatMove(messMove1)[1][1]);
                    break;
                  case 2:
                    chooseMove(ChatMove(messMove2)[1][1]);
                    break;
                  case 3:
                    chooseMove(ChatMove(messMove3)[1][1]);
                    break;
                  case 4:
                    chooseMove(ChatMove(messMove4)[1][1]);
                    break;
                  default:
                    break;
                }
              }}
            >
              {/* {convertChat[ChatMove(messMove0)[1][1]]} */}
              {nowChat === 0
                ? convertChat[ChatMove(messMove0)[1][1]]
                : nowChat === 1
                ? convertChat[ChatMove(messMove1)[1][1]]
                : nowChat === 2
                ? convertChat[ChatMove(messMove2)[1][1]]
                : nowChat === 3
                ? convertChat[ChatMove(messMove3)[1][1]]
                : convertChat[ChatMove(messMove4)[1][1]]}
              {/* _{" "} */}
              {/* {ChatMove(messMove0)[1][1]} */}
            </div>
          </div>
        )}
      </div>
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
                    <li className="bg-secondary--fade d-inline-block p-2 ms-1  rounded-right text-dark">
                      {convertChat[e.chat] !== undefined &&
                      convertChat[e.chat].slice(0, 3) === "img" ? (
                        <img
                          className="w-100 send-img"
                          src={convertChat[e.chat].slice(
                            3,
                            convertChat[e.chat].length
                          )}
                          alt="img"
                        />
                      ) : (
                        convertChat[e.chat]
                      )}
                    </li>
                  ) : e.from === 1 ? (
                    <li className="bg-primary d-inline-block p-2  me-1 rounded-left text-light">
                      {/* {convertChat[e.chat]} */}
                      {convertChat[e.chat] !== undefined &&
                      convertChat[e.chat].slice(0, 3) === "img" ? (
                        <img
                          src={convertChat[e.chat].slice(
                            3,
                            convertChat[e.chat].length
                          )}
                          alt="img"
                          className="w-100  send-img"
                        />
                      ) : (
                        convertChat[e.chat]
                      )}
                    </li>
                  ) : (
                    e.from === 0 && e.chat
                  )}
                </div>
              ))}
              {/* {typing && "Đang nhập"} */}
              <div className=" end-chat"></div>
            </ul>
          </div>

          {!typing ? (
            <div className="your-choose border border-1 border-bottom-3">
              {/* <p className="text-center m-0">Gửi tin nhắn</p> */}
              {selectMove()}
            </div>
          ) : (
            <div className="text-center border border-1 border-bottom-3">
              Đang chờ phản hồi
            </div>
          )}
        </div>
      </div>

      {reason !== "" && (
        <div
          class="modal mess-show d-block "
          id="exampleModal"
          tabindex="1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Thông báo
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">{reason}</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  // data-bs-dismiss="modal"
                  onClick={() => setReason("")}
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Chơi lại
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messenger;
