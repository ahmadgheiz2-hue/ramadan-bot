window.Telegram.WebApp.ready();

function refreshData() {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get('user');

  // بيانات مؤقتة للتجربة
  const points = 0; 
  const referrals = 0;

  document.getElementById("user-points").innerText = `النقاط: ${points}`;
  document.getElementById("user-referrals").innerText = `عدد الإحالات: ${referrals}`;
}
