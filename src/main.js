const tabButtons = document.querySelectorAll('.shows__tabs__button');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab-button');
        const tabContent = document.querySelectorAll('.shows__list');
        tabContent.forEach(tab => {
            tab.classList.remove('shows__list--is--active');
        });

        const activeTab = document.querySelector(`[data-tab-id="${tabId}"]`);
        activeTab.classList.add('shows__list--is--active');
        tabButtons.forEach(btn => {
            btn.classList.remove('shows__tabs__button--is--active');
        });
        button.classList.add('shows__tabs__button--is--active');
    });
});
