
const renderError = (elements, error) => {
    elements.feedback.textContent = error;
    if (error !== 'RSS успешно загружен') {
        elements.feedback.classList.add('text-danger');
        elements.feedback.classList.remove('text-success');
        elements.input.classList.add('is-invalid');
        elements.input.focus();
    } 
    if (error === 'RSS успешно загружен') {
        elements.feedback.classList.remove('text-danger');
        elements.feedback.classList.add('text-success');
        elements.input.classList.remove('is-invalid');
        elements.input.focus();
    } 
}

export default renderError;