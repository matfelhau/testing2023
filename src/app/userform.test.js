const { fireEvent } = require("@testing-library/react");
const { UserForm } = require("./UserForm")

test('User creation works', () => {
    const { getByPlaceholderText, getByText } = render(<UserForm />);
    const usernameInput = getByPlaceholderText('Username');
    const emailInput = getByPlaceholderText('Email');
    const button = getByText('Create User');
    
    fireEvent.change(usernameInput, {target: { value: 'test'}});
    fireEvent.change(emailInput, {target: {value: 'test'}});
    fireEvent.click(button);
    expect(getByText('Invalid Input! Email needs to contain @')).toBeTruthy();
})