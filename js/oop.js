class Counter {
  constructor() {
    this.count = 0;
    this.countElem = document.getElementById('count');
    this.counterColor = {
      positive: 'increase',
      negative: 'decrease',
      zero: 'reset'
    };

    this.renderCount();
    this.attachEventListeners();
  }

  increase() {
    this.count++;
    this.renderCount();
  }

  decrease() {
    this.count--;
    this.renderCount();
  }

  reset() {
    this.count = 0;
    this.renderCount();
  }

  getStatus() {
    return this.count > 0 ? 'positive' : this.count < 0 ? 'negative' : 'zero';
  }

  renderCount() {
    this.countElem.textContent = this.count;
    this.countElem.classList.remove(...Object.values(this.counterColor));
    this.countElem.classList.add(this.counterColor[this.getStatus()]);
  }

  attachEventListeners() {
    const buttonsContainer = document.getElementById('btns');
    buttonsContainer.addEventListener('click', (event) => {
      const { target } = event;
      if (target.id === 'increaseBtn') {
        this.increase();
      } else if (target.id === 'decreaseBtn') {
        this.decrease();
      } else if (target.id === 'resetBtn') {
        this.reset();
      }
    });
  }
}

const myCounter = new Counter();
