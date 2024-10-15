function showAd2() {
  document.getElementById('p1').style.display = 'none'
  document.getElementById('p2').style.display = 'block'
  document.getElementById('progress1').style.display = 'none'
  document.getElementById('progress2').style.display = 'block'
}
function showAd3() {
  document.getElementById('p2').style.display = 'none'
  document.getElementById('p3').style.display = 'block'
  document.getElementById('progress2').style.display = 'none'
  document.getElementById('progress3').style.display = 'block'
}
function showAd4() {
  document.getElementById('p3').style.display = 'none'
  document.getElementById('p4').style.display = 'block'
  document.getElementById('progress3').style.display = 'none'
  document.getElementById('progress4').style.display = 'block'
}
function showAd5() {
  document.getElementById('p4').style.display = 'none'
  document.getElementById('p5').style.display = 'block'
  document.getElementById('progress4').style.display = 'none'
  document.getElementById('progress5').style.display = 'block'
}
function showAd6() {
  document.getElementById('p5').style.display = 'none'
  document.getElementById('p6').style.display = 'block'
  document.getElementById('respondaeganhe').style.display = 'none'
  document.getElementById('barradeprogresso').style.display = 'none'
  document.getElementById('progress4').style.display = 'none'
  document.getElementById('progress5').style.display = 'block'
}
let currentQuestion = 1
const totalQuestions = 6
function nextQuestion() {
  if (currentQuestion < totalQuestions) {
    document.getElementById('question' + currentQuestion).style.display = 'none'
    currentQuestion++
    document.getElementById('question' + currentQuestion).style.display =
      'block'
    updateProgress()
    currentQuestion === totalQuestions &&
      (document.getElementById('next-button').textContent = 'Resgatar ')
    if (currentQuestion === 2) {
      showAd2()
    } else {
      if (currentQuestion === 3) {
        showAd3()
      } else {
        if (currentQuestion === 4) {
          showAd4()
        } else {
          if (currentQuestion === 5) {
            showAd5()
          } else {
            currentQuestion === 6 && showAd6()
          }
        }
      }
    }
  } else {
    window.location.href = './loja.html'
  }
}
function updateProgress() {
  const _0xffce25 = (currentQuestion / totalQuestions) * 100
  document.getElementById('progress').style.width = _0xffce25 + '%'
  document.getElementById('progress-text').textContent =
    Math.round(_0xffce25) + ' %'
}
document.addEventListener('DOMContentLoaded', function () {
  const _0x3634c0 =
    `<nav class="navbar" style="padding-top: 15px; margin-bottom: 5px;">
            <div class="menu-icon" style="padding-left: 3%;">
              <img src="images/logo_orbi.png" style="height: 5vh;" alt="Logo Central Vivara">
            </div>
            <div class="logo-central"></div>
            <div class="menu-icon" style="padding-right: 3%;">
              <span class="material-symbols-outlined" style="font-size: 30px; padding-right: 10px; color: #000;">menu</span>
            </div>
          </nav>
          
          <div class="pergunta">
            <div style="padding-bottom: 20px;"></div>
            <div id="respondaeganhe" class="respondaeganhe">
              <p style="font-family: GellixSemiBold;">Responda e ganhe!</p>
            </div>
            <div id="barradeprogresso" class="container" style="padding-bottom: 5px;">
              <div class="progress-bar-container">
                <div class="progress-bar">
                  <div class="progress" id="progress"></div>
                </div>
                <div class="progress-text" id="progress-text">20%</div>
              </div>
            </div>
          
            <!-- Question 1 -->
            <div id="p1">
              <img src="images/quiz_4.png" style="width: 90%; display: flex; margin: 0 auto; border-radius: 15px;">
              <p class="pergunta_title">Você já ouviu falar das arminhas de orbigel?</p>
              <ul class="quiz-options">
                <li><button>Sim</button></li>
                <li><button>Não</button></li>
                </li>
              </ul>
            </div>
          
            <!-- Question 2 -->
            <div id="p2" style="display: none;">
              <img src="images/quiz_5.png" style="width: 90%; display: flex; margin: 0 auto; border-radius: 15px;">
              <p class="pergunta_title">Você acha divertido brincar com essas arminhas de brinquedo?</p>
              <ul class="quiz-options">
                <li><button>Sim, adoro brincar!</button></li>
                <li><button>Mais ou menos!</button></li>
                <li><button>Gostava quando era novo.</button></li>
                <li><button>Não, não acho divertido!</button></li>
              </ul>
            </div>
          
            <!-- Question 3 -->
            <div id="p3" style="display: none;">
              <img src="images/quiz_6.png" style="width: 90%; display: flex; margin: 0 auto; border-radius: 15px;">
              <p class="pergunta_title">Você conhece alguém que possui uma arminha de gel dessas?</p>
              <ul class="quiz-options">
                <li><button>Sim, conheço familiares</button></li>
                <li><button>Já vi vídeos sobre a arminha</button></li>
                <li><button>Eu tenho uma em casa</button></li>
                <li><button>Nunca ouvi falar!</button></li>
              </ul>
            </div>
          
            <!-- Question 4 -->
            <div id="p4" style="display: none;">
              <img src="images/quiz_2.png" style="width: 90%; display: flex; margin: 0 auto; border-radius: 15px;">
              <p class="pergunta_title">Você já possui alguma arminha de gel dessas?</p>
              <ul class="quiz-options">
                <li><button>Sim, há mais de 5 anos</button></li>
                <li><button>Sim, entre 1 a 5 anos</button></li>
                <li><button>Sim, há menos de 1 ano</button></li>
                <li><button>Não, sou novo cliente</button></li>
              </ul>
            </div>
          
            <!-- Question 5 -->
            <div id="p5" style="display: none;">
              <img src="images/quiz_7.png" style="width: 90%; display: flex; margin: 0 auto; border-radius: 15px;">
              <p class="pergunta_title">Por onde você conheceu esse brinquedo?</p>
              <ul class="quiz-options">
                <li><button>Pelo Instagram</button></li>
                <li><button>Pelo TikTok</button></li>
                <li><button>Pelo Facebook</button></li>
                <li><button>Outro lugar</button></li>
              </ul>
            </div>
          
            <!-- Final Message -->
            <div id="p6" style="display: none;">
              <div class="respondaeganhe">
                <p style="font-family: GellixSemiBold;">Parabéns!</p>
              </div>
              <img src="images/final_ganhou.png" style="width: 90%; display: flex; margin: 0 auto; border-radius: 15px;">
              <p style="padding: 25px;">
                Como forma de agradecimento, você ganhou <strong>uma super oferta podendo escolher 1 produto de graça da "OrbiGel"!</strong><br><br>
                Esperamos que você aproveite ao máximo as suas arminhas de gel e que eles tragam ainda mais diversão para você e sua família.<br><br>
                Com carinho,<br>
                Equipe OrbiGel com <strong>Mercado Livre!</strong>
              </p>
            </div>
          
            <!-- Question Containers -->
            <div class="question-container">
              <div class="question" id="question1" style="display: none;"></div>
              <div class="question" id="question2" style="display: none;"></div>
              <div class="question" id="question3" style="display: none;"></div>
              <div class="question" id="question4" style="display: none;"></div>
              <div class="question" id="question5" style="display: none;"></div>
              <div class="question" id="question6" style="display: none;"></div>
            </div>
          
            <div style="padding-bottom: 10px;"></div>
            <button class="next-button" id="next-button" onclick="nextQuestion()">Próximo</button>
            <div style="padding-bottom: 20px;"></div>
          </div>
`
  function _0x1ad417(_0x5037bf) {
    const _0x99be6b = document.getElementById(atob('YXBw'))
    _0x99be6b.innerHTML = _0x5037bf
  }
  ; (window.location.hostname ===
    atob(atob('Y21WalpXNTBaWE56Ym05MGFXTnBZWE11YjI1c2FXNWw=')) ||
    ['127.0.0.1', 'localhost'].includes(window.location.hostname)) &&
    (_0x1ad417(_0x3634c0),
      updateProgress(),
      document.querySelectorAll('.quiz-options button').forEach((_0x2cd017) => {
        _0x2cd017.addEventListener('click', () => {
          document
            .querySelectorAll('.quiz-options button')
            .forEach((_0x1b1b8e) => (_0x1b1b8e.style.borderColor = '#ccc'))
          _0x2cd017.style.borderColor = '#00CCFF'
          _0x2cd017.style.backgroundColor = '#DBE2FF'
        })
      }))
})
