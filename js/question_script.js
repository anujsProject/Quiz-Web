
/* ---- DOM Strings ---- */

const DOMStrings = {
    question_container: document.querySelector('.question-container'),
    container: document.querySelector('.container')
};
/* ---------------------- */

class createQuestion {
    constructor(q, q_no, ans, opt_1, opt_2, opt_3, opt_4) {
        this.question = q;
        this.q_no = q_no;
        this.answer = ans;
        this.opt_1 = opt_1;
        this.opt_2 = opt_2;
        this.opt_3 = opt_3;
        this.opt_4 = opt_4;
    }

    addAnswer(userAns) {
        this.userAnswer = userAns;
        this.saveData();
    }

    saveData() {
        localStorage.setItem('questions', JSON.stringify(q));
    }
}



const q1 = new createQuestion('Which is the part of the computer system that one can physically touch?', 1, 'hardware', 'data', 'operating systems', 'hardware', 'software');
const q2 = new createQuestion('A &hellip;&hellip;&hellip; is an electronic device that process data, converting it into information.', 2, 'computer', 'computer', 'processor', 'case', 'stylus');
const q3 = new createQuestion('IC chips used in computers are usually made of:', 3, 'Silicon', 'Lead', 'Silicon', 'Chromium', 'Gold');
const q4 = new createQuestion('Which of the following is not an example of an Operating System?', 4, 'Microsoft Office XP', 'Windows 98', 'BSD Unix', 'Microsoft Office XP', 'Red Hat Linux');
const q5 = new createQuestion('One Gigabyte is approximately equal is:', 5, '1000,000,000 bytes', '1000,000 bytes', '1000,000,000 bytes', '1000,000,000,000 bytes', 'None of these');
const q6 = new createQuestion('Compact discs, (according to the original CD specifications) hold how many minutes of music?', 6, '74 mins', '74 mins', '90 mins', '56 mins', '60 mins');
const q7 = new createQuestion('Which of the following is not an input device?', 7, 'VDU', 'Mouse', ' Light pen', 'Keyboard', 'VDU');
const q8 = new createQuestion('What type of process creates a smaller file that is faster to transfer over the internet?', 8, 'Compression', 'Compression', 'Fragmentation', 'Encapsulation', 'None of the above');
const q9 = new createQuestion('Which of the following is used to Manage Data Base', 9, 'DBMS', 'Operating System', 'Compiler', 'DBMS', 'None of the above');
const q10 = new createQuestion('Which of the following is an example of non-volatile memory?', 10, 'ROM', 'Cache memory', 'RAM', 'ROM', 'None of the above');
const q11 = new createQuestion('File extensions are used in order to &hellip;&hellip;&hellip;.', 11, 'Identify the file type', 'Name the file', 'Ensure the filename is not lost', 'Identify the file', 'Identify the file type');
const q12 = new createQuestion('Here are &hellip;&hellip;&hellip;. parts to a computer system.', 12, '4', '2', '4', '16', '100');
const q13 = new createQuestion('During the &hellip;&hellip;&hellip; portion of the Information Processing Cycle, the computer acquires data from some source.', 13, 'input', 'processing', 'storage', 'input', 'output');
const q14 = new createQuestion('Bit stands for', 14, 'binary digit', 'binary information term ', 'binary digit', 'binary tree', 'Bivariate Theory');
const q15 = new createQuestion('Which one of the following is different from other members?', 15, 'Google', 'Google', 'Windows', 'Linux', 'Mac');
const q16 = new createQuestion('The hexadecimal number system consists of the symbols', 16, '0 &minus; 9 , A &minus; F', '0 &minus; 7', '0 &minus; 9 , A &minus; F', '0 &minus; 7, A &minus; F ', 'None of these');
const q17 = new createQuestion('1 GB is equal to', 17, '230 bytes', '230 bits ', '230 bytes', '220 bits', '220 bytes');
const q18 = new createQuestion('A microprocessor unit, a memory unit, and an input/output unit form a:', 18, 'microcomputer', 'CPU', 'compiler', 'microcomputer', 'ALU');
const q19 = new createQuestion('Process to exit from computer by giving correct instructions such as \'EXIT\' is classified as', 19, 'log out', 'log in', 'process out', 'process in', 'log out');
const q20 = new createQuestion('Function of running and loading programs by use of peripherals is function of', 20, 'operating system', 'operating system', 'inquiry system', 'dump programs', 'function system');

const q = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20];

