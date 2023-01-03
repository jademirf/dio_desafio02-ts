import { login } from './login';
describe('Login', () => {
  it('should show an alert with welcome message', () => {
    const spyAlert = jest.spyOn(window, 'alert');

    login()
    
    expect(spyAlert).toBeCalled()
    expect(spyAlert).toHaveBeenCalledWith('Welcome to your bank app!')
  })
})