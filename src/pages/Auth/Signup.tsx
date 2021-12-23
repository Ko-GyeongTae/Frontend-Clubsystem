import { useState } from 'react';
import axios from 'axios';
import { setAccessToken } from '../../utils';
import { useHistory } from 'react-router-dom';
import './Login.css';

function Signup() {
    const [id, setId] = useState<string>();
    const [studentno, setStudentno] = useState<string>();
    const [name, setName] = useState<string>();
    const [pw, setPw] = useState<string>();
    const [club, setClub] = useState<string>();

    const { push } = useHistory();

    const handleId = (e: any) => {
        setId(e.target.value);
    }

    const handleStudentno = (e: any) => {
        setStudentno(e.target.value);
    }

    const handleName = (e: any) => {
        setName(e.target.value);
    }

    const handlePw = (e: any) => {
        setPw(e.target.value);
    }

    const handleClub = (e: any) => {
        setClub(e.target.value);
    }

    const Signup = async (e: any) => { // login function
        e.preventDefault();
        await axios.post(process.env.REACT_APP_BASEURL + "/auth/signup", { // Request to login api with axios module
            id, name, studentno, password:pw, club
        })
            .then(res => {
                push("/");
                alert("회원가입에 성공했습니다. 로그인을 진행해주세요.")
            })
            .catch(err => {
                console.log(err); // If you fail to login, Browser print error log.
                alert("회원가입에 실패했습니다.");
            })
    }
    return (
        <div className="container">
            <div className="header">
                <h1>회원가입</h1>
            </div>
            <form className="input-form" onSubmit={Signup}>
                <div className="form-box">
                    <input type="text" name="id" placeholder="아이디" value={id} onChange={handleId} />
                    <input type="text" name="studNo" placeholder="학번" value={studentno} onChange={handleStudentno} />
                    <input type="text" name="name" placeholder="이름" value={name} onChange={handleName} />
                    <input type="password" name="password" placeholder="비밀번호" value={pw} onChange={handlePw} />
                    <input type="text" name="club" placeholder="동아리명" value={club} onChange={handleClub} />
                    <button type="submit" value="Submit">Signup</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;