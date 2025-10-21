document.addEventListener('DOMContentLoaded', function() {
    // --- SPA-like Page Switching ---
    const pageLinks = document.querySelectorAll('a.nav-link, a.button');
    const pages = document.querySelectorAll('.mockup-page');
    const sideNavLinks = document.querySelectorAll('#side-nav a.nav-link');

    function showPage(targetId) {
        if (!targetId) return;
        pages.forEach(page => {
            // 以前は classList.toggle('active') でしたが、
            // アコーディオンの表示状態と干渉しないよう style.display に変更します。
            page.style.display = 'none';
        });
        const targetPage = document.getElementById(targetId);
        if (targetPage) {
            targetPage.style.display = 'block';
        }

        // Update active state of nav links
        sideNavLinks.forEach(link => {
            const linkTargetId = (link.getAttribute('href') || '').substring(1);
            const isActive = (linkTargetId === targetId);
            link.classList.toggle('active', isActive);
        });
    }

    pageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // アコーディオンのリンクはページ遷移させない
            if (this.classList.contains('accordion-toggle')) {
                return;
            }
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                event.preventDefault();
                showPage(href.substring(1));
                window.location.hash = href; // URLのハッシュも更新
            }
        });
    });

    // --- ここから追加 ---
    // --- Accordion Menu ---
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
    // --- ここまで追加 ---

    // --- Tab Switching ---
    const tabContainers = document.querySelectorAll('.tabs');
    tabContainers.forEach(container => {
        container.addEventListener('click', function(e) {
            const tabItem = e.target.closest('.tab-item');
            if (tabItem) {
                const parentTabs = tabItem.parentElement;
                const targetContentId = tabItem.dataset.tab;
                const tabContentWrapper = parentTabs.nextElementSibling;

                parentTabs.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
                tabItem.classList.add('active');

                tabContentWrapper.querySelectorAll('.tab-content').forEach(pane => {
                    pane.classList.toggle('active', pane.id === targetContentId);
                });
            }
        });
    });
    
    // --- Modal Handling ---
    window.openModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if(modal) modal.style.display = 'block';
    }
    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if(modal) modal.style.display = 'none';
    }
    document.body.addEventListener('click', function(event) {
        if (event.target.matches('.modal-close')) {
            event.target.closest('.modal').style.display = 'none';
        }
        if (event.target.matches('.modal')) {
            event.target.style.display = 'none';
        }
    });

    // --- Dynamic Table Row Addition/Deletion (Event Delegation) ---
    document.body.addEventListener('click', function(e) {
        // Add Row
        const addBtn = e.target.closest('#add-process-row, #add-expense-row, #add-contact-row');
        if (addBtn) {
            let table, newRowHTML;
            const id = addBtn.id;
            if (id === 'add-process-row') {
                table = document.getElementById('process-table').getElementsByTagName('tbody')[0];
                const rowCount = table.rows.length + 1;
                newRowHTML = `<td>${rowCount}</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td class="col-actions"><div class="table-button-group"><button class="button button-danger">削除</button></div></td>`;
            } else if (id === 'add-expense-row') {
                table = document.getElementById('expense-table').getElementsByTagName('tbody')[0];
                newRowHTML = `<td><input type="date"></td><td><input type="text"></td><td><input type="text"></td><td><input type="number"></td><td class="col-actions"><div class="table-button-group"><button class="button button-danger">削除</button></div></td>`;
            } else if (id === 'add-contact-row') {
                table = document.getElementById('contact-person-table').getElementsByTagName('tbody')[0];
                newRowHTML = `<td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td class="col-actions"><div class="table-button-group"><button class="button button-danger">削除</button></div></td>`;
            }
            if (table) {
                const newRow = table.insertRow();
                newRow.innerHTML = newRowHTML;
            }
        }
        
        // Delete Row
        const deleteBtn = e.target.closest('.button-danger');
        if (deleteBtn && deleteBtn.closest('tbody')) {
            const row = deleteBtn.closest('tr');
            const tableBody = row.parentNode;
            row.remove();
            // Renumber rows if it's the process table
            if (tableBody.parentElement.id === 'process-table') {
                Array.from(tableBody.rows).forEach((r, i) => {
                    r.cells[0].textContent = i + 1;
                });
            }
        }
    });
    
    // --- Project Delivery/Billing Status ---
    const deliveryDate = document.getElementById('delivery-date');
    const billingDate = document.getElementById('billing-date');

    if (deliveryDate) {
        deliveryDate.addEventListener('change', function() {
            document.getElementById('delivery-status-text').textContent = this.value ? '納品済' : '未納品';
        });
        document.getElementById('clear-delivery-date').addEventListener('click', () => {
            deliveryDate.value = '';
            deliveryDate.dispatchEvent(new Event('change'));
        });
    }

    if (billingDate) {
        billingDate.addEventListener('change', function() {
            document.getElementById('payment-status-text').textContent = this.value ? '請求済' : '未請求';
        });
        document.getElementById('clear-billing-date').addEventListener('click', () => {
            billingDate.value = '';
            billingDate.dispatchEvent(new Event('change'));
        });
    }

    // --- Initial Page Load ---
    const initialPageId = window.location.hash ? window.location.hash.substring(1) : (pages[0] ? pages[0].id : '');
    showPage(initialPageId || 'members');

    // ページ読み込み時に、対応するアコーディオンメニューを開いておく
    if (initialPageId === 'skills' || initialPageId === 'skill-map') {
        const skillAccordion = document.querySelector('.accordion-toggle');
        skillAccordion.classList.add('active');
        skillAccordion.nextElementSibling.style.display = 'block';
    }
});

