document.addEventListener('DOMContentLoaded', function() {
    // --- SPA-like Page Switching ---
    const pageLinks = document.querySelectorAll('a.nav-link, a.button');
    const pages = document.querySelectorAll('.mockup-page');
    const sideNavLinks = document.querySelectorAll('#side-nav a.nav-link');

    // ▼▼▼ 変更: 関数をグローバルスコープに公開 ▼▼▼
    window.showPage = function(targetId) {
    // ▲▲▲ 変更 ▲▲▲
        if (!targetId) return;
        pages.forEach(page => {
            // アコーディオンの表示状態と干渉しないよう style.display に変更
            page.style.display = 'none';
        });
        const targetPage = document.getElementById(targetId);
        if (targetPage) {
            targetPage.style.display = 'block';
        }

        // Update active state of nav links
        sideNavLinks.forEach(link => {
            // href属性が存在しない場合のエラーを防ぐため修正
            const linkHref = link.getAttribute('href');
            if (linkHref && linkHref.startsWith('#')) {
                const linkTargetId = linkHref.substring(1);
                const isActive = (linkTargetId === targetId);
                link.classList.toggle('active', isActive);
            } else {
                link.classList.remove('active'); // hrefがない、または#で始まらないリンクは非アクティブに
            }
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
                window.showPage(href.substring(1)); // グローバルになったshowPageを呼び出す
                window.location.hash = href; // URLのハッシュも更新
            }
            // 通常のページ遷移（#で始まらない場合）はデフォルトの動作に任せる
        });
    });

    // --- Accordion Menu ---
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            // nextElementSibling が存在しない場合のエラーを防ぐ
            if (content) {
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                }
            }
        });
    });

    // --- Tab Switching ---
    const tabContainers = document.querySelectorAll('.tabs');
    tabContainers.forEach(container => {
        container.addEventListener('click', function(e) {
            const tabItem = e.target.closest('.tab-item');
            if (tabItem) {
                const parentTabs = tabItem.parentElement;
                const targetContentId = tabItem.dataset.tab;
                const tabContentWrapper = parentTabs.nextElementSibling;

                // nextElementSibling が存在しない場合のエラーを防ぐ
                if (tabContentWrapper) {
                    parentTabs.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
                    tabItem.classList.add('active');

                    tabContentWrapper.querySelectorAll('.tab-content').forEach(pane => {
                        pane.classList.toggle('active', pane.id === targetContentId);
                    });
                }
            }
        });
    });

    // --- Modal Handling ---
    // グローバルスコープに関数を定義
    window.openModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if(modal) modal.style.display = 'block';
    }
    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if(modal) modal.style.display = 'none';
    }
    // イベントリスナーはDOMContentLoaded内で設定
    document.body.addEventListener('click', function(event) {
        // モーダル閉じるボタン
        if (event.target.matches('.modal-close')) {
            // .closest('.modal') が null でないことを確認してから style を変更
            const modal = event.target.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        }
        // モーダル背景クリック
        if (event.target.matches('.modal')) {
            event.target.style.display = 'none';
        }
    });

    // --- 汎用関数 (グローバルスコープに定義) ---
    window.setupTableInteraction = function(tbodyId, addButtonId, editModalId, addModalId) {
        const tbody = document.getElementById(tbodyId);
        const addButton = document.getElementById(addButtonId);
        const effectiveAddModalId = addModalId || editModalId;

        if (!tbody || !editModalId || !effectiveAddModalId) {
             console.warn(`Required elements missing for table interaction (tbody or modalId): ${tbodyId}, ${editModalId}`);
             return;
         }

        if(addButton) {
            addButton.addEventListener('click', () => {
                // TODO: モーダルを開く前に、フォームの内容をクリアする処理を追加
                window.openModal(effectiveAddModalId);
            });
        }

        // tbodyへのイベントリスナーはDOMContentLoaded内で設定
        tbody.addEventListener('click', (e) => {
            const deleteButton = e.target.closest('.button-danger');
            const editButton = e.target.closest('.edit-row-button');

            if (deleteButton && tbody.contains(deleteButton)) { // 削除ボタンがtbody内にあることを確認
                // 行削除のロジック
                // .closest('tr') が null でないことを確認してから remove を呼び出す
                const rowToRemove = deleteButton.closest('tr');
                if (rowToRemove) {
                    rowToRemove.remove();
                }
            } else if (editButton && tbody.contains(editButton)) { // 編集ボタンがtbody内にあることを確認
                // 編集モーダル表示のロジック
                const modalId = editButton.dataset.modalId || editModalId;
                // TODO: モーダルを開く前に、クリックされた行のデータをフォームに設定する処理を追加
                window.openModal(modalId);
            }
        });
    }

    window.setupToggleUI = function(radioName, addButtonId, tableWrapper) {
        const radios = document.querySelectorAll(`input[name="${radioName}"]`);
        const addButton = document.getElementById(addButtonId);
        const table = tableWrapper;

        // 要素が存在しない場合のエラーを防ぐ
        if (!radios || radios.length === 0 || !addButton || !table) {
            console.warn(`Required elements missing for toggle UI setup: radioName=${radioName}, addButtonId=${addButtonId}`);
            return;
        }

        const toggleControls = () => {
            // `:checked` な要素が存在しない場合のエラーを防ぐ
            const checkedRadio = document.querySelector(`input[name="${radioName}"]:checked`);
            if (!checkedRadio) return; // チェックされたラジオボタンがなければ何もしない

            const selectedValue = checkedRadio.value;
            if (selectedValue === 'yes') {
                addButton.disabled = false;
                table.style.display = ''; // or 'table', 'block' etc. depending on original display type
            } else {
                addButton.disabled = true;
                table.style.display = 'none';
            }
        };

        radios.forEach(radio => radio.addEventListener('change', toggleControls));
        toggleControls(); // 初期表示を制御
    }

    // --- Dynamic Table Row Addition/Deletion (古い実装 - イベント委任) ---
    // この部分は setupTableInteraction と機能が重複・競合する可能性があるため注意
    document.body.addEventListener('click', function(e) {
        // Add Row
        const addBtn = e.target.closest('#add-process-row, #add-expense-row, #add-contact-row');
        if (addBtn) {
            let tableBody, newRowHTML; // table ではなく tbody を直接取得する方が効率的
            const id = addBtn.id;
            if (id === 'add-process-row') {
                tableBody = document.getElementById('process-table')?.getElementsByTagName('tbody')[0]; // Optional chaining
                if (tableBody) {
                    const rowCount = tableBody.rows.length + 1;
                    newRowHTML = `<td>${rowCount}</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td class="col-actions"><div class="table-button-group"><button type="button" class="button button-danger">削除</button></div></td>`; // button type指定
                }
            } else if (id === 'add-expense-row') {
                tableBody = document.getElementById('expense-table')?.getElementsByTagName('tbody')[0]; // Optional chaining
                if (tableBody) {
                    newRowHTML = `<td><input type="date"></td><td><input type="text"></td><td><input type="text"></td><td><input type="number"></td><td class="col-actions"><div class="table-button-group"><button type="button" class="button button-danger">削除</button></div></td>`; // button type指定
                }
            } else if (id === 'add-contact-row') {
                tableBody = document.getElementById('contact-person-table')?.getElementsByTagName('tbody')[0]; // Optional chaining
                if (tableBody) {
                    newRowHTML = `<td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td class="col-actions"><div class="table-button-group"><button type="button" class="button button-danger">削除</button></div></td>`; // button type指定
                }
            }

            if (tableBody && newRowHTML) { // tbodyとHTMLが取得できた場合のみ挿入
                const newRow = tableBody.insertRow();
                newRow.innerHTML = newRowHTML;
            }
        }

        // Delete Row (setupTableInteraction と競合しないように)
        const deleteBtn = e.target.closest('.button-danger');
        if (deleteBtn) {
            const row = deleteBtn.closest('tr');
            const tbody = row?.closest('tbody'); // Optional chaining
            // setupTableInteraction が管理する tbody (ID付き) 以外、かつ特定の追加ボタンで追加された行を対象とする
            if (tbody && !tbody.id && (tbody.closest('#process-table') || tbody.closest('#expense-table') || tbody.closest('#contact-person-table'))) {
                 const tableBody = row.parentNode;
                 row.remove();
                 // Renumber rows if it's the process table
                 if (tableBody.parentElement?.id === 'process-table') { // Optional chaining
                     Array.from(tableBody.rows).forEach((r, i) => {
                         if (r.cells[0]) { // cells[0] が存在するか確認
                             r.cells[0].textContent = i + 1;
                         }
                     });
                 }
            }
        }
    });

    // --- Project Delivery/Billing Status ---
    const deliveryDateInput = document.getElementById('delivery-date'); // 変数名を変更
    const billingDateInput = document.getElementById('billing-date'); // 変数名を変更

    if (deliveryDateInput) {
        const deliveryStatusText = document.getElementById('delivery-status-text');
        const clearDeliveryDateButton = document.getElementById('clear-delivery-date');

        if (deliveryStatusText) { // 要素の存在確認
            deliveryDateInput.addEventListener('change', function() {
                deliveryStatusText.textContent = this.value ? '納品済' : '未納品';
            });
            // 初期表示も更新
             deliveryStatusText.textContent = deliveryDateInput.value ? '納品済' : '未納品';
        }
        if (clearDeliveryDateButton) { // 要素の存在確認
            clearDeliveryDateButton.addEventListener('click', () => {
                deliveryDateInput.value = '';
                // changeイベントを手動で発火させてステータス表示も更新
                deliveryDateInput.dispatchEvent(new Event('change'));
            });
        }
    }

    if (billingDateInput) {
        const paymentStatusText = document.getElementById('payment-status-text');
        const clearBillingDateButton = document.getElementById('clear-billing-date');

        if (paymentStatusText) { // 要素の存在確認
            billingDateInput.addEventListener('change', function() {
                paymentStatusText.textContent = this.value ? '請求済' : '未請求';
            });
             // 初期表示も更新
             paymentStatusText.textContent = billingDateInput.value ? '請求済' : '未請求';
        }
        if (clearBillingDateButton) { // 要素の存在確認
            clearBillingDateButton.addEventListener('click', () => {
                billingDateInput.value = '';
                // changeイベントを手動で発火させてステータス表示も更新
                billingDateInput.dispatchEvent(new Event('change'));
            });
        }
    }

    // --- Initial Page Load ---
    // ページが存在するか確認してから表示
    const initialHash = window.location.hash;
    let initialPageId = initialHash ? initialHash.substring(1) : '';
    const validInitialPage = document.getElementById(initialPageId);

    // 有効なページIDがない場合や、対応する要素がない場合はデフォルト（最初のページまたは'members'）にフォールバック
    if (!initialPageId || !validInitialPage) {
        initialPageId = pages[0] ? pages[0].id : 'members'; // 最初のページID、なければ'members'
    }
    window.showPage(initialPageId); // グローバルになったshowPageを呼び出す


    // ページ読み込み時に、対応するアコーディオンメニューを開いておく (エラーチェック追加)
    if (initialPageId === 'skills' || initialPageId === 'skill-map') {
        const skillAccordion = document.querySelector('a[href="#skills"].accordion-toggle'); // より具体的にセレクタを指定
        if (skillAccordion) {
            skillAccordion.classList.add('active');
            const skillSubmenu = skillAccordion.nextElementSibling;
            if (skillSubmenu) { // nextElementSibling が存在するか確認
                skillSubmenu.style.display = 'block';
            }
        }
    }
}); // End of DOMContentLoaded listener


