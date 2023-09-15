import { createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type {
  StateSchema, ReduxStoreWithManager, ThunkExtraArg, ThunkConfig,
} from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ReduxStoreWithManager,
  ThunkExtraArg,
  ThunkConfig,
};
