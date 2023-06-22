import React from 'react';
import { act, create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';
import { render, fireEvent, waitFor } from '@testing-library/react';
import 'regenerator-runtime/runtime';

describe('ProfileStatus component', () => {
  // test('status from props should be in the state', () => {
  //   const component = create(<ProfileStatus status="Test" />);
  //   const instance = component.getInstance();
  //   expect(instance.state.status).toBe('Test');
  // });

  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status="Test" />);
    const root = component.root;
    const span = root.findByType('span');
    expect(span.children[0]).toBe('Test');
  });

  test(`after creation <span> with status should be displayed`, () => {
    const component = create(<ProfileStatus status="Test" />);
    const root = component.root;
    const span = root.findAllByType('span');
    // expect(span.length).toBe(1);
    expect(span).not.toBeNull();
  });

  test(`after creation <input> should't be displayed`, () => {
    const component = create(<ProfileStatus status="Test" />);
    const root = component.root;
    expect(() => {
      expect(root.findAllByType('input')).toHaveLength(0);
    }).not.toThrow();
  });

  test(`after creation <span> with status should contains correct status`, () => {
    const component = create(<ProfileStatus status="Test" />);
    const root = component.root;
    const span = root.findByType('span');
    expect(span.props.children).toBe('Test');
  });

  test(`input should be displayed in editMode instead of span`, () => {
    const component = create(<ProfileStatus status="Test" />);
    const root = component.root;
    const span = root.findByType('span');
    act(() => {
      span.props.onDoubleClick();
    });
    const input = root.findAllByType('input')[0];
    expect(input.props.value).toBe('Test');
  });

  test('callback should be called', async () => {
    const mockCallback = jest.fn();
    const { getByText } = render(
      <ProfileStatus status="Test" updateUserStatus={mockCallback} />
    );
    const statusElement = getByText('Test');
    fireEvent.doubleClick(statusElement);
    const inputElement = await waitFor(() => getByDisplayValue('Test'));
    fireEvent.blur(inputElement);
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
