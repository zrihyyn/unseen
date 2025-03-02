window.onload = function() {
    // 팝업 요소 생성
    let popup = document.createElement("div");
    popup.id = "videoPopup";
    popup.innerHTML = `
        <video id="popupVideo" autoplay muted loop>
            <source src="video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <button id="closePopup">×</button>
    `;

    // 팝업 스타일 추가
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.width = "80vw";
    popup.style.maxWidth = "600px";
    popup.style.background = "rgba(0, 0, 0, 1)";
    popup.style.padding = "10px";
    popup.style.borderRadius = "0px";
    popup.style.zIndex = "1000";
    popup.style.display = "flex";
    popup.style.flexDirection = "column";
    popup.style.alignItems = "center";

    // 비디오 스타일 추가
    let video = popup.querySelector("video");
    video.style.width = "100%";
    video.style.borderRadius = "0px";

    // 닫기 버튼 스타일 추가
    let closeBtn = popup.querySelector("#closePopup");
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "10px";
    closeBtn.style.right = "10px";
    closeBtn.style.background = "none";
    closeBtn.style.color = "white";
    closeBtn.style.border = "none";
    closeBtn.style.fontSize = "24px";
    closeBtn.style.cursor = "pointer";

    // 닫기 버튼 클릭 시 팝업 숨기기
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });

    // 팝업을 body에 추가
    document.body.appendChild(popup);
};

document.addEventListener("DOMContentLoaded", function () {
    const infoBtn = document.getElementById("info-btn");
    const infoBox = document.getElementById("info-box");

    // 마우스 오버 시 정보 박스 표시
    infoBtn.addEventListener("mouseenter", function () {
        infoBox.style.display = "block";
    });

    // 마우스 이동 시 정보 박스 위치 업데이트
    document.addEventListener("mousemove", function (event) {
        let boxWidth = infoBox.offsetWidth;
        let pageX = event.pageX;
        let pageY = event.pageY;

        // 마우스 왼편에 위치하도록 설정
        let posX = pageX - boxWidth - 10;
        let posY = pageY;

        // 화면 왼쪽 경계를 넘지 않도록 조정
        if (posX < 10) {
            posX = 10; // 최소 좌측 여백 10px 유지
        }

        infoBox.style.left = posX + "px";
        infoBox.style.top = posY + "px";
    });

    // 마우스 아웃 시 정보 박스 숨김
    infoBtn.addEventListener("mouseleave", function () {
        infoBox.style.display = "none";
    });
});

