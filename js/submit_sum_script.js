
const getData = () => {
    return JSON.parse(localStorage.getItem('questions'));
};

const renderUI = () => {


    const questions = getData();
    let answered = [];
    questions.forEach( (cur, i) => {
        if(cur.userAnswer)
            answered[i] = 'Answered: <br/>' + cur.userAnswer;
        else 
            answered[i] = 'UnAnswered';
    });
    console.log(answered);
    const markUp =
    `
        <table>
            <tr>
                <td>1. ${questions[0].question} </td>
                <td>${answered[0]}</td>
            </tr>
            <tr>
                <td>2. ${questions[1].question}</td>
                <td>${answered[1]}</td>
            </tr>
            <tr>
                <td>3. ${questions[2].question}</td>
                <td>${answered[2]}</td>
            </tr>
            <tr>
                <td>4. ${questions[3].question}</td>
                <td>${answered[3]}</td>
            </tr>
            <tr>
                <td>5. ${questions[4].question}</td>
                <td>${answered[4]}</td>
            </tr>
            <tr>
                <td>6. ${questions[5].question}</td>
                <td>${answered[6]}</td>
            </tr>
            <tr>
                <td>7. ${questions[6].question}</td>
                <td>${answered[6]}</td>
            </tr>
            <tr>
                <td>8. ${questions[7].question}</td>
                <td>${answered[7]}</td>
            </tr>
            <tr>
                <td>9. ${questions[8].question}</td>
                <td>${answered[8]}</td>
            </tr>
            <tr>
                <td>10. ${questions[9].question}</td>
                <td>${answered[9]}</td>
            </tr>
            <tr>
                <td>11. ${questions[10].question}</td>
                <td>${answered[10]}</td>
            </tr>
            <tr>
                <td>12. ${questions[11].question}</td>
                <td>${answered[11]}</td>
            </tr>
            <tr>
                <td>13. ${questions[12].question}</td>
                <td>${answered[12]}</td>
            </tr>
            <tr>
                <td>14. ${questions[13].question}</td>
                <td>${answered[13]}</td>
            </tr>
            <tr>
                <td>15. ${questions[14].question}</td>
                <td>${answered[14]}</td>
            </tr>
            <tr>
                <td>16. ${questions[15].question}</td>
                <td>${answered[15]}</td>
            </tr>
            <tr>
                <td>17. ${questions[16].question}</td>
                <td>${answered[16]}</td>
            </tr>
            <tr>
                <td>18. ${questions[17].question}</td>
                <td>${answered[17]}</td>
            </tr>
            <tr>
                <td>19. ${questions[18].question}</td>
                <td>${answered[18]}</td>
            </tr>
            <tr>
                <td>20. ${questions[19].question}</td>
                <td>${answered[19]}</td>
            </tr>
        </table>
    `;

    document.querySelector('.questions_table').insertAdjacentHTML('afterbegin', markUp);
};


window.addEventListener('DOMContentLoaded', renderUI);
