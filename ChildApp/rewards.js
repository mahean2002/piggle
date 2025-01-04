document.addEventListener('DOMContentLoaded', function() {
    const rewardsModal = document.getElementById('rewardsModal');
    const closeRewardsModal = document.getElementById('closeRewardsModal');
    const rewardsButton = document.querySelector('.tab-bar a:nth-child(2)'); // Gift box icon in tab bar

    // Open modal when clicking rewards button
    rewardsButton.addEventListener('click', function(e) {
        e.preventDefault();
        rewardsModal.classList.add('active');
    });

    // Close modal when clicking close button
    closeRewardsModal.addEventListener('click', function() {
        rewardsModal.classList.remove('active');
    });

    // Close modal when clicking outside
    rewardsModal.addEventListener('click', function(e) {
        if (e.target === rewardsModal) {
            rewardsModal.classList.remove('active');
        }
    });
}); 