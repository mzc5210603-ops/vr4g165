const QuestionBank = {
    data: {
        categories: [
            { id: 1, name: '职业考试真题', slug: 'zhiye', icon: '📚', count: 12850, desc: '建造师、会计师、医师等职业资格考试真题' },
            { id: 2, name: '资格证题库', slug: 'zige', icon: '🎓', count: 8920, desc: '教师资格证、律师资格证等各类资格证考试' },
            { id: 3, name: '计算机考试题库', slug: 'computer', icon: '💻', count: 6540, desc: '软考、计算机等级考试、程序员认证题库' },
            { id: 4, name: '英语等级题库', slug: 'english', icon: '🌍', count: 9380, desc: '四六级、雅思、托福、商务英语真题' },
            { id: 5, name: '公考类真题', slug: 'gongkao', icon: '🏛️', count: 11200, desc: '公务员、事业单位、选调生考试真题' },
            { id: 6, name: '面试题库', slug: 'mianshi', icon: '💼', count: 7650, desc: '各行业面试真题、HR面试技巧大全' },
            { id: 7, name: '职场技能题库', slug: 'zhichang', icon: '📈', count: 4320, desc: '职场软技能、管理能力、沟通技巧题库' }
        ],
        exams: [
            { id: 1, title: '2024年一级建造师考试真题及答案', category: 1, year: 2024, views: 125680, questions: 320, updateTime: '2024-12-15' },
            { id: 2, title: '2024年二级建造师考试真题解析', category: 1, year: 2024, views: 98520, questions: 280, updateTime: '2024-12-10' },
            { id: 3, title: '2024年教师资格证考试真题（小学）', category: 2, year: 2024, views: 87650, questions: 150, updateTime: '2024-12-08' },
            { id: 4, title: '2024年教师资格证考试真题（中学）', category: 2, year: 2024, views: 76890, questions: 150, updateTime: '2024-12-08' },
            { id: 5, title: '2024年软考中级程序员真题及答案', category: 3, year: 2024, views: 65430, questions: 75, updateTime: '2024-11-20' },
            { id: 6, title: '2024年软考高级系统分析师真题', category: 3, year: 2024, views: 54320, questions: 75, updateTime: '2024-11-18' },
            { id: 7, title: '2024年英语四级真题及答案解析', category: 4, year: 2024, views: 156780, questions: 120, updateTime: '2024-12-12' },
            { id: 8, title: '2024年英语六级真题及答案解析', category: 4, year: 2024, views: 134560, questions: 120, updateTime: '2024-12-12' },
            { id: 9, title: '2024年国家公务员考试真题（行测）', category: 5, year: 2024, views: 198760, questions: 135, updateTime: '2024-12-01' },
            { id: 10, title: '2024年国家公务员考试真题（申论）', category: 5, year: 2024, views: 187650, questions: 5, updateTime: '2024-12-01' },
            { id: 11, title: '2024年互联网大厂Java面试真题', category: 6, year: 2024, views: 87650, questions: 200, updateTime: '2024-12-05' },
            { id: 12, title: '2024年产品经理面试真题大全', category: 6, year: 2024, views: 76540, questions: 180, updateTime: '2024-12-03' }
        ],
        questions: [
            {
                id: 1,
                examId: 1,
                type: '单选题',
                number: 1,
                content: '根据《建设工程质量管理条例》，建设工程的保修期自竣工验收合格之日起计算。关于建设工程保修期的说法，正确的是（）。',
                options: [
                    { label: 'A', text: '地基基础工程和主体结构工程，为设计文件规定的该工程的合理使用年限' },
                    { label: 'B', text: '屋面防水工程、有防水要求的卫生间、房间和外墙面的防渗漏，为3年' },
                    { label: 'C', text: '供热与供冷系统，为1个采暖期、供冷期' },
                    { label: 'D', text: '电气管线、给排水管道、设备安装为1年' }
                ],
                answer: 'A',
                analysis: '根据《建设工程质量管理条例》第四十条规定，在正常使用条件下，建设工程的最低保修期限为：（一）基础设施工程、房屋建筑的地基基础工程和主体结构工程，为设计文件规定的该工程的合理使用年限；（二）屋面防水工程、有防水要求的卫生间、房间和外墙面的防渗漏，为5年；（三）供热与供冷系统，为2个采暖期、供冷期；（四）电气管线、给排水管道、设备安装为2年。其他项目的保修期限由发包方与承包方约定。建设工程的保修期，自竣工验收合格之日起计算。'
            },
            {
                id: 2,
                examId: 1,
                type: '单选题',
                number: 2,
                content: '关于建设工程招标投标的说法，正确的是（）。',
                options: [
                    { label: 'A', text: '招标分为公开招标和邀请招标以及议标三种方式' },
                    { label: 'B', text: '招标人不得以不合理的条件限制或者排斥潜在投标人' },
                    { label: 'C', text: '依法必须进行招标的项目，招标人可以自行选择招标代理机构' },
                    { label: 'D', text: '招标人可以要求投标人提交投标保证金，投标保证金不得超过招标项目估算价的5%' }
                ],
                answer: 'B',
                analysis: '根据《招标投标法》规定，招标分为公开招标和邀请招标两种方式，不包括议标，A选项错误。招标人不得以不合理的条件限制或者排斥潜在投标人，B选项正确。依法必须进行招标的项目，招标人应当委托招标代理机构办理招标事宜，C选项错误。投标保证金不得超过招标项目估算价的2%，D选项错误。'
            },
            {
                id: 3,
                examId: 9,
                type: '单选题',
                number: 1,
                content: '下列关于我国宪法修改的表述，正确的是（）。',
                options: [
                    { label: 'A', text: '宪法修改权由全国人民代表大会行使' },
                    { label: 'B', text: '宪法修改须由全国人大常委会或者五分之一以上的全国人大代表提议' },
                    { label: 'C', text: '宪法修改须由全国人大全体代表的三分之二以上的多数通过' },
                    { label: 'D', text: '以上都对' }
                ],
                answer: 'D',
                analysis: '根据我国宪法规定，宪法的修改，由全国人民代表大会常务委员会或者五分之一以上的全国人民代表大会代表提议，并由全国人民代表大会以全体代表的三分之二以上的多数通过。因此，A、B、C三项均正确，答案为D。'
            }
        ]
    },

    init() {
        this.bindEvents();
        this.initMobileMenu();
        this.initSearch();
        this.initPagination();
        this.initFilter();
        this.initQuestionInteraction();
    },

    bindEvents() {
        document.addEventListener('DOMContentLoaded', () => {
            this.init();
        });
    },

    initMobileMenu() {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const mainNav = document.querySelector('.main-nav');
        
        if (menuBtn && mainNav) {
            menuBtn.addEventListener('click', () => {
                mainNav.classList.toggle('active');
                menuBtn.classList.toggle('active');
            });

            document.addEventListener('click', (e) => {
                if (!menuBtn.contains(e.target) && !mainNav.contains(e.target)) {
                    mainNav.classList.remove('active');
                    menuBtn.classList.remove('active');
                }
            });
        }
    },

    initSearch() {
        const searchForm = document.querySelector('.search-box form');
        const searchInput = document.querySelector('.search-box input');
        
        if (searchForm && searchInput) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const keyword = searchInput.value.trim();
                if (keyword) {
                    this.performSearch(keyword);
                }
            });
        }
    },

    performSearch(keyword) {
        const results = this.searchQuestions(keyword);
        this.displaySearchResults(results, keyword);
    },

    searchQuestions(keyword) {
        const lowerKeyword = keyword.toLowerCase();
        return this.data.exams.filter(exam => 
            exam.title.toLowerCase().includes(lowerKeyword)
        );
    },

    displaySearchResults(results, keyword) {
        const url = new URL(window.location.href);
        const basePath = url.pathname.substring(0, url.pathname.lastIndexOf('/'));
        window.location.href = `${basePath}/categories/search.html?q=${encodeURIComponent(keyword)}`;
    },

    initPagination() {
        const pagination = document.querySelector('.pagination');
        if (!pagination) return;

        pagination.addEventListener('click', (e) => {
            const btn = e.target.closest('.page-btn');
            if (!btn || btn.classList.contains('disabled') || btn.classList.contains('active')) return;
            
            const page = btn.dataset.page;
            if (page) {
                this.goToPage(parseInt(page));
            }
        });
    },

    goToPage(page) {
        const url = new URL(window.location.href);
        url.searchParams.set('page', page);
        window.location.href = url.toString();
    },

    initFilter() {
        const filterTabs = document.querySelectorAll('.filter-tab');
        const filterSelects = document.querySelectorAll('.filter-select');

        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                filterTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.applyFilter(tab.dataset.filter);
            });
        });

        filterSelects.forEach(select => {
            select.addEventListener('change', () => {
                this.applyFilter();
            });
        });
    },

    applyFilter(filterType = null) {
        const url = new URL(window.location.href);
        
        if (filterType) {
            url.searchParams.set('type', filterType);
        }

        const selects = document.querySelectorAll('.filter-select');
        selects.forEach(select => {
            if (select.value) {
                url.searchParams.set(select.name, select.value);
            }
        });

        window.location.href = url.toString();
    },

    initQuestionInteraction() {
        const options = document.querySelectorAll('.option-item');
        
        options.forEach(option => {
            option.addEventListener('click', () => {
                const questionCard = option.closest('.question-card');
                const selectedOptions = questionCard.querySelectorAll('.option-item.selected');
                
                selectedOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
            });
        });

        const showAnswerBtns = document.querySelectorAll('.show-answer-btn');
        showAnswerBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const questionCard = btn.closest('.question-card');
                const answerSection = questionCard.querySelector('.answer-section');
                if (answerSection) {
                    answerSection.style.display = 'block';
                    btn.style.display = 'none';
                }
            });
        });
    },

    renderCategories() {
        const container = document.querySelector('.category-grid');
        if (!container) return;

        container.innerHTML = this.data.categories.map(cat => `
            <a href="categories/${cat.slug}.html" class="category-card">
                <div class="category-icon">${cat.icon}</div>
                <h3>${cat.name}</h3>
                <p>${cat.desc}</p>
                <div class="category-meta">
                    <span>📚 ${cat.count} 道题目</span>
                </div>
            </a>
        `).join('');
    },

    renderHotExams() {
        const container = document.querySelector('.exam-list');
        if (!container) return;

        const sortedExams = [...this.data.exams].sort((a, b) => b.views - a.views).slice(0, 10);
        
        container.innerHTML = sortedExams.map((exam, index) => `
            <a href="detail.html?id=${exam.id}" class="exam-item">
                <span class="exam-rank">${index + 1}</span>
                <div class="exam-info">
                    <h4>${exam.title}</h4>
                    <div class="exam-meta">
                        <span>📅 ${exam.year}年</span>
                        <span>📝 ${exam.questions}题</span>
                    </div>
                </div>
                <div class="exam-stats">
                    <span>👁️ ${this.formatNumber(exam.views)}</span>
                </div>
            </a>
        `).join('');
    },

    renderQuestion(question) {
        return `
            <div class="question-card" data-id="${question.id}">
                <div class="question-header">
                    <span class="question-type">${question.type}</span>
                    <span class="question-number">第 ${question.number} 题</span>
                </div>
                <div class="question-content">${question.content}</div>
                <div class="question-options">
                    ${question.options.map(opt => `
                        <div class="option-item" data-answer="${opt.label}">
                            <span class="option-label">${opt.label}</span>
                            <span class="option-text">${opt.text}</span>
                        </div>
                    `).join('')}
                </div>
                <button class="show-answer-btn btn-primary" style="margin-top: 20px;">查看答案解析</button>
                <div class="answer-section" style="display: none;">
                    <div class="answer-header">
                        <span class="answer-label">正确答案：</span>
                        <span class="answer-value">${question.answer}</span>
                    </div>
                    <div class="answer-analysis">
                        <h4>答案解析</h4>
                        <p>${question.analysis}</p>
                    </div>
                </div>
            </div>
        `;
    },

    formatNumber(num) {
        if (num >= 10000) {
            return (num / 10000).toFixed(1) + '万';
        }
        return num.toString();
    },

    getUrlParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    },

    lazyLoad() {
        const images = document.querySelectorAll('img[data-src]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => observer.observe(img));
    },

    smoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
};

