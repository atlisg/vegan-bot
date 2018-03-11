export interface Answer {
  source: {
    id: string;
    name: string;
  };
  key: string;
  answer: Array<string>;
  id: string;
  created_at: Date;
  updated_at: Date;
  stats: {
    hits: Array<Date>;
    shares: Array<Date>;
  };
}
