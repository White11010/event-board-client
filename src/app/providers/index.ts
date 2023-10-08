import compose from 'compose-function';
import { withRouter } from '~app/providers/with-router.tsx';

export const withProviders = compose(withRouter);