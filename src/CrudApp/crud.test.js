import React from 'react';
import { fireEvent, getByRole, render, screen, wait, waitFor } from '@testing-library/react';
import Crud from './index';

describe('Testing Crud app', () => {

  beforeEach(() => {
    render(<Crud />)
  })

  it('Rendering crud app component', () => {
    let CrudComponent = screen.getByRole('heading', { level: 1, name: 'Crud App With Hooks' });
    expect(CrudComponent).toBeInTheDocument();
  })

  describe('Testing Form Component', () => {
    it('Should render form component', () => {
      let FormElement = screen.getByRole('heading', { level: 1, name: 'Add User' });
      expect(FormElement).toBeInTheDocument();
    })

    it('Should render Name textbox Field', () => {
      let NameElement = screen.getByPlaceholderText('Name');
      expect(NameElement).toBeInTheDocument();
    })

    it('Should render User-Name textbox Field', () => {
      let UserNameElement = screen.getByPlaceholderText('UserName');
      expect(UserNameElement).toBeInTheDocument();
    })

    it('Should render Add User Button Field', () => {
      let ButtonElement = screen.getByRole('button', { name: 'Add User' });
      expect(ButtonElement).toBeInTheDocument();
    })

    it('Should show the typed text when user is typing on Name textbox', () => {
      let NameElement = screen.getByPlaceholderText('Name');
      fireEvent.change(NameElement, {
        target: {
          value: 'Rohit'
        }
      })
      expect(NameElement.value).toBe('Rohit');
    })

    it('Should show the typed text when user is typing on UserName textbox', () => {
      let NameElement = screen.getByPlaceholderText('UserName');
      fireEvent.change(NameElement, {
        target: {
          value: 'rohit_abc'
        }
      })
      expect(NameElement.value).toBe('rohit_abc');
    })

  })

  describe('Testing Table Component', () => {

    it('Should render table component', () => {
      let TableElement = screen.getByRole('heading', { level: 1, name: 'View Users' });
      expect(TableElement).toBeInTheDocument();
    })

    it('Should show table with three columns', () => {
      let TableElement = screen.getByRole('table');
      expect(TableElement).toBeInTheDocument();
      let AllRows = screen.getAllByRole('row');
      let TableHeaders = Array.from(AllRows[0].children);
      expect(TableHeaders[0].innerHTML).toBe('Name');
      expect(TableHeaders[1].innerHTML).toBe('User-Name');
      expect(TableHeaders[2].innerHTML).toBe('Actions');
    })
  })

  describe('Integration Testing of form and table', () => {

    it('Table show no tbody content by default', () => {
      let TableBodyContent = screen.getAllByRole('row');
      expect(TableBodyContent.length).toBe(1);
    })

    it('Type name and username and click on add user should clear all form fields', () => {
      let NameField = screen.getByPlaceholderText('Name');
      let UserNameField = screen.getByPlaceholderText('UserName');
      let AddUserButton = screen.getByRole('button', { name: 'Add User' });
      fireEvent.change(NameField, {
        target: {
          value: 'Rohit'
        }
      });
      expect(NameField.value).toBe('Rohit');
      fireEvent.change(UserNameField, {
        target: {
          value: 'rohit_abc'
        }
      });
      expect(UserNameField.value).toBe('rohit_abc');
      fireEvent.click(AddUserButton);
      expect(NameField.value).toBe('');
      expect(UserNameField.value).toBe('');
    })

    it('Type name and username and click on add user should clear all form fields and append a new row in the table', () => {
      let NameField = screen.getByPlaceholderText('Name');
      let UserNameField = screen.getByPlaceholderText('UserName');
      let AddUserButton = screen.getByRole('button', { name: 'Add User' });
      let AllRows = screen.getAllByRole('row');
      expect(AllRows.length).toBe(1);
      fireEvent.change(NameField, {
        target: {
          value: 'Rohit'
        }
      });
      expect(NameField.value).toBe('Rohit');
      fireEvent.change(UserNameField, {
        target: {
          value: 'rohit_abc'
        }
      });
      expect(UserNameField.value).toBe('rohit_abc');
      fireEvent.click(AddUserButton);
      expect(NameField.value).toBe('');
      expect(UserNameField.value).toBe('');
      AllRows = screen.getAllByRole('row');
      expect(AllRows.length).toBe(2);
      let TableBodyContent = Array.from(AllRows[1].children);
      expect(TableBodyContent[0].innerHTML).toBe('Rohit');
      expect(TableBodyContent[1].innerHTML).toBe('rohit_abc');
      expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument();
    })

    it('Type name and username and click on add user should clear all form fields and append a new row in the table and click on delete action will delete the row', () => {
      let NameField = screen.getByPlaceholderText('Name');
      let UserNameField = screen.getByPlaceholderText('UserName');
      let AddUserButton = screen.getByRole('button', { name: 'Add User' });
      let AllRows = screen.getAllByRole('row');
      expect(AllRows.length).toBe(1);
      fireEvent.change(NameField, {
        target: {
          value: 'Rohit'
        }
      });
      expect(NameField.value).toBe('Rohit');
      fireEvent.change(UserNameField, {
        target: {
          value: 'rohit_abc'
        }
      });
      expect(UserNameField.value).toBe('rohit_abc');
      fireEvent.click(AddUserButton);
      expect(NameField.value).toBe('');
      expect(UserNameField.value).toBe('');
      AllRows = screen.getAllByRole('row');
      expect(AllRows.length).toBe(2);
      let TableBodyContent = Array.from(AllRows[1].children);
      expect(TableBodyContent[0].innerHTML).toBe('Rohit');
      expect(TableBodyContent[1].innerHTML).toBe('rohit_abc');
      expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument();
      fireEvent.click(screen.getByRole('button', { name: 'Delete' }));
      AllRows = screen.getAllByRole('row');
      expect(AllRows.length).toBe(1);
    })


    it(`Type name and username and click on add user should clear all form fields and 
        append a new row in the table and click on edit action will add the row content
        to form and click on add user again will show the updated data in form`, async () => {
      let NameField = screen.getByPlaceholderText('Name');
      let UserNameField = screen.getByPlaceholderText('UserName');
      let AddUserButton = screen.getByRole('button', { name: 'Add User' });
      let AllRows = screen.getAllByRole('row');

      expect(AddUserButton).toBeInTheDocument();
      expect(AllRows.length).toBe(1);

      fireEvent.change(NameField, {
        target: {
          value: 'Rohit'
        }
      });
      expect(NameField.value).toBe('Rohit');

      fireEvent.change(UserNameField, {
        target: {
          value: 'rohit_abc'
        }
      });
      expect(UserNameField.value).toBe('rohit_abc');

      fireEvent.click(AddUserButton);

      expect(NameField.value).toBe('');
      expect(UserNameField.value).toBe('');

      AllRows = screen.getAllByRole('row');
      expect(AllRows.length).toBe(2);

      let TableBodyContent = Array.from(AllRows[1].children);
      expect(TableBodyContent[0].innerHTML).toBe('Rohit');
      expect(TableBodyContent[1].innerHTML).toBe('rohit_abc');
      expect(screen.getByRole('button', { name: 'Edit' })).not.toBeDisabled();
      expect(screen.getByRole('button', { name: 'Delete' })).not.toBeDisabled();



      expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument();

      fireEvent.click(screen.getByRole('button', { name: 'Edit' }));

      await waitFor(() => {
        expect(screen.queryByRole('button', { name: 'Edit User' })).toBeInTheDocument();
      });

      await waitFor(() => {
        expect(screen.queryByRole('button', { name: 'Add User' })).not.toBeInTheDocument();
      });

      expect(screen.getByRole('button', { name: 'Edit' })).toBeDisabled();
      expect(screen.getByRole('button', { name: 'Delete' })).toBeDisabled();

      AllRows = screen.getAllByRole('row');
      expect(AllRows.length).toBe(2);
      expect(NameField.value).toBe('Rohit');
      expect(UserNameField.value).toBe('rohit_abc');

      fireEvent.change(NameField, {
        target: {
          value: 'Vijay'
        }
      });
      expect(NameField.value).toBe('Vijay');

      fireEvent.change(UserNameField, {
        target: {
          value: 'vijay_shekhar'
        }
      });
      expect(UserNameField.value).toBe('vijay_shekhar');

      fireEvent.click(screen.getByRole('button', { name: 'Edit User' }));

      await waitFor(() => {
        expect(screen.queryByRole('button', { name: 'Edit User' })).not.toBeInTheDocument();
      });

      await waitFor(() => {
        expect(screen.getByRole('button', { name: 'Add User' })).toBeInTheDocument();
      });

      expect(NameField.value).toBe('');
      expect(UserNameField.value).toBe('');

      expect(TableBodyContent[0].innerHTML).toBe('Vijay');
      expect(TableBodyContent[1].innerHTML).toBe('vijay_shekhar');

      expect(screen.getByRole('button', { name: 'Edit' })).not.toBeDisabled();
      expect(screen.getByRole('button', { name: 'Delete' })).not.toBeDisabled();

    })

  })

})