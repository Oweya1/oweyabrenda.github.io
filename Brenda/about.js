function showTab(tabId) {
    var tabs = document.querySelectorAll('.tab-pane');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    var activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');
}
