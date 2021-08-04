const finalScoreHtml = document.getElementById('final-score');
const finalScore = localStorage.getItem('mostRecentScore');

finalScoreHtml.innerHTML = `Final Score ${finalScore}`;