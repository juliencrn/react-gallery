import { truncate } from './index'

describe('Utilities functions', () => {
  describe('truncate', () => {
    const sentence = {
      five: 'aaaaa',
      fifteen: 'aaaa aaaa aaaa ',
      twentyFive: 'aaaa aaaa aaaa aaaa aaaa ',
      seventy:
        'aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa ',
    }

    test('no change anything if text is short', () => {
      expect(truncate(sentence.five)).toEqual(sentence.five)
      expect(truncate(sentence.five).length).toBeLessThan(56)
      expect(truncate(sentence.five)).not.toMatch(/\[...\]$/g)
    })

    test('truncate text and and [...] for large text', () => {
      expect(truncate(sentence.seventy).length).toBeLessThan(56)
      expect(truncate(sentence.seventy)).toMatch(/\[...\]$/g)
    })

    test('custom length short text', () => {
      expect(truncate(sentence.five, 10)).toEqual(sentence.five)
      expect(truncate(sentence.five, 10).length).toBeLessThan(11)
      expect(truncate(sentence.five, 10)).not.toMatch(/\[...\]$/g)
    })

    test('custom length large text', () => {
      expect(truncate(sentence.fifteen, 10).length).toBeLessThan(11)
      expect(truncate(sentence.fifteen, 10)).toMatch(/\[...\]$/g)
    })
  })
})
