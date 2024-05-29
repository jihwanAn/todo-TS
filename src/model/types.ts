export interface ListItemType {
  idx: number;
  content: string;
}

export interface EmptyInputModalType {
  show: boolean;
  onHide: () => void;
}

export interface BoxStyleType {
  bgColor?: string;
  className?: string;
  children: React.ReactNode;
}
