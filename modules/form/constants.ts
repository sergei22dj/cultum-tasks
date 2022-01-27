export interface FormData {
  name: string;
  email: string;
  fruit: string;
  phoneNumber: string;
  fruits: string | string[];
}

export const OPTIONS = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

export const BUTTON_STYLE = {
  width: '150px'
};

export const DEFAULT_VALUES = { fruits: ['vanilla', 'strawberry'] };
