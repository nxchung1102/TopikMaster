export const getNameSectionByType = (type: number) => {
  switch (type) {
    case 1:
      return 'listen';
    case 2:
      return 'read';
    case 3:
      return 'write';
    default:
      return '';
  }
};