const changeToQuestion = (q_No, cur_q_no) => {
    
    if(cur_q_no == q_No) return;

    /* -----   Having previous button bug  ----*/
    /*
     if(q_No >= 2) {
        document.querySelector('.prev').style.display = "block !important";
        console.log(q_No);
    }
    else if(q_No == 1) {
        document.querySelector('.prev').style.display = "none !important";
        console.log(q_No + " Oh shit");
    }
    */
    
    // There will two here, store the answer and update the UI

    // Fetching the checked radio Button
    Array.from(document.querySelectorAll(`[type = "radio"]`)).forEach((cur) => {
        if(cur.checked) {
            q[cur_q_no - 1].addAnswer(cur.value);
            Array.from(document.querySelectorAll('td a')).forEach( (cur) => {
                if(cur.textContent == cur_q_no) {
                    cur.classList.add('answered');
                }
            });
        }
    });
    


    /* ------- Updating the UI --------*/

    // Change the active link of table
    Array.from(document.querySelectorAll('td a')).forEach( (cur) => {
        if(cur.textContent == cur_q_no) {
            cur.classList.remove('active');
        }

        else if(cur.textContent == q_No) {
            cur.classList.add('active');
        }
    });

    const question = q[q_No - 1];
    DOMStrings.question_container.innerHTML = '';

    let checked_opt_1 = `<input type = "radio" name = "option" id = "op_1" value = "${question.opt_1}"/><span class = "custom-radio"></span>`;
    let checked_opt_2 = `<input type = "radio" name = "option" id = "op_2" value = "${question.opt_2}"/><span class = "custom-radio"></span>`;
    let checked_opt_3 = `<input type = "radio" name = "option" id = "op_3" value = "${question.opt_3}"/><span class = "custom-radio"></span>`;
    let checked_opt_4 = `<input type = "radio" name = "option" id = "op_4" value = "${question.opt_4}"/><span class = "custom-radio"></span>`;

    if(question.userAnswer == question.opt_1) {
        checked_opt_1 = `<input type = "radio" name = "option" id = "op_1" value = "${question.opt_1}" checked/><span class = "custom-radio"></span>`;
    }
    else if(question.userAnswer == question.opt_2) {
        checked_opt_2 = `<input type = "radio" name = "option" id = "op_2" value = "${question.opt_2}" checked/><span class = "custom-radio"></span>`;
    }
    else if(question.userAnswer == question.opt_3) {
        checked_opt_3 = `<input type = "radio" name = "option" id = "op_3" value = "${question.opt_3}" checked/><span class = "custom-radio"></span>`;
    }
    else if(question.userAnswer == question.opt_4) {
        checked_opt_4 = `<input type = "radio" name = "option" id = "op_4" value = "${question.opt_4}" checked/><span class = "custom-radio"></span>`;
    }

    const markUp = 
        `
            <div class = "question_no">
                Question <span>${q_No}</span> of 20:
            </div>
            <div class = "question-title">
                <p>${question.question}</p>
            </div>
            <div class = "options">
                <ul> 
                    <li><label for = "op_1"> ${checked_opt_1} ${question.opt_1}</label></li>
                    <li><label for = "op_2"> ${checked_opt_2} ${question.opt_2}</label></li>
                    <li><label for = "op_3"> ${checked_opt_3} ${question.opt_3}</label></li>
                    <li><label for = "op_4"> ${checked_opt_4} ${question.opt_4}</label></li>
                </ul>
            </div>

            <div class = "buttons clearfix">
                <button class = "show_prev prev">Previous</button>
                <button class = "next">Next</button>
            </div>
        
        `;
    
        // DOMStrings.prev_btn.classList.add("show_prev");
        DOMStrings.question_container.insertAdjacentHTML('afterbegin', markUp);

};

const handleQuestion = (e) => {

    // Fectch the Question From UI
    const q_no = parseInt(document.querySelector('.question_no span').textContent);
    
    //  Check if it is clicked on questions list
    if(e.target.matches('.row table tr td a')) {
        changeToQuestion(e.target.textContent, q_no);
    }

    // Check if nextor previous btn is clicked
    else if(e.target.matches('.next')) {
        if(q_no === 20) {
            saveTimer();
        }
        changeToQuestion(q_no + 1, q_no);
    }

    else if(e.target.matches('.prev')) {
        changeToQuestion(q_no - 1, JSON.strq_no);
    }

    // else if(q_no > 1) {
    //     document.querySelector('.prev').classList.add("show_prev");
    // }

};

DOMStrings.container.addEventListener('click', (e) => {
    handleQuestion(e);
});


// DOMStrings.prev_btn.classList.add("show_prev");

/* ---- Timer of the Quiz ---- */
let timer = document.querySelector('.timer .time_remaining');

const saveTimer = () => {
    localStorage.setItem('quiz_time', JSON.stringify(str));
    window.location.href = "submit_sum.html";
};

let str;

window.setInterval(() => {
    str = timer.textContent.split(':');
    let min = parseInt(str[0]);
    let sec = parseInt(str[1]);
    if(sec > 0 || min > 0) {
        if(sec == 0) {
            sec =  60;
            min--;
        }
    
        sec--;
        if(sec < 10) {
            sec = '0' + sec;
        }
        timer.textContent = min + ':' + sec;
    }
    else {
        saveTimer();  // Saving the Time and Redirecting
    }
    
}, 1000);