// --- テンプレートを用いたテーブル行追加・削除 (グローバルスコープ) ---
window.setupTableRowAdder = function(tbodyId, addButtonId, templateId) {
    const tbody = document.getElementById(tbodyId);
    const addButton = document.getElementById(addButtonId);
    const template = document.getElementById(templateId);

    if (!tbody || !addButton || !template) {
        console.warn('Table adder elements not found for', tbodyId, addButtonId, templateId);
        return;
    }

    // 行追加ボタンのイベントリスナー（DOMContentLoaded後に設定されるように修正）
    document.addEventListener('DOMContentLoaded', () => {
         // addButtonが再度取得できるか確認（動的に生成される場合など）
         const currentAddButton = document.getElementById(addButtonId);
         if (currentAddButton) {
             currentAddButton.addEventListener('click', () => {
                 const clone = template.content.cloneNode(true);
                 tbody.appendChild(clone);
             });
         }
    });


    // 行削除 (イベント委任 - こちらはtbodyが存在すればDOMContentLoaded後でなくても可)
    tbody.addEventListener('click', (e) => {
        // button-danger かつ、tbody の直下の子 tr 内にあるもの
        const deleteButton = e.target.closest('tr > td > .table-button-group > .button-danger, tr > td > .button-danger');

        // deleteButton が存在し、かつそれが所属する <tr> が対象の <tbody> 配下にあることを確認
        if (deleteButton && tbody.contains(deleteButton.closest('tr'))) {
            // .closest('tr') が null でないことを確認してから remove を呼び出す
            const rowToRemove = deleteButton.closest('tr');
            if (rowToRemove) {
                 rowToRemove.remove();
            }
        }
    });
}

