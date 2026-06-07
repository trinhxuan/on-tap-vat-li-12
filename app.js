function checkPass() {
    var password = document.getElementById("passInput").value;
    if (password === "Trinh123") { // Thầy nhớ đổi mật khẩu tại đây
        document.getElementById("login-overlay").style.display = "none";
    } else {
        alert("Sai mật khẩu rồi! Các em thử lại nhé.");
    }
}
document.addEventListener('DOMContentLoaded', () => {
    let currentTopic = 'nhiet';
    let currentView = 'theory';

    const mainTabs = document.querySelectorAll('.tab-btn');
    const subTabs = document.querySelectorAll('.sub-tab-btn');
    const contentArea = document.getElementById('contentArea');

    // Khởi tạo ứng dụng
    renderContent();

    // Lắng nghe sự kiện chuyển chuyên đề
    mainTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            mainTabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            currentTopic = e.target.dataset.topic;
            renderContent();
        });
    });

    // Lắng nghe sự kiện chuyển chế độ xem (Lý thuyết / Bài tập)
    subTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            subTabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            currentView = e.target.dataset.view;
            renderContent();
        });
    });

  function renderContent() {
        const data = physicsData[currentTopic];
        if (currentView === 'theory') {
            contentArea.innerHTML = `<div class="theory-content">${data.theory}</div>`;
        } else {
            renderQuizzes(data.quizzes);
        }
        
        // Đảm bảo MathJax đối tượng window đã tồn tại trước khi typeset
        if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
            MathJax.typesetPromise([contentArea]).catch((err) => console.log('MathJax error:', err.message));
        } else {
            // Nếu load chậm, set một khoảng lùi nhỏ
            setTimeout(() => {
                if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
                    MathJax.typesetPromise([contentArea]);
                }
            }, 500);
        }
    }

   // Hàm render bài tập (Đã thêm tính năng tự động dọn dẹp chữ trùng lặp)
    window.renderQuizzes = function(quizzes) {
        if (!quizzes || quizzes.length === 0) {
            contentArea.innerHTML = '<div class="question-card"><p>Dữ liệu bài tập đang được cập nhật...</p></div>';
            return;
        }

        let html = '<div class="quiz-intro"><h3>Bài tập trắc nghiệm Đúng/Sai</h3><p>Hãy đọc kỹ từng phát biểu và chọn đáp án của bạn.</p></div>';
        
        html += quizzes.map((quiz, index) => {
            // Tự động cắt bỏ chữ "Câu X:" bị lặp ở đầu đề bài (nếu có)
            let cleanContext = quiz.context.replace(/^Câu\s*\d+\s*[:\-\.]*\s*/i, '');

            return `
            <div class="question-card" id="card_${quiz.id}">
                <div class="question-context">
                    <span class="q-badge">Câu ${index + 1}</span> ${cleanContext}
                </div>
                <div class="statements-container">
                    ${quiz.statements.map(stmt => {
                        // Tự động cắt bỏ chữ "a)", "a.", "A)" bị lặp ở đầu các ý (nếu có)
                        let cleanText = stmt.text.replace(/^[a-d]\s*[)\.]\s*/i, '');
                        
                        return `
                        <div class="statement" id="stmt_${quiz.id}_${stmt.id}">
                            <div class="stmt-row">
                                <div class="statement-text"><strong>${stmt.id})</strong> ${cleanText}</div>
                                <div class="options">
                                    <label class="opt-btn btn-true">
                                        <input type="radio" name="ans_${quiz.id}_${stmt.id}" value="true">
                                        <span>Đúng</span>
                                    </label>
                                    <label class="opt-btn btn-false">
                                        <input type="radio" name="ans_${quiz.id}_${stmt.id}" value="false">
                                        <span>Sai</span>
                                    </label>
                                </div>
                            </div>
                            <div class="stmt-explanation" id="exp_${quiz.id}_${stmt.id}">
                            </div>
                        </div>
                        `;
                    }).join('')}
                </div>
                <button class="btn-check" onclick="checkAnswers('${quiz.id}')">Kiểm tra kết quả</button>
                <div class="result-summary" id="summary_${quiz.id}"></div>
            </div>
            `;
        }).join('');
        
        contentArea.innerHTML = html;
    };
    // Logic kiểm tra và hiển thị giải thích
    window.checkAnswers = function(quizId) {
    const quizData = physicsData[currentTopic].quizzes.find(q => q.id === quizId);
    let allAnswered = true;
    let correctCount = 0;

    quizData.statements.forEach(stmt => {
        const selected = document.querySelector(`input[name="ans_${quizId}_${stmt.id}"]:checked`);
        const stmtDiv = document.getElementById(`stmt_${quizId}_${stmt.id}`);
        const expDiv = document.getElementById(`exp_${quizId}_${stmt.id}`); // Bắt thẻ giải thích
        
        stmtDiv.classList.remove('correct-ans', 'wrong-ans');

        if (!selected) {
            allAnswered = false;
        } else {
            const isUserTrue = selected.value === 'true';
            const isCorrect = (isUserTrue === stmt.isTrue); // Kiểm tra đúng/sai

            // --- ĐOẠN MỚI ĐƯỢC THÊM VÀO ---
            // Định nghĩa nội dung thông báo
            let statusText = isCorrect 
                ? '<strong style="color: #155724;">✔ Chính xác!</strong>' 
                : '<strong style="color: #721c24;">✘ Không chính xác!</strong>';
            // -------------------------------

            if (isCorrect) {
                stmtDiv.classList.add('correct-ans');
                correctCount++;
            } else {
                stmtDiv.classList.add('wrong-ans');
            }
            
            // Gán thông báo trạng thái kèm lời giải vào expDiv
            expDiv.innerHTML = `${statusText} <br> <strong>💡 Giải thích:</strong> ${stmt.exp || "Chưa có lời giải chi tiết cho ý này."}`;
            expDiv.classList.add('show');
        }
    });

    if (!allAnswered) {
        alert("Vui lòng chọn Đúng/Sai cho tất cả các ý (a, b, c, d) trước khi nộp bài!");
        return;
    }

    // Hiện tổng kết điểm
    const summaryDiv = document.getElementById(`summary_${quizId}`);
    summaryDiv.style.display = "block";
    if (correctCount === 4) {
        summaryDiv.innerHTML = `🎉 Xuất sắc! Bạn trả lời đúng <strong>4/4</strong> ý.`;
        summaryDiv.className = "result-summary perfect";
    } else {
        summaryDiv.innerHTML = `Vừa rồi bạn trả lời đúng <strong>${correctCount}/4</strong> ý. Hãy xem lại giải thích chi tiết ở các câu sai nhé!`;
        summaryDiv.className = "result-summary needs-review";
    }

    if (window.MathJax) {
        MathJax.typesetPromise().catch((err) => console.log(err.message));
    }
};
});