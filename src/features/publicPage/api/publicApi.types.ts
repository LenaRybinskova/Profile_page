export const publicApi = {
  getInfo: () =>
    Promise.resolve({
      success: true,
      data: {
        info:"Some information about the <b>company</b>."
      }
    })
}