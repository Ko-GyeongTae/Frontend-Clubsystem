import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAccessToken } from "../utils";

interface Props {
  children: any;
}

const CheckToken: FC<Props> = ({ children }) => {
  const { push } = useHistory();

  useEffect(() => {
    const token = getAccessToken();

    if (!token) {
      push("/");
      alert("로그인 이후 접근가능합니다.")
    }
  }, []);

  return children;
};

export default CheckToken;