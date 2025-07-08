chrome.storage.sync.get(['zakazka'], function(result) {
  const zakazka = result.zakazka;
  if (zakazka) {
    const input = document.getElementById('ContentPlaceHolder1_tbZakazkaId');
    if (input) {
      input.value = zakazka;
      const submitButton = document.querySelector('input[type="submit"], button[type="submit"]');
      if (submitButton) {
        submitButton.click();
      } else {
                const form = input.form; // gets the parent form of the input
        if (form) {
          form.submit();
        }
      }
    }
  }
});
