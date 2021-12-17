import './AuthHome.css';

function AuthHome() {

    return (
        <main className="App">
            <div className="header">
                <h1>동아리 관리시스템</h1>
                <p>Made by 맛소금</p>
            </div>

            <div className="grid">
                <a className="signup-box" href="/signup">
                    <h1>동아리장으로 입장하기</h1>
                    <p>동아리장으로 입장 동아리를 관리하기</p>
                </a>
                <a className="signup-box" href="/signup">
                    <h1>동아리원으로 입장하기</h1>
                    <p>동아리원으로 입장하여 동아리에 기여하기</p>
                </a>
            </div>
        </main>
    );
}
export default AuthHome;