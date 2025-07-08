document.getElementById('save').addEventListener('click', function() {
  const zakazka = document.getElementById('zakazka').value;
  chrome.storage.sync.set({ zakazka }, function() {
    document.getElementById('status').textContent = 'Saved!';
    setTimeout(() => { document.getElementById('status').textContent = ''; }, 1000);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get(['zakazka'], function(result) {
    if (result.zakazka) {
      document.getElementById('zakazka').value = result.zakazka;
    }
  });
});
