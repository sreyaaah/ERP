import { render, screen } from '@testing-library/react';
import ImageWithBasePath from '..';
import { vi, describe, it, expect } from 'vitest';

vi.mock('../../../environment', async () => {
  const actual: any = await vi.importActual('../../../environment');
  return {
    ...actual,
    image_path: '/base/',
  };
});

describe('ImageWithBasePath', () => {
  it('renders img with src prefixed by image_path', () => {
    render(<ImageWithBasePath src="assets/img/logo.svg" alt="logo" />);
    const img = screen.getByAltText('logo') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('/base/assets/img/logo.svg');
  });
});
