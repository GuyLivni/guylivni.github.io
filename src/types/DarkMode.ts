export type ModeSwitch = (
  checked: boolean,
  event?: React.SyntheticEvent<MouseEvent | KeyboardEvent> | MouseEvent,
  id?: string
) => void;
