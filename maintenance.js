function checkMaintenance() {
  fetch('/maintenance.flag', { method: 'HEAD' })
    .then(response => {
      if (response.ok) {
        document.body.innerHTML = `
          <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); color: white; display: flex; justify-content: center; align-items: center; flex-direction: column; z-index: 9999;">
            <h1>Site Under Maintenance</h1>
            <p>We are currently working on some improvements. Please check back later.</p>
          </div>
        `;
        document.body.style.pointerEvents = 'none';
      }
    })
    .catch(error => {
      console.error("Error checking maintenance flag:", error);
    });
}

document.addEventListener('DOMContentLoaded', checkMaintenance);