const TOC = {
    init() {
        this.tocList = document.querySelector('.toc-list');
        this.headings = document.querySelectorAll('.content-area h2, .content-area h3');
        
        if (this.tocList && this.headings.length > 0) {
            this.render();
            this.bindScroll();
        }
    },

    render() {
        const items = Array.from(this.headings).map((heading, index) => {
            const id = `heading-${index}`;
            heading.id = id;
            return `
                <li>
                    <a href="#${id}" class="${heading.tagName === 'H3' ? 'toc-subitem' : ''}">
                        ${heading.textContent}
                    </a>
                </li>
            `;
        });

        this.tocList.innerHTML = items.join('');
    },

    bindScroll() {
        const links = this.tocList.querySelectorAll('a');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            this.headings.forEach(heading => {
                const rect = heading.getBoundingClientRect();
                if (rect.top <= 100) {
                    current = heading.id;
                }
            });

            links.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
};

const SearchPage = {
    init() {
        this.resultsContainer = document.querySelector('.search-results');
        this.keyword = QuestionBank.getUrlParam('q');
        
        if (this.resultsContainer && this.keyword) {
            this.render();
        }
    },

    render() {
        const results = QuestionBank.searchQuestions(this.keyword);
        
        if (results.length === 0) {
            this.resultsContainer.innerHTML = `
                <div class="no-results">
                    <p>未找到与"${this.keyword}"相关的题库</p>
                    <p>建议：</p>
                    <ul>
                        <li>检查输入的关键词是否正确</li>
                        <li>尝试使用其他关键词搜索</li>
                        <li>浏览分类查找相关题库</li>
                    </ul>
                </div>
            `;
            return;
        }

        this.resultsContainer.innerHTML = `
            <div class="search-info">
                找到 <strong>${results.length}</strong> 个与"${this.keyword}"相关的题库
            </div>
            <div class="list-container">
                ${results.map(exam => this.renderExamItem(exam)).join('')}
            </div>
        `;
    },

    renderExamItem(exam) {
        return `
            <a href="../detail.html?id=${exam.id}" class="list-item">
                <div class="list-icon">📄</div>
                <div class="list-content">
                    <h3>${exam.title}</h3>
                    <div class="list-meta">
                        <span>📅 ${exam.year}年</span>
                        <span>📝 ${exam.questions}题</span>
                        <span>👁️ ${QuestionBank.formatNumber(exam.views)}次浏览</span>
                    </div>
                </div>
            </a>
        `;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    QuestionBank.init();
    TOC.init();
    SearchPage.init();
    QuestionBank.lazyLoad();
    QuestionBank.smoothScroll();
});
