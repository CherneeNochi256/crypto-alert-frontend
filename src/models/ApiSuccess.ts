export default interface ApiSuccess {
  response: {
    data: {
      success: boolean,
      message: string
    }
  }
}