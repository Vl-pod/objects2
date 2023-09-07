import extractAttackInfo from '../extractAttackInfo';

describe('extractAttackInfo', () => {
  it('should extract attack info with description', () => {
    const character = {
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
      ],
    };

    const result = extractAttackInfo(character);

    expect(result).toEqual([
      {
        id: 8,
        name: 'Двойной выстрел',
        description: 'Двойной выстрел наносит двойной урон',
        icon: 'http://...',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        description: 'Описание недоступно',
        icon: 'http://...',
      },
    ]);
  });

  it('should handle missing special array', () => {
    const character = {}; // Передаем пустой объект без свойства special

    const result = extractAttackInfo(character);

    expect(result).toEqual([]); // Изменили на .toEqual([]) чтобы проверить на пустой массив
  });
});
