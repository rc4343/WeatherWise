import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguageSelect from '../LanguageSelect.jsx';

describe('LanguageSelect', () => {
  const handleLanguageChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('calls handleLanguageChange on language change', () => {
    render(<LanguageSelect lang="en" handleLanguageChange={handleLanguageChange} />);
    const languageSelect = screen.getByLabelText('Language:');
    fireEvent.change(languageSelect, { target: { value: 'fr' } });
    expect(handleLanguageChange).toHaveBeenCalledTimes(1);
  });
});
