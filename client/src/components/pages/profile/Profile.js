import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import "./profile.scss";
import { logout } from "../../redux/actions/AuthAction";

const Profile = () => {
  const [userData, setuserData] = useState({});
  const { user } = useSelector((state) => state.AuthState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setuserData(user.user);
    } else {
      setuserData({});
    }
  }, [user, userData]);

  return (
    <>
      <main className="py-4 text-light">
        <div className="row">
          <div className="col-12">
            <h2>User Info</h2>
          </div>
          <div classname="col-12">
            <span>
              <img
                src={userData.picture}
                alt="user-avatar"
                className="rounded-circle py-2"
                width="40"
              />
            </span>
          </div>
          <div classname="col-12 ">
            <p className="pt-2">
              <span>Full Name : </span>
              <span>{userData.name}</span>
            </p>{" "}
            <p>
              <span>Email : </span>
              <span>{userData.email}</span>
            </p>{" "}
            <p>
              <span>Subscription Plan :</span>
              <span>
                Free Forever
                <a className="text-primary mx-2 text-decoration-none">
                  (Change Plan)
                </a>
              </span>
            </p>
            <p>
              <span>Subscription Status :</span>
              <span>Active</span>
            </p>
            {user && (
              <button
                className="btn btn-outline-primary "
                onClick={() => {
                  dispatch(logout(userData._id));
                }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
