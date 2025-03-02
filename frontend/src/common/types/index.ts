export type TypeHeaderProps = {
  isMenuClose: boolean;
  setIsMenuClose: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TypeMenuProps = {
  isMenuClose: boolean;
};

export type TypeMenuConfigResponse = {
  title: string;
  subMenuItems: {
    title: string;
    dropdown?: { title: string }[];
  }[];
}[];

export type TypeBaseResponse<T> = {
  success: boolean;
  result: {
    response: T;
    message: string;
  };
};
