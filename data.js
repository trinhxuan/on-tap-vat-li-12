const physicsData = {
    nhiet: {
        theory: `
            <h2>Kiến thức trọng tâm: Vật lí nhiệt</h2>
            
            <div class="lesson-card">
                <h3>Bài 1. Cấu trúc của chất. Sự chuyển thể</h3>
                
                <div class="concept-box">
                    <h4>1. Mô hình động học phân tử</h4>
                    <ul>
                        <li><strong>Cấu tạo:</strong> Các chất được cấu tạo từ các hạt riêng biệt (phân tử, nguyên tử).</li>
                        <li><strong>Chuyển động:</strong> Chuyển động nhiệt hỗn loạn không ngừng. Nhiệt độ càng cao, chuyển động càng nhanh.</li>
                        <li><strong>Tương tác:</strong> Giữa các phân tử luôn tồn tại lực hút và lực đẩy phân tử.</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. So sánh 3 thể của vật chất</h4>
                    <div class="table-responsive">
                        <table class="styled-table">
                            <thead>
                                <tr>
                                    <th>Đặc điểm</th>
                                    <th>Thể Rắn</th>
                                    <th>Thể Lỏng</th>
                                    <th>Thể Khí</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Khoảng cách phân tử</strong></td>
                                    <td>Rất nhỏ</td>
                                    <td>Nhỏ</td>
                                    <td>Rất lớn</td>
                                </tr>
                                <tr>
                                    <td><strong>Lực tương tác</strong></td>
                                    <td>Rất mạnh</td>
                                    <td>Yếu hơn thể rắn</td>
                                    <td>Rất yếu (bỏ qua)</td>
                                </tr>
                                <tr>
                                    <td><strong>Chuyển động</strong></td>
                                    <td>Dao động quanh vị trí cân bằng cố định</td>
                                    <td>Dao động quanh VTCB di chuyển được</td>
                                    <td>Hỗn loạn về mọi phía</td>
                                </tr>
                                <tr>
                                    <td><strong>Hình dạng & Thể tích</strong></td>
                                    <td>Xác định</td>
                                    <td>Hình dạng của bình chứa, thể tích xác định</td>
                                    <td>Không xác định (chiếm toàn bộ bình)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="concept-box">
                    <h4>3. Sự chuyển thể</h4>
                    <ul>
                        <li><strong>Nóng chảy & Đông đặc:</strong> Chuyển qua lại giữa Rắn $\\leftrightarrow$ Lỏng.</li>
                        <li><strong>Hóa hơi & Ngưng tụ:</strong> Chuyển qua lại giữa Lỏng $\\leftrightarrow$ Khí.</li>
                    </ul>
                    <div class="highlight-box golden-note">
                        <strong>Lưu ý "Vàng":</strong> Trong suốt quá trình chuyển thể (ví dụ: đang nóng chảy hoặc đang sôi), nhiệt độ của chất tinh khiết không thay đổi dù vẫn tiếp tục cung cấp nhiệt.
                    </div>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Học sinh thường cho rằng khi đang đun sôi hoặc nóng chảy, nhiệt độ của khối chất sẽ tiếp tục tăng do vẫn được cấp nhiệt liên tục.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Ghi nhớ nguyên tắc Lưu ý Vàng: <em>"Trong pha chuyển thể của chất tinh khiết, nhiệt độ tuyệt đối không thay đổi"</em>. Nhiệt lượng lúc này dùng để phá vỡ cấu trúc tinh thể/liên kết phân tử, không làm tăng động năng.</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 2. Nội năng. Định luật I của nhiệt động lực học</h3>
                
                <div class="concept-box">
                    <h4>1. Nội năng ($U$)</h4>
                    <ul>
                        <li><strong>Khái niệm:</strong> Là tổng động năng chuyển động nhiệt và thế năng tương tác của các phân tử cấu tạo nên vật.</li>
                        <li><strong>Sự phụ thuộc:</strong> Phụ thuộc vào nhiệt độ ($T$) và thể tích ($V$). Riêng với khí lí tưởng, nội năng chỉ phụ thuộc vào nhiệt độ.</li>
                        <li><strong>Cách làm thay đổi nội năng:</strong> Thực hiện công hoặc Truyền nhiệt.</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Định luật I Nhiệt động lực học</h4>
                    <p><strong>Biểu thức:</strong></p>
                    <div class="formula-box">
                        $$\\Delta U = A + Q$$
                    </div>
                    <p><strong>Quy ước dấu (Cực kỳ quan trọng để làm bài tập):</strong></p>
                    <div class="table-responsive">
                        <table class="styled-table">
                            <thead>
                                <tr>
                                    <th>Đại lượng</th>
                                    <th>Giá trị dương (>0)</th>
                                    <th>Giá trị âm (<0)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>$Q$</strong></td>
                                    <td>Hệ nhận nhiệt lượng</td>
                                    <td>Hệ tỏa nhiệt lượng</td>
                                </tr>
                                <tr>
                                    <td><strong>$A$</strong></td>
                                    <td>Hệ nhận công (bị nén)</td>
                                    <td>Hệ thực hiện công (giãn nở)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Áp dụng sai dấu của $A$ và $Q$, đặc biệt hay nhầm lẫn câu chữ giữa "hệ thực hiện công" và "hệ nhận công".</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Áp dụng "Quy tắc túi tiền": <br> - Tiền đi vào (Hệ nhận nhiệt $Q > 0$, nhận công $A > 0$).<br> - Tiền đi ra (Hệ tỏa nhiệt $Q < 0$, thực hiện công $A < 0$).</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 3. Nhiệt độ. Thang nhiệt độ – nhiệt kế</h3>
                
                <div class="concept-box">
                    <h4>1. Chiều truyền nhiệt</h4>
                    <ul>
                        <li>Nhiệt lượng tự phát truyền từ vật có nhiệt độ cao sang vật có nhiệt độ thấp.</li>
                        <li>Quá trình truyền nhiệt dừng lại khi hai vật đạt trạng thái cân bằng nhiệt (cùng nhiệt độ).</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Các thang nhiệt độ</h4>
                    <ul>
                        <li><strong>Thang Celsius ($^\\circ\\text{C}$):</strong> Mốc nước đá đang tan là $0^\\circ\\text{C}$, nước sôi ở áp suất tiêu chuẩn là $100^\\circ\\text{C}$.</li>
                        <li><strong>Thang Kelvin (K):</strong> Là thang nhiệt độ tuyệt đối.</li>
                        <li><strong>Nhiệt độ "Không tuyệt đối" (0 K):</strong> Là trạng thái giới hạn mà mọi phân tử ngừng chuyển động nhiệt, động năng bằng 0, thế năng tối thiểu.</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>3. Chuyển đổi nhiệt độ</h4>
                    <p><strong>Công thức:</strong></p>
                    <div class="formula-box">
                        $$T = t + 273,15$$
                    </div>
                    <div class="highlight-box">
                        <strong>Mẹo ghi nhớ:</strong> Độ biến thiên nhiệt độ trên hai thang đo là như nhau: $\\Delta T = \\Delta t$.
                    </div>
                </div>
            </div>

            <div class="lesson-card">
                <h3>Bài 4. Nhiệt dung riêng</h3>
                <div class="concept-box">
                    <ul>
                        <li><strong>Ý nghĩa:</strong> Đặc trưng cho khả năng thu hoặc tỏa nhiệt của một chất khi nhiệt độ thay đổi.</li>
                        <li><strong>Định nghĩa:</strong> Là nhiệt lượng cần cung cấp để 1 kg chất đó tăng thêm 1 K (hoặc $1^\\circ\\text{C}$).</li>
                    </ul>
                    <p><strong>Công thức tính nhiệt lượng:</strong></p>
                    <div class="formula-box">
                        $$Q = mc\\Delta T$$
                    </div>
                    <p><em>Trong đó:</em></p>
                    <ul>
                        <li>$Q$: Nhiệt lượng thu vào / tỏa ra (J)</li>
                        <li>$m$: Khối lượng vật (kg)</li>
                        <li>$c$: Nhiệt dung riêng (J/kg.K)</li>
                        <li>$\\Delta T$: Độ biến thiên nhiệt độ (K hoặc $^\\circ\\text{C}$)</li>
                    </ul>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Cộng thêm 273,15 vào cả công thức tính <strong>độ biến thiên</strong> nhiệt độ ($\\Delta T$) khi tính nhiệt lượng.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Phân biệt rõ: Giá trị nhiệt độ thì lệch nhau 273,15, nhưng <strong>độ biến thiên thì bằng nhau</strong> ($\\Delta T = \\Delta t$). Khi giải bài toán tính $Q$, tăng $10^\\circ\\text{C}$ chính là tăng $10\\text{ K}$, KHÔNG ĐƯỢC cộng thêm 273,15.</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 5. Nhiệt nóng chảy riêng</h3>
                <div class="concept-box">
                    <ul>
                        <li><strong>Ý nghĩa:</strong> Đặc trưng cho khả năng thay đổi trạng thái từ Rắn sang Lỏng của vật liệu (rất quan trọng trong ngành luyện kim, đúc).</li>
                        <li><strong>Định nghĩa:</strong> Là nhiệt lượng cần cung cấp cho 1 kg chất rắn ở nhiệt độ nóng chảy để nó chuyển hoàn toàn sang thể lỏng.</li>
                    </ul>
                    <p><strong>Công thức tính nhiệt lượng nóng chảy:</strong></p>
                    <div class="formula-box">
                        $$Q = \\lambda m$$
                    </div>
                    <p><em>Trong đó:</em></p>
                    <ul>
                        <li>$\\lambda$: Nhiệt nóng chảy riêng (J/kg)</li>
                        <li>$m$: Khối lượng chất rắn (kg)</li>
                    </ul>
                </div>
            </div>

            <div class="lesson-card">
                <h3>Bài 6. Nhiệt hoá hơi riêng</h3>
                <div class="concept-box">
                    <ul>
                        <li><strong>Ý nghĩa:</strong> Đặc trưng cho lượng nhiệt cần thiết để chuyển chất từ Lỏng sang Khí. (Nước có nhiệt hóa hơi rất lớn, ứng dụng để làm mát cơ thể khi đổ mồ hôi).</li>
                        <li><strong>Định nghĩa:</strong> Là nhiệt lượng cần cung cấp cho 1 kg chất lỏng hóa hơi hoàn toàn ở một nhiệt độ xác định.</li>
                    </ul>
                    <p><strong>Công thức tính nhiệt lượng hóa hơi:</strong></p>
                    <div class="formula-box">
                        $$Q = L m$$
                    </div>
                    <p><em>Trong đó:</em></p>
                    <ul>
                        <li>$L$: Nhiệt hóa hơi riêng (J/kg)</li>
                        <li>$m$: Khối lượng khối chất lỏng (kg)</li>
                    </ul>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc (Bài 5 & 6):</strong> Dùng nhầm công thức $Q = mc\\Delta T$ cho quá trình vật đang nóng chảy hoặc đang sôi.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Nhìn vào trạng thái của bài toán: <br>- Đang <strong>thay đổi nhiệt độ</strong> (nóng lên/nguội đi) $\\rightarrow$ Dùng $Q = mc\\Delta T$.<br>- Đang <strong>chuyển thể</strong> (đá đang tan, nước đang sôi ở $100^\\circ\\text{C}$) $\\rightarrow$ Dùng $Q = \\lambda m$ hoặc $Q = Lm$.</div>
            </div>
        `,
        quizzes: [
            {
                id: "nhiet_1",
                context: "Câu 1 (Mô hình động học phân tử). Xét một khối nước đá (đang ở nhiệt độ dưới 0°C) được cung cấp nhiệt lượng để nóng chảy hoàn toàn thành nước lỏng.",
                statements: [
                    { id: "a", text: "a) Ở thể rắn (nước đá), các phân tử nước dao động nhiệt xung quanh các vị trí cân bằng cố định.", isTrue: true, exp: "Đúng (Nhận biết định nghĩa thể rắn)." },
                    { id: "b", text: "b) Trong quá trình chuyển từ thể rắn sang thể lỏng, khoảng cách trung bình giữa các phân tử nước tăng lên hàng nghìn lần giống như khi chuyển sang thể khí.", isTrue: false, exp: "Sai (Khoảng cách phân tử lỏng và rắn xấp xỉ nhau, chỉ ở thể khí mới tăng lên hàng nghìn lần)." },
                    { id: "c", text: "c) Lực tương tác giữa các phân tử ở thể lỏng nhỏ hơn so với thể rắn nhưng vẫn đủ lớn để giữ các phân tử không dời xa nhau hoàn toàn.", isTrue: true, exp: "Đúng (Bản chất lực tương tác phân tử)." },
                    { id: "d", text: "d) Việc mô tả cấu trúc rắn, lỏng, khí dựa trên sự chuyển động và khoảng cách giữa các hạt gọi là mô hình động học phân tử.", isTrue: true, exp: "Đúng (Khái niệm mô hình động học phân tử)." }
                ]
            },
            {
                id: "nhiet_2",
                context: "Câu 2 (Sự chuyển thể). Đun sôi một ấm nước tinh khiết ở áp suất khí quyển tiêu chuẩn (1 atm).",
                statements: [
                    { id: "a", text: "a) Nước chỉ có thể bay hơi khi đạt đến nhiệt độ 100°C.", isTrue: false, exp: "Sai (Sự bay hơi xảy ra ở mọi nhiệt độ)." },
                    { id: "b", text: "b) Sự hóa hơi của nước bao gồm hai hình thức: sự bay hơi (xảy ra trên bề mặt) và sự sôi (xảy ra cả bên trong lòng chất lỏng).", isTrue: true, exp: "Đúng (Phân loại sự hóa hơi)." },
                    { id: "c", text: "c) Khi nước đang sôi, mặc dù vẫn được cung cấp nhiệt lượng nhưng nhiệt độ của khối nước không thay đổi.", isTrue: true, exp: "Đúng (Bản chất nhiệt độ trong pha chuyển thể)." },
                    { id: "d", text: "d) Nếu đem ấm nước này lên đỉnh núi cao (nơi có áp suất khí quyển thấp hơn 1 atm) thì nước sẽ sôi ở nhiệt độ lớn hơn 100°C.", isTrue: false, exp: "Sai (Áp suất giảm thì nhiệt độ sôi giảm, nước sẽ sôi ở nhiệt độ nhỏ hơn 100°C)." }
                ]
            },
            {
                id: "nhiet_3",
                context: "Câu 3 (Nội năng). Xét một khối khí lý tưởng được chứa trong một xilanh kín có khối lượng không đổi.",
                statements: [
                    { id: "a", text: "a) Nội năng của khối khí là tổng động năng chuyển động nhiệt của các phân tử và thế năng tương tác giữa chúng.", isTrue: true, exp: "Đúng (Định nghĩa nội năng)." },
                    { id: "b", text: "b) Vì là khí lý tưởng nên thế năng tương tác giữa các phân tử khí bằng không.", isTrue: true, exp: "Đúng (Mô hình khí lý tưởng bỏ qua tương tác khi không va chạm)." },
                    { id: "c", text: "c) Nội năng của khối khí lý tưởng này phụ thuộc vào cả nhiệt độ và thể tích của khối khí.", isTrue: false, exp: "Sai (Nội năng khí lý tưởng chỉ phụ thuộc vào nhiệt độ do thế năng bằng 0)." },
                    { id: "d", text: "d) Có thể làm tăng nội năng của khối khí bằng cách thực hiện công (nén khí) hoặc truyền nhiệt lượng cho khí.", isTrue: true, exp: "Đúng (Hai cách làm thay đổi nội năng)." }
                ]
            },
            {
                id: "nhiet_4",
                context: "Câu 4 (Định luật 1 Nhiệt động lực học - Lý thuyết). Áp dụng định luật 1 Nhiệt động lực học ($\\Delta U = A + Q$) cho một hệ nhiệt động.",
                statements: [
                    { id: "a", text: "a) $\\Delta U$ là độ biến thiên nội năng của hệ.", isTrue: true, exp: "Đúng (Biết đại lượng)." },
                    { id: "b", text: "b) Khi hệ truyền nhiệt cho môi trường xung quanh thì quy ước $Q > 0$.", isTrue: false, exp: "Sai (Hệ truyền nhiệt/tỏa nhiệt thì $Q < 0$)." },
                    { id: "c", text: "c) Khi hệ thực hiện công lên môi trường thì quy ước $A < 0$.", isTrue: true, exp: "Đúng (Hệ sinh công/thực hiện công thì $A < 0$)." },
                    { id: "d", text: "d) Nếu hệ thực hiện một chu trình kín (trạng thái cuối trùng với trạng thái đầu) thì tổng nhiệt lượng và công hệ trao đổi bằng không ($A + Q = 0$).", isTrue: true, exp: "Đúng (Chu trình kín $\\Delta U = 0 \\Rightarrow A + Q = 0$)." }
                ]
            },
            {
                id: "nhiet_5",
                context: "Câu 5 (Định luật 1 Nhiệt động lực học - Tính toán). Người ta cung cấp cho khối khí trong xilanh một nhiệt lượng 150 J. Khối khí dãn nở, đẩy pit-tông lên và thực hiện một công là 40 J.",
                statements: [
                    { id: "a", text: "a) Nhiệt lượng khí nhận được là $Q$ = 150 J.", isTrue: true, exp: "Đúng (Hệ nhận nhiệt)." },
                    { id: "b", text: "b) Công mà khối khí nhận được là $A$ = 40 J.", isTrue: false, exp: "Sai (Khí thực hiện công nên $A$ = -40 J)." },
                    { id: "c", text: "c) Độ biến thiên nội năng của khối khí là $\\Delta U$ = 190 J.", isTrue: false, exp: "Sai (Vận dụng biểu thức: $\\Delta U = 150 + (-40)$ = 110 J)." },
                    { id: "d", text: "d) Trong quá trình này, nội năng của khối khí đã tăng lên.", isTrue: true, exp: "Đúng (Vì $\\Delta U$ = 110 J > 0 nên nội năng tăng)." }
                ]
            },
            {
                id: "nhiet_6",
                context: "Câu 6 (Chiều truyền nhiệt). Cho hai vật A và B bằng kim loại, ban đầu cách ly nhau. Nội năng của vật A lớn hơn vật B, nhưng nhiệt độ của vật A (30°C) lại thấp hơn vật B (50°C). Đưa hai vật tiếp xúc nhiệt với nhau.",
                statements: [
                    { id: "a", text: "a) Chiều truyền năng lượng nhiệt luôn đi từ vật có nội năng lớn sang vật có nội năng nhỏ.", isTrue: false, exp: "Sai (Nhiệt truyền từ vật có nhiệt độ cao sang thấp, không phụ thuộc nội năng lớn hay nhỏ)." },
                    { id: "b", text: "b) Năng lượng nhiệt sẽ truyền từ vật B sang vật A.", isTrue: true, exp: "Đúng (B truyền sang A vì $T_B > T_A$)." },
                    { id: "c", text: "c) Khi hai vật đạt cùng nhiệt độ (cân bằng nhiệt) thì sẽ không còn sự truyền năng lượng nhiệt vĩ mô giữa chúng.", isTrue: true, exp: "Đúng (Bản chất của trạng thái cân bằng nhiệt)." },
                    { id: "d", text: "d) Nhiệt độ cân bằng của hệ chắc chắn là 40°C.", isTrue: false, exp: "Sai (Nhiệt độ cân bằng phụ thuộc vào khối lượng và nhiệt dung riêng của từng vật, không bắt buộc là trung bình cộng)." }
                ]
            },
            {
                id: "nhiet_7",
                context: "Câu 7 (Thang nhiệt độ Celsius và Kelvin). Khi khảo sát các thang đo nhiệt độ.",
                statements: [
                    { id: "a", text: "a) Trong thang Celsius, nhiệt độ nước đá đang tan ở áp suất tiêu chuẩn được quy ước là 0°C.", isTrue: true, exp: "Đúng (Mốc thang Celsius)." },
                    { id: "b", text: "b) Một độ chia (1°C) trong thang Celsius bằng 1/100 khoảng cách giữa nhiệt độ tan chảy và nhiệt độ sôi của nước tinh khiết ở áp suất tiêu chuẩn.", isTrue: true, exp: "Đúng (Định nghĩa độ chia)." },
                    { id: "c", text: "c) Công thức chuyển đổi từ độ C sang độ K là: $T = t + 273,15$.", isTrue: true, exp: "Đúng (Công thức chuyển đổi chuẩn)." },
                    { id: "d", text: "d) Nếu nhiệt độ phòng tăng từ 25°C lên 30°C thì theo thang Kelvin, nhiệt độ phòng đã tăng thêm 278,15 K.", isTrue: false, exp: "Sai (Bẫy biến thiên: $\\Delta T = \\Delta t$ = 5 K, không cộng 273,15 vào độ biến thiên)." }
                ]
            },
            {
                id: "nhiet_8",
                context: "Câu 8 (Nhiệt độ không tuyệt đối). Khái niệm nhiệt độ không tuyệt đối là một giới hạn quan trọng trong vật lí.",
                statements: [
                    { id: "a", text: "a) Nhiệt độ không tuyệt đối có giá trị bằng 0 K (tương đương -273,15°C).", isTrue: true, exp: "Đúng (Trị số nhiệt độ không tuyệt đối)." },
                    { id: "b", text: "b) Tại nhiệt độ này, động năng chuyển động nhiệt của các phân tử bằng không và thế năng của chúng là tối thiểu.", isTrue: true, exp: "Đúng (Bản chất vi mô tại 0 K)." },
                    { id: "c", text: "c) Mọi thang nhiệt độ (Celsius, Kelvin, Fahrenheit) đều không thể có giá trị âm.", isTrue: false, exp: "Sai (Thang Celsius và Fahrenheit có giá trị âm, chỉ thang Kelvin là không âm)." },
                    { id: "d", text: "d) Bằng các máy làm lạnh hiện đại nhất, con người đã đưa được vật chất đạt đến chính xác nhiệt độ 0 K.", isTrue: false, exp: "Sai (0 K là giới hạn lý thuyết không thể đạt tới theo nguyên lý 3 Nhiệt động lực học)." }
                ]
            },
            {
                id: "nhiet_9",
                context: "Câu 9 (Nhiệt dung riêng - Định nghĩa & Toán học). Một kỹ sư đang tra cứu nhiệt dung riêng của nhôm là $c$ = 880 J/(kg.K).",
                statements: [
                    { id: "a", text: "a) Con số này cho biết cần cung cấp 880 J để 1 kg nhôm tăng thêm 1 K.", isTrue: true, exp: "Đúng (Định nghĩa vật lý)." },
                    { id: "b", text: "b) Đơn vị của nhiệt dung riêng có thể viết tương đương là J/(kg.°C).", isTrue: true, exp: "Đúng (Vì $\\Delta T = \\Delta t$ nên đơn vị tương đương)." },
                    { id: "c", text: "c) Nhôm có nhiệt dung riêng nhỏ hơn nước (4200 J/(kg.K)), nên cùng khối lượng và cùng nhận một nhiệt lượng, nhôm sẽ tăng nhiệt độ ít hơn nước.", isTrue: false, exp: "Sai ($c$ nhỏ hơn thì $\\Delta t = \\frac{Q}{mc}$ lớn hơn, nhôm sẽ tăng nhiệt độ NHIỀU hơn nước)." },
                    { id: "d", text: "d) Nhiệt lượng cần thiết để làm khối nhôm 2 kg tăng nhiệt độ từ 20°C lên 70°C là 88 kJ.", isTrue: true, exp: "Đúng ($Q = 2 \\times 880 \\times (70 - 20)$ = 88000 J = 88 kJ)." }
                ]
            },
            {
                id: "nhiet_10",
                context: "Câu 10 (Nhiệt nóng chảy riêng). Khi nghiên cứu quá trình đúc một bức tượng đồng, ta xét nhiệt nóng chảy riêng của đồng là $\\lambda = 1,8 \\cdot 10^5$ J/kg.",
                statements: [
                    { id: "a", text: "a) Khái niệm nhiệt nóng chảy riêng áp dụng cho quá trình chất rắn chuyển sang chất khí.", isTrue: false, exp: "Sai (Áp dụng cho quá trình rắn chuyển sang lỏng)." },
                    { id: "b", text: "b) Cần cung cấp nhiệt lượng $1,8 \\cdot 10^5$ J để làm nóng chảy hoàn toàn 1 kg đồng ở nhiệt độ nóng chảy của nó.", isTrue: true, exp: "Đúng (Định nghĩa ý nghĩa vật lý)." },
                    { id: "c", text: "c) Trong suốt quá trình đồng đang nóng chảy, mặc dù được cấp nhiệt liên tục nhưng nhiệt độ của khối đồng không thay đổi.", isTrue: true, exp: "Đúng (Bản chất quá trình chuyển thể của chất kết tinh)." },
                    { id: "d", text: "d) Nhiệt nóng chảy riêng $\\lambda$ của một chất tỉ lệ thuận với khối lượng của chất đó.", isTrue: false, exp: "Sai (Nhiệt nóng chảy riêng là hằng số bản chất của vật liệu, không phụ thuộc khối lượng. Nhiệt lượng nóng chảy $Q = \\lambda \\cdot m$ mới phụ thuộc khối lượng)." }
                ]
            },
            {
                id: "nhiet_11",
                context: "Câu 11 (Nhiệt hóa hơi riêng). Nước có nhiệt hóa hơi riêng rất lớn, $L = 2,26 \\cdot 10^6$ J/kg ở 100°C.",
                statements: [
                    { id: "a", text: "a) Nhiệt hóa hơi riêng là nhiệt lượng cần thiết để làm bay hơi hoàn toàn 1 kg chất lỏng ở nhiệt độ xác định.", isTrue: true, exp: "Đúng (Định nghĩa)." },
                    { id: "b", text: "b) Để làm bay hơi 0,5 kg nước ở 100°C cần một nhiệt lượng là $1,13 \\cdot 10^6$ J.", isTrue: true, exp: "Đúng ($Q = L \\cdot m = 2,26 \\cdot 10^6 \\times 0,5 = 1,13 \\cdot 10^6$ J)." },
                    { id: "c", text: "c) Nhờ nhiệt hóa hơi riêng lớn, sự đổ mồ hôi là một cơ chế làm mát cơ thể con người rất hiệu quả.", isTrue: true, exp: "Đúng (Vận dụng thực tiễn sinh học)." },
                    { id: "d", text: "d) Đơn vị của nhiệt hóa hơi riêng J/kg cho thấy đại lượng này phụ thuộc vào thời gian đun.", isTrue: false, exp: "Sai (Đơn vị không chứa giây, đại lượng này không phụ thuộc thời gian đun)." }
                ]
            },
            {
                id: "nhiet_12",
                context: "Câu 12 (Đồ thị nhiệt độ - thời gian). Đồ thị biểu diễn sự thay đổi nhiệt độ theo thời gian của 1 kg nước đá ban đầu ở -20°C được đun nóng đều đặn bằng một bếp điện. Đồ thị gồm một đoạn xiên lên, một đoạn nằm ngang ở 0°C, và một đoạn xiên lên.",
                statements: [
                    { id: "a", text: "a) Đoạn đồ thị nằm ngang tương ứng với quá trình nước đá đang nóng chảy.", isTrue: true, exp: "Đúng (Nhận biết quá trình qua đồ thị)." },
                    { id: "b", text: "b) Trong đoạn đồ thị nằm ngang, nước tồn tại đồng thời ở cả thể rắn và thể lỏng.", isTrue: true, exp: "Đúng (Trạng thái hỗn hợp trong pha chuyển thể)." },
                    { id: "c", text: "c) Độ dốc của đồ thị (tỉ số $\\Delta T/\\Delta t$) ở giai đoạn chất rắn (nước đá) và giai đoạn chất lỏng (nước) chắc chắn phải bằng nhau.", isTrue: false, exp: "Sai (Bẫy bản chất: Độ dốc tỉ lệ với $1/(mc)$. Vì $c_{\\text{đá}} < c_{\\text{nước}}$ nên độ dốc hai đoạn này khác nhau)." },
                    { id: "d", text: "d) Từ đồ thị, không thể rút ra kết luận gì về nhiệt dung riêng của nước đá và nước lỏng.", isTrue: false, exp: "Sai (Độ dốc đoạn rắn dốc hơn đoạn lỏng chứng tỏ $c_{\\text{đá}} < c_{\\text{nước}}$, hoàn toàn so sánh định tính được)." }
                ]
            },
            {
                id: "nhiet_13",
                context: "Câu 13 (Cân bằng nhiệt - Tính toán tổng hợp). Thả một cục nước đá khối lượng $m_1$ = 200 g ở 0°C vào một cốc chứa $m_2$ = 400 g nước ở 50°C. Bỏ qua sự truyền nhiệt cho cốc và môi trường. (Biết $\\lambda_{\\text{đá}} = 3,4 \\cdot 10^5$ J/kg, $c_{\\text{nước}} = 4200$ J/(kg.K)).",
                statements: [
                    { id: "a", text: "a) Nước nóng sẽ tỏa nhiệt, nước đá sẽ thu nhiệt để nóng chảy.", isTrue: true, exp: "Đúng (Nhận diện vĩ mô)." },
                    { id: "b", text: "b) Nhiệt lượng tối đa mà khối nước 400 g có thể tỏa ra để giảm xuống 0°C là 84000 J.", isTrue: true, exp: "Đúng ($Q_{\\text{tỏa max}} = 0,4 \\times 4200 \\times 50$ = 84000 J)." },
                    { id: "c", text: "c) Nhiệt lượng cần thiết để 200 g nước đá tan chảy hoàn toàn thành nước ở 0°C là 68000 J.", isTrue: true, exp: "Đúng ($Q_{\\text{thu tan}} = \\lambda \\cdot m_1 = 3,4 \\cdot 10^5 \\times 0,2$ = 68000 J)." },
                    { id: "d", text: "d) Sau khi cân bằng nhiệt, trong cốc vẫn còn sót lại một phần nước đá chưa tan hết.", isTrue: false, exp: "Sai (Vì $Q_{\\text{tỏa max}}$ (84000 J) > $Q_{\\text{thu tan}}$ (68000 J), nước đá sẽ tan hết hoàn toàn và nhiệt độ cân bằng lớn hơn 0°C)." }
                ]
            },
            {
                id: "nhiet_14",
                context: "Câu 14 (Vận dụng Định luật 1 vào khí quyển). Không khí ẩm bốc lên cao bị giãn nở, thực hiện công đẩy lớp không khí bên trên (quá trình này diễn ra nhanh coi như cách nhiệt với môi trường xung quanh).",
                statements: [
                    { id: "a", text: "a) Đây là một quá trình biến đổi có thể vận dụng Định luật 1 Nhiệt động lực học.", isTrue: true, exp: "Đúng (Biết phạm vi áp dụng)." },
                    { id: "b", text: "b) Vì khối khí giãn nở sinh công nên $A > 0$.", isTrue: false, exp: "Sai (Bẫy dấu: Khí sinh công nên $A < 0$)." },
                    { id: "c", text: "c) Vì khối khí coi như cách nhiệt ($Q = 0$) nên theo $\\Delta U = A + Q$, nội năng của khối khí giảm.", isTrue: true, exp: "Đúng ($\\Delta U = A < 0$ nên nội năng giảm)." },
                    { id: "d", text: "d) Sự giảm nội năng làm nhiệt độ khí giảm, hơi nước ngưng tụ tạo thành mây.", isTrue: true, exp: "Đúng (Vận dụng giải thích hiện tượng tự nhiên)." }
                ]
            },
            {
                id: "nhiet_15",
                context: "Câu 15 (So sánh bay hơi và sôi).",
                statements: [
                    { id: "a", text: "a) Cả bay hơi và sôi đều là quá trình chuyển từ thể lỏng sang thể khí.", isTrue: true, exp: "Đúng (Khái niệm chung)." },
                    { id: "b", text: "b) Quá trình sôi phụ thuộc vào áp suất trên mặt thoáng: áp suất tăng thì nhiệt độ sôi tăng.", isTrue: true, exp: "Đúng (Bản chất vật lý của sự sôi)." },
                    { id: "c", text: "c) Tốc độ bay hơi của chất lỏng không phụ thuộc vào diện tích mặt thoáng.", isTrue: false, exp: "Sai (Tốc độ bay hơi phụ thuộc diện tích mặt thoáng, nhiệt độ, gió)." },
                    { id: "d", text: "d) Khi luộc khoai, nếu nước đã sôi mạnh thì việc tăng thêm lửa (vặn to ga) sẽ giúp khoai chín nhanh hơn do nhiệt độ nước tăng lên.", isTrue: false, exp: "Sai (Bẫy thực tế: Nước đang sôi thì nhiệt độ kịch trần không đổi, vặn to lửa chỉ làm nước cạn nhanh chứ khoai không chín nhanh hơn)." }
                ]
            },
            {
                id: "nhiet_16",
                context: "Câu 16 (Ước lượng vĩ mô). Một phòng học kín có kích thước 5m x 8m x 3m. Khối lượng riêng của không khí khoảng 1,2 kg/m³ và nhiệt dung riêng đẳng áp của không khí $c \\approx 1000$ J/(kg.K). Bật máy lạnh.",
                statements: [
                    { id: "a", text: "a) Thể tích không khí trong phòng là 120 m³.", isTrue: true, exp: "Đúng ($V = 5 \\times 8 \\times 3$ = 120 m³)." },
                    { id: "b", text: "b) Khối lượng không khí trong phòng được tính bằng công thức $m = \\rho \\cdot V$.", isTrue: true, exp: "Đúng (Công thức liên hệ)." },
                    { id: "c", text: "c) Khối lượng không khí trong phòng là 144 kg.", isTrue: true, exp: "Đúng ($m = 1,2 \\times 120$ = 144 kg)." },
                    { id: "d", text: "d) Nhiệt lượng cần lấy đi để không khí trong phòng giảm từ 30°C xuống 20°C lớn hơn 2 Triệu Joule (2 MJ).", isTrue: false, exp: "Sai ($Q = m \\cdot c \\cdot \\Delta T = 144 \\times 1000 \\times 10$ = 1.440.000 J = 1,44 MJ < 2 MJ)." }
                ]
            },
            {
                id: "nhiet_17",
                context: "Câu 17 (Cơ năng và Nội năng). Quả bóng chì nặng 500 g rơi tự do từ độ cao 20 m xuống mặt đất cứng và nằm yên. Bỏ qua sức cản không khí. Lấy $g = 10$ m/s², $c_{\\text{chì}}$ = 130 J/(kg.K).",
                statements: [
                    { id: "a", text: "a) Khi rơi, cơ năng của quả bóng chuyển hóa hoàn toàn thành nội năng của lớp không khí nó đi qua.", isTrue: false, exp: "Sai (Rơi tự do bỏ qua sức cản nên cơ năng bảo toàn cho đến khi chạm đất)." },
                    { id: "b", text: "b) Động năng của quả bóng ngay trước khi chạm đất là 100 J.", isTrue: true, exp: "Đúng ($W_đ = W_{t(\\text{ban đầu})} = m \\cdot g \\cdot h = 0,5 \\times 10 \\times 20$ = 100 J)." },
                    { id: "c", text: "c) Khi va chạm và nằm yên, toàn bộ cơ năng của bóng chuyển hóa thành nội năng của bóng và mặt đất.", isTrue: true, exp: "Đúng (Định luật bảo toàn năng lượng tổng quát)." },
                    { id: "d", text: "d) Nếu rớt xuống, giả sử 50% cơ năng ban đầu biến thành nhiệt lượng làm nóng quả bóng thì nhiệt độ quả bóng tăng thêm xấp xỉ 0,77°C.", isTrue: true, exp: "Đúng ($Q = 0,5 \\times 100$ = 50 J. Mà $Q = m \\cdot c \\cdot \\Delta t \\Rightarrow 50 = 0,5 \\times 130 \\times \\Delta t \\Rightarrow \\Delta t = 50 / 65 \\approx$ 0,77°C)." }
                ]
            },
            {
                id: "nhiet_18",
                context: "Câu 18 (Cấu trúc tinh thể và vô định hình). Phân tích sự nóng chảy của thủy tinh và nhựa đường.",
                statements: [
                    { id: "a", text: "a) Thủy tinh và nhựa đường là các chất vô định hình.", isTrue: true, exp: "Đúng (Liệt kê phân loại chất rắn)." },
                    { id: "b", text: "b) Các chất này được cấu tạo từ các hạt (nguyên tử, phân tử) sắp xếp có trật tự hình học không gian xác định.", isTrue: false, exp: "Sai (Vô định hình không có cấu trúc mạng tinh thể trật tự)." },
                    { id: "c", text: "c) Khi nung nóng, thủy tinh không có nhiệt độ nóng chảy xác định mà cứ mềm dần ra.", isTrue: true, exp: "Đúng (Đặc điểm bản chất chuyển thể vô định hình)." },
                    { id: "d", text: "d) Đặc tính không có nhiệt độ nóng chảy xác định giải thích tại sao người thợ có thể thổi, uốn tạo hình thủy tinh dễ dàng khi nung nóng.", isTrue: true, exp: "Đúng (Vận dụng giải thích kỹ thuật chế tác)." }
                ]
            },
            {
                id: "nhiet_19",
                context: "Câu 19 (THỰC HÀNH THÍ NGHIỆM - Đo nhiệt dung riêng). Dùng bộ dụng cụ gồm nhiệt lượng kế, dây điện trở, vôn kế, ampe kế, đồng hồ bấm giây và cân điện tử để đo nhiệt dung riêng $c$ của nước.",
                statements: [
                    { id: "a", text: "a) Vai trò của nhiệt lượng kế có lớp vỏ xốp là để tăng cường sự trao đổi nhiệt với môi trường ngoài.", isTrue: false, exp: "Sai (Vỏ xốp dùng để CÁCH NHIỆT, ngăn thất thoát nhiệt)." },
                    { id: "b", text: "b) Nhiệt lượng mà dòng điện cung cấp cho nước trong thời gian $t$ được xác định bằng công thức $Q_{\\text{tỏa}} = U \\cdot I \\cdot t$.", isTrue: true, exp: "Đúng (Công suất điện năng định luật Joule-Lenz)." },
                    { id: "c", text: "c) Nếu bỏ qua hao phí, nhiệt dung riêng được tính bởi biểu thức $c = \\frac{U \\cdot I \\cdot t}{m(t_2 - t_1)}$.", isTrue: true, exp: "Đúng (Phương trình cân bằng nhiệt lý tưởng: $Q_{\\text{tỏa}} = Q_{\\text{thu}} \\Rightarrow U \\cdot I \\cdot t = m \\cdot c \\cdot \\Delta t$)." },
                    { id: "d", text: "d) Trong thực tế thí nghiệm, luôn có một lượng nhiệt tỏa ra môi trường. Nếu sinh viên vẫn dùng công thức ở câu (c) để tính, giá trị nhiệt dung riêng đo được sẽ lớn hơn giá trị thực (tra bảng chuẩn).", isTrue: true, exp: "Đúng (Thực tế nhiệt mất mát nên độ tăng nhiệt độ $\\Delta t$ sẽ nhỏ hơn lý thuyết, do đó biểu thức $c = \\frac{U \\cdot I \\cdot t}{m \\cdot \\Delta t}$ có mẫu số nhỏ dẫn đến kết quả $c$ tính ra bị đội lên lớn hơn chuẩn)." }
                ]
            },
            {
                id: "nhiet_20",
                context: "Câu 20 (THỰC HÀNH THÍ NGHIỆM - Đo nhiệt hóa hơi riêng). Một học sinh thiết kế phương án đo nhiệt hóa hơi riêng của nước ($L$) bằng cách đặt một ấm siêu tốc (có công suất $P$ = 1500 W ổn định) lên một chiếc cân điện tử.",
                statements: [
                    { id: "a", text: "a) Học sinh bắt đầu bấm đồng hồ đo thời gian ngay từ lúc cắm điện nguồn cho ấm.", isTrue: false, exp: "Sai (Bẫy thực hành: Phải chờ nước SÔI ỔN ĐỊNH rồi mới bắt đầu đo $\\Delta t$ và $\\Delta m$, nếu đo từ đầu là bao gồm cả quá trình đun nóng khối nước)." },
                    { id: "b", text: "b) Lượng nước bị hóa hơi ($\\Delta m$) trong khoảng thời gian $\\Delta t$ được xác định bằng độ giảm số chỉ của cân điện tử.", isTrue: true, exp: "Đúng (Nguyên lý đo gián tiếp khối lượng bay hơi)." },
                    { id: "c", text: "c) Biểu thức tính nhiệt hóa hơi riêng theo phương án này (coi hao phí bằng 0) là $L = \\frac{P \\cdot \\Delta t}{\\Delta m}$.", isTrue: true, exp: "Đúng (Bản chất $Q = P \\cdot \\Delta t = L \\cdot \\Delta m$)." },
                    { id: "d", text: "d) Để giảm bớt sai số do nước bắn ra ngoài dưới dạng giọt lỏng (không phải hóa hơi), học sinh cần đổ nước thật đầy lên tận miệng ấm trước khi đun.", isTrue: false, exp: "Sai (Đổ nước đầy quá miệng ấm thì khi sôi nước sẽ sục mạnh trào trực tiếp ra ngoài ở thể lỏng, làm $\\Delta m$ đo được bị sai số cực lớn. Phải để mực nước vừa phải)." }
                ]
            }
        ]
    },
    khi: {
        theory: `
            <h2>Kiến thức trọng tâm: Khí lí tưởng</h2>

            <div class="lesson-card">
                <h3>Bài 8. Mô hình động học phân tử chất khí</h3>
                
                <div class="concept-box">
                    <h4>1. Chuyển động Brown</h4>
                    <ul>
                        <li><strong>Hiện tượng:</strong> Các hạt nhỏ (như phấn hoa, khói) lơ lửng trong chất lỏng/khí chuyển động dích dắc, hỗn loạn không ngừng.</li>
                        <li><strong>Bản chất:</strong> Do các phân tử môi trường chuyển động nhiệt, va chạm vào hạt từ nhiều phía với lực không cân bằng.</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Thuyết động học phân tử chất khí</h4>
                    <ul>
                        <li><strong>Kích thước:</strong> Phân tử khí có kích thước rất nhỏ so với khoảng cách giữa chúng (coi là chất điểm).</li>
                        <li><strong>Chuyển động:</strong> Chuyển động hỗn loạn không ngừng. Nhiệt độ càng cao, tốc độ chuyển động càng lớn.</li>
                        <li><strong>Tương tác:</strong> Lực tương tác giữa các phân tử rất yếu, chỉ đáng kể khi chúng va chạm vào nhau hoặc va chạm vào thành bình.</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>3. Khí lí tưởng</h4>
                    <ul>
                        <li>Là chất khí tuân theo đúng các định luật Boyle và Charles.</li>
                        <li><strong>Đặc điểm mô hình:</strong> Bỏ qua hoàn toàn thể tích riêng của phân tử và lực tương tác giữa chúng (trừ lúc va chạm).</li>
                    </ul>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Nhầm lẫn giữa khí thực và khí lí tưởng, cho rằng chất khí luôn tuân theo tuyệt đối các định luật chất khí ở mọi điều kiện.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Khí thực chỉ có thể coi gần đúng là khí lí tưởng ở điều kiện <strong>nhiệt độ cao và áp suất thấp</strong>. Ở áp suất quá cao, thể tích phân tử và lực tương tác không thể bỏ qua.</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 9. Định luật Boyle (Quá trình đẳng nhiệt)</h3>
                
                <div class="concept-box">
                    <ul>
                        <li><strong>Trạng thái đẳng nhiệt:</strong> Khối lượng khí và Nhiệt độ ($T$) được giữ không đổi.</li>
                        <li><strong>Nội dung:</strong> Ở nhiệt độ không đổi, áp suất của một khối lượng khí xác định tỉ lệ nghịch với thể tích của nó.</li>
                    </ul>
                    <p><strong>Công thức:</strong></p>
                    <div class="formula-box">
                        $$p \\sim \\frac{1}{V} \\Rightarrow pV = \\text{hằng số}$$
                    </div>
                    <p>Hay viết cho hai trạng thái:</p>
                    <div class="formula-box">
                        $$p_1 V_1 = p_2 V_2$$
                    </div>
                    <ul>
                        <li><strong>Đồ thị:</strong> Trong hệ tọa độ $p-V$, đường đẳng nhiệt là một đường hypebol. Nhiệt độ càng cao, đường đẳng nhiệt càng nằm xa gốc tọa độ.</li>
                    </ul>
                </div>

                <h3 style="margin-top: 1.5rem;">Bài 10. Định luật Charles (Quá trình đẳng áp)</h3>
                
                <div class="concept-box">
                    <ul>
                        <li><strong>Trạng thái đẳng áp:</strong> Khối lượng khí và Áp suất ($p$) được giữ không đổi.</li>
                        <li><strong>Nội dung:</strong> Khi áp suất không đổi, thể tích của một khối lượng khí xác định tỉ lệ thuận với nhiệt độ tuyệt đối của nó.</li>
                    </ul>
                    <p><strong>Công thức:</strong></p>
                    <div class="formula-box">
                        $$\\frac{V}{T} = \\text{hằng số}$$
                    </div>
                    <p>Hay viết cho hai trạng thái:</p>
                    <div class="formula-box">
                        $$\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$$
                    </div>
                    <ul>
                        <li><strong>Đồ thị:</strong> Trong hệ tọa độ $V-T$, đường đẳng áp là một đường thẳng có đường kéo dài đi qua gốc tọa độ ($V=0$ tại $T=0\\text{ K}$).</li>
                    </ul>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Vẫn để nguyên nhiệt độ ở thang độ C ($^\\circ\\text{C}$) khi bấm máy tính định luật Charles hoặc phương trình trạng thái.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> <strong>Luôn luôn cộng thêm 273,15</strong>. Mọi công thức có chữ $T$ (viết hoa) đều bắt buộc phải dùng thang tuyệt đối Kelvin: $T = t + 273,15$.</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 11. Phương trình trạng thái của khí lí tưởng</h3>
                
                <div class="concept-box">
                    <ul>
                        <li><strong>Ý nghĩa:</strong> Liên kết cả 3 thông số trạng thái (Áp suất $p$, Thể tích $V$, Nhiệt độ $T$) của một khối lượng khí xác định khi có sự biến đổi tổng quát.</li>
                    </ul>
                    <p><strong>Phương trình trạng thái:</strong></p>
                    <div class="formula-box">
                        $$\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2} \\Rightarrow \\frac{pV}{T} = \\text{hằng số}$$
                    </div>
                    <p><strong>Mở rộng (Phương trình Clapeyron - Mendeleev):</strong> Dùng để tính toán chính xác lượng khí:</p>
                    <div class="formula-box">
                        $$pV = nRT = \\frac{m}{\\mu}RT$$
                    </div>
                    <p><em>Trong đó:</em></p>
                    <ul>
                        <li>$n$: Số mol khí (mol)</li>
                        <li>$R \\approx 8,31 \\text{ J/(mol.K)}$: Hằng số khí lí tưởng</li>
                        <li>$T$: Nhiệt độ tuyệt đối (K)</li>
                    </ul>
                </div>

                <h3 style="margin-top: 1.5rem;">Bài 12. Áp suất khí theo mô hình động học phân tử. Quan hệ giữa động năng và nhiệt độ</h3>
                
                <div class="concept-box">
                    <h4>1. Áp suất khí theo mô hình động học</h4>
                    <ul>
                        <li><strong>Bản chất:</strong> Áp suất chất khí tác dụng lên thành bình là do sự va chạm của vô số các phân tử khí vào thành bình tạo ra.</li>
                    </ul>
                    <p><strong>Công thức cơ bản:</strong></p>
                    <div class="formula-box">
                        $$p = \\frac{1}{3} n m \\overline{v^2}$$
                    </div>
                    <p><em>Trong đó:</em></p>
                    <ul>
                        <li>$n = \\frac{N}{V}$: Mật độ phân tử khí (số hạt trong $1\\text{ m}^3$)</li>
                        <li>$m$: Khối lượng của một phân tử</li>
                        <li>$\\overline{v^2}$: Giá trị trung bình của bình phương tốc độ phân tử</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Quan hệ giữa động năng phân tử và nhiệt độ</h4>
                    <p><strong>Hằng số Boltzmann ($k$):</strong></p>
                    <div class="formula-box">
                        $$k = \\frac{R}{N_A} \\approx 1,38 \\cdot 10^{-23} \\text{ J/K}$$
                    </div>
                    <p><strong>Động năng tịnh tiến trung bình của phân tử:</strong></p>
                    <div class="formula-box">
                        $$W_đ = \\frac{1}{2}m\\overline{v^2} = \\frac{3}{2}kT$$
                    </div>
                    <div class="highlight-box golden-note">
                        <strong>Kết luận "Vàng":</strong> 
                        <ul>
                            <li>Nhiệt độ tuyệt đối ($T$) là số đo vĩ mô của <strong>động năng tịnh tiến trung bình</strong> vi mô của các phân tử khí.</li>
                            <li>Động năng trung bình tỉ lệ thuận với nhiệt độ tuyệt đối. Khi $T = 0\\text{ K}$ (Độ không tuyệt đối), mọi chuyển động nhiệt ngừng lại ($W_đ = 0$).</li>
                        </ul>
                    </div>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Cho rằng khí nhẹ (như $H_2$) thì có động năng tịnh tiến trung bình lớn hơn khí nặng (như $O_2$) nếu chúng ở cùng nhiệt độ.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Nhìn vào công thức $W_đ = \\frac{3}{2}kT$. Động năng trung bình <strong>chỉ phụ thuộc vào nhiệt độ $T$</strong>. Ở cùng nhiệt độ, mọi chất khí đều có $W_đ$ bằng nhau. Khí nhẹ chuyển động nhanh hơn (vận tốc $v$ lớn) nhưng khối lượng ($m$) nhỏ, bù trừ lại $W_đ$ vẫn không đổi.</div>
            </div>
        `,
       quizzes: [
            {
                id: "khi_1",
                context: "Câu 1 (Mô hình động học phân tử - Chuyển động Brown). Quan sát các hạt phấn hoa lơ lửng trong nước hoặc các hạt khói trong không khí qua kính hiển vi, ta thấy chúng chuyển động dích dắc không ngừng (chuyển động Brown).",
                statements: [
                    { id: "a", text: "a) Chuyển động Brown cho thấy bản thân các hạt phấn hoa/hạt khói là các vi sinh vật có sự sống.", isTrue: false, exp: "Sai (Đây là hiện tượng vật lý thuần túy, không phải do sự sống)." },
                    { id: "b", text: "b) Quỹ đạo chuyển động của các hạt này là những đường thẳng đứt khúc, hỗn loạn.", isTrue: true, exp: "Đúng (Mô tả quỹ đạo chuyển động Brown)." },
                    { id: "c", text: "c) Nguyên nhân của chuyển động Brown là do các phân tử nước/không khí chuyển động nhiệt hỗn loạn, va chạm vào hạt từ nhiều phía không cân bằng nhau.", isTrue: true, exp: "Đúng (Giải thích bản chất động học phân tử)." },
                    { id: "d", text: "d) Nhiệt độ môi trường càng thấp thì chuyển động Brown diễn ra càng mạnh mẽ.", isTrue: false, exp: "Sai (Nhiệt độ càng cao, phân tử chuyển động càng nhanh $\\rightarrow$ chuyển động Brown càng mạnh)." }
                ]
            },
            {
                id: "khi_2",
                context: "Câu 2 (Giả thuyết thuyết động học phân tử). Xét một bình kín chứa khí lí tưởng.",
                statements: [
                    { id: "a", text: "a) Các phân tử khí được coi là các chất điểm vì kích thước của chúng rất nhỏ so với khoảng cách giữa chúng.", isTrue: true, exp: "Đúng (Giả thuyết cơ bản về kích thước)." },
                    { id: "b", text: "b) Lực tương tác giữa các phân tử khí luôn tồn tại và có độ lớn đáng kể ở mọi thời điểm.", isTrue: false, exp: "Sai (Khí lí tưởng bỏ qua lực tương tác, trừ lúc va chạm)." },
                    { id: "c", text: "c) Giữa hai lần va chạm, các phân tử khí chuyển động thẳng đều.", isTrue: true, exp: "Đúng (Vì không có lực tương tác nên theo quán tính chúng chuyển động thẳng đều)." },
                    { id: "d", text: "d) Khi va chạm vào thành bình, động năng của các phân tử khí bị tiêu hao và biến thành nhiệt hoàn toàn.", isTrue: false, exp: "Sai (Va chạm với thành bình được coi là va chạm hoàn toàn đàn hồi, động năng được bảo toàn)." }
                ]
            },
            {
                id: "khi_3",
                context: "Câu 3 (Định luật Boyle - Lý thuyết). Trong một quá trình nén đẳng nhiệt một khối lượng khí lí tưởng xác định.",
                statements: [
                    { id: "a", text: "a) Nhiệt độ tuyệt đối của khối khí được giữ không đổi trong suốt quá trình.", isTrue: true, exp: "Đúng (Khái niệm quá trình đẳng nhiệt)." },
                    { id: "b", text: "b) Theo định luật Boyle, áp suất của khối khí tỉ lệ thuận với thể tích của nó.", isTrue: false, exp: "Sai (Áp suất tỉ lệ nghịch với thể tích)." },
                    { id: "c", text: "c) Tích của áp suất và thể tích là một hằng số ($pV = \\text{const}$).", isTrue: true, exp: "Đúng (Hệ quả toán học của tỉ lệ nghịch)." },
                    { id: "d", text: "d) Đường đẳng nhiệt biểu diễn trong hệ tọa độ ($p, V$) là một đường thẳng đi qua gốc tọa độ.", isTrue: false, exp: "Sai (Bẫy đồ thị: Trong hệ $p-V$, đường đẳng nhiệt là một đường hypebol)." }
                ]
            },
            {
                id: "khi_4",
                context: "Câu 4 (Định luật Boyle - Bài tập vận dụng). Một bọt khí nổi lên từ đáy một hồ nước sâu 10 m. Lấy áp suất khí quyển trên mặt hồ là $p_0 = 10^5\\text{ Pa}$, khối lượng riêng của nước là $\\rho = 1000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$. Coi nhiệt độ nước hồ đồng đều ở mọi độ sâu.",
                statements: [
                    { id: "a", text: "a) Áp suất của nước tại đáy hồ là $10^5\\text{ Pa}$.", isTrue: false, exp: "Sai (Áp suất thủy tĩnh của cột nước $p_n = \\rho g h = 1000 \\times 10 \\times 10 = 10^5\\text{ Pa}$)." },
                    { id: "b", text: "b) Tổng áp suất tác dụng lên bọt khí ở đáy hồ là $2.10^5\\text{ Pa}$.", isTrue: true, exp: "Đúng (Tổng áp suất $p = p_0 + \\rho g h = 10^5 + 10^5 = 2.10^5\\text{ Pa}$)." },
                    { id: "c", text: "c) Thể tích của bọt khí khi lên đến mặt nước sẽ tăng gấp đôi so với khi ở đáy hồ.", isTrue: true, exp: "Đúng ($T$ nhiệt độ không đổi $\\Rightarrow p_1 V_1 = p_2 V_2 \\Rightarrow 2.10^5.V_1 = 10^5.V_2 \\Rightarrow V_2 = 2V_1$)." },
                    { id: "d", text: "d) Trong quá trình nổi lên, mật độ phân tử khí bên trong bọt khí tăng dần.", isTrue: false, exp: "Sai (Thể tích tăng, số phân tử không đổi $\\Rightarrow$ mật độ phân tử giảm)." }
                ]
            },
            {
                id: "khi_5",
                context: "Câu 5 (Định luật Charles). Khi nung nóng đẳng áp một khối lượng khí lí tưởng xác định.",
                statements: [
                    { id: "a", text: "a) Áp suất của khối khí được giữ nguyên.", isTrue: true, exp: "Đúng (Khái niệm đẳng áp)." },
                    { id: "b", text: "b) Thể tích của khối khí tỉ lệ với nhiệt độ Celsius ($^\\circ C$).", isTrue: false, exp: "Sai (Thể tích tỉ lệ với nhiệt độ tuyệt đối K, không phải độ C)." },
                    { id: "c", text: "c) Hệ thức của định luật Charles là $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$ (với $T$ là nhiệt độ tuyệt đối).", isTrue: true, exp: "Đúng (Biểu thức định luật Charles)." },
                    { id: "d", text: "d) Nếu nhiệt độ của khối khí tăng từ 27$^\\circ$C lên 54$^\\circ$C thì thể tích khối khí sẽ tăng gấp đôi.", isTrue: false, exp: "Sai (Bẫy tỉ lệ: $T_1 = 300\\text{ K}$, $T_2 = 327\\text{ K}$, tỉ số thể tích là $327/300 = 1,09$ lần, không phải gấp đôi)." }
                ]
            },
            {
                id: "khi_6",
                context: "Câu 6 (Phương trình trạng thái khí lí tưởng - Lý thuyết). Từ các định luật thực nghiệm, ta xây dựng phương trình trạng thái:",
                statements: [
                    { id: "a", text: "a) Phương trình trạng thái kết hợp sự phụ thuộc đồng thời của $p, V, T$ đối với một lượng khí xác định.", isTrue: true, exp: "Đúng (Định nghĩa phương trình trạng thái)." },
                    { id: "b", text: "b) Biểu thức $\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}$ chỉ áp dụng được nếu khối khí không bị rò rỉ (khối lượng khí không đổi).", isTrue: true, exp: "Đúng (Phạm vi áp dụng đối với một khối lượng khí xác định)." },
                    { id: "c", text: "c) Với mọi khối lượng khí lí tưởng khác nhau, hằng số $\\frac{pV}{T}$ luôn có cùng một giá trị.", isTrue: false, exp: "Sai (Giá trị $\\frac{pV}{T} = nR$ phụ thuộc vào lượng chất khí (số mol $n$))." },
                    { id: "d", text: "d) Phương trình trạng thái cho thấy, nếu nén khối khí (giảm $V$) và đồng thời tăng nhiệt độ ($T$), áp suất chắc chắn sẽ tăng.", isTrue: true, exp: "Đúng ($p = \\frac{nRT}{V}$, $T$ tăng và $V$ giảm đều làm cho $p$ tăng)." }
                ]
            },
            {
                id: "khi_7",
                context: "Câu 7 (Phương trình trạng thái khí lí tưởng - Vận dụng). Một bình bằng thép dung tích 50 lít chứa khí $O_2$ ở áp suất 5 MPa và nhiệt độ 37$^\\circ$C. Lấy $R = 8,31\\text{ J/(mol.K)}$, khối lượng mol của $O_2$ là $\\mu = 32\\text{ g/mol}$.",
                statements: [
                    { id: "a", text: "a) Nhiệt độ tuyệt đối của khối khí là 310 K.", isTrue: true, exp: "Đúng ($T = 37 + 273 = 310\\text{ K}$)." },
                    { id: "b", text: "b) Phương trình $pV = nRT$ áp dụng phải đổi $V$ ra m$^3$ và $p$ ra Pa.", isTrue: true, exp: "Đúng (Chuẩn hóa đơn vị hệ SI: 1 lít $= 10^{-3}\\text{ m}^3$, 1 MPa $= 10^6\\text{ Pa}$)." },
                    { id: "c", text: "c) Số mol khí trong bình xấp xỉ 97 mol.", isTrue: true, exp: "Đúng ($n_1 = \\frac{pV}{RT} = \\frac{5.10^6 \\times 50.10^{-3}}{8,31 \\times 310} \\approx 97,04\\text{ mol}$)." },
                    { id: "d", text: "d) Khi xả bớt khí ra ngoài và để bình nguội về 27$^\\circ$C, áp suất còn 2 MPa. Khối lượng khí đã xả ra là khoảng 1,5 kg.", isTrue: false, exp: "Sai ($n_2 = \\frac{2.10^6 \\times 50.10^{-3}}{8,31 \\times 300} \\approx 40,11\\text{ mol}$. Số mol khí xả ra $\\Delta n = 97,04 - 40,11 = 56,93\\text{ mol} \\Rightarrow \\Delta m = 56,93 \\times 32 \\approx 1821\\text{ g} \\approx 1,8\\text{ kg}$. Chỗ này phép tính ra 1,8 kg nên phát biểu 1,5 kg là Sai. Bẫy tính toán định lượng)." }
                ]
            },
            {
                id: "khi_8",
                context: "Câu 8 (Mô hình động học và Áp suất - Lý thuyết). Áp suất của chất khí lên thành bình được giải thích theo mô hình động học phân tử.",
                statements: [
                    { id: "a", text: "a) Áp suất sinh ra do trọng lượng của các phân tử khí đè lên đáy bình.", isTrue: false, exp: "Sai (Áp suất khí sinh ra do VA CHẠM, không phải trọng lượng như áp suất chất lỏng/rắn)." },
                    { id: "b", text: "b) Mỗi va chạm của một phân tử khí vào thành bình tạo ra một lực đẩy tức thời rất nhỏ, vô số va chạm tạo ra áp suất vĩ mô ổn định.", isTrue: true, exp: "Đúng (Bản chất vi mô - vĩ mô của áp suất)." },
                    { id: "c", text: "c) Theo mô hình động học, áp suất $p = \\frac{1}{3}nm\\overline{v^2}$, trong đó $n$ là số mol khí.", isTrue: false, exp: "Sai (Bẫy ký hiệu: $n$ trong hệ thức này là mật độ phân tử $n = N/V$, không phải số mol)." },
                    { id: "d", text: "d) Đại lượng $\\overline{v^2}$ là trung bình của các bình phương tốc độ của các phân tử khí.", isTrue: true, exp: "Đúng (Định nghĩa toán học của $\\overline{v^2}$)." }
                ]
            },
            {
                id: "khi_9",
                context: "Câu 9 (Biến thiên động lượng và Lực tác dụng). Xét một phân tử khí khối lượng $m$, chuyển động với vận tốc thành phần $v_x$ dọc theo trục $Ox$ và đập đàn hồi vuông góc vào một thành bình.",
                statements: [
                    { id: "a", text: "a) Sự biến thiên động lượng của phân tử khí sau va chạm có độ lớn là $mv_x$.", isTrue: false, exp: "Sai (Va chạm đàn hồi nên bay ngược lại với tốc độ $v_x$, độ biến thiên động lượng là $\\Delta p = mv_x - (-mv_x) = 2mv_x$)." },
                    { id: "b", text: "b) Phân tử khí chịu một xung lượng của lực từ thành bình có hướng ngược lại với chiều chuyển động ban đầu.", isTrue: true, exp: "Đúng (Theo định luật II Newton dạng xung lượng)." },
                    { id: "c", text: "c) Theo định luật III Newton, phân tử khí cũng tác dụng lên thành bình một lực bằng và ngược chiều với lực thành bình tác dụng lên nó.", isTrue: true, exp: "Đúng (Bản chất sự truyền tương tác)." },
                    { id: "d", text: "d) Hệ số $\\frac{1}{3}$ trong công thức áp suất xuất hiện là do việc giả sử không gian 3 chiều có các phương $x, y, z$ đẳng hướng ($\\overline{v_x^2} = \\overline{v_y^2} = \\overline{v_z^2} = \\frac{1}{3}\\overline{v^2}$).", isTrue: true, exp: "Đúng (Cơ sở toán học của mô hình 3 chiều)." }
                ]
            },
            {
                id: "khi_10",
                context: "Câu 10 (Hằng số Boltzmann và Động năng phân tử).",
                statements: [
                    { id: "a", text: "a) Hằng số Boltzmann được xác định bằng hệ thức $k = \\frac{R}{N_A}$ ($R$ là hằng số khí lí tưởng, $N_A$ là số Avogadro).", isTrue: true, exp: "Đúng (Định nghĩa hằng số Boltzmann)." },
                    { id: "b", text: "b) Hằng số Boltzmann có giá trị xấp xỉ $1,38.10^{-23}\\text{ J/K}$.", isTrue: true, exp: "Đúng (Biết giá trị hằng số)." },
                    { id: "c", text: "c) Từ việc đối chiếu $pV = \\frac{1}{3}Nm\\overline{v^2}$ và $pV = NkT$, ta rút ra được động năng tịnh tiến trung bình của phân tử khí là $W_d = \\frac{3}{2}kT$.", isTrue: true, exp: "Đúng (Chứng minh logic cốt lõi của vật lí thống kê, $pV = nRT = (N/N_A)RT = N(R/N_A)T = NkT$. Suy ra $\\frac{1}{3}m\\overline{v^2} = kT \\Rightarrow \\frac{1}{2}m\\overline{v^2} = \\frac{3}{2}kT$)." },
                    { id: "d", text: "d) Động năng trung bình của phân tử khí Helium ($\\mu = 4$) lớn hơn động năng trung bình của phân tử khí Oxygen ($\\mu = 32$) nếu chúng ở cùng một nhiệt độ.", isTrue: false, exp: "Sai (Bẫy bản chất: Động năng trung bình phụ thuộc CHỈ VÀO NHIỆT ĐỘ $T$, không phụ thuộc khối lượng mol. Bằng nhau ở cùng nhiệt độ)." }
                ]
            },
            {
                id: "khi_11",
                context: "Câu 11 (Vận tốc căn quân phương). Từ công thức động năng tịnh tiến trung bình $W_d = \\frac{3}{2}kT = \\frac{1}{2}m\\overline{v^2}$, ta định nghĩa tốc độ căn quân phương $v_{rms} = \\sqrt{\\overline{v^2}}$.",
                statements: [
                    { id: "a", text: "a) Công thức tính tốc độ căn quân phương có thể viết là $v_{rms} = \\sqrt{\\frac{3RT}{\\mu}}$.", isTrue: true, exp: "Đúng ($\\frac{1}{2}m\\overline{v^2} = \\frac{3}{2}\\frac{R}{N_A}T \\Rightarrow \\overline{v^2} = \\frac{3RT}{m N_A} = \\frac{3RT}{\\mu}$)." },
                    { id: "b", text: "b) Tốc độ căn quân phương chính là tốc độ trung bình cộng của tất cả các phân tử khí.", isTrue: false, exp: "Sai (Bẫy thống kê toán học: Trung bình của bình phương $\\neq$ bình phương của trung bình. $v_{rms}$ lớn hơn tốc độ trung bình một chút)." },
                    { id: "c", text: "c) Nếu nhiệt độ tuyệt đối của khối khí tăng lên 4 lần thì tốc độ căn quân phương của phân tử tăng lên 2 lần.", isTrue: true, exp: "Đúng ($v_{rms}$ tỉ lệ thuận với $\\sqrt{T}$)." },
                    { id: "d", text: "d) Ở cùng một nhiệt độ phòng, phân tử khí Hydro ($H_2$) di chuyển với tốc độ căn quân phương nhanh gấp 4 lần phân tử khí Oxy ($O_2$).", isTrue: true, exp: "Đúng ($v \\propto 1/\\sqrt{\\mu}$. $\\mu_{O_2}/\\mu_{H_2} = 32/2 = 16 \\Rightarrow \\sqrt{16} = 4$)." }
                ]
            },
            {
                id: "khi_12",
                context: "Câu 12 (Nội năng của khí lí tưởng). Xét khối khí lí tưởng đơn nguyên tử (chỉ có chuyển động tịnh tiến).",
                statements: [
                    { id: "a", text: "a) Nội năng của khí lí tưởng bao gồm động năng chuyển động nhiệt và thế năng tương tác phân tử.", isTrue: false, exp: "Sai (Khí lí tưởng bỏ qua lực tương tác $\\Rightarrow$ bỏ qua thế năng, chỉ có động năng)." },
                    { id: "b", text: "b) Tổng động năng tịnh tiến của $N$ phân tử trong khối khí được tính bằng $U = N \\times \\frac{3}{2}kT$.", isTrue: true, exp: "Đúng (Định nghĩa nội năng khí lí tưởng)." },
                    { id: "c", text: "c) Biểu thức tính nội năng của $n$ mol khí lí tưởng có thể viết là $U = \\frac{3}{2}nRT$.", isTrue: true, exp: "Đúng (Do $Nk = N(R/N_A) = nR$)." },
                    { id: "d", text: "d) Trong một quá trình giãn nở đẳng nhiệt, khí sinh công nhưng nội năng của khối khí không thay đổi.", isTrue: true, exp: "Đúng (Đẳng nhiệt $\\Rightarrow T = \\text{const} \\Rightarrow U = \\text{const} \\Rightarrow \\Delta U = 0$)." }
                ]
            },
            {
                id: "khi_13",
                context: "Câu 13 (Đồ thị và quá trình biến đổi). Trên trục tọa độ $p-T$, người đầu biểu diễn quá trình biến đổi trạng thái của một lượng khí lí tưởng là một đoạn thẳng đi qua gốc tọa độ.",
                statements: [
                    { id: "a", text: "a) Đây là một quá trình biến đổi đẳng áp.", isTrue: false, exp: "Sai (Quá trình có đoạn thẳng qua gốc $O$ trên $p-T$ tuân theo $p = \\text{const} \\times T \\Rightarrow V = \\text{const}$, tức là đẳng tích)." },
                    { id: "b", text: "b) Đây là một quá trình biến đổi đẳng tích.", isTrue: true, exp: "Đúng (Nhận dạng đồ thị Charles)." },
                    { id: "c", text: "c) Trong quá trình này, thể tích của khối khí không thay đổi.", isTrue: true, exp: "Đúng (Định nghĩa quá trình đẳng tích)." },
                    { id: "d", text: "d) Nếu quá trình này được vẽ lại trên đồ thị $p-V$ thì nó sẽ là một đường thẳng song song với trục $V$.", isTrue: false, exp: "Sai (Đẳng tích trên đồ thị $p-V$ là đường vuông góc với trục $V$, song song trục $p$)." }
                ]
            },
            {
                id: "khi_14",
                context: "Câu 14 (Tổng hợp Mật độ phân tử & Phương trình). Khí trong một căn phòng ở điều kiện 1 atm $\\approx 10^5\\text{ Pa}$ và nhiệt độ 27$^\\circ$C.",
                statements: [
                    { id: "a", text: "a) Phương trình trạng thái có thể viết dưới dạng $p = n k T$, với $n$ là mật độ phân tử khí.", isTrue: true, exp: "Đúng ($p = (N/V)kT = nkT$)." },
                    { id: "b", text: "b) Mật độ phân tử khí tỉ lệ thuận với nhiệt độ tuyệt đối của phòng.", isTrue: false, exp: "Sai ($n = p/kT$, nếu áp suất $p$ không đổi thì mật độ $n$ tỉ lệ NGHỊCH với $T$)." },
                    { id: "c", text: "c) Số phân tử khí có trong $1\\text{ m}^3$ không khí của căn phòng xấp xỉ $2,4.10^{25}$ phân tử.", isTrue: true, exp: "Đúng ($n = \\frac{10^5}{1,38.10^{-23} \\times 300} \\approx 2,41.10^{25}\\text{ phân tử/m}^3$)." },
                    { id: "d", text: "d) Khi mở máy sưởi làm không khí trong phòng (không kín hoàn toàn) nóng lên, mật độ phân tử khí trong phòng sẽ giảm xuống.", isTrue: true, exp: "Đúng (Phòng không kín nên áp suất trong phòng luôn bằng 1 atm. Nhiệt độ tăng $\\Rightarrow V$ nở ra tống bớt khí ra ngoài $\\Rightarrow N$ giảm $\\Rightarrow$ mật độ $n$ giảm)." }
                ]
            },
            {
                id: "khi_15",
                context: "Câu 15 (Bẫy khái niệm áp dụng định luật). Một quả bóng bay được bơm căng khí Helium ở mặt đất, sau đó bay lên cao. Biết trên cao áp suất khí quyển giảm và nhiệt độ cũng giảm.",
                statements: [
                    { id: "a", text: "a) Thể tích quả bóng chắc chắn sẽ tăng lên không ngừng cho đến khi vỡ.", isTrue: false, exp: "Sai (Tùy thuộc vào tốc độ giảm của áp suất và nhiệt độ, nếu nhiệt độ giảm quá sâu, bóng có thể co lại)." },
                    { id: "b", text: "b) Nếu nhiệt độ giảm rất mạnh làm $T$ giảm nhanh hơn $p$, thể tích quả bóng có thể bị co lại.", isTrue: true, exp: "Đúng (Theo $V = nRT/p$, nếu $T$ giảm mạnh hơn $p$ thì $V$ giảm)." },
                    { id: "c", text: "c) Chỉ có định luật Boyle mới đủ để giải thích hiện tượng sự thay đổi thể tích của quả bóng.", isTrue: false, exp: "Sai (Cần phương trình trạng thái đầy đủ vì cả $p, V, T$ đều thay đổi, Định luật Boyle chỉ xét khi $T$ hằng số)." },
                    { id: "d", text: "d) Số mol khí Helium bên trong quả bóng không đổi trong suốt quá trình bay lên (coi vỏ bóng không thẩm thấu).", isTrue: true, exp: "Đúng (Bản chất hệ kín khối lượng không đổi)." }
                ]
            },
            {
                id: "khi_16",
                context: "Câu 16 (Hệ thức áp suất và động năng). Trong bài học, học sinh được yêu cầu rút ra hệ thức liên hệ giữa áp suất $p$ và động năng tịnh tiến trung bình $W_d$.",
                statements: [
                    { id: "a", text: "a) Ta có hệ thức $p = \\frac{2}{3} n W_d$ với $n$ là mật độ phân tử.", isTrue: true, exp: "Đúng (Biến đổi: $p = \\frac{1}{3}nm\\overline{v^2} = \\frac{2}{3}n (\\frac{1}{2}m\\overline{v^2}) = \\frac{2}{3} n W_d$)." },
                    { id: "b", text: "b) Điều này có nghĩa là, nếu mật độ phân tử giữ nguyên, áp suất tỉ lệ bậc nhất với động năng trung bình.", isTrue: true, exp: "Đúng (Toán học)." },
                    { id: "c", text: "c) Hệ số $\\frac{2}{3}$ xuất hiện do việc thay thế $\\frac{1}{2}m\\overline{v^2}$ thành $W_d$ trong công thức ban đầu.", isTrue: true, exp: "Đúng (Rút gọn từ biểu thức động năng)." },
                    { id: "d", text: "d) Công thức này không áp dụng được cho hỗn hợp nhiều chất khí khác nhau (như không khí).", isTrue: false, exp: "Sai (Khí lí tưởng không phụ thuộc bản chất chất khí, đối với hỗn hợp ta dùng định luật Dalton cộng áp suất riêng phần, công thức vẫn đúng cho động năng trung bình của hỗn hợp)." }
                ]
            },
            {
                id: "khi_17",
                context: "Câu 17 (Năng lượng của chất khí). 1 mol khí Neon (Ne - đơn nguyên tử) được chứa trong bình có thể tích 22,4 lít ở 0$^\\circ$C.",
                statements: [
                    { id: "a", text: "a) Áp suất của khí trong bình xấp xỉ 1 atm $\\approx 1,013.10^5\\text{ Pa}$.", isTrue: true, exp: "Đúng (ĐKTC: 1 mol khí chiếm 22,4 L ở 1 atm)." },
                    { id: "b", text: "b) Động năng tịnh tiến trung bình của mỗi phân tử khí Neon là bằng 0 do ở nhiệt độ 0$^\\circ$C.", isTrue: false, exp: "Sai (Bẫy nhiệt độ: Động năng tịnh tiến phụ thuộc độ K. Ở 0$^\\circ$C $= 273\\text{ K}$, động năng vẫn lớn hơn 0)." },
                    { id: "c", text: "c) Tổng động năng của tất cả các phân tử khí trong bình là xấp xỉ 3400 J.", isTrue: true, exp: "Đúng ($U = \\frac{3}{2}nRT = 1,5 \\times 1 \\times 8,31 \\times 273 \\approx 3403\\text{ J}$)." },
                    { id: "d", text: "d) Nếu thay Neon bằng 1 mol khí Argon (Ar) ở cùng điều kiện, tổng động năng tịnh tiến của hệ vẫn không thay đổi.", isTrue: true, exp: "Đúng (Tổng động năng tịnh tiến chỉ phụ thuộc nhiệt độ $T$ và số mol $n$, không phụ thuộc loại khí)." }
                ]
            },
            {
                id: "khi_18",
                context: "Câu 18 (Sự hòa trộn hai chất khí). Cho bình A chứa $H_2$ và bình B chứa $O_2$ (cùng thể tích $V$, cùng nhiệt độ $T$, cùng áp suất $p$). Mở van nối 2 bình.",
                statements: [
                    { id: "a", text: "a) Các phân tử $H_2$ và $O_2$ sẽ chuyển động qua lại giữa hai bình do chuyển động nhiệt hỗn loạn.", isTrue: true, exp: "Đúng (Hiện tượng khuếch tán chất khí do chuyển động nhiệt)." },
                    { id: "b", text: "b) Động năng trung bình của phân tử $H_2$ lớn hơn $O_2$.", isTrue: false, exp: "Sai (Cùng nhiệt độ $T$ thì động năng trung bình bằng nhau)." },
                    { id: "c", text: "c) Sau khi trộn lẫn, áp suất tổng cộng của hệ vẫn là $p$.", isTrue: true, exp: "Đúng (Thể tích tăng đôi ($2V$), số mol tổng tăng đôi ($2n$), $T$ không đổi $\\Rightarrow p' = (2n)RT/(2V) = nRT/V = p$)." },
                    { id: "d", text: "d) Mật độ phân tử của hỗn hợp lúc này gấp đôi mật độ phân tử ban đầu của mỗi bình.", isTrue: false, exp: "Sai (Mật độ $n_{tổng} = (N_A + N_B)/(V_A + V_B) = 2N/2V = N/V$, mật độ tổng không đổi)." }
                ]
            },
            {
                id: "khi_19",
                context: "Câu 19 (THỰC HÀNH THÍ NGHIỆM - Khảo sát định luật Boyle). Trong bài thực hành, học sinh dùng một xilanh nhựa trong suốt có pit-tông gắn với cảm biến áp suất. Không khí bị nhốt trong xilanh ở nhiệt độ phòng.",
                statements: [
                    { id: "a", text: "a) Đại lượng cần giữ không đổi (biến số kiểm soát) trong thí nghiệm này là nhiệt độ và khối lượng khí.", isTrue: true, exp: "Đúng (Định luật Boyle yêu cầu Đẳng nhiệt và đối với 1 lượng khí xác định)." },
                    { id: "b", text: "b) Khi đẩy pit-tông vào từ từ, thể tích khí giảm thì số chỉ trên cảm biến áp suất sẽ tăng.", isTrue: true, exp: "Đúng (Áp suất tỉ lệ nghịch thể tích)." },
                    { id: "c", text: "c) Để tiết kiệm thời gian, học sinh nên đẩy/kéo pit-tông thật nhanh để đọc số liệu ngay lập tức.", isTrue: false, exp: "Sai (Bẫy thực hành: Đẩy nhanh sẽ làm khí bị nén đoạn nhiệt, nhiệt độ sinh ra làm tăng $T$, sai số với giả định đẳng nhiệt. Phải đẩy từ từ)." },
                    { id: "d", text: "d) Bảng số liệu chuẩn sẽ cho thấy tích số của áp suất và thể tích ($p.V$) đo ở các vị trí pit-tông khác nhau là một giá trị xấp xỉ bằng nhau.", isTrue: true, exp: "Đúng (Cách kiểm chứng toán học định luật $pV = \\text{const}$)." }
                ]
            },
            {
                id: "khi_20",
                context: "Câu 20 (THỰC HÀNH THÍ NGHIỆM - Khảo sát định luật Charles). Học sinh dùng một ống thủy tinh nhỏ giọt, hàn kín một đầu, bên trong có một giọt thủy ngân nhốt một cột không khí. Đặt ống vào bình nước nóng, dùng nhiệt kế đo nhiệt độ nước và thước đo chiều dài cột khí.",
                statements: [
                    { id: "a", text: "a) Giọt thủy ngân có tác dụng duy trì áp suất của cột khí luôn bằng áp suất khí quyển cộng với áp suất do trọng lượng giọt thủy ngân (đảm bảo quá trình đẳng áp).", isTrue: true, exp: "Đúng (Chức năng cốt lõi của giọt thủy ngân trong thực hành đẳng áp)." },
                    { id: "b", text: "b) Thể tích của khối khí tỉ lệ thuận với chiều dài của cột khí trong ống thủy tinh có tiết diện đều.", isTrue: true, exp: "Đúng ($V = S.l$, $S$ không đổi nên $V$ đại diện qua chiều dài $l$)." },
                    { id: "c", text: "c) Khi nhiệt độ nước tăng lên, giọt thủy ngân sẽ tụt xuống sâu hơn về phía đáy ống hàn kín.", isTrue: false, exp: "Sai (Nhiệt độ tăng $\\Rightarrow V$ tăng $\\Rightarrow l$ tăng $\\Rightarrow$ giọt thủy ngân phải bị đẩy dâng LÊN cao)." },
                    { id: "d", text: "d) Đồ thị biểu diễn sự phụ thuộc của chiều dài cột không khí ($l$) vào nhiệt độ Celsius ($t^\\circ C$) theo lý thuyết là một đường thẳng đi qua gốc tọa độ.", isTrue: false, exp: "Sai (Bẫy đồ thị: Trong hệ $l - t(^\\circ C)$, đồ thị là đường thẳng có hệ số tự do (cắt trục tung tại $l_0$), đường đi qua gốc tọa độ chỉ xảy ra trong hệ nhiệt độ tuyệt đối $l - T(\\text{K})$)." }
                ]
            }
        ]
    },
    tu: {
        theory: `
            <h2>Kiến thức trọng tâm: Từ trường</h2>

            <div class="lesson-card">
                <h3>Bài 14. Từ trường</h3>
                
                <div class="concept-box">
                    <h4>1. Khái niệm và Đặc điểm</h4>
                    <ul>
                        <li><strong>Từ trường:</strong> Là một dạng vật chất vô hình tồn tại xung quanh nam châm hoặc dòng điện.</li>
                        <li><strong>Biểu hiện:</strong> Tác dụng lực từ lên một nam châm hoặc dòng điện khác đặt trong nó.</li>
                        <li><strong>Tính chất:</strong> Tính từ của nam châm và dòng điện có cùng bản chất (đều do các hạt mang điện chuyển động tạo ra).</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Đường sức từ</h4>
                    <ul>
                        <li>Là những đường vẽ trong không gian sao cho tiếp tuyến tại mỗi điểm trùng với hướng của từ trường tại điểm đó.</li>
                        <li><strong>Quy ước chiều:</strong> "Ra Bắc, vào Nam" (Bên ngoài nam châm).</li>
                        <li><strong>Tính chất:</strong> Là những đường cong kín, không cắt nhau. Nơi từ trường mạnh thì đường sức dày, nơi từ trường yếu thì đường sức thưa.</li>
                    </ul>
                </div>
            </div>

            <div class="lesson-card">
                <h3>Bài 15. Lực từ tác dụng lên dây dẫn mang dòng điện. Cảm ứng từ</h3>
                
                <div class="concept-box">
                    <h4>1. Cảm ứng từ ($\\vec{B}$)</h4>
                    <ul>
                        <li><strong>Ý nghĩa:</strong> Đặc trưng cho từ trường về phương diện tác dụng lực.</li>
                        <li><strong>Đơn vị:</strong> Tesla (T).</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Lực từ ($\\vec{F}$) tác dụng lên đoạn dây dẫn</h4>
                    <p>Xét đoạn dây dài $L$, mang dòng điện $I$, đặt trong từ trường đều $\\vec{B}$:</p>
                    <ul>
                        <li><strong>Điểm đặt:</strong> Tại trung điểm của đoạn dây.</li>
                        <li><strong>Phương:</strong> Vuông góc với mặt phẳng chứa đoạn dây và vectơ $\\vec{B}$.</li>
                        <li><strong>Chiều:</strong> Xác định bằng <strong>Quy tắc bàn tay trái</strong> (Hứng các đường sức từ vào lòng bàn tay, chiều từ cổ tay đến ngón giữa chỉ chiều dòng điện, ngón cái choãi ra $90^\\circ$ chỉ chiều lực từ).</li>
                    </ul>
                    <p><strong>Độ lớn:</strong></p>
                    <div class="formula-box">
                        $$F = BIL\\sin\\theta$$
                    </div>
                    <p><em>(Trong đó $\\theta$ là góc hợp bởi hướng của dòng điện và hướng của từ trường).</em></p>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Dùng sai tay để xác định chiều (dùng tay phải thay vì tay trái cho lực từ). Tính sai góc $\\theta$.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Nhớ khẩu quyết: <strong>Lực - Trái</strong> (Lực từ dùng Bàn tay trái), <strong>Trường - Phải</strong> (Từ trường do dòng điện sinh ra dùng Nắm tay phải). Góc $\\theta$ là góc giữa chiều dòng điện $I$ và vectơ $\\vec{B}$.</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 16. Từ thông. Hiện tượng cảm ứng điện từ</h3>
                
                <div class="concept-box">
                    <h4>1. Từ thông ($\\Phi$)</h4>
                    <ul>
                        <li><strong>Ý nghĩa:</strong> Đặc trưng cho số lượng đường sức từ xuyên qua một diện tích.</li>
                        <li><strong>Đơn vị:</strong> Weber (Wb).</li>
                    </ul>
                    <p><strong>Công thức:</strong></p>
                    <div class="formula-box">
                        $$\\Phi = BS\\cos\\alpha$$
                    </div>
                    <p><em>(Với $\\alpha$ là góc hợp bởi vectơ <strong>pháp tuyến</strong> $\\vec{n}$ của mặt phẳng và vectơ $\\vec{B}$).</em></p>
                </div>

                <div class="concept-box">
                    <h4>2. Hiện tượng cảm ứng điện từ</h4>
                    <ul>
                        <li><strong>Bản chất:</strong> Khi từ thông $\\Phi$ qua một mạch kín biến thiên theo thời gian, trong mạch xuất hiện dòng điện cảm ứng.</li>
                        <li><strong>Định luật Faraday (Độ lớn):</strong> Suất điện động cảm ứng tỉ lệ với tốc độ biến thiên từ thông.
                            <div class="formula-box">
                                $$e_c = -\\frac{\\Delta\\Phi}{\\Delta t}$$
                            </div>
                        </li>
                        <li><strong>Định luật Lenz (Chiều):</strong> Dòng điện cảm ứng có chiều sao cho từ trường do nó sinh ra có tác dụng <em>chống lại</em> nguyên nhân sinh ra nó.</li>
                    </ul>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Nhầm lẫn góc $\\alpha$ trong công thức từ thông. Học sinh thường lấy luôn số đo góc giữa vectơ $\\vec{B}$ và mặt phẳng khung dây đưa vào tính toán.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Khắc sâu: $\\alpha$ là góc hợp bởi vectơ $\\vec{B}$ và <strong>Vectơ Pháp Tuyến $\\vec{n}$</strong> (vectơ vuông góc với mặt phẳng). Nếu đề bài lừa bằng câu "$\\vec{B}$ hợp với mặt phẳng góc $30^\\circ$", thì phải tự trừ đi: $\\alpha = 90^\\circ - 30^\\circ = 60^\\circ$.</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 17. Máy phát điện xoay chiều</h3>
                
                <div class="concept-box">
                    <h4>1. Nguyên tắc hoạt động</h4>
                    <p>Dựa trên hiện tượng <strong>cảm ứng điện từ</strong>. Khi khung dây quay đều trong từ trường, từ thông qua khung biến thiên điều hòa, tạo ra suất điện động xoay chiều.</p>
                </div>

                <div class="concept-box">
                    <h4>2. Cấu tạo cơ bản</h4>
                    <ul>
                        <li><strong>Phần cảm:</strong> Nam châm (tạo ra từ trường).</li>
                        <li><strong>Phần ứng:</strong> Cuộn dây (nơi xuất hiện suất điện động cảm ứng).</li>
                        <li><em>Phân loại theo chuyển động:</em> Phần quay gọi là <strong>Roto</strong>, phần đứng yên gọi là <strong>Stato</strong>.</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>3. Các đại lượng xoay chiều</h4>
                    <p>Giá trị ghi trên các thiết bị điện là <strong>giá trị hiệu dụng</strong>.</p>
                    <p><strong>Công thức liên hệ với giá trị cực đại:</strong></p>
                    <div class="formula-box">
                        $$U = \\frac{U_0}{\\sqrt{2}} \\quad ; \\quad I = \\frac{I_0}{\\sqrt{2}}$$
                    </div>
                </div>
            </div>

            <div class="lesson-card">
                <h3>Bài 18. Ứng dụng hiện tượng cảm ứng điện từ</h3>
                
                <div class="concept-box">
                    <h4>1. Máy biến áp</h4>
                    <ul>
                        <li><strong>Chức năng:</strong> Thay đổi điện áp xoay chiều mà <strong>không làm thay đổi tần số</strong>.</li>
                    </ul>
                    <p><strong>Công thức:</strong></p>
                    <div class="formula-box">
                        $$\\frac{U_1}{U_2} = \\frac{N_1}{N_2}$$
                    </div>
                    <p><em>($N_1 > N_2$: Máy hạ áp ; $N_1 < N_2$: Máy tăng áp).</em></p>
                </div>

                <div class="concept-box">
                    <h4>2. Truyền tải điện năng đi xa</h4>
                    <p>Để giảm hao phí tỏa nhiệt trên đường dây, biện pháp tối ưu nhất là <strong>tăng điện áp</strong> truyền tải bằng máy biến áp trước khi truyền đi.</p>
                </div>

                <div class="concept-box">
                    <h4>3. Dòng điện Foucault (Phu-cô)</h4>
                    <ul>
                        <li><strong>Khái niệm:</strong> Dòng điện cảm ứng sinh ra trong khối kim loại khi đặt trong từ trường biến thiên.</li>
                        <li><strong>Ứng dụng:</strong> Nấu chảy kim loại, bếp từ, phanh điện từ.</li>
                        <li><strong>Giảm hao phí:</strong> Dùng các lá thép silic mỏng, sơn cách điện ghép sát nhau thay vì dùng khối kim loại đặc (như trong lõi máy biến áp).</li>
                    </ul>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Cho rằng máy biến áp có thể biến đổi cả điện một chiều (pin, ắc quy) và có thể thay đổi được tần số dòng điện.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Máy biến áp hoạt động hoàn toàn dựa trên sự biến thiên của từ thông, do đó nó <strong>chỉ hoạt động với điện xoay chiều</strong> và <strong>tần số luôn được giữ nguyên</strong> từ sơ cấp sang thứ cấp.</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 19. Điện từ trường. Mô hình sóng điện từ</h3>
                
                <div class="concept-box">
                    <h4>1. Thuyết Điện từ Maxwell</h4>
                    <ul>
                        <li>Từ trường biến thiên sinh ra <strong>điện trường xoáy</strong> (có đường sức kín).</li>
                        <li>Điện trường biến thiên sinh ra <strong>từ trường</strong>.</li>
                        <li>$\\Rightarrow$ Điện trường và từ trường là hai mặt của một thể thống nhất gọi là <strong>Điện từ trường</strong>.</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Sóng điện từ</h4>
                    <ul>
                        <li><strong>Bản chất:</strong> Là điện từ trường lan truyền trong không gian.</li>
                        <li><strong>Đặc điểm nổi bật:</strong>
                            <ul>
                                <li>Truyền được trong mọi môi trường, kể cả <strong>chân không</strong> (vận tốc lớn nhất $c = 3 \\cdot 10^8 \\text{ m/s}$).</li>
                                <li>Là sóng ngang. Hai vectơ $\\vec{E}$ và $\\vec{B}$ luôn vuông góc với nhau và vuông góc với phương truyền sóng, nhưng dao động <strong>luôn cùng pha</strong>.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>3. Thang sóng điện từ</h4>
                    <p>Sắp xếp theo thứ tự <strong>bước sóng giảm dần</strong> (tần số tăng dần, năng lượng đâm xuyên mạnh dần):</p>
                    <div class="highlight-box">
                        Sóng vô tuyến $\\rightarrow$ Tia hồng ngoại $\\rightarrow$ Ánh sáng nhìn thấy $\\rightarrow$ Tia tử ngoại $\\rightarrow$ Tia X $\\rightarrow$ Tia Gamma.
                    </div>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Cho rằng pha dao động của $\\vec{E}$ và $\\vec{B}$ là vuông pha (do hình ảnh vẽ hai vectơ này luôn nằm trên 2 trục vuông góc nhau).</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Phải tách biệt rõ hai khái niệm: Phương dao động là <strong>vuông góc</strong> trong không gian, nhưng Nhịp dao động (Pha) thì <strong>luôn cùng pha</strong> (cùng đạt cực đại, cùng về 0 tại một thời điểm).</div>
            </div>
        `,
        quizzes: [
            {
                id: "tu_1",
                context: "Câu 1 (Khái niệm từ trường). Khảo sát không gian xung quanh một nam châm thẳng hoặc một đoạn dây dẫn mang dòng điện.",
                statements: [
                    { id: "a", text: "a) Từ trường là một dạng vật chất vô hình tồn tại xung quanh nam châm hoặc dòng điện.", isTrue: true, exp: "Đúng (Định nghĩa khái niệm từ trường)." },
                    { id: "b", text: "b) Ta có thể nhận biết sự tồn tại của từ trường bằng cách dùng một điện tích điểm đứng yên đặt vào không gian đó.", isTrue: false, exp: "Sai (Từ trường không tác dụng lực lên điện tích đứng yên, phải dùng nam châm thử hoặc dòng điện thử)." },
                    { id: "c", text: "c) Biểu hiện cụ thể của từ trường là sự xuất hiện của lực từ tác dụng lên một dòng điện hoặc một nam châm khác đặt trong nó.", isTrue: true, exp: "Đúng (Biểu hiện của từ trường)." },
                    { id: "d", text: "d) Bản chất của từ trường do nam châm vĩnh cửu tạo ra hoàn toàn độc lập và khác biệt với từ trường do dòng điện tạo ra.", isTrue: false, exp: "Sai (Bản chất từ trường của nam châm cũng xuất phát từ dòng điện phân tử/chuyển động của electron, thống nhất với dòng điện vĩ mô)." }
                ]
            },
            {
                id: "tu_2",
                context: "Câu 2 (Đường sức từ). Thực hiện thí nghiệm rắc mạt sắt lên một tấm bìa đặt trên một nam châm thẳng, sau đó gõ nhẹ tấm bìa.",
                statements: [
                    { id: "a", text: "a) Hình ảnh các mạt sắt sắp xếp theo những đường cong nhất định xung quanh nam châm gọi là từ phổ.", isTrue: true, exp: "Đúng (Khái niệm từ phổ)." },
                    { id: "b", text: "b) Nơi nào mạt sắt tập trung dày đặc thì nơi đó từ trường càng mạnh.", isTrue: true, exp: "Đúng (Quy ước biểu diễn từ trường)." },
                    { id: "c", text: "c) Các đường sức từ của nam châm thẳng là những đường cong mở, đi ra từ cực Nam và kết thúc ở cực Bắc.", isTrue: false, exp: "Sai (Đường sức từ là những đường cong KÍN, ngoài nam châm thì đi \"ra Bắc, vào Nam\")." },
                    { id: "d", text: "d) Nếu ta đặt một la bàn nhỏ tại một điểm trên đường mạt sắt, trục của kim la bàn sẽ nằm dọc theo tiếp tuyến của đường sức từ tại điểm đó.", isTrue: true, exp: "Đúng (Tính chất định hướng của đường sức từ)." }
                ]
            },
            {
                id: "tu_3",
                context: "Câu 3 (Đại lượng Cảm ứng từ B). Xét một từ trường đều. Đặt một đoạn dây dẫn thẳng mang dòng điện vào trong từ trường này.",
                statements: [
                    { id: "a", text: "a) Cảm ứng từ $\\vec{B}$ là đại lượng vectơ đặc trưng cho từ trường về phương diện tác dụng lực.", isTrue: true, exp: "Đúng (Định nghĩa cảm ứng từ)." },
                    { id: "b", text: "b) Trong hệ SI, đơn vị của cảm ứng từ là tesla (T), có thể biểu diễn tương đương là 1 T = 1 N/(A.m).", isTrue: true, exp: "Đúng (Đơn vị dẫn xuất từ $F = BIL$)." },
                    { id: "c", text: "c) Cảm ứng từ là một đại lượng đo lường cơ bản trong hệ SI, tương tự như khối lượng hay chiều dài.", isTrue: false, exp: "Sai (Tesla là đơn vị dẫn xuất, chỉ có ampe (A) mới là đơn vị cơ bản)." },
                    { id: "d", text: "d) Nếu đoạn dây dẫn được đặt song song với các đường sức từ thì lực từ tác dụng lên đoạn dây đó bằng 0.", isTrue: true, exp: "Đúng (Lực từ phụ thuộc $\\sin\\theta$, khi song song $\\theta = 0^\\circ \\Rightarrow \\sin\\theta = 0 \\Rightarrow F = 0$)." }
                ]
            },
            {
                id: "tu_4",
                context: "Câu 4 (Hướng của lực từ - Quy tắc bàn tay trái). Một đoạn dây dẫn mang dòng điện được đặt ngang hướng từ Đông sang Tây trong một từ trường đều có các đường sức từ hướng thẳng đứng từ trên xuống dưới.",
                statements: [
                    { id: "a", text: "a) Đoạn dây sẽ chịu tác dụng của một lực từ nằm trong mặt phẳng nằm ngang.", isTrue: true, exp: "Đúng (Vì lực từ $\\vec{F}$ vuông góc với cả $\\vec{B}$ (thẳng đứng) và $\\vec{I}$ (Đông-Tây), nên $\\vec{F}$ nằm ngang)." },
                    { id: "b", text: "b) Chiều của lực từ được xác định bằng quy tắc bàn tay phải.", isTrue: false, exp: "Sai (Chiều lực từ xác định bằng quy tắc bàn tay TRÁI)." },
                    { id: "c", text: "c) Áp dụng quy tắc, lực từ tác dụng lên đoạn dây dẫn sẽ hướng từ Nam lên Bắc.", isTrue: true, exp: "Đúng (Hứng $\\vec{B}$ từ trên xuống, ngón giữa chỉ Đông sang Tây $\\Rightarrow$ ngón cái chãi ra $90^\\circ$ chỉ về hướng Bắc)." },
                    { id: "d", text: "d) Nếu ta đồng thời đảo chiều dòng điện và đảo chiều từ trường thì hướng của lực từ sẽ không thay đổi.", isTrue: true, exp: "Đúng (Đảo 2 yếu tố cùng lúc thì quy tắc bàn tay trái cho lại kết quả như cũ)." }
                ]
            },
            {
                id: "tu_5",
                context: "Câu 5 (Định lượng Lực từ). Một đoạn dây dẫn thẳng dài 20 cm mang dòng điện cường độ 5 A được đặt trong một từ trường đều có độ lớn $B = 0,04\\text{ T}$. Đoạn dây hợp với hướng của các đường sức từ một góc $30^\\circ$.",
                statements: [
                    { id: "a", text: "a) Góc $\\theta$ trong biểu thức tính lực từ $F = BIL\\sin\\theta$ chính là góc $30^\\circ$.", isTrue: true, exp: "Đúng (Đúng định nghĩa góc)." },
                    { id: "b", text: "b) Nếu tăng cường độ dòng điện lên gấp đôi và giảm chiều dài đoạn dây trong từ trường đi một nửa thì độ lớn lực từ không đổi.", isTrue: true, exp: "Đúng ($I' = 2I, L' = L/2 \\Rightarrow I'L' = IL \\Rightarrow F$ không đổi)." },
                    { id: "c", text: "c) Lực từ tác dụng lên đoạn dây dẫn trong trường hợp này là 0,04 N.", isTrue: false, exp: "Sai (Bẫy tính toán: $F = 0,04 \\times 5 \\times 0,2 \\times \\sin(30^\\circ) = 0,02\\text{ N}$, không phải 0,04 N)." },
                    { id: "d", text: "d) Lực từ sẽ đạt giá trị cực đại khi đoạn dây được uốn thành một vòng tròn khép kín.", isTrue: false, exp: "Sai (Vòng dây khép kín đặt trong từ trường đều chịu tổng lực từ bằng 0, lực từ lên dây cực đại khi dây thẳng và đặt vuông góc $\\vec{B}$)." }
                ]
            },
            {
                id: "tu_6",
                context: "Câu 6 (Từ thông). Một khung dây dẫn hình chữ nhật có diện tích $S = 50\\text{ cm}^2$ gồm 100 vòng dây, đặt trong từ trường đều có cảm ứng từ $B = 0,2\\text{ T}$. Vectơ cảm ứng từ hợp với mặt phẳng khung dây một góc $60^\\circ$.",
                statements: [
                    { id: "a", text: "a) Từ thông qua diện tích $S$ là đại lượng vô hướng, có thể mang giá trị dương, âm hoặc bằng 0.", isTrue: true, exp: "Đúng (Tính chất của từ thông)." },
                    { id: "b", text: "b) Đơn vị của từ thông là weber (Wb), tương đương với $1\\text{ T.m}^2$.", isTrue: true, exp: "Đúng (Đơn vị dẫn xuất $\\Phi = B.S$)." },
                    { id: "c", text: "c) Góc $\\alpha$ (giữa pháp tuyến của khung dây và vectơ cảm ứng từ) để tính từ thông trong trường hợp này là $60^\\circ$.", isTrue: false, exp: "Sai (Bẫy góc: $\\vec{B}$ hợp với mặt phẳng góc $60^\\circ \\Rightarrow$ góc $\\alpha$ hợp với PHÁP TUYẾN là $90^\\circ - 60^\\circ = 30^\\circ$)." },
                    { id: "d", text: "d) Độ lớn từ thông qua toàn bộ khung dây này là 0,05 Wb.", isTrue: false, exp: "Sai (Bẫy tính toán định lượng: $\\Phi = NBS\\cos\\alpha = 100 \\times 0,2 \\times 50.10^{-4} \\times \\cos(30^\\circ) = 0,1 \\times \\frac{\\sqrt{3}}{2} \\approx 0,0866\\text{ Wb}$. Giá trị 0,05 là do học sinh tính nhầm $\\cos(60^\\circ)$)." }
                ]
            },
            {
                id: "tu_7",
                context: "Câu 7 (Hiện tượng cảm ứng điện từ). Tiến hành thí nghiệm đưa một nam châm thẳng lại gần một vòng dây dẫn kín cố định.",
                statements: [
                    { id: "a", text: "a) Trong vòng dây sẽ xuất hiện dòng điện cảm ứng.", isTrue: true, exp: "Đúng (Hiện tượng thực nghiệm)." },
                    { id: "b", text: "b) Nguyên nhân sinh ra dòng điện cảm ứng là do từ thông qua vòng dây biến thiên theo thời gian.", isTrue: true, exp: "Đúng (Bản chất vật lý)." },
                    { id: "c", text: "c) Nếu ta để nam châm đứng yên ngay sát vòng dây, dòng điện cảm ứng trong vòng dây sẽ đạt giá trị cực đại.", isTrue: false, exp: "Sai (Nam châm đứng yên $\\Rightarrow \\Delta\\Phi = 0 \\Rightarrow$ không có dòng điện cảm ứng)." },
                    { id: "d", text: "d) Tốc độ dịch chuyển nam châm càng nhanh thì dòng điện cảm ứng sinh ra có cường độ càng lớn.", isTrue: true, exp: "Đúng (Định luật Faraday: $e_c \\propto \\Delta\\Phi/\\Delta t$)." }
                ]
            },
            {
                id: "tu_8",
                context: "Câu 8 (Định luật Lenz). Vận dụng định luật Lenz cho thí nghiệm ở Câu 7 (đưa cực Bắc của nam châm lại gần vòng dây).",
                statements: [
                    { id: "a", text: "a) Định luật Lenz cho phép xác định chiều của dòng điện cảm ứng.", isTrue: true, exp: "Đúng (Ý nghĩa định luật)." },
                    { id: "b", text: "b) Từ trường do dòng điện cảm ứng sinh ra luôn có tác dụng chống lại nguyên nhân sinh ra nó.", isTrue: true, exp: "Đúng (Nội dung định luật)." },
                    { id: "c", text: "c) Mặt của vòng dây đối diện với cực Bắc của nam châm sẽ xuất hiện cực Nam để hút nam châm lại.", isTrue: false, exp: "Sai (Bẫy tương tác từ: Để \"chống lại\" sự LẠI GẦN, vòng dây phải sinh ra cực BẮC để ĐẨY nam châm ra xa)." },
                    { id: "d", text: "d) Sự xuất hiện của dòng điện cảm ứng có chiều tuân theo định luật Lenz là biểu hiện của định luật bảo toàn năng lượng.", isTrue: true, exp: "Đúng (Năng lượng cơ học sinh công thắng lực đẩy từ biến thành năng lượng điện)." }
                ]
            },
            {
                id: "tu_9",
                context: "Câu 9 (Định luật Faraday - Tính toán). Một cuộn dây có 500 vòng, diện tích mỗi vòng là $10\\text{ cm}^2$, đặt trong từ trường đều. Vectơ cảm ứng từ vuông góc với mặt phẳng cuộn dây. Cảm ứng từ $B$ giảm đều từ 0,5 T xuống 0 trong thời gian 0,1 s.",
                statements: [
                    { id: "a", text: "a) Biểu thức của định luật Faraday là $e_c = - \\frac{\\Delta\\Phi}{\\Delta t}$.", isTrue: true, exp: "Đúng (Biểu thức gốc)." },
                    { id: "b", text: "b) Độ biến thiên từ thông qua một vòng dây trong khoảng thời gian trên là $\\Delta\\Phi = -5.10^{-4}\\text{ Wb}$.", isTrue: true, exp: "Đúng ($\\Delta\\Phi = S(\\Delta B) = 10.10^{-4} \\times (0 - 0,5) = -5.10^{-4}\\text{ Wb}$)." },
                    { id: "c", text: "c) Suất điện động cảm ứng xuất hiện trong cuộn dây có độ lớn là 2,5 V.", isTrue: true, exp: "Đúng ($|e_c| = |-N \\frac{\\Delta\\Phi}{\\Delta t}| = 500 \\times \\frac{5.10^{-4}}{0,1} = 2,5\\text{ V}$)." },
                    { id: "d", text: "d) Nếu cảm ứng từ không giảm mà tăng đều từ 0,5 T lên 1,0 T trong cùng thời gian đó thì suất điện động cảm ứng sinh ra sẽ có chiều giống như ban đầu.", isTrue: false, exp: "Sai (Tăng từ trường $\\Rightarrow \\Delta\\Phi > 0$, chiều suất điện động đảo ngược so với khi từ trường giảm)." }
                ]
            },
            {
                id: "tu_10",
                context: "Câu 10 (Sóng điện từ). Mô tả mô hình và sự lan truyền của sóng điện từ trong thang sóng.",
                statements: [
                    { id: "a", text: "a) Sóng điện từ là sự lan truyền của điện từ trường biến thiên trong không gian.", isTrue: true, exp: "Đúng (Khái niệm)." },
                    { id: "b", text: "b) Sóng điện từ có thể lan truyền được trong cả các môi trường vật chất và trong chân không.", isTrue: true, exp: "Đúng (Tính chất truyền sóng)." },
                    { id: "c", text: "c) Tại mỗi điểm trên phương truyền sóng, vectơ cường độ điện trường $\\vec{E}$ và vectơ cảm ứng từ $\\vec{B}$ luôn dao động vuông pha với nhau.", isTrue: false, exp: "Sai (Bẫy pha dao động: $\\vec{E}$ và $\\vec{B}$ vuông góc về phương, nhưng luôn dao động ĐỒNG PHA)." },
                    { id: "d", text: "d) Trong thang sóng điện từ, tia X (tia Rơ-nghen) có bước sóng nhỏ hơn bước sóng của tia hồng ngoại.", isTrue: true, exp: "Đúng (Sắp xếp thang sóng: $\\lambda_{\\text{X}} < \\lambda_{\\text{UV}} < \\lambda_{\\text{Visible}} < \\lambda_{\\text{IR}}$)." }
                ]
            },
            {
                id: "tu_11",
                context: "Câu 11 (Tạo ra dòng điện xoay chiều). Cho một khung dây dẫn phẳng quay đều quanh một trục cố định nằm trong mặt phẳng khung, trong một từ trường đều $\\vec{B}$ có hướng vuông góc với trục quay.",
                statements: [
                    { id: "a", text: "a) Từ thông qua khung dây biến thiên điều hòa theo thời gian.", isTrue: true, exp: "Đúng ($\\Phi = \\Phi_0 \\cos(\\omega t + \\varphi)$)." },
                    { id: "b", text: "b) Trong khung dây xuất hiện suất điện động cảm ứng xoay chiều biến thiên cùng pha với từ thông.", isTrue: false, exp: "Sai (Suất điện động $e = -\\Phi'$ nên $e$ biến thiên trễ pha $\\pi/2$ so với từ thông)." },
                    { id: "c", text: "c) Khi mặt phẳng khung dây vuông góc với các đường sức từ thì suất điện động trong khung đạt giá trị cực đại.", isTrue: false, exp: "Sai (Khi mặt phẳng vuông góc đường sức $\\Rightarrow \\Phi$ đạt cực đại $\\Rightarrow$ tốc độ biến thiên từ thông bằng $0 \\Rightarrow e = 0$)." },
                    { id: "d", text: "d) Phương pháp này là nguyên tắc cơ bản ứng dụng hiện tượng cảm ứng điện từ để thiết kế máy phát điện xoay chiều.", isTrue: true, exp: "Đúng (Nguyên tắc chế tạo máy phát AC)." }
                ]
            },
            {
                id: "tu_12",
                context: "Câu 12 (Thông số dòng điện xoay chiều). Một thiết bị điện gia dụng tại Việt Nam ghi thông số \"Điện áp định mức 220V - Tần số 50Hz\".",
                statements: [
                    { id: "a", text: "a) Giá trị 220V là giá trị hiệu dụng của điện áp xoay chiều.", isTrue: true, exp: "Đúng (Quy ước thông số định mức luôn là giá trị hiệu dụng)." },
                    { id: "b", text: "b) Giá trị cực đại (biên độ) của điện áp này xấp xỉ 311V.", isTrue: true, exp: "Đúng ($U_0 = U\\sqrt{2} = 220\\sqrt{2} \\approx 311\\text{V}$)." },
                    { id: "c", text: "c) Chu kì của dòng điện xoay chiều này là 0,02s.", isTrue: true, exp: "Đúng ($T = 1/f = 1/50 = 0,02\\text{s}$)." },
                    { id: "d", text: "d) Khái niệm cường độ dòng điện hiệu dụng được xây dựng dựa trên tác dụng từ của dòng điện xoay chiều.", isTrue: false, exp: "Sai (Được xây dựng dựa trên tác dụng NHIỆT của dòng điện, tương đương dòng điện không đổi)." }
                ]
            },
            {
                id: "tu_13",
                context: "Câu 13 (Ứng dụng dòng điện xoay chiều & An toàn điện).",
                statements: [
                    { id: "a", text: "a) Máy biến áp là thiết bị ứng dụng hiện tượng cảm ứng điện từ để thay đổi điện áp xoay chiều.", isTrue: true, exp: "Đúng (Ứng dụng cảm ứng điện từ)." },
                    { id: "b", text: "b) Bếp từ (bếp điện từ) hoạt động bằng cách sinh ra dòng điện Foucault trực tiếp trên mặt kính cách điện để làm nóng.", isTrue: false, exp: "Sai (Dòng Foucault sinh ra ở mâm từ và truyền vào đáy nồi bằng hợp kim sắt từ, không sinh ra trên mặt kính)." },
                    { id: "c", text: "c) Để đảm bảo an toàn điện trong gia đình, các công tắc điện và cầu chì phải được lắp trên dây trung tính (dây nguội).", isTrue: false, exp: "Sai (Bẫy thực tế an toàn: Cầu chì và công tắc BẮT BUỘC phải lắp trên dây pha (dây nóng) để khi ngắt, mạch bị cắt hoàn toàn khỏi nguồn điện áp cao)." },
                    { id: "d", text: "d) Việc nối đất (tiếp địa) vỏ kim loại của các thiết bị điện như máy giặt giúp dòng điện rò rỉ truyền xuống đất, bảo vệ người dùng không bị điện giật.", isTrue: true, exp: "Đúng (Tác dụng của dây tiếp địa)." }
                ]
            },
            {
                id: "tu_14",
                context: "Câu 14 (Từ phổ ống dây và Nam châm điện). Quấn một sợi dây dẫn thành một ống dây dài (solenoid) và cho dòng điện chạy qua.",
                statements: [
                    { id: "a", text: "a) Bên trong lòng ống dây, các đường sức từ là những đường thẳng song song, cách đều nhau (từ trường đều).", isTrue: true, exp: "Đúng (Đặc tính từ trường lòng ống dây)." },
                    { id: "b", text: "b) Bên ngoài ống dây, hình dạng từ phổ giống hệt từ phổ của một nam châm thẳng.", isTrue: true, exp: "Đúng (Sự tương đương nam châm điện - nam châm thẳng)." },
                    { id: "c", text: "c) Khi ta đảo chiều dòng điện chạy qua ống dây, các cực từ ở hai đầu ống dây sẽ không thay đổi.", isTrue: false, exp: "Sai (Theo quy tắc nắm tay phải, đổi chiều $I$ thì chiều $\\vec{B}$ đổi $\\Rightarrow$ các cực từ đảo ngược)." },
                    { id: "d", text: "d) Ứng dụng phổ biến nhất của từ trường ống dây có dòng điện là chế tạo nam châm điện dùng trong công nghiệp.", isTrue: true, exp: "Đúng (Ứng dụng nam châm điện hút phế liệu, rơ-le)." }
                ]
            },
            {
                id: "tu_15",
                context: "Câu 15 (Lực Lorentz - Cơ chế vi mô của lực từ). Từ góc độ vi mô, lực từ tác dụng lên đoạn dây dẫn mang dòng điện chính là tổng hợp các lực tác dụng lên các hạt mang điện chuyển động.",
                statements: [
                    { id: "a", text: "a) Lực từ tác dụng lên một điện tích chuyển động trong từ trường được gọi là lực Lorentz.", isTrue: true, exp: "Đúng (Định nghĩa)." },
                    { id: "b", text: "b) Hướng của lực Lorentz luôn vuông góc với vận tốc của hạt mang điện.", isTrue: true, exp: "Đúng (Đặc điểm cơ bản của lực Lorentz)." },
                    { id: "c", text: "c) Lực Lorentz thực hiện công làm tăng động năng của hạt mang điện chuyển động trong từ trường.", isTrue: false, exp: "Sai (Vì $\\vec{F}$ vuông góc $\\vec{v}$ nên lực Lorentz KHÔNG sinh công, động năng và độ lớn vận tốc hạt không đổi)." },
                    { id: "d", text: "d) Cùng chuyển động với một vận tốc vào một từ trường, electron và hạt proton sẽ bị lệch về hai phía ngược nhau.", isTrue: true, exp: "Đúng (Do mang điện tích trái dấu nên lực Lorentz ngược chiều nhau)." }
                ]
            },
            {
                id: "tu_16",
                context: "Câu 16 (Điện từ trường của Maxwell). Thuyết điện từ của Maxwell thống nhất điện trường và từ trường.",
                statements: [
                    { id: "a", text: "a) Một từ trường biến thiên theo thời gian sẽ sinh ra một điện trường xoáy.", isTrue: true, exp: "Đúng (Giả thuyết 1 của Maxwell)." },
                    { id: "b", text: "b) Khác với điện trường tĩnh, điện trường xoáy có các đường sức là những đường cong kín.", isTrue: true, exp: "Đúng (Đặc điểm phân biệt điện trường xoáy)." },
                    { id: "c", text: "c) Theo giả thuyết thứ hai của Maxwell, chỉ có dòng điện dẫn (các điện tích chuyển động) mới sinh ra từ trường.", isTrue: false, exp: "Sai (Maxwell khẳng định cả điện trường biến thiên (dòng điện dịch) cũng sinh ra từ trường)." },
                    { id: "d", text: "d) Sự lan truyền tương tác điện từ trong không gian tuân theo vận tốc ánh sáng $c$.", isTrue: true, exp: "Đúng (Bản chất sóng điện từ)." }
                ]
            },
            {
                id: "tu_17",
                context: "Câu 17 (Phân tích thứ nguyên và Đơn vị). Học sinh được yêu cầu kiểm tra sự tương thích của các đơn vị đo các đại lượng từ.",
                statements: [
                    { id: "a", text: "a) Tesla (T) là đơn vị đo của cảm ứng từ $\\vec{B}$.", isTrue: true, exp: "Đúng (Nhận biết cơ bản)." },
                    { id: "b", text: "b) Weber (Wb) là đơn vị đo của từ thông $\\Phi$.", isTrue: true, exp: "Đúng (Nhận biết cơ bản)." },
                    { id: "c", text: "c) Dựa vào công thức tính từ thông, ta có hệ thức liên hệ: $1\\text{ Wb} = 1\\text{ T.m}^2$.", isTrue: true, exp: "Đúng (Rút ra từ $\\Phi = B.S$)." },
                    { id: "d", text: "d) Có thể phân tích đơn vị tesla ra các đơn vị cơ bản của hệ SI thành biểu thức: $\\text{T} = \\text{kg} \\cdot \\text{m} \\cdot \\text{s}^{-2} \\cdot \\text{A}^{-1}$.", isTrue: false, exp: "Sai (Bẫy thứ nguyên: $F = BIL \\Rightarrow B = \\frac{F}{IL} \\Rightarrow \\text{T} = \\frac{\\text{N}}{\\text{A.m}} = \\frac{\\text{kg.m.s}^{-2}}{\\text{A.m}} = \\text{kg.s}^{-2}\\text{.A}^{-1}$. Phát biểu bị thừa đơn vị mét (m))." }
                ]
            },
            {
                id: "tu_18",
                context: "Câu 18 (Dòng điện xoay chiều trong thực tế). Đánh giá các phát biểu về ứng dụng điện xoay chiều.",
                statements: [
                    { id: "a", text: "a) Ưu điểm lớn nhất của điện xoay chiều so với điện một chiều là dễ dàng thay đổi điện áp bằng máy biến áp.", isTrue: true, exp: "Đúng (Lý do lịch sử AC thắng DC trong truyền tải)." },
                    { id: "b", text: "b) Trong quá trình truyền tải điện năng đi xa, người ta thường dùng máy hạ áp ở đầu đường dây phát để giảm hao phí.", isTrue: false, exp: "Sai (Để giảm hao phí truyền tải, phải dùng máy TĂNG áp ở đầu đường dây để giảm cường độ dòng điện $I$)." },
                    { id: "c", text: "c) Động cơ không đồng bộ ba pha là thiết bị biến đổi điện năng của dòng điện xoay chiều thành cơ năng dựa trên từ trường quay.", isTrue: true, exp: "Đúng (Nguyên lý hoạt động động cơ 3 pha)." },
                    { id: "d", text: "d) Ở mạng điện dân dụng 3 pha 4 dây, điện áp giữa một dây pha và dây trung tính gọi là điện áp pha.", isTrue: true, exp: "Đúng (Định nghĩa điện áp pha và điện áp dây)." }
                ]
            },
            {
                id: "tu_19",
                context: "Câu 19 (THỰC HÀNH - Đo cảm ứng từ bằng cân dòng điện). Trong phòng thí nghiệm, học sinh dùng một \"cân dòng điện\" gồm một khung dây dẫn hình chữ nhật ABCD có đoạn đáy BC chiều dài L nằm ngang. Treo khung dây vào một đĩa cân sao cho đoạn BC nằm chìm trong từ trường đều $\\vec{B}$ của một nam châm.",
                statements: [
                    { id: "a", text: "a) Trước khi cho dòng điện qua khung dây, cần hiệu chỉnh để đĩa cân ở trạng thái thăng bằng.", isTrue: true, exp: "Đúng (Nguyên tắc mọi bài đo đạc dùng cân)." },
                    { id: "b", text: "b) Khi cho dòng điện $I$ qua khung, lực từ $F$ tác dụng lên đoạn BC sẽ làm cân mất thăng bằng.", isTrue: true, exp: "Đúng (Biểu hiện của tương tác từ)." },
                    { id: "c", text: "c) Để cân thăng bằng trở lại, ta thêm các quả nặng khối lượng $m$ vào đĩa cân. Khi đó độ lớn lực từ được tính gián tiếp qua trọng lực: $F = mg$.", isTrue: true, exp: "Đúng (Dùng ngẫu lực hoặc trọng lực để cân bằng lực từ)." },
                    { id: "d", text: "d) Khi vẽ đồ thị biểu diễn lực từ $F$ (trục tung) theo cường độ dòng điện $I$ (trục hoành), đồ thị thu được là một đường cong parabol.", isTrue: false, exp: "Sai (Bẫy đồ thị: $F = (B.L).I$. Do $B$ và $L$ hằng số nên $F$ tỉ lệ bậc nhất với $I$. Đồ thị phải là một đường thẳng đi qua gốc tọa độ)." }
                ]
            },
            {
                id: "tu_20",
                context: "Câu 20 (THỰC HÀNH - Máy biến áp). Học sinh lắp một mạch điện thí nghiệm gồm một máy biến áp có số vòng dây cuộn sơ cấp $N_1$ và cuộn thứ cấp $N_2$.",
                statements: [
                    { id: "a", text: "a) Để máy biến áp hoạt động, học sinh bắt buộc phải nối hai đầu cuộn sơ cấp với một nguồn điện xoay chiều.", isTrue: true, exp: "Đúng (Phải có dòng xoay chiều mới sinh ra từ thông biến thiên)." },
                    { id: "b", text: "b) Nếu $N_1 > N_2$, máy biến áp này đóng vai trò là máy tăng áp.", isTrue: false, exp: "Sai (Tỉ số $\\frac{U_1}{U_2} = \\frac{N_1}{N_2}$. Nếu $N_1 > N_2 \\Rightarrow U_1 > U_2 \\Rightarrow$ Đây là máy HẠ ÁP)." },
                    { id: "c", text: "c) Nếu học sinh vô tình nối cuộn sơ cấp với một viên pin 9V (nguồn điện một chiều) thì bóng đèn nối ở cuộn thứ cấp sẽ sáng liên tục.", isTrue: false, exp: "Sai (Bẫy thực hành dòng DC: Dòng một chiều từ pin tạo ra từ thông không đổi, $\\Delta\\Phi = 0$ nên cuộn thứ cấp không có dòng điện cảm ứng, đèn không sáng)." },
                    { id: "d", text: "d) Nguyên tắc hoạt động của máy biến áp thí nghiệm này hoàn toàn dựa trên hiện tượng cảm ứng điện từ.", isTrue: true, exp: "Đúng (Bản chất cốt lõi của máy biến áp)." }
                ]
            }
        ]
    },
   hatnhan: {
        theory: `
            <h2>Kiến thức trọng tâm: Vật lí hạt nhân</h2>

            <div class="lesson-card">
                <h3>Bài 21. Cấu trúc hạt nhân</h3>
                
                <div class="concept-box">
                    <h4>1. Khám phá hạt nhân (Thí nghiệm Rutherford)</h4>
                    <ul>
                        <li><strong>Kết luận cốt lõi:</strong> Nguyên tử có cấu tạo rỗng. Hạt nhân mang điện tích dương, chứa gần như toàn bộ khối lượng nguyên tử nhưng có kích thước vô cùng nhỏ bé ($\\sim 10^{-15}\\text{ m}$, nhỏ hơn nguyên tử khoảng $10.000$ đến $100.000$ lần).</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Cấu tạo hạt nhân nguyên tử</h4>
                    <p>Hạt nhân được cấu tạo từ các nucleon, gồm 2 loại:</p>
                    <ul>
                        <li><strong>Proton (p):</strong> Mang điện tích dương ($+e$).</li>
                        <li><strong>Neutron (n):</strong> Không mang điện.</li>
                    </ul>
                    <p><strong>Kí hiệu hạt nhân:</strong></p>
                    <div class="formula-box">
                        $$^{A}_{Z}\\text{X}$$
                    </div>
                    <ul>
                        <li>$Z$: Số hiệu nguyên tử (Số proton = Số electron = Điện tích hạt nhân tính theo $e$).</li>
                        <li>$A$: Số khối (Tổng số nucleon).</li>
                        <li>$N = A - Z$: Số lượng neutron.</li>
                    </ul>
                    <div class="highlight-box">
                        <strong>Đồng vị:</strong> Là các nguyên tử có cùng số proton ($Z$) nhưng khác số neutron ($N$), dẫn đến khác số khối ($A$).
                    </div>
                </div>
            </div>

            <div class="lesson-card">
                <h3>Bài 22. Phản ứng hạt nhân và Năng lượng liên kết</h3>
                
                <div class="concept-box">
                    <h4>1. Hệ thức Einstein về khối lượng – năng lượng</h4>
                    <ul>
                        <li><strong>Khối lượng và năng lượng tỉ lệ thuận với nhau:</strong>
                            <div class="formula-box">$$E = mc^2$$</div>
                        </li>
                        <li><strong>Năng lượng nghỉ:</strong> Một vật đứng yên có khối lượng $m_0$ vẫn mang năng lượng $E_0 = m_0 c^2$.</li>
                        <li><strong>Đơn vị khối lượng nguyên tử (u):</strong> $1\\text{ u} \\approx 931,5\\text{ MeV/c}^2$.</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Độ hụt khối và Năng lượng liên kết</h4>
                    <ul>
                        <li><strong>Độ hụt khối ($\\Delta m$):</strong> Khối lượng của hạt nhân luôn nhỏ hơn tổng khối lượng của các nucleon tạo thành nó.
                            <div class="formula-box">$$\\Delta m = [Z \\cdot m_p + (A - Z) \\cdot m_n] - m_X$$</div>
                        </li>
                        <li><strong>Năng lượng liên kết ($W_{lk}$):</strong> Là năng lượng tối thiểu cần thiết để phá vỡ hạt nhân thành các nucleon riêng rẽ (hoặc năng lượng tỏa ra khi hình thành hạt nhân).
                            <div class="formula-box">$$W_{lk} = \\Delta m \\cdot c^2$$</div>
                        </li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>3. Năng lượng liên kết riêng ($\\varepsilon$)</h4>
                    <ul>
                        <li><strong>Định nghĩa:</strong> Là năng lượng liên kết tính trên một nucleon.
                            <div class="formula-box">$$\\varepsilon = \\frac{W_{lk}}{A}$$</div>
                        </li>
                    </ul>
                    <div class="highlight-box golden-note">
                        <strong>Ý nghĩa "Vàng":</strong> Hạt nhân có năng lượng liên kết riêng <strong>càng lớn thì càng bền vững</strong>. (Các hạt nhân trung bình có số khối $50 < A < 90$ là bền vững nhất, ví dụ: Sắt $^{56}\\text{Fe}$).
                    </div>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Dùng "Năng lượng liên kết tổng" ($W_{lk}$) để so sánh độ bền vững và cho rằng hạt nhân càng nặng càng bền.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Chìa khóa duy nhất để so sánh độ bền vững là <strong>Năng lượng liên kết riêng</strong> ($\\varepsilon$). Phải lấy $W_{lk}$ chia đều cho số khối $A$. Không được so sánh dựa trên $W_{lk}$.</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 23. Hiện tượng phóng xạ</h3>
                
                <div class="concept-box">
                    <h4>1. Khái niệm và Đặc điểm</h4>
                    <ul>
                        <li><strong>Bản chất:</strong> Là quá trình phân rã tự phát của một hạt nhân không bền vững, phát ra các tia phóng xạ và biến đổi thành hạt nhân khác.</li>
                        <li><strong>Tính chất:</strong> Hoàn toàn ngẫu nhiên và không phụ thuộc vào điều kiện môi trường bên ngoài (nhiệt độ, áp suất,...).</li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Các loại tia phóng xạ</h4>
                    <div class="table-responsive">
                        <table class="styled-table">
                            <thead>
                                <tr>
                                    <th>Tia phóng xạ</th>
                                    <th>Bản chất</th>
                                    <th>Khả năng đâm xuyên</th>
                                    <th>Khả năng ion hóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Tia $\\alpha$</strong></td>
                                    <td>Dòng hạt nhân Helium ($^{4}_{2}\\text{He}$)</td>
                                    <td>Rất yếu (cản bởi tờ giấy)</td>
                                    <td>Rất mạnh</td>
                                </tr>
                                <tr>
                                    <td><strong>Tia $\\beta$</strong></td>
                                    <td>Dòng electron ($\\beta^-$) hoặc positron ($\\beta^+$)</td>
                                    <td>Mạnh hơn $\\alpha$ (cản bởi lá nhôm vài mm)</td>
                                    <td>Yếu hơn $\\alpha$</td>
                                </tr>
                                <tr>
                                    <td><strong>Tia $\\gamma$</strong></td>
                                    <td>Sóng điện từ bước sóng cực ngắn</td>
                                    <td>Cực kì mạnh (cản bởi lớp chì dày hoặc bê tông cốt thép)</td>
                                    <td>Yếu nhất</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="concept-box">
                    <h4>3. Định luật phân rã phóng xạ</h4>
                    <ul>
                        <li><strong>Chu kì bán rã ($T$):</strong> Khoảng thời gian để một nửa số hạt nhân hiện có bị phân rã.</li>
                        <li><strong>Hằng số phóng xạ ($\\lambda$):</strong> $\\lambda = \\frac{\\ln 2}{T}$</li>
                        <li><strong>Số hạt nhân còn lại sau thời gian $t$:</strong>
                            <div class="formula-box">$$N = N_0 \\cdot e^{-\\lambda t} = \\frac{N_0}{2^{\\frac{t}{T}}}$$</div>
                            <em>(Trong đó $N_0$ là số hạt nhân ban đầu)</em>
                        </li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>4. Độ phóng xạ ($H$)</h4>
                    <ul>
                        <li>Là đại lượng đặc trưng cho tính phóng xạ mạnh hay yếu, bằng số phân rã trong 1 giây.</li>
                        <li><strong>Công thức:</strong> $H = \\lambda \\cdot N$</li>
                        <li><strong>Đơn vị chuẩn:</strong> Becquerel (Bq). $1\\text{ Bq} = 1\\text{ phân rã/giây}$.</li>
                    </ul>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Nhầm lẫn khi đọc đề giữa lượng hạt "còn lại chưa phân rã" và lượng hạt "đã bị phân rã".</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Đọc kĩ câu hỏi và dịch ra công thức:<br>- Khối lượng/Số hạt <strong>Còn lại</strong>: $N$, $m$.<br>- Khối lượng/Số hạt <strong>Đã phân rã / Tạo thành</strong>: $\\Delta N = N_0 - N$, $\\Delta m = m_0 - m$.</div>
            </div>

            <div class="lesson-card">
                <h3>Bài 24. Công nghiệp hạt nhân</h3>
                
                <div class="concept-box">
                    <h4>1. Hai loại phản ứng hạt nhân tỏa năng lượng mạnh nhất</h4>
                    <ul>
                        <li><strong>Phản ứng phân hạch:</strong> Một hạt nhân rất nặng (như Urani $^{235}\\text{U}$) hấp thụ một neutron chậm rồi vỡ thành hai hạt nhân trung bình, tỏa năng lượng và sinh ra các neutron mới (tạo phản ứng dây chuyền).</li>
                        <li><strong>Phản ứng tổng hợp hạt nhân (Nhiệt hạch):</strong> Hai hạt nhân rất nhẹ (như các đồng vị của Hydro) kết hợp thành hạt nhân nặng hơn.
                            <ul>
                                <li><em>Điều kiện:</em> Xảy ra ở nhiệt độ hàng chục triệu độ.</li>
                                <li><em>Ví dụ:</em> Phản ứng tạo ra năng lượng trên Mặt Trời.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="concept-box">
                    <h4>2. Ứng dụng & An toàn bức xạ</h4>
                    <p><strong>Ứng dụng:</strong></p>
                    <ul>
                        <li>Nhà máy điện hạt nhân (kiểm soát phản ứng phân hạch dây chuyền bằng thanh điều khiển).</li>
                        <li>Y tế (đồng vị phóng xạ để xạ trị ung thư, chiếu chụp).</li>
                        <li>Định tuổi khảo cổ học (phương pháp Cacbon-14).</li>
                    </ul>
                    <p><strong>3 nguyên tắc vàng an toàn bức xạ:</strong></p>
                    <ul>
                        <li>Tối đa hóa khoảng cách tới nguồn phát.</li>
                        <li>Tối thiểu hóa thời gian tiếp xúc.</li>
                        <li>Sử dụng vật liệu che chắn phù hợp (chì, bê tông chuyên dụng).</li>
                    </ul>
                </div>

                <div class="mistake-box"><strong>⚠ Sai lầm thường mắc:</strong> Cho rằng phản ứng hạt nhân tuân theo định luật bảo toàn khối lượng như trong hóa học.</div>
                <div class="fix-box"><strong>💡 Cách khắc phục:</strong> Phản ứng hạt nhân <strong>Không bảo toàn khối lượng nghỉ</strong>. Khối lượng luôn bị hụt đi một phần để biến thành năng lượng lan tỏa ra môi trường (theo hệ thức $E = \\Delta m \\cdot c^2$). Chỉ có <em>số khối (A)</em> và <em>điện tích (Z)</em> là được bảo toàn.</div>
            </div>
        `,
       quizzes: [
            {
                id: "hatnhan_1",
                context: "Câu 1 (Cấu trúc hạt nhân và thí nghiệm tán xạ). Phân tích kết quả thí nghiệm Rutherford (bắn phá lá vàng mỏng bằng các hạt $\\alpha$).",
                statements: [
                    { id: "a", text: "a) Hầu hết các hạt $\\alpha$ truyền thẳng qua lá vàng chứng tỏ nguyên tử có cấu tạo chủ yếu là không gian rỗng.", isTrue: true, exp: "Đúng (Đặc điểm cấu tạo rỗng của nguyên tử)." },
                    { id: "b", text: "b) Sự tồn tại của hạt nhân được rút ra từ việc một số rất ít hạt $\\alpha$ bị lệch góc lớn hoặc bật ngược trở lại.", isTrue: true, exp: "Đúng (Kết luận cốt lõi của thí nghiệm Rutherford)." },
                    { id: "c", text: "c) Nguyên nhân hạt $\\alpha$ bị bật ngược trở lại là do chúng va chạm đàn hồi trực tiếp với các electron của nguyên tử vàng.", isTrue: false, exp: "Sai (Hạt $\\alpha$ bị bật lại do lực đẩy tĩnh điện Coulomb với hạt nhân vàng mang điện tích dương và tập trung khối lượng, khối lượng electron quá nhỏ để làm bật ngược hạt $\\alpha$)." },
                    { id: "d", text: "d) Đánh giá từ thí nghiệm cho thấy, kích thước của hạt nhân lớn hơn rất nhiều so với kích thước của toàn bộ nguyên tử.", isTrue: false, exp: "Sai (Kích thước hạt nhân ($10^{-15}\\text{ m}$) vô cùng nhỏ bé so với kích thước nguyên tử ($10^{-10}\\text{ m}$))." }
                ]
            },
            {
                id: "hatnhan_2",
                context: "Câu 2 (Mô hình và Kí hiệu hạt nhân). Xét hạt nhân Đồng vị Cacbon-14 có kí hiệu là $^{14}_{6}\\text{C}$.",
                statements: [
                    { id: "a", text: "a) Kí hiệu hạt nhân của nguyên tử được viết dưới dạng $^{A}_{Z}\\text{X}$, trong đó $A$ là số nucleon và $Z$ là số proton.", isTrue: true, exp: "Đúng (Quy ước quốc tế)." },
                    { id: "b", text: "b) Nguyên tử Cacbon-14 trung hòa về điện gồm có 6 proton, 8 neutron và 6 electron.", isTrue: true, exp: "Đúng ($Z=6 \\Rightarrow 6$ proton, 6 electron; $N = A - Z = 14 - 6 = 8$ neutron)." },
                    { id: "c", text: "c) Số khối $A$ ($A=14$) chính là khối lượng tuyệt đối của hạt nhân tính theo đơn vị gam.", isTrue: false, exp: "Sai ($A$ là TỔNG SỐ hạt nucleon, nó xấp xỉ khối lượng tính theo đơn vị amu, hoàn toàn không phải đơn vị gam)." },
                    { id: "d", text: "d) Điện tích của hạt nhân Cacbon-14 là $+6e$ (với $e$ là điện tích nguyên tố).", isTrue: true, exp: "Đúng (Hạt nhân mang điện tích dương do proton quyết định)." }
                ]
            },
            {
                id: "hatnhan_3",
                context: "Câu 3 (Hệ thức khối lượng - năng lượng). Theo thuyết tương đối hẹp của Einstein, khối lượng $m$ và năng lượng $E$ có mối liên hệ mật thiết.",
                statements: [
                    { id: "a", text: "a) Hệ thức liên hệ là $E = mc^2$, cho thấy khối lượng và năng lượng là hai thuộc tính đồng thời của vật chất, tỉ lệ thuận với nhau.", isTrue: true, exp: "Đúng (Ý nghĩa hệ thức Einstein)." },
                    { id: "b", text: "b) Một vật khi ở trạng thái nghỉ (đứng yên) thì năng lượng của nó hoàn toàn bằng không.", isTrue: false, exp: "Sai (Vật đứng yên vẫn có năng lượng nghỉ $E_0 = m_0 c^2$)." },
                    { id: "c", text: "c) Trong vật lí hạt nhân, khối lượng thường được đo bằng đơn vị khối lượng nguyên tử (amu), với $1\\text{ amu} \\approx 931,5\\text{ MeV/c}^2$.", isTrue: true, exp: "Đúng (Hệ quả của $E = mc^2$, đổi đơn vị amu $\\leftrightarrow \\text{MeV}$)." },
                    { id: "d", text: "d) Sự tỏa năng lượng của một phản ứng hạt nhân luôn đồng nghĩa với việc tổng khối lượng nghỉ của hệ các hạt sau phản ứng nhỏ hơn tổng khối lượng nghỉ của hệ trước phản ứng.", isTrue: true, exp: "Đúng (Nguyên lý bảo toàn: Tỏa năng lượng $\\Rightarrow \\Delta m > 0 \\Rightarrow m_{\\text{trước}} > m_{\\text{sau}}$)." }
                ]
            },
            {
                id: "hatnhan_4",
                context: "Câu 4 (Độ hụt khối và năng lượng liên kết). Hạt nhân Heli ($^{4}_{2}\\text{He}$) được tạo thành từ 2 proton và 2 neutron. Khối lượng của hạt nhân này là $m_{\\text{He}}$. Khối lượng của proton là $m_p$, neutron là $m_n$.",
                statements: [
                    { id: "a", text: "a) Khối lượng $m_{\\text{He}}$ luôn lớn hơn tổng khối lượng của các nucleon cấu tạo nên nó ($2m_p + 2m_n$).", isTrue: false, exp: "Sai (Khối lượng hạt nhân luôn NHỎ HƠN tổng khối lượng các nucleon tạo thành nó)." },
                    { id: "b", text: "b) Sự chênh lệch khối lượng $\\Delta m = (2m_p + 2m_n) - m_{\\text{He}}$ được gọi là độ hụt khối của hạt nhân.", isTrue: true, exp: "Đúng (Định nghĩa độ hụt khối)." },
                    { id: "c", text: "c) Năng lượng liên kết của hạt nhân Heli được tính bằng công thức $W_{lk} = \\Delta m.c^2$.", isTrue: true, exp: "Đúng (Công thức tính năng lượng liên kết)." },
                    { id: "d", text: "d) Năng lượng liên kết chính là năng lượng tối thiểu cần cung cấp để tách hạt nhân nguyên vẹn thành các nucleon riêng rẽ.", isTrue: true, exp: "Đúng (Ý nghĩa vật lí của năng lượng liên kết)." }
                ]
            },
            {
                id: "hatnhan_5",
                context: "Câu 5 (Năng lượng liên kết riêng và Độ bền vững).",
                statements: [
                    { id: "a", text: "a) Năng lượng liên kết riêng của một hạt nhân được tính bằng tỉ số giữa năng lượng liên kết và số proton của hạt nhân đó.", isTrue: false, exp: "Sai (Bẫy định nghĩa: Tỉ số giữa năng lượng liên kết và SỐ NUCLEON ($A$), không phải số proton ($Z$))." },
                    { id: "b", text: "b) Năng lượng liên kết riêng là đại lượng quyết định mức độ bền vững của hạt nhân.", isTrue: true, exp: "Đúng (Ý nghĩa cốt lõi của năng lượng liên kết riêng)." },
                    { id: "c", text: "c) Đồ thị thực nghiệm cho thấy các hạt nhân có số khối trung bình ($50 < A < 90$) có năng lượng liên kết riêng lớn nhất nên bền vững nhất.", isTrue: true, exp: "Đúng (Đặc điểm của đường cong năng lượng liên kết riêng)." },
                    { id: "d", text: "d) Hạt nhân Urani ($^{235}_{92}\\text{U}$) có năng lượng liên kết tổng cộng rất lớn nên nó là một hạt nhân rất bền vững.", isTrue: false, exp: "Sai (Urani nặng, năng lượng liên kết tổng lớn nhưng năng lượng liên kết RIÊNG lại nhỏ hơn sắt, nên nó kém bền và dễ tham gia phân hạch)." }
                ]
            },
            {
                id: "hatnhan_6",
                context: "Câu 6 (Phương trình phân rã đơn giản). Xét phương trình phân rã tự phát của hạt nhân Radi: $^{226}_{88}\\text{Ra} \\rightarrow ^{222}_{86}\\text{Rn} + \\text{X}$.",
                statements: [
                    { id: "a", text: "a) Hạt $\\text{X}$ trong phương trình phân rã trên là hạt $\\alpha$ ($^{4}_{2}\\text{He}$).", isTrue: true, exp: "Đúng ($A_X = 226 - 222 = 4$; $Z_X = 88 - 86 = 2 \\Rightarrow ^{4}_{2}\\text{He}$)." },
                    { id: "b", text: "b) Khi viết phương trình phân rã, ta phải tuân thủ định luật bảo toàn số nucleon (số khối) và định luật bảo toàn điện tích.", isTrue: true, exp: "Đúng (Nguyên tắc lập phương trình hạt nhân)." },
                    { id: "c", text: "c) Trong phương trình phân rã trên, có sự bảo toàn khối lượng nghỉ của các hạt.", isTrue: false, exp: "Sai (Phản ứng hạt nhân không có định luật bảo toàn khối lượng nghỉ, khối lượng bị hụt đi để chuyển thành động năng của hạt tỏa ra)." },
                    { id: "d", text: "d) Sự phân rã này là một dạng phản ứng hạt nhân tỏa năng lượng.", isTrue: true, exp: "Đúng (Phóng xạ tự phát luôn tỏa năng lượng)." }
                ]
            },
            {
                id: "hatnhan_7",
                context: "Câu 7 (Phản ứng phân hạch). Xét phản ứng phân hạch của hạt nhân $^{235}_{92}\\text{U}$.",
                statements: [
                    { id: "a", text: "a) Phân hạch là hiện tượng một hạt nhân rất nặng hấp thụ một neutron chậm rồi vỡ thành hai hạt nhân trung bình.", isTrue: true, exp: "Đúng (Định nghĩa phân hạch)." },
                    { id: "b", text: "b) Mỗi phản ứng phân hạch của $^{235}\\text{U}$ thường giải phóng thêm từ 2 đến 3 neutron mới.", isTrue: true, exp: "Đúng (Đặc tính phản ứng của $^{235}\\text{U}$)." },
                    { id: "c", text: "c) Các neutron giải phóng ra có thể tiếp tục kích thích các hạt nhân $^{235}\\text{U}$ khác, tạo thành phản ứng dây chuyền.", isTrue: true, exp: "Đúng (Cơ chế phản ứng dây chuyền)." },
                    { id: "d", text: "d) Để phản ứng dây chuyền xảy ra, khối lượng của khối Urani phải nhỏ hơn một giá trị nhất định gọi là khối lượng tới hạn.", isTrue: false, exp: "Sai (Khối lượng phải LỚN HƠN hoặc BẰNG khối lượng tới hạn để neutron sinh ra không bị lọt hết ra ngoài trước khi gây phân hạch tiếp theo)." }
                ]
            },
            {
                id: "hatnhan_8",
                context: "Câu 8 (Phản ứng tổng hợp hạt nhân - Nhiệt hạch). Xét phản ứng: $^{2}_{1}\\text{H} + ^{3}_{1}\\text{H} \\rightarrow ^{4}_{2}\\text{He} + ^{1}_{0}\\text{n} + 17,6\\text{ MeV}$.",
                statements: [
                    { id: "a", text: "a) Sự tổng hợp hạt nhân là quá trình hai hạt nhân nhẹ kết hợp lại với nhau thành một hạt nhân nặng hơn.", isTrue: true, exp: "Đúng (Định nghĩa tổng hợp hạt nhân/nhiệt hạch)." },
                    { id: "b", text: "b) Đây là một phản ứng thu năng lượng vì phải tốn nhiều năng lượng để ép hai hạt nhân mang điện dương lại gần nhau.", isTrue: false, exp: "Sai (Là phản ứng TỎA năng lượng ($+17,6\\text{ MeV}$), điều kiện ép chúng vào nhau chỉ là năng lượng kích hoạt ban đầu)." },
                    { id: "c", text: "c) Điều kiện bắt buộc để phản ứng tổng hợp hạt nhân xảy ra là nhiệt độ và áp suất môi trường phải cực kì cao.", isTrue: true, exp: "Đúng (Điều kiện plasma, hàng chục triệu độ)." },
                    { id: "d", text: "d) Nguồn năng lượng khổng lồ phát ra từ Mặt Trời và các vì sao chính là năng lượng của phản ứng tổng hợp hạt nhân.", isTrue: true, exp: "Đúng (Kiến thức vũ trụ học ứng dụng)." }
                ]
            },
            {
                id: "hatnhan_9",
                context: "Câu 9 (Vai trò của công nghiệp hạt nhân).",
                statements: [
                    { id: "a", text: "a) Trong lò phản ứng của nhà máy điện nguyên tử, phản ứng dây chuyền được kiểm soát chặt chẽ ở trạng thái tới hạn (hệ số nhân neutron $k=1$).", isTrue: true, exp: "Đúng ($k=1$ để công suất ổn định, không gây nổ)." },
                    { id: "b", text: "b) Lò phản ứng biến đổi trực tiếp năng lượng hạt nhân tỏa ra thành dòng điện mà không cần qua các hệ thống biến đổi cơ - nhiệt nào khác.", isTrue: false, exp: "Sai (Bẫy kĩ thuật: Năng lượng hạt nhân đun sôi nước $\\rightarrow$ hơi nước làm quay tuabin $\\rightarrow$ máy phát điện sinh ra điện. Không phải chuyển đổi trực tiếp)." },
                    { id: "c", text: "c) Trong y tế, các đồng vị phóng xạ nhân tạo được sử dụng hiệu quả để chẩn đoán hình ảnh và xạ trị tiêu diệt tế bào ung thư.", isTrue: true, exp: "Đúng (Vai trò y học hạt nhân)." },
                    { id: "d", text: "d) Việc phát triển công nghiệp điện hạt nhân giúp giảm phát thải khí nhà kính (như $\\text{CO}_2$) so với nhiên liệu hóa thạch, nhưng đi kèm với thách thức lớn về xử lý chất thải phóng xạ.", isTrue: true, exp: "Đúng (Đánh giá ưu nhược điểm toàn diện của công nghiệp hạt nhân)." }
                ]
            },
            {
                id: "hatnhan_10",
                context: "Câu 10 (Bản chất sự phóng xạ). Một mẫu vật chất chứa các hạt nhân phóng xạ.",
                statements: [
                    { id: "a", text: "a) Sự phóng xạ là một quá trình biến đổi hạt nhân tự phát và không chịu ảnh hưởng bởi các yếu tố vật lí bên ngoài như áp suất, nhiệt độ.", isTrue: true, exp: "Đúng (Đặc điểm bất biến của phóng xạ)." },
                    { id: "b", text: "b) Đối với một hạt nhân phóng xạ cụ thể, ta có thể dùng công cụ tính toán để dự đoán chính xác thời điểm nó sẽ phân rã.", isTrue: false, exp: "Sai (Phân rã là hoàn toàn ngẫu nhiên, không thể dự đoán thời điểm chính xác cho 1 hạt nhân đơn lẻ)." },
                    { id: "c", text: "c) Quá trình phân rã phóng xạ tuân theo các quy luật thống kê, tức là tính ngẫu nhiên đối với từng hạt nhưng có tính quy luật đối với một số lượng lớn hạt.", isTrue: true, exp: "Đúng (Bản chất vĩ mô - vi mô của định luật phóng xạ)." },
                    { id: "d", text: "d) Sự phóng xạ là một phản ứng hạt nhân tỏa năng lượng.", isTrue: true, exp: "Đúng (Giống câu 6d, luôn tỏa năng lượng tạo ra động năng hạt bay ra)." }
                ]
            },
            {
                id: "hatnhan_11",
                context: "Câu 11 (Tính chất các tia phóng xạ). Khảo sát 3 loại tia phóng xạ $\\alpha, \\beta^-$ và $\\gamma$.",
                statements: [
                    { id: "a", text: "a) Tia $\\alpha$ bản chất là hạt nhân Helium, mang điện tích dương nên bị lệch về phía bản âm khi đi qua điện trường đều.", isTrue: true, exp: "Đúng (Bản chất tia $\\alpha$ và lực điện)." },
                    { id: "b", text: "b) Tia $\\beta^-$ là dòng các electron chuyển động với tốc độ xấp xỉ tốc độ ánh sáng, có khả năng đâm xuyên mạnh hơn tia $\\alpha$.", isTrue: true, exp: "Đúng (Bản chất tia $\\beta$)." },
                    { id: "c", text: "c) Tia $\\gamma$ là bức xạ điện từ có bước sóng rất ngắn, mang điện tích trung hòa nên tốc độ của nó thay đổi liên tục trong chân không.", isTrue: false, exp: "Sai (Tia $\\gamma$ là sóng điện từ nên trong chân không luôn truyền với tốc độ không đổi $c = 3.10^8\\text{ m/s}$)." },
                    { id: "d", text: "d) Khi bay trong không khí, khả năng ion hóa chất khí của tia $\\gamma$ là mạnh nhất, còn của tia $\\alpha$ là yếu nhất.", isTrue: false, exp: "Sai (Khả năng ion hóa ngược với khả năng đâm xuyên: Tia $\\alpha$ ion hóa mạnh nhất, $\\gamma$ yếu nhất)." }
                ]
            },
            {
                id: "hatnhan_12",
                context: "Câu 12 (Định luật phóng xạ hàm mũ). Cho $N_0$ là số hạt nhân phóng xạ ban đầu ($t=0$). Gọi $N$ là số hạt chưa phân rã ở thời điểm $t$.",
                statements: [
                    { id: "a", text: "a) Biểu thức của định luật phân rã phóng xạ là $N = N_0 e^{-\\lambda t}$.", isTrue: true, exp: "Đúng (Biểu thức định luật)." },
                    { id: "b", text: "b) Hằng số phóng xạ $\\lambda$ có mối liên hệ với chu kì bán rã $T$ qua công thức: $\\lambda = T \\cdot \\ln 2$.", isTrue: false, exp: "Sai (Biểu thức đúng phải là $\\lambda = \\frac{\\ln 2}{T}$)." },
                    { id: "c", text: "c) Hàm số mô tả số hạt nhân $N$ chưa phân rã là một hàm số mũ giảm dần theo thời gian.", isTrue: true, exp: "Đúng (Dạng đồ thị và toán học của quy luật)." },
                    { id: "d", text: "d) Số hạt nhân đã bị phân rã (biến thành hạt khác) sau thời gian $t$ được tính bằng biểu thức $\\Delta N = N_0(1 - e^{-\\lambda t})$.", isTrue: true, exp: "Đúng ($\\Delta N = N_0 - N = N_0 - N_0 e^{-\\lambda t} = N_0(1 - e^{-\\lambda t})$)." }
                ]
            },
            {
                id: "hatnhan_13",
                context: "Câu 13 (Toán chu kì bán rã). Một mẫu chất phóng xạ nguyên chất có chu kì bán rã là $T = 5$ ngày. Khối lượng ban đầu của mẫu chất là $m_0 = 80\\text{ gam}$.",
                statements: [
                    { id: "a", text: "a) Chu kì bán rã $T$ là khoảng thời gian để một nửa số lượng hạt nhân của một lượng chất phóng xạ bị phân rã.", isTrue: true, exp: "Đúng (Định nghĩa)." },
                    { id: "b", text: "b) Sau 10 ngày, khối lượng chất phóng xạ còn lại chưa bị phân rã là $20\\text{ gam}$.", isTrue: true, exp: "Đúng ($t = 10\\text{ ngày} = 2T \\Rightarrow m = m_0/2^2 = 80/4 = 20\\text{ g}$)." },
                    { id: "c", text: "c) Sau thời gian 15 ngày, khối lượng chất phóng xạ ĐÃ phân rã là $10\\text{ gam}$.", isTrue: false, exp: "Sai (Bẫy \"Còn lại\" vs \"Đã phân rã\". $t = 15\\text{ ngày} = 3T \\Rightarrow m_{\\text{còn}} = 80/2^3 = 10\\text{ g}$. Vậy khối lượng ĐÃ phân rã là $80 - 10 = 70\\text{ g}$, không phải $10\\text{ g}$)." },
                    { id: "d", text: "d) Tỉ số giữa phần khối lượng đã phân rã và phần khối lượng còn lại sau 20 ngày là 15.", isTrue: true, exp: "Đúng ($t = 20\\text{ ngày} = 4T \\Rightarrow m_{\\text{còn}} = m_0/16$. Phần đã phân rã là $15m_0/16$. Tỉ số là 15)." }
                ]
            },
            {
                id: "hatnhan_14",
                context: "Câu 14 (Độ phóng xạ $H$). Đại lượng đặc trưng cho tính phóng xạ mạnh hay yếu của mẫu vật.",
                statements: [
                    { id: "a", text: "a) Độ phóng xạ $H$ của một lượng chất phóng xạ là số phân rã của lượng chất đó trong một đơn vị thời gian.", isTrue: true, exp: "Đúng (Định nghĩa)." },
                    { id: "b", text: "b) Đơn vị của độ phóng xạ trong hệ SI là Becquerel (Bq), với $1\\text{ Bq} = 1\\text{ phân rã/giây}$.", isTrue: true, exp: "Đúng (Đơn vị đo lường chuẩn)." },
                    { id: "c", text: "c) Mối liên hệ toán học giữa độ phóng xạ và số hạt nhân $N$ chưa phân rã ở cùng một thời điểm là $H = \\frac{N}{\\lambda}$.", isTrue: false, exp: "Sai (Biểu thức đúng là $H = \\lambda.N$)." },
                    { id: "d", text: "d) Nếu mẫu chất chứa các đồng vị có hằng số phóng xạ $\\lambda$ càng lớn thì ban đầu nó sẽ phân rã càng nhanh và độ phóng xạ càng mạnh.", isTrue: true, exp: "Đúng (Ý nghĩa của $\\lambda$: xác suất phân rã trong một đơn vị thời gian)." }
                ]
            },
            {
                id: "hatnhan_15",
                context: "Câu 15 (Đồ thị số hạt - thời gian). Đồ thị biểu diễn sự phụ thuộc của số hạt nhân mẹ ($N$) theo thời gian ($t$).",
                statements: [
                    { id: "a", text: "a) Đồ thị là một đường cong trơn đi xuống, thể hiện sự giảm dần của $N$ theo quy luật hàm bậc hai.", isTrue: false, exp: "Sai (Là đường cong mũ (hàm số mũ), không phải hàm bậc hai (parabol))." },
                    { id: "b", text: "b) Giả sử tại thời điểm $t = t_1$, tung độ của đồ thị là $N_1$. Tại thời điểm $t = t_1 + T$, tung độ của đồ thị sẽ là $N_1/2$.", isTrue: true, exp: "Đúng (Tính chất tịnh tiến chu kì bán rã)." },
                    { id: "c", text: "c) Độ dốc (tiếp tuyến) của đường cong này tại bất kì thời điểm nào có giá trị âm, và độ lớn của nó chính là độ phóng xạ $H$ tại thời điểm đó.", isTrue: true, exp: "Đúng (Ý nghĩa đạo hàm: $N'(t) = -\\lambda N_0 e^{-\\lambda t} = -H(t)$)." },
                    { id: "d", text: "d) Đồ thị này sẽ cắt trục hoành ($N=0$) tại một thời điểm $t$ hữu hạn nào đó khi chất phóng xạ cạn kiệt hoàn toàn.", isTrue: false, exp: "Sai (Toán học hàm $e^{-\\lambda t}$ chỉ tiến tới 0 khi $t \\rightarrow \\infty$ (đường tiệm cận), không bao giờ cắt trục hoành về mặt lý thuyết)." }
                ]
            },
            {
                id: "hatnhan_16",
                context: "Câu 16 (Ứng dụng Đồng vị phóng xạ - Tính tuổi Cacbon-14). Phương pháp định tuổi bằng $^{14}\\text{C}$ dùng trong khảo cổ học dựa trên chu kì bán rã 5730 năm.",
                statements: [
                    { id: "a", text: "a) Phương pháp định tuổi bằng Cacbon-14 chỉ áp dụng được cho các di chỉ từng có sự sống (xương thú, gỗ cổ...), không dùng được cho các bức tượng đá thuần túy.", isTrue: true, exp: "Đúng (Điều kiện ứng dụng Cacbon-14 hữu cơ)." },
                    { id: "b", text: "b) Tỉ lệ $^{14}\\text{C}/^{12}\\text{C}$ trong cơ thể sinh vật khi còn sống là một hằng số, bằng với tỉ lệ đó trong khí quyển.", isTrue: true, exp: "Đúng (Nguyên lí cơ bản của phương pháp)." },
                    { id: "c", text: "c) Khi sinh vật chết đi, không còn hô hấp/trao đổi chất, hàm lượng $^{14}\\text{C}$ trong cơ thể sẽ ngừng phân rã và giữ nguyên vĩnh viễn.", isTrue: false, exp: "Sai (Ngược lại, khi chết đi $^{14}\\text{C}$ KHÔNG ĐƯỢC BÙ ĐẮP nữa và bắt đầu GIẢM DẦN do quá trình phân rã phóng xạ)." },
                    { id: "d", text: "d) Nếu một mẩu xương cổ có độ phóng xạ do $^{14}\\text{C}$ chỉ bằng $12,5\\%$ so với một mẩu xương tươi có cùng khối lượng, thì mẩu xương đó có tuổi khoảng 17190 năm.", isTrue: true, exp: "Đúng ($12,5\\% = 1/8 = 1/2^3 \\Rightarrow t = 3T = 3 \\times 5730 = 17190\\text{ năm}$)." }
                ]
            },
            {
                id: "hatnhan_17",
                context: "Câu 17 (Nguyên tắc an toàn và Biển báo phóng xạ). Trong làm việc với chất phóng xạ:",
                statements: [
                    { id: "a", text: "a) Biển báo nguy hiểm bức xạ/phóng xạ quốc tế thường có hình tam giác nền vàng (hoặc biển vuông) với biểu tượng cánh quạt 3 lá màu đen/đỏ.", isTrue: true, exp: "Đúng (Nhận biết biển báo theo yêu cầu cần đạt)." },
                    { id: "b", text: "b) Ba nguyên tắc vàng trong an toàn phóng xạ là: Tối thiểu hóa thời gian tiếp xúc, tối đa hóa khoảng cách và sử dụng vật liệu che chắn phù hợp.", isTrue: true, exp: "Đúng (Nguyên tắc cơ bản an toàn bức xạ)." },
                    { id: "c", text: "c) Việc dùng áo choàng vải hoặc kính y tế bằng nhựa là đủ để cản được tác động đâm xuyên của bức xạ $\\gamma$.", isTrue: false, exp: "Sai (Tia $\\gamma$ đâm xuyên cực mạnh, phải dùng Chì (Pb) dày hoặc bê tông cốt thép đặc biệt để che chắn, vải/nhựa không có tác dụng)." },
                    { id: "d", text: "d) Sự chiếu xạ từ bên ngoài (như chụp X-quang) sẽ làm cho cơ thể người bệnh trở thành một nguồn phát phóng xạ vĩnh viễn, có thể lây bức xạ cho người khác.", isTrue: false, exp: "Sai (Bẫy thực tế: Chiếu xạ ngoài tia X/gamma đi qua cơ thể rồi biến mất, không làm cơ thể bị \"nhiễm phóng xạ\" và phát xạ lại. Khác với \"nhiễm bẩn phóng xạ\" do nuốt phải đồng vị)." }
                ]
            },
            {
                id: "hatnhan_18",
                context: "Câu 18 (Vận dụng biểu thức $H, x$). Một mẫu Đồng vị phóng xạ Iốt-131 ($^{131}\\text{I}$) có hằng số phóng xạ $\\lambda = 10^{-6}\\text{ s}^{-1}$. Tại $t=0$, số hạt nhân $^{131}\\text{I}$ là $N_0 = 10^{14}$ hạt.",
                statements: [
                    { id: "a", text: "a) Độ phóng xạ ban đầu của mẫu là $H_0 = 10^8\\text{ Bq}$.", isTrue: true, exp: "Đúng ($H_0 = \\lambda N_0 = 10^{-6} \\times 10^{14} = 10^8\\text{ Bq}$)." },
                    { id: "b", text: "b) Công thức tính tốc độ đếm số hạt phân rã (hoặc độ phóng xạ) tại thời điểm $t$ là $H = H_0 e^{-\\lambda t}$.", isTrue: true, exp: "Đúng (Định luật biến thiên của độ phóng xạ, tốc độ đếm tỉ lệ với $H$)." },
                    { id: "c", text: "c) Để tính chính xác số phân rã trong $1\\text{ giây}$ ở một thời điểm xa trong tương lai, ta bắt buộc phải đổi $\\lambda$ sang đơn vị $\\text{ngày}^{-1}$ hoặc $\\text{năm}^{-1}$.", isTrue: false, exp: "Sai (Tính theo đơn vị chuẩn hệ SI (Bq - phân rã/s) thì hằng số $\\lambda$ BẮT BUỘC phải dùng đơn vị chuẩn là $\\text{s}^{-1}$, không được đổi sang ngày hay năm)." },
                    { id: "d", text: "d) Số hạt nhân $^{131}\\text{I}$ còn lại sau thời gian $t = 10^6\\text{ s}$ là $N \\approx 3,68.10^{13}$ hạt (lấy $e^{-1} \\approx 0,368$).", isTrue: true, exp: "Đúng ($N = N_0 e^{-\\lambda t} = 10^{14} e^{-10^{-6} \\times 10^6} = 10^{14} e^{-1} \\approx 3,68.10^{13}$)." }
                ]
            },
            {
                id: "hatnhan_19",
                context: "Câu 19 (THỰC HÀNH - Khảo sát định luật phân rã). Học sinh dùng máy đếm xung Geiger-Muller để đo tốc độ đếm (tỉ lệ thuận với độ phóng xạ $H$) của một mẫu chất phóng xạ $X$ trong $5\\text{ giờ}$ liên tục.",
                statements: [
                    { id: "a", text: "a) Máy đếm Geiger-Muller không thể đo trực tiếp số lượng hạt nhân mẹ đang tồn tại trong mẫu chất mà chỉ đo được số lượng tia phóng xạ bắn vào ống đếm.", isTrue: true, exp: "Đúng (Cơ chế hoạt động của cảm biến bức xạ, đo $\\Delta N$ trong 1 khoảng thời gian, không đo được tổng $N$)." },
                    { id: "b", text: "b) Nếu vẽ đồ thị của logarit tự nhiên tốc độ đếm ($\\ln H$) theo thời gian $t$, học sinh sẽ thu được một đường cong hyperbol.", isTrue: false, exp: "Sai ($H = H_0 e^{-\\lambda t} \\Rightarrow \\ln H = -\\lambda t + \\ln H_0$. Đồ thị này phải là một ĐƯỜNG THẲNG có hệ số góc âm, không phải hyperbol)." },
                    { id: "c", text: "c) Độ lớn của hệ số góc của đường thẳng $\\ln H$ theo $t$ chính là giá trị của hằng số phóng xạ $\\lambda$.", isTrue: true, exp: "Đúng (Từ phương trình đường thẳng $y = ax + b \\Rightarrow a = -\\lambda \\Rightarrow$ độ lớn hệ số góc là $\\lambda$)." },
                    { id: "d", text: "d) Khi lấy mẫu không có chất phóng xạ đặt vào máy, máy đếm vẫn nhảy một vài số nhất định. Đây là do phông bức xạ môi trường và ta cần trừ đi số đếm phông này trong phép đo thực tế.", isTrue: true, exp: "Đúng (Quy trình chuẩn hóa số liệu bức xạ môi trường)." }
                ]
            },
            {
                id: "hatnhan_20",
                context: "Câu 20 (THỰC HÀNH - An toàn phóng xạ phòng thí nghiệm). Tại phòng thí nghiệm trường học, giáo viên hướng dẫn học sinh thao tác với các nguồn phóng xạ chuẩn $\\alpha, \\beta, \\gamma$ hoạt độ thấp.",
                statements: [
                    { id: "a", text: "a) Học sinh quan sát thấy một tờ giấy trắng thông thường có thể cản được phần lớn số đếm từ nguồn phát tia $\\alpha$.", isTrue: true, exp: "Đúng (Khả năng đâm xuyên yếu của tia $\\alpha$)." },
                    { id: "b", text: "b) Kẹp gắp (panh) cán dài được sử dụng để lấy các viên phóng xạ ra khỏi hộp bảo vệ thay vì cầm trực tiếp bằng tay, nhằm mục đích tăng khoảng cách an toàn (theo nguyên lý bình phương nghịch đảo).", isTrue: true, exp: "Đúng (Khoảng cách càng xa, cường độ bức xạ giảm tỉ lệ nghịch với bình phương khoảng cách)." },
                    { id: "c", text: "c) Khi thí nghiệm kết thúc, chỉ cần để các viên phóng xạ vào tủ kính trưng bày của lớp học để các bạn khác tiện quan sát.", isTrue: false, exp: "Sai (Bẫy an toàn thực tiễn: Các nguồn phóng xạ BẮT BUỘC phải được cất vào hộp chì chuyên dụng và khóa cẩn thận, không được để phơi sáng ở tủ kính thường)." },
                    { id: "d", text: "d) Học sinh muốn che chắn hoàn toàn tia bức xạ $\\gamma$ phát ra từ nguồn thì chỉ cần dùng một tấm nhôm dày khoảng $5\\text{ mm}$ là đủ.", isTrue: false, exp: "Sai (Tấm nhôm $5\\text{ mm}$ cản được tia $\\beta$ nhưng gần như vô dụng với tia $\\gamma$. Để cản tia $\\gamma$ cần các tấm chì (Pb) dày hàng cm)." }
                ]
            }
        ]
    }
};