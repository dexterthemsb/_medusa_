export type HistoryTask = "updated" | "created" | "deleted";

export interface IHistoryValue {
  before: string;
  after: string;
}

export interface IHistory {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  label: string;
  task: HistoryTask;
  value: IHistoryValue;
  date: string;
}

export interface AccordionProps {
  orgAvatar: string;
  liked: boolean;
  shortcutName: string;
  url: string;
  description: string;
  tags: string[];
  activity: IHistory[];
}
