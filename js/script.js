const counter = () => {
  let count = 0;

  const increaseCounter = () => ++count;

  const decreaseCounter = () => --count;

  const resetCounter = () => {
    count = 0;
    return count;
  }

  const getCounter = () => count;

  const getStatus = () => count > 0 ? 'postive' : count < 0 ? 'negative' : 'zero';

  return { increaseCounter, decreaseCounter, resetCounter, getCounter, getStatus };
}

const { increaseCounter, decreaseCounter, resetCounter, getCounter, getStatus } = counter();

// ======================= Render Function =======================
const counterColor = {
  'postive': 'increase',
  'negative': 'decrease',
  'zero': 'reset'
}

const renderCount = () => {
  const countElem = document.getElementById('count');
  const titleElem = document.getElementById('title');
  countElem.textContent = getCounter();
  titleElem.classList.remove(...Object.values(counterColor));
  titleElem.classList.add(counterColor[getStatus()]);
}

// ======================= Event Listener =======================
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');


increaseBtn.addEventListener('click', () => {
  increaseCounter();
  renderCount();
})

decreaseBtn.addEventListener('click', () => {
  decreaseCounter();
  renderCount();

})

resetBtn.addEventListener('click', () => {
  resetCounter();
  renderCount()
})
