import "./messenger.css";
const Messenger = () => {
  return (
    <div className="messenger row text-start h-100">
      <div className="messenger-left col-4 h-100 p-3">
        <div className="w-100 text-sm-start text-center border border-1 border-start-0  ">
          <img
            src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png"
            className="d-none d-sm-inline-block"
          />{" "}
          <strong>CHATS</strong>
        </div>
        <hr />

        <div className="w-100 mb-3 messenger-user text-sm-start text-center">
          <img
            src="https://kenh14cdn.com/203336854389633024/2021/4/18/photo-1-1618719576753217143827.jpg"
            className="rounded-circle"
            height={75}
            width={75}
          />
          <div className="d-sm-inline-block ps-3 align-middle d-none">
            <div className="w-100 fs-5 fw-bolder">❤️❤️ Crush ❤️❤️</div>
            <div className="w-100">
              <img src="https://img.icons8.com/doodle/15/000000/online--v1.png" />{" "}
              online
            </div>
          </div>
        </div>
        <div className="w-100 mb-3 messenger-user text-sm-start text-center">
          <img
            src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.15752-9/272727806_635864497487032_161100601795207078_n.jpg?stp=dst-jpg_p100x100&_nc_cat=108&ccb=1-5&_nc_sid=4de414&_nc_ohc=ZwcbC0V2aioAX_rybgI&_nc_ht=scontent.fsgn5-6.fna&oh=03_AVKNLk7RhQEsG5tYGVzmJiWXHLg5CwWZmYOQPkYsrAknrw&oe=624DFE95"
            className="rounded-circle"
            height={75}
            width={75}
          />
          <div className="d-sm-inline-block ps-3 align-middle d-none">
            <div className="w-100 fs-5 fw-bolder">
              Long Homie{" "}
              <img src="https://img.icons8.com/fluency/25/000000/marijuana-leaf.png" />
            </div>
            <div className="w-100">3h ago</div>
          </div>
        </div>
        <div className="w-100 mb-3 messenger-user text-sm-start text-center">
          <img
            src="https://genk.mediacdn.vn/139269124445442048/2021/7/25/photo-1-1627191657254792065360.jpg"
            className="rounded-circle"
            width={75}
            height={75}
          />
          <div className="d-sm-inline-block ps-3 align-middle d-none">
            <div className="w-100 fs-5 fw-bolder">Jenny</div>
            <div className="w-100">8h ago</div>
          </div>
        </div>
        <div className="w-100 mb-3 messenger-user text-sm-start text-center">
          <div
            className="rounded-circle bg-dark d-inline-block align-middle"
            style={{ width: "75px", height: "75px" }}
          />
          <div className="d-sm-inline-block ps-3 align-middle d-none">
            <div className="w-100 fs-5 fw-bolder">d2VhcG9uIHNob3A=</div>
            <div className="w-100">4d ago</div>
          </div>
        </div>
      </div>
      <div className="col-8 p-3">
        <div className=" border border-1 border-end-0">df</div>
      </div>
    </div>
  );
};

export default Messenger;
