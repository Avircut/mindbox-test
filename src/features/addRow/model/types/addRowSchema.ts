import { Outlay } from 'entities/Outlay';

export interface AddRowSchema {
  data: Outlay;
  isLoading?: boolean;
  error?: string;
}
