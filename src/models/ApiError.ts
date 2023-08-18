export default interface ApiError {
  response: {
    data: {
      success: boolean,
      message: string
    }
  }
}