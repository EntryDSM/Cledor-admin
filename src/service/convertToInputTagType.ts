export type InputType = 'default' | 'email' | 'password';

export const inputTagType = (type: InputType): string => {
  switch (type) {
    case 'default':
      return 'text';
    case 'email':
      return 'email';
    case 'password':
      return 'password';
  }
};
