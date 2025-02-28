export const publicApi = {
  getInfo: () => {
    return Promise.resolve({
      success: true,
      data: {
        info: "Some information about the <b>company</b>."
      }
    })
  }
}