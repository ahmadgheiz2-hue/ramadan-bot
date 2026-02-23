// جاهز للعمل مع Telegram Web App
window.Telegram.WebApp.ready();

function refreshData() {
  const points = window.Telegram.WebApp.initDataUnsafe.points || 0;
  const referrals = window.Telegram.WebApp.initDataUnsafe.referrals || 0;

  document.getElementById("user-points").innerText = `النقاط: ${points}`;
  document.getElementById("user-referrals").innerText = `عدد الإحالات: ${referrals}`;
}