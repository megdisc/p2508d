document.addEventListener('DOMContentLoaded', function() {
    // --- SPA-like Page Switching ---
    const pageLinks = document.querySelectorAll('a.nav-link, a.button');
    const pages = document.querySelectorAll('.mockup-page');
    const sideNavLinks = document.querySelectorAll('#side-nav a.nav-link');

    window.showPage = function(targetId) {
        if (!targetId) return;
        pages.forEach(page => {
            page.style.display = 'none'; // Use style.display for direct control
            page.classList.remove('active'); // Also manage active class for consistency
        });
        const targetPage = document.getElementById(targetId);
        if (targetPage) {
            targetPage.style.display = 'block';
            targetPage.classList.add('active'); // Add active class to the shown page
        }

        // ▼▼▼ 変更: ナビゲーションのアクティブ判定ロジック ▼▼▼
        sideNavLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            let isActive = false;
            
            if (linkHref && linkHref.endsWith('.html')) {
                // 'dashboard.html' -> 'dashboard'
                const pageName = linkHref.substring(0, linkHref.lastIndexOf('.html'));
                // 'member-detail' -> 'member'
                const targetBaseId = targetId.split('-')[0]; 
                const targetSuffix = targetId.split('-').pop(); // 'detail', 'list', 'cards' etc.

                // 1. targetId と pageName が完全一致 (e.g., targetId='staff', href='staff.html')
                if (pageName === targetId) {
                    isActive = true;
                } 
                // 2. targetId が '-cards' で終わり、対応するメニューページの href と一致する場合
                else if (targetSuffix === 'cards' && pageName === targetBaseId + '_menu') {
                     isActive = true; // e.g., targetId='members-cards', href='members_menu.html'
                }
                else if (targetId === 'settings-cards' && pageName === 'settings') {
                    isActive = true; // settings は例外的に _menu がない
                }
                // 3. targetId が詳細ページ (e.g., 'member-detail') の場合の親メニュー判定
                else if (pageName === 'members_menu' && targetBaseId === 'member') {
                    isActive = true; // 利用者支援(members_menu) -> member-detail
                }
                else if (pageName === 'staff' && targetBaseId === 'staff') {
                    isActive = true; // 職員管理(staff) -> staff-detail
                }
                else if (pageName === 'work_activities_menu' && (targetBaseId === 'project' || targetBaseId === 'partner' || targetId === 'skill_evaluation')) {
                    // 生産活動(work_activities_menu) -> project-detail, contact-detail, skill_evaluation
                     isActive = true; 
                }
                else if (pageName === 'accounting_menu' && (targetBaseId === 'transaction' || targetId === 'wage_evaluation')) {
                    // 会計管理(accounting_menu) -> transaction (将来的に詳細想定), wage_evaluation
                     isActive = true;
                }
                 else if (pageName === 'settings' && (
                    targetId === 'corporation' || 
                    targetId === 'facility' || 
                    targetId === 'facilities' || // facility一覧もsettings配下とみなす
                    targetId === 'facility-detail' || 
                    targetId === 'users' ||
                    targetId === 'wage_system' ||
                    targetId === 'salary_system' ||
                    targetId === 'skill_system' ||
                    targetId === 'masters' 
                    )) {
                    // 設定(settings) -> 各種設定ページ
                     isActive = true;
                }
                // 4. 利用者支援メニュー(members_menu.html)からの遷移先
                else if (pageName === 'members_menu' && (targetId === 'skill_evaluation' || targetId === 'wage_evaluation')) {
                     isActive = true;
                }

            }
            link.classList.toggle('active', isActive);
        });
        // ▲▲▲ 変更ここまで ▲▲▲
    }

    pageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            // Check if it's a link within the same HTML file (starts with #)
            if (href && href.startsWith('#')) {
                event.preventDefault();
                const targetId = href.substring(1);
                 // Only call showPage if the target is a .mockup-page
                 if(document.getElementById(targetId)?.classList.contains('mockup-page')){
                     window.showPage(targetId);
                     window.location.hash = href;
                 }
                 // If it's potentially an anchor within the current page but not a page switch, allow default
                 // Or handle tab switching if it's within a sub-nav (handled by sub-nav logic below)

            }
            // Allow default behavior for external links or links to other HTML files
            // (フラット化により、他のHTMLファイルへのリンクはデフォルト動作でOK)
        });
    });

    // --- Accordion Menu (No changes needed) ---
    // ...

    // --- Tab Switching (Revised for Generality) ---
    // ▼▼▼ 変更: イベントリスナーを body に設定し、.sub-nav 内のクリックを処理 ▼▼▼
    document.body.addEventListener('click', function(e) {
        const navItem = e.target.closest('.sub-nav-item');
        if (navItem) {
            e.preventDefault();
            const subNav = navItem.closest('.sub-nav ul');
            // Find the corresponding tab content wrapper, assuming it follows the .sub-nav div
            const tabWrapper = subNav?.closest('.mockup-page, .modal-content')?.querySelector('.tab-content-wrapper'); // Look within the current page or modal

            if (subNav && tabWrapper && !navItem.classList.contains('active')) {
                const targetContentId = navItem.dataset.tab;

                // Update nav item active state
                subNav.querySelectorAll('.sub-nav-item').forEach(item => item.classList.remove('active'));
                navItem.classList.add('active');

                // Update tab content active state within the specific wrapper
                tabWrapper.querySelectorAll('.tab-content').forEach(pane => {
                    pane.classList.toggle('active', pane.id === targetContentId);
                    // Ensure non-active tabs are hidden using style.display as well
                    pane.style.display = (pane.id === targetContentId) ? 'block' : 'none';
                });

                // Update URL hash for state persistence (optional, but good practice)
                // Be careful if multiple tab sets exist on one page
                 // window.location.hash = '#' + targetContentId; // Can cause conflicts if not handled carefully
            }
        }

        // --- Modal Close Handling (Combined) ---
        // モーダル閉じるボタン
        if (e.target.matches('.modal-close')) {
            const modal = e.target.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        }
        // モーダル背景クリック
        if (e.target.matches('.modal')) {
            e.target.style.display = 'none';
        }

         // --- Dynamic Table Row Deletion (Generic, relying on templates having the button) ---
         const deleteBtn = e.target.closest('.button-danger');
         if (deleteBtn) {
             const row = deleteBtn.closest('tr');
             const tbody = row?.closest('tbody');
             // Make sure it's not a button outside a table or within specific non-deletable rows
             if (row && tbody && !row.classList.contains('add-root-row')) { // Example exclusion
                // Check if the button corresponds to a templated row add mechanism
                // This check is simplistic; might need refinement based on actual template usage
                const templateId = tbody.id.replace('-body', '-template'); // Guess template ID convention
                 if (document.getElementById(templateId) || tbody.closest('.table')?.id === 'process-table' || tbody.closest('.table')?.id === 'expense-table') { // Also allow for older tables
                    row.remove();
                    // Optional: Renumber rows if necessary (like in process-table)
                    if (tbody.closest('.table')?.id === 'process-table') {
                         Array.from(tbody.rows).forEach((r, i) => {
                            if (r.cells[0]) r.cells[0].textContent = i + 1;
                         });
                    }
                 }
             }
         }

    });
     // ▲▲▲ 変更ここまで ▲▲▲


    // --- Modal Handling (Global Functions) ---
    window.openModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if(modal) modal.style.display = 'block';
    }
    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if(modal) modal.style.display = 'none';
    }

    // --- 汎用関数 (Global Functions) ---
    // setupTableInteraction, setupToggleUI, setupTableRowAdder, setupRealtimeSearch (変更なし)
    // ... (previous definitions) ...
     window.setupTableInteraction = function(tbodyId, addButtonId, editModalId, addModalId) {
        const tbody = document.getElementById(tbodyId);
        const addButton = document.getElementById(addButtonId);
        const effectiveAddModalId = addModalId || editModalId;

        if (!tbody || !editModalId || !effectiveAddModalId) {
             // console.warn(`Required elements missing for table interaction (tbody or modalId): ${tbodyId}, ${editModalId}`);
             return; // Gracefully exit if elements are missing
         }

        if(addButton) {
            addButton.addEventListener('click', () => {
                // Clear form before opening modal (example for add)
                const addModal = document.getElementById(effectiveAddModalId);
                if(addModal && effectiveAddModalId === addModalId){ // Only clear if it's specifically an add action
                     const form = addModal.querySelector('form'); // Assuming form exists
                     if(form) form.reset();
                     // Clear any specific fields if reset() isn't enough
                }
                window.openModal(effectiveAddModalId);
            });
        }

        // Edit button click handled by event delegation in the main body listener now
        // Delete button click is also handled there
    }

     window.setupToggleUI = function(radioName, addButtonId, elementToToggle) { // Renamed tableWrapper to elementToToggle
        const radios = document.querySelectorAll(`input[name="${radioName}"]`);
        const addButton = document.getElementById(addButtonId);
        const targetElement = elementToToggle; // Use the passed element directly

        if (!radios || radios.length === 0 || !targetElement) { // addButton is optional
            // console.warn(`Required elements missing for toggle UI setup: radioName=${radioName}`);
            return;
        }

        const toggleControls = () => {
            const checkedRadio = document.querySelector(`input[name="${radioName}"]:checked`);
            if (!checkedRadio) return;

            const selectedValue = checkedRadio.value;
            const shouldShow = (selectedValue === 'yes'); // Assuming 'yes' means show

            if (addButton) {
                 addButton.disabled = !shouldShow;
            }
            targetElement.style.display = shouldShow ? '' : 'none'; // Use '' for default display
        };

        radios.forEach(radio => radio.addEventListener('change', toggleControls));
        toggleControls(); // Initial setup
    }

     window.setupTableRowAdder = function(tbodyId, addButtonId, templateId) {
        const tbody = document.getElementById(tbodyId);
        const addButton = document.getElementById(addButtonId);
        const template = document.getElementById(templateId);

        if (!tbody || !addButton || !template) {
            // console.warn('Table adder elements not found for', tbodyId, addButtonId, templateId);
            return;
        }

        addButton.addEventListener('click', () => {
             const clone = template.content.cloneNode(true);
             tbody.appendChild(clone);
         });

         // Delete handled by main body listener
    }

    window.setupRealtimeSearch = function(inputId, tbodyId, cellIndex = 0) { // Default to first cell
         const searchInput = document.getElementById(inputId);
         const tableBody = document.getElementById(tbodyId);
         if (!searchInput || !tableBody) {
             // console.warn(`Search elements not found: inputId=${inputId}, tbodyId=${tbodyId}`);
             return;
         }

         searchInput.addEventListener('input', () => {
             const searchTerm = searchInput.value.toLowerCase().trim();
             const rows = tableBody.getElementsByTagName('tr');

             Array.from(rows).forEach(row => {
                 if (row.classList.contains('add-root-row')) return; // Skip special rows

                 const cell = row.cells[cellIndex]; // Target specific cell index
                 let cellText = '';

                 if (cell) {
                     // Check for input inside the cell first
                     const inputInCell = cell.querySelector('input[type="text"], input[type="search"]'); // More specific
                     if (inputInCell) {
                         cellText = inputInCell.value.toLowerCase();
                     } else {
                         cellText = cell.textContent?.toLowerCase().trim() || '';
                     }
                 }

                 row.style.display = cellText.includes(searchTerm) ? '' : 'none';
             });
         });
     }


    // --- Initial Page Load & Tab State ---
    const currentHash = window.location.hash;
    let initialPageId = '';
    let initialSubTabId = '';

    if (currentHash) {
        // Try to split hash into page and sub-tab (e.g., #members#tab-basic-info)
        // Note: Using '#' as a separator isn't standard, consider alternatives like '/' or '?'
        // For now, assume simple hash like #member-detail or #tab-daily-logs
        initialPageId = currentHash.substring(1);

        // If hash corresponds to a tab ID directly, find its parent page
        const potentialTabTarget = document.getElementById(initialPageId);
        if (potentialTabTarget && potentialTabTarget.classList.contains('tab-content')) {
            initialSubTabId = initialPageId;
            // Find the parent mockup-page
            const parentPage = potentialTabTarget.closest('.mockup-page');
            if (parentPage) {
                initialPageId = parentPage.id;
            } else {
                initialPageId = pages[0] ? pages[0].id : ''; // Fallback if parent not found
            }
        }
    }

    // Fallback to default page if needed
    // ▼▼▼ 変更: デフォルトページのIDを 'dashboard' に変更 ▼▼▼
    if (!initialPageId || !document.getElementById(initialPageId)) {
        // Find the page associated with dashboard.html if no hash
        const dashboardLink = document.querySelector('a.nav-link[href="dashboard.html"]');
        if (dashboardLink) {
            // This assumes the dashboard page has an id="dashboard"
            initialPageId = 'dashboard'; 
        }
        if (!initialPageId || !document.getElementById(initialPageId)) {
             initialPageId = pages[0] ? pages[0].id : ''; // Fallback to first page in HTML
        }
    }
     // ▲▲▲ 変更ここまで ▲▲▲


    // Show the initial page
    if(initialPageId) {
        window.showPage(initialPageId);
    }

    // Activate the initial sub-tab if specified
    if (initialSubTabId) {
        const initialPageElement = document.getElementById(initialPageId);
        const subNav = initialPageElement?.querySelector('.sub-nav ul');
        const tabWrapper = initialPageElement?.querySelector('.tab-content-wrapper');

        if (subNav && tabWrapper) {
            const navItem = subNav.querySelector(`.sub-nav-item[data-tab="${initialSubTabId}"]`);
            const tabContent = tabWrapper.querySelector(`#${initialSubTabId}`);

            if (navItem && tabContent) {
                 subNav.querySelectorAll('.sub-nav-item').forEach(item => item.classList.remove('active'));
                 tabWrapper.querySelectorAll('.tab-content').forEach(pane => {
                     pane.classList.remove('active');
                     pane.style.display = 'none';
                 });
                 navItem.classList.add('active');
                 tabContent.classList.add('active');
                 tabContent.style.display = 'block';
            }
        }
    } else {
        // If no sub-tab specified, ensure the default tab (usually first) is active
        const initialPageElement = document.getElementById(initialPageId);
        const subNav = initialPageElement?.querySelector('.sub-nav ul');
        const tabWrapper = initialPageElement?.querySelector('.tab-content-wrapper');
        if(subNav && tabWrapper){
            const firstNavItem = subNav.querySelector('.sub-nav-item');
            const firstTabContent = tabWrapper.querySelector('.tab-content'); // Assuming first one is default
            if(firstNavItem && firstTabContent && !subNav.querySelector('.sub-nav-item.active')){ // Only if none are active
                 subNav.querySelectorAll('.sub-nav-item').forEach(item => item.classList.remove('active'));
                 tabWrapper.querySelectorAll('.tab-content').forEach(pane => {
                     pane.classList.remove('active');
                     pane.style.display = 'none';
                 });
                 firstNavItem.classList.add('active');
                 firstTabContent.classList.add('active');
                 firstTabContent.style.display = 'block';
            } else if (tabWrapper && !tabWrapper.querySelector('.tab-content.active')) {
                 // Ensure at least one tab content is visible if nav isn't set right
                 const firstTabContent = tabWrapper.querySelector('.tab-content');
                 if(firstTabContent){
                     tabWrapper.querySelectorAll('.tab-content').forEach(pane => {
                         pane.classList.remove('active');
                         pane.style.display = 'none';
                     });
                     firstTabContent.classList.add('active');
                     firstTabContent.style.display = 'block';
                 }
            }
        }
    }


}); // End of DOMContentLoaded listener