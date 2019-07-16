
let DOMStrings = {
    result_body: document.querySelector('.result_body'),
    header: document.querySelector('.header')
};


const handleUI = () => {
    const questions = JSON.parse(localStorage.getItem('questions'));
    let question;
    let rightAnsCount = 0;
    let wrongAnsCount = 0;
    for(let i = 0; i < questions.length; i++) {

    question = questions[i];

    let li_item_1 = `<li><label for = "op_${i + 1}_1"> ${question.opt_1}</label></li>`;
    let li_item_2 = `<li><label for = "op_${i + 1}_2"> ${question.opt_2}</label></li>`;
    let li_item_3 = `<li><label for = "op_${i + 1}_3"> ${question.opt_3}</label></li>`;
    let li_item_4 = `<li><label for = "op_${i + 1}_4"> ${question.opt_4}</label></li>`;

    if(question.userAnswer == question.answer) {
        if(question.answer == question.opt_1) {
            li_item_1 = `<li class = "correct_li userAns"><label for = "op_${i + 1}_1"> <span class = "checkmark">&#10004;</span> ${question.opt_1}</label></li>`;
        }
        else if(question.answer == question.opt_2) {
            li_item_2 = `<li class = "correct_li userAns"><label for = "op_${i + 1}_2"> <span class = "checkmark">&#10004;</span> ${question.opt_2}</label></li>`;
        }
        else if(question.answer == question.opt_3) {
            li_item_3 = `<li class = "correct_li userAns"><label for = "op_${i + 1}_3"> <span class = "checkmark">&#10004;</span> ${question.opt_3}</label></li>`;
        }
        else if(question.answer == question.opt_4) {
            li_item_4 = `<li class = "correct_li userAns"><label for = "op_${i + 1}_4"> <span class = "checkmark">&#10004;</span> ${question.opt_4}</label></li>`;
        }
        rightAnsCount++;
    }
    

    if(question.userAnswer != question.answer) {
        if(question.userAnswer == question.opt_1) {
            li_item_1 = `<li class = "wrong_li userAns"><label for = "op_${i + 1}_1"> <span class = "cross">&times;</span> ${question.opt_1}</label></li>`;   
            wrongAnsCount++;
        }
    
        else if(question.userAnswer == question.opt_2) {
            li_item_2 = `<li class = "wrong_li userAns"><label for = "op_${i + 1}_2"> <span class = "cross">&times;</span> ${question.opt_2}</label></li>`;
            wrongAnsCount++;
        }
    
        else if(question.userAnswer == question.opt_3) {
            li_item_3 = `<li class = "wrong_li userAns"><label for = "op_${i + 1}_3"> <span class = "cross">&times;</span> ${question.opt_3}</label></li>`;
            wrongAnsCount++;
        }
    
        else if(question.userAnswer == question.opt_4) {
            li_item_4 = `<li class = "wrong_li userAns"><label for = "op_${i + 1}_4"> <span class = "cross">&times;</span> ${question.opt_4}</label></li>`;
            wrongAnsCount++;
        }
    }
    

    if(question.userAnswer != question.answer) {
        if(question.answer == question.opt_1) {
            li_item_1 = `<li class = "correct_li"><label for = "op_${i + 1}_1"> <span class = "checkmark">&#10004;</span> ${question.opt_1}</label></li>`;
        }
    
        else if(question.answer == question.opt_2) {
            li_item_2 = `<li class = "correct_li"><label for = "op_${i + 1}_1"> <span class = "checkmark">&#10004;</span> ${question.opt_2}</label></li>`;
        }
    
        else if(question.answer == question.opt_3) {
            li_item_3 = `<li class = "correct_li"><label for = "op_${i + 1}_1"> <span class = "checkmark">&#10004;</span> ${question.opt_3}</label></li>`;
        }
    
        else if(question.answer == question.opt_4) {
            li_item_4 = `<li class = "correct_li"><label for = "op_${i + 1}_1"> <span class = "checkmark">&#10004;</span> ${question.opt_4}</label></li>`;
        }
    }
    

    const markUp = 
        `
            <div class = "question_wrapper">
                <div class = "question_no">
                    Question <span>${i + 1}</span> of 20:
                </div>
                <div class = "question-title">
                    <p>${question.question}</p>
                </div>
                <div class = "options">
                    <ul> 

                        ${li_item_1} ${li_item_2} ${li_item_3} ${li_item_4}

                    </ul>
                </div>
            </div>
        `;
        DOMStrings.result_body.insertAdjacentHTML('beforeend', markUp);

}


    let result_st;
    if(rightAnsCount < 15) {
        result_st =  `You got ${(rightAnsCount * 4) - ((wrongAnsCount * 4) * 1/4)} out of ${questions.length * 4}.<br/> You need to Improve!`
    }

    else {
        result_st = `You got ${rightAnsCount} out of ${questions.length}.<br/> You can be proud of yourself.`
    }
    const result_sum = 
        `
            <div class = "marks">
                <div class = "marks_inner">
                    Hey ${localStorage.getItem('username')}, 
                    ${result_st} <br/><br/>
                    No. of Questions Answered: ${rightAnsCount + wrongAnsCount} <br/>
                    Right Answers: ${rightAnsCount} <br/>
                    Wrong Answers: ${wrongAnsCount}
                </div>
            </div>
        `;
    console.log(wrongAnsCount);
    DOMStrings.header.insertAdjacentHTML('afterend', result_sum);

};

window.addEventListener('DOMContentLoaded', handleUI());

let result_body = document.querySelector('.result_body');
let body_toggle_btn = document.querySelector('.view_btn button');
result_body.style.display = 'none';

/* ----- Simple Fade in, Fade out ----- */

body_toggle_btn.addEventListener('click', () => {
    if(result_body.style.display == 'none') {
        result_body.style.display = 'block';
        body_toggle_btn.textContent = "Click to View the Full Summary";
    }
    else {
        result_body.style.display = 'none';
        body_toggle_btn.textContent = "Click to Hide the Full Summary";
    }
});



/* ----- Sliding Animation ----- */
// body_toggle_btn.addEventListener('click', () => {
//     if(result_body.style.maxHeight == "0px") {
//         result_body.style.maxHeight = result_body.scrollHeight+'px';
//         body_toggle_btn.textContent = "Click to Hide the Full Summary";
//     }

//     else {
//         result_body.style.maxHeight = "0px";
//         body_toggle_btn.textContent = "Click to View the Full Summary";
//     }
// });



// 2 * 4 - (2 * 1/4)