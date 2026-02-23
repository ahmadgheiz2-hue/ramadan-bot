// البيانات ستأتي من البوت عبر Telegram Web Apps
window.Telegram.WebApp.ready();

function refreshData() {
  const data = window.Telegram.WebApp.initDataUnsafe.user; // معلومات المستخدم
  const points = window.Telegram.WebApp.initDataUnsafe.points || 0;
  const referrals = window.Telegram.WebApp.initDataUnsafe.referrals || 0;

  document.getElementById("user-points").innerText = `النقاط: ${points}`;
  document.getElementById("user-referrals").innerText = `عدد الإحالات: ${referrals}`;
}