// --- リアルタイム検索 (グローバルスコープ) ---
window.setupRealtimeSearch = function(inputId, tbodyId) {
    // イベントリスナーはDOMContentLoaded内で設定
     document.addEventListener('DOMContentLoaded', () => {
        const searchInput = document.getElementById(inputId);
        const tableBody = document.getElementById(tbodyId);
        if (!searchInput || !tableBody) {
            console.warn(`Search elements not found: inputId=${inputId}, tbodyId=${tbodyId}`);
            return;
        }

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase().trim(); // trim() を追加
            const rows = tableBody.getElementsByTagName('tr');

            Array.from(rows).forEach(row => {
                // 特殊な行を除外
                if (row.classList.contains('add-root-row')) return;

                // 検索対象のテキストを取得 (input または td の内容)
                let cellText = '';
                const inputInCell = row.querySelector('td:first-child input[type="text"]'); // input[type="text"] に限定
                const firstCell = row.querySelector('td:first-child');

                if (inputInCell) {
                    cellText = inputInCell.value.toLowerCase();
                } else if (firstCell) {
                    cellText = firstCell.textContent?.toLowerCase().trim() || ''; // Optional chaining と trim()
                }

                // 表示・非表示を切り替え
                if (cellText.includes(searchTerm)) {
                    row.style.display = ''; // デフォルト表示 (table-row など)
                } else {
                    row.style.display = 'none';
                }
            });
        });
     });
}

