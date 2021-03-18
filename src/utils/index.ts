// 监听Enter按键触发
export const handleEnter = (cb: unknown): void => {
  document.onkeydown = (e: unknown) => {
    e = window.event || e;
    if (e.keyCode === 13 || e.keyCode === 100) {
      cb();
    }
  };
};
//  使用：
//  private mounted(): void {
//   handleEnter(this.login);
//  }
