import LazyLoad from '@src/components/LazyLoad';
import Loadable from 'react-loadable';
const AppUtils = {
  lazyComp: (comp) => Loadable({
    loader: comp,
    delay: 500,
    timeout: 10000,
    loading: LazyLoad
  })
};
export default AppUtils;
