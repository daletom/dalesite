const util = {
  vueSDK(i) {
    return (
      this.host +
      this.images[i] +
      this.desktop +
      this.host +
      this.images[i] +
      this.ipad +
      this.host +
      this.images[i] +
      this.mobile +
      this.host +
      this.images[i] +
      this.responsive
    )
  }
}

export default util
