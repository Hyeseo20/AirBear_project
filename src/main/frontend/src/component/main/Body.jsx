import React from 'react';
import './Body.css'; // CSS 파일 불러오기

function Body() {
  return (
    <div className="body_container">


      <div className="polarbear">
        <p>🐻‍❄️</p>
      </div>



      <div className="items">
        {' '}
        {/* 'items' 클래스 적용 */}

        <div className="item">
          <svg
            width={74}
            height={62}
            viewBox="0 0 84 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M30.75 11.75C34.7282 11.75 38.5436 13.3304 41.3566 16.1434C44.1696 18.9564 45.75 22.7718 45.75 26.75C45.75 30.7282 44.1696 34.5436 41.3566 37.3566C38.5436 40.1696 34.7282 41.75 30.75 41.75C26.7718 41.75 22.9564 40.1696 20.1434 37.3566C17.3304 34.5436 15.75 30.7282 15.75 26.75C15.75 22.7718 17.3304 18.9564 20.1434 16.1434C22.9564 13.3304 26.7718 11.75 30.75 11.75ZM30.75 49.25C40.7625 49.25 60.75 54.275 60.75 64.25V71.75H0.75V64.25C0.75 54.275 20.7375 49.25 30.75 49.25ZM59.85 13.1C67.425 21.35 67.425 32.7875 59.85 40.3625L53.55 34.025C56.7 29.6 56.7 23.8625 53.55 19.4375L59.85 13.1ZM72.2625 0.5C87 15.6875 86.8875 38.4125 72.2625 53L66.15 46.8875C76.5375 34.9625 76.5375 17.9375 66.15 6.6125L72.2625 0.5Z"
              fill="#00D8FF"
            />
          </svg>

          <p>생성된 얼굴에 음성 삽입(질문지)+립싱크 기술 적용</p>
        </div>


        <div className="item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 90 90"
            fill="none"
          >
            <path
              d="M33.75 5.94751L45 17.1975L56.25 5.94751L89.6775 39.375L45 84.0525L0.32251 39.375L33.75 5.94751ZM39.6975 22.5L33.75 16.5525L10.9275 39.375L45 73.4475L48.5775 69.87L39.6975 60.9863L45 55.6875L53.88 64.5713L57.4613 60.99L48.5775 52.11L53.88 46.8075L62.7638 55.6875L67.8225 50.6288L56.25 39.0525L45 50.3025L28.4475 33.75L39.6975 22.5ZM73.125 45.3225L79.0725 39.375L56.25 16.5525L39.0525 33.75L45 39.6975L56.25 28.4475L73.125 45.3225Z"
              fill="#00D8FF"
            />
          </svg>

          <p>커뮤니티로 회원들끼리의 녹음 공유 및 피드백 공간 구현</p>
        </div>


        <div className="item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="90"
            viewBox="0 0 90 90"
            fill="none"
          >
            <path
              d="M56.1375 22.2C55.8854 21.2773 55.2789 20.4915 54.4501 20.0139C53.6213 19.5363 52.6373 19.4055 51.7125 19.65L38.9625 23.0625L22.3125 7.61255L17.7 8.85005L27.675 26.0625L15.7125 29.25L10.9875 25.575L7.5 26.5125L13.725 37.3125L53.55 26.6625C55.5 26.1 56.625 24.1125 56.1375 22.2ZM78.75 37.5L75 45H56.25L52.5 37.5L56.25 33.75H63.75V26.25H67.5V33.75H75L78.75 37.5ZM82.5 75V82.5H7.5V75H56.25V48.75H75V75H82.5Z"
              fill="#00D8FF"
            />
          </svg>

          <p>항공사 채용, 시험 일정 (API)</p>
        </div>
        <div className="item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="62"
            viewBox="0 0 80 62"
            fill="none"
          >
            <path
              d="M76.5625 5.6875H62.5V0.765625C62.5 0.378906 62.1836 0.0625 61.7969 0.0625H56.875C56.4883 0.0625 56.1719 0.378906 56.1719 0.765625V5.6875H43.1641V0.765625C43.1641 0.378906 42.8477 0.0625 42.4609 0.0625H37.5391C37.1523 0.0625 36.8359 0.378906 36.8359 0.765625V5.6875H23.8281V0.765625C23.8281 0.378906 23.5117 0.0625 23.125 0.0625H18.2031C17.8164 0.0625 17.5 0.378906 17.5 0.765625V5.6875H3.4375C1.88184 5.6875 0.625 6.94434 0.625 8.5V59.125C0.625 60.6807 1.88184 61.9375 3.4375 61.9375H76.5625C78.1182 61.9375 79.375 60.6807 79.375 59.125V8.5C79.375 6.94434 78.1182 5.6875 76.5625 5.6875ZM32.2656 46.4688C32.2656 46.8555 31.9492 47.1719 31.5625 47.1719H15.3906C15.0039 47.1719 14.6875 46.8555 14.6875 46.4688V42.25C14.6875 41.8633 15.0039 41.5469 15.3906 41.5469H31.5625C31.9492 41.5469 32.2656 41.8633 32.2656 42.25V46.4688ZM32.2656 34.5156C32.2656 34.9023 31.9492 35.2188 31.5625 35.2188H15.3906C15.0039 35.2188 14.6875 34.9023 14.6875 34.5156V30.2969C14.6875 29.9102 15.0039 29.5938 15.3906 29.5938H31.5625C31.9492 29.5938 32.2656 29.9102 32.2656 30.2969V34.5156ZM65.1807 26.4912L50.6787 46.5918C50.5492 46.7715 50.3789 46.9178 50.1818 47.0187C49.9847 47.1197 49.7664 47.1723 49.5449 47.1723C49.3235 47.1723 49.1052 47.1197 48.908 47.0187C48.7109 46.9178 48.5406 46.7715 48.4111 46.5918L38.374 32.6875C38.04 32.2217 38.374 31.5713 38.9453 31.5713H43.7705C44.2188 31.5713 44.6406 31.791 44.9043 32.1514L49.5449 38.5762L58.6592 25.9463C58.9229 25.5771 59.3447 25.3662 59.793 25.3662H64.6094C65.1807 25.375 65.5146 26.0254 65.1807 26.4912Z"
              fill="#00D8FF"
            />
          </svg>

          <p>마이페이지 스케줄 관리</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
