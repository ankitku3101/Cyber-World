const scriptURL = 'https://script.google.com/macros/s/AKfycbzqUfRvupTVT_dLkUAyfwH3ci-tXEu5S9QnGzEIKE1zP861UtewwpulwSXmq7OoCLKm/exec';
const form = document.forms.namedItem('submit-to-google-sheet') as HTMLFormElement | null;

if (form) {
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    fetch(scriptURL, { 
      method: 'POST', 
      body: new FormData(form) 
    })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
  });
} else {
  console.error('Form not found');
}
