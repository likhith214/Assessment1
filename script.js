
document.addEventListener('DOMContentLoaded', () => {
    const planButtons = document.querySelectorAll('.plan button');

    planButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedPlan = button.parentElement.querySelector('h2').textContent;
            alert('Plan selected: ' + selectedPlan);
            // You can add more functionality here based on the selected plan
        });
    });

    const ctaButton = document.querySelector('.cta button');

    ctaButton.addEventListener('click', () => {
        alert('Get Started button clicked!');
        // Add functionality to redirect to the registration or resume creation page
    });
});
