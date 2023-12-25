function updateClock() {
    const now = new Date();
    const options = { timeZone: 'Asia/Seoul', hour12: false };
    const koreanTime = now.toLocaleTimeString('en-US', options);
    
    document.getElementById('clock').textContent = koreanTime;
}

// 업데이트 간격 설정 (1초마다)
setInterval(updateClock, 1000);

// 초기 시계 업데이트
updateClock